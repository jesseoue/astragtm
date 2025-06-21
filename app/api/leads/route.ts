import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Enhanced ROI Results schema
const roiResultsSchema = z.object({
  currentMRR: z.number().optional(),
  currentLeads: z.number().optional(),
  currentConversion: z.number().optional(),
  currentCustomersPerMonth: z.number().optional(),
  projectedConversion: z.number().optional(),
  projectedCustomersPerMonth: z.number().optional(),
  projectedMRR: z.number().optional(),
  additionalCustomers: z.number().optional(),
  additionalMRR: z.number().optional(),
  additionalAnnualRevenue: z.number().optional(),
  investment: z.number().optional(),
  roi: z.number().optional(),
  paybackPeriod: z.number().optional(),
  month3Revenue: z.number().optional(),
  month6Revenue: z.number().optional(),
  month12Revenue: z.number().optional(),
}).optional()

// Enhanced lead capture schema
const leadSchema = z.object({
  // Contact Information
  email: z.string().email('Invalid email format').optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  
  // Company Information
  companyName: z.string().optional(),
  company: z.string().optional(), // Legacy field
  industry: z.string().optional(),
  companySize: z.string().optional(),
  
  // Current Metrics
  currentMRR: z.number().optional(),
  leadsPerMonth: z.number().optional(),
  currentConversion: z.number().optional(),
  avgDealSize: z.number().optional(),
  
  // Meta Information
  source: z.string().min(1, 'Source is required'),
  step: z.union([z.number(), z.string()]).optional(),
  timestamp: z.string().optional(),
  completedAt: z.string().optional(),
  
  // ROI Results
  results: roiResultsSchema,
  roiResults: roiResultsSchema,
  
  // Legacy fields
  challenge: z.string().optional(),
})

type LeadData = z.infer<typeof leadSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // More flexible validation - only require source
    const validatedData = leadSchema.parse(body)
    
    // Enhanced logging for ROI Calculator
    const logData = {
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      ...validatedData
    }

    // Special handling for ROI Calculator data
    if (validatedData.source === 'roi-calculator' || validatedData.source === 'roi-calculator-complete') {
      console.log('🚀 ROI CALCULATOR SUBMISSION 🚀')
      console.log('=====================================')
      console.log('📊 COMPANY INFO:')
      console.log(`   Company: ${validatedData.companyName || 'Not provided'}`)
      console.log(`   Industry: ${validatedData.industry || 'Not provided'}`)
      console.log(`   Size: ${validatedData.companySize || 'Not provided'}`)
      
      console.log('\n📈 CURRENT METRICS:')
      console.log(`   MRR: $${validatedData.currentMRR?.toLocaleString() || 'Not provided'}`)
      console.log(`   Leads/Month: ${validatedData.leadsPerMonth?.toLocaleString() || 'Not provided'}`)
      console.log(`   Conversion Rate: ${validatedData.currentConversion || 'Not provided'}%`)
      console.log(`   Avg Deal Size: $${validatedData.avgDealSize?.toLocaleString() || 'Not provided'}`)
      
      const roiData = validatedData.roiResults || validatedData.results
      if (roiData) {
        console.log('\n💰 ROI PROJECTIONS:')
        console.log(`   Additional Annual Revenue: $${roiData.additionalAnnualRevenue?.toLocaleString() || 'Not calculated'}`)
        console.log(`   ROI: ${roiData.roi?.toFixed(0) || 'Not calculated'}%`)
        console.log(`   Payback Period: ${roiData.paybackPeriod?.toFixed(1) || 'Not calculated'} months`)
        console.log(`   Additional Customers/Month: ${roiData.additionalCustomers?.toFixed(1) || 'Not calculated'}`)
        console.log(`   Investment Required: $${roiData.investment?.toLocaleString() || 'Not calculated'}`)
      }
      
      console.log('\n👤 CONTACT INFO:')
      console.log(`   Name: ${validatedData.firstName || ''} ${validatedData.lastName || ''}`)
      console.log(`   Email: ${validatedData.email || 'Not provided'}`)
      console.log(`   Job Title: ${validatedData.jobTitle || 'Not provided'}`)
      console.log(`   Phone: ${validatedData.phone || 'Not provided'}`)
      
      console.log('\n🔧 META:')
      console.log(`   Step: ${validatedData.step || 'Not provided'}`)
      console.log(`   Source: ${validatedData.source}`)
      console.log(`   User Agent: ${request.headers.get('user-agent')?.substring(0, 50)}...`)
      console.log('=====================================\n')
    } else {
      // Regular lead capture logging
      console.log('📝 Lead captured:', logData)
    }

    // In production, you would:
    // 1. Save to your database (Postgres, MongoDB, etc.)
    // 2. Send to your CRM (HubSpot, Salesforce, etc.)
    // 3. Add to email marketing list (Mailchimp, ConvertKit, etc.)
    // 4. Send notification to your team (Slack, email, etc.)
    
    // Example integrations you might add:
    await Promise.allSettled([
      // Database save
      saveToDatabase(validatedData),
      // CRM integration
      sendToCRM(validatedData),
      // Email marketing
      addToEmailList(validatedData),
      // Team notification
      notifyTeam(validatedData),
    ])

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead captured successfully',
        leadId: generateLeadId(),
        step: validatedData.step || 'unknown'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Lead capture error:', error)
    
    if (error instanceof z.ZodError) {
      console.error('Validation errors:', error.errors)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid data provided',
          errors: error.errors
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

// Helper functions (implement based on your stack)
async function saveToDatabase(data: LeadData) {
  // Example: Save to your database
  // const lead = await prisma.lead.create({ data })
  console.log('💾 Saving to database:', data.email || data.companyName || 'Anonymous')
}

async function sendToCRM(data: LeadData) {
  // Example: Send to HubSpot, Salesforce, etc.
  // await hubspotClient.crm.contacts.basicApi.create({ properties: data })
  console.log('📋 Sending to CRM:', data.email || data.companyName || 'Anonymous')
}

async function addToEmailList(data: LeadData) {
  // Example: Add to Mailchimp, ConvertKit, etc.
  // await mailchimp.lists.addListMember(listId, { email_address: data.email })
  if (data.email) {
    console.log('📧 Adding to email list:', data.email)
  }
}

async function notifyTeam(data: LeadData) {
  // Example: Send Slack notification
  // await slackClient.chat.postMessage({ channel: '#leads', text: `New lead: ${data.email}` })
  if (data.source === 'roi-calculator-complete') {
    console.log('🔔 HIGH PRIORITY: ROI Calculator completed by', data.email || 'Anonymous user')
    console.log('   📞 IMMEDIATE FOLLOW-UP REQUIRED - High intent lead!')
  } else {
    console.log('🔔 Notifying team about lead:', data.email || data.companyName || 'Anonymous')
  }
}

function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    endpoint: 'leads',
    timestamp: new Date().toISOString(),
    version: '2.0 - Enhanced ROI Calculator Support'
  })
} 