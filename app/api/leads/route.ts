import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Lead capture schema for validation
const leadSchema = z.object({
  email: z.string().email('Invalid email format'),
  source: z.string().min(1, 'Source is required'),
  results: z.object({
    currentMRR: z.number().optional(),
    projectedMRR: z.number().optional(),
    monthlyGrowth: z.number().optional(),
    annualGrowth: z.number().optional(),
    roi: z.number().optional(),
  }).optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  company: z.string().optional(),
  companySize: z.string().optional(),
  challenge: z.string().optional(),
})

type LeadData = z.infer<typeof leadSchema>

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = leadSchema.parse(body)
    
    // Log the lead capture (in production, you'd save to database/CRM)
    console.log('Lead captured:', {
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      ...validatedData
    })

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
        leadId: generateLeadId()
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Lead capture error:', error)
    
    if (error instanceof z.ZodError) {
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
  console.log('Saving to database:', data.email)
}

async function sendToCRM(data: LeadData) {
  // Example: Send to HubSpot, Salesforce, etc.
  // await hubspotClient.crm.contacts.basicApi.create({ properties: data })
  console.log('Sending to CRM:', data.email)
}

async function addToEmailList(data: LeadData) {
  // Example: Add to Mailchimp, ConvertKit, etc.
  // await mailchimp.lists.addListMember(listId, { email_address: data.email })
  console.log('Adding to email list:', data.email)
}

async function notifyTeam(data: LeadData) {
  // Example: Send Slack notification
  // await slackClient.chat.postMessage({ channel: '#leads', text: `New lead: ${data.email}` })
  console.log('Notifying team about lead:', data.email)
}

function generateLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    endpoint: 'leads',
    timestamp: new Date().toISOString()
  })
} 