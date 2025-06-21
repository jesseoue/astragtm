"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  ArrowRight, 
  Mail, 
  Sparkles,
  Building,
  Calendar,
  ChevronLeft,
  CheckCircle,
  Zap,
  Clock,
  BarChart3
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface ROICalculatorProps {
  className?: string
  onLeadCapture?: (email: string, results: ROIResults) => void
}

interface FormData {
  // Step 1: Company Info
  companyName: string
  industry: string
  companySize: string
  
  // Step 2: Current State
  currentMRR: number
  leadsPerMonth: number
  currentConversion: number
  avgDealSize: number
  
  // Step 3: Contact
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  phone: string
}

interface ROIResults {
  // Current State
  currentMRR: number
  currentLeads: number
  currentConversion: number
  currentCustomersPerMonth: number
  
  // Projected State (with Astra GTM)
  projectedConversion: number
  projectedCustomersPerMonth: number
  projectedMRR: number
  
  // Growth Metrics
  additionalCustomers: number
  additionalMRR: number
  additionalAnnualRevenue: number
  
  // ROI Metrics
  investment: number
  roi: number
  paybackPeriod: number
  
  // Time-based projections
  month3Revenue: number
  month6Revenue: number
  month12Revenue: number
}

const STEPS = [
  { id: 1, title: "Company Info", description: "Tell us about your business" },
  { id: 2, title: "Current Metrics", description: "Your current performance" },
  { id: 3, title: "Get Results", description: "See your growth potential" }
]

const INDUSTRIES = [
  "SaaS/Software",
  "E-commerce", 
  "FinTech",
  "HealthTech",
  "EdTech",
  "MarTech",
  "Other"
]

const COMPANY_SIZES = [
  "Pre-revenue",
  "$1-10K MRR",
  "$10K-50K MRR", 
  "$50K-250K MRR",
  "$250K-1M MRR",
  "$1M+ MRR"
]

// Industry-specific conversion improvement factors
const INDUSTRY_FACTORS = {
  "SaaS/Software": { conversionImprovement: 2.8, avgDeal: 5000 },
  "E-commerce": { conversionImprovement: 2.2, avgDeal: 1500 },
  "FinTech": { conversionImprovement: 3.2, avgDeal: 12000 },
  "HealthTech": { conversionImprovement: 2.5, avgDeal: 8000 },
  "EdTech": { conversionImprovement: 2.4, avgDeal: 3000 },
  "MarTech": { conversionImprovement: 3.0, avgDeal: 7000 },
  "Other": { conversionImprovement: 2.5, avgDeal: 5000 }
}

export function ROICalculator({ className, onLeadCapture }: ROICalculatorProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    industry: "",
    companySize: "",
    currentMRR: 0,
    leadsPerMonth: 0,
    currentConversion: 0,
    avgDealSize: 0,
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    phone: ""
  })
  const [results, setResults] = useState<ROIResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const progress = (currentStep / STEPS.length) * 100

  // Send webhook data at each step
  const sendWebhook = async (stepData: any, stepNumber: number, calculatedResults?: ROIResults) => {
    try {
      const payload = {
        ...stepData,
        source: 'roi-calculator',
        step: stepNumber,
        timestamp: new Date().toISOString(),
        ...(calculatedResults && { roiResults: calculatedResults })
      }
      
      console.log('Sending ROI Calculator data:', payload)
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      
      if (!response.ok) {
        console.error('Webhook failed with status:', response.status)
      } else {
        console.log('Webhook sent successfully for step:', stepNumber)
      }
    } catch (error) {
      console.error('Webhook failed:', error)
    }
  }

  const calculateROI = (data: FormData): ROIResults => {
    // Get industry-specific factors
    const industryFactor = INDUSTRY_FACTORS[data.industry as keyof typeof INDUSTRY_FACTORS] || INDUSTRY_FACTORS["Other"]
    
    // Current state calculations
    const currentMRR = data.currentMRR || 0
    const currentLeads = data.leadsPerMonth || 0
    const currentConversion = data.currentConversion || 2
    const avgDealSize = data.avgDealSize || industryFactor.avgDeal
    const currentCustomersPerMonth = (currentLeads * currentConversion) / 100

    // Projected improvements with Astra GTM
    const projectedConversion = Math.min(currentConversion * industryFactor.conversionImprovement, 25) // Cap at 25%
    const projectedCustomersPerMonth = (currentLeads * projectedConversion) / 100
    const additionalCustomers = projectedCustomersPerMonth - currentCustomersPerMonth
    
    // Revenue calculations
    const additionalMRR = additionalCustomers * avgDealSize
    const projectedMRR = currentMRR + additionalMRR
    const additionalAnnualRevenue = additionalMRR * 12
    
    // Investment calculation (8% of current annual revenue + setup fee)
    const setupFee = 7500 // Base setup fee
    const monthlyFee = Math.max(currentMRR * 0.08, 2500) // 8% of MRR or minimum $2500
    const annualInvestment = setupFee + (monthlyFee * 12)
    
    // ROI calculations
    const roi = additionalAnnualRevenue > 0 ? ((additionalAnnualRevenue - annualInvestment) / annualInvestment) * 100 : 0
    const paybackPeriod = annualInvestment > 0 ? annualInvestment / (additionalMRR || 1) : 0
    
    // Time-based revenue projections
    const month3Revenue = currentMRR + (additionalMRR * 0.3) // 30% improvement by month 3
    const month6Revenue = currentMRR + (additionalMRR * 0.7) // 70% improvement by month 6
    const month12Revenue = projectedMRR // Full improvement by month 12

    return {
      currentMRR,
      currentLeads,
      currentConversion,
      currentCustomersPerMonth,
      projectedConversion,
      projectedCustomersPerMonth,
      projectedMRR,
      additionalCustomers,
      additionalMRR,
      additionalAnnualRevenue,
      investment: annualInvestment,
      roi,
      paybackPeriod,
      month3Revenue,
      month6Revenue,
      month12Revenue
    }
  }

  const handleNext = async () => {
    // Send webhook with current step data
    if (currentStep === 2) {
      // Calculate results when moving from step 2 to 3
      setIsCalculating(true)
      
      setTimeout(() => {
        const calculatedResults = calculateROI(formData)
        setResults(calculatedResults)
        setIsCalculating(false)
        
        // Send results data to webhook
        sendWebhook(formData, currentStep, calculatedResults)
      }, 2000) // 2 second calculation animation
    } else {
      await sendWebhook(formData, currentStep)
    }
    
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    const finalData = {
      ...formData,
      results,
      source: 'roi-calculator-complete',
      completedAt: new Date().toISOString()
    }
    
    await sendWebhook(finalData, 'final', results!)
    
    if (onLeadCapture && results) {
      onLeadCapture(formData.email, results)
    }
    
    setIsSubmitting(false)
    setIsComplete(true)
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.industry && formData.companySize
      case 2:
        return formData.currentMRR > 0 && formData.leadsPerMonth > 0 && formData.currentConversion > 0
      case 3:
        return formData.firstName && formData.lastName && formData.email
      default:
        return false
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value)
  }

  // Auto-populate average deal size based on industry
  useEffect(() => {
    if (formData.industry && formData.avgDealSize === 0) {
      const industryFactor = INDUSTRY_FACTORS[formData.industry as keyof typeof INDUSTRY_FACTORS] || INDUSTRY_FACTORS["Other"]
      updateFormData('avgDealSize', industryFactor.avgDeal)
    }
  }, [formData.industry])

  if (isComplete) {
    return (
      <Card className={cn("w-full max-w-4xl mx-auto bg-gradient-to-b from-deep-purple to-dark-navy border-electric-blue/20 shadow-2xl", className)}>
        <CardContent className="p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-green-400/10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-star-white mb-4">
              Your ROI Report is Ready! 🚀
            </h3>
            <p className="text-star-white/80 mb-8 text-lg">
              We've sent your personalized revenue growth analysis to <span className="text-electric-blue font-semibold">{formData.email}</span>.
              Our team will reach out within 2 hours to discuss implementation.
            </p>
            
            {/* Key Results Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-electric-blue/20 to-electric-blue/10 p-6 rounded-lg border border-electric-blue/30">
                <div className="text-3xl font-bold text-electric-blue mb-2">{formatCurrency(results?.additionalAnnualRevenue || 0)}</div>
                <div className="text-sm text-star-white/70">Additional Annual Revenue</div>
              </div>
              <div className="bg-gradient-to-br from-green-400/20 to-green-400/10 p-6 rounded-lg border border-green-400/30">
                <div className="text-3xl font-bold text-green-400 mb-2">{results?.roi.toFixed(0)}%</div>
                <div className="text-sm text-star-white/70">ROI in Year 1</div>
              </div>
              <div className="bg-gradient-to-br from-purple-400/20 to-purple-400/10 p-6 rounded-lg border border-purple-400/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">{formatNumber(results?.paybackPeriod || 0)}</div>
                <div className="text-sm text-star-white/70">Months to Payback</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue/90 text-dark-navy font-bold"
                onClick={() => window.location.href = '/contact'}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Strategy Call
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/case-studies'}
              >
                View Success Stories
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn("w-full max-w-4xl mx-auto bg-gradient-to-b from-deep-purple to-dark-navy border-electric-blue/20 shadow-2xl", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-2xl font-bold text-star-white flex items-center gap-3">
            <Calculator className="h-6 w-6 text-electric-blue" />
            ROI Calculator
          </CardTitle>
          <Badge variant="outline" className="text-electric-blue border-electric-blue/50">
            Step {currentStep} of {STEPS.length}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-star-white/70">
            <span>{STEPS[currentStep - 1].title}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step 1: Company Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-star-white mb-2">Tell us about your company</h3>
                  <p className="text-star-white/70">This helps us provide accurate ROI projections</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="companyName" className="text-star-white">Company Name</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => updateFormData('companyName', e.target.value)}
                      placeholder="Enter your company name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-star-white">Industry</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                      {INDUSTRIES.map((industry) => (
                        <Button
                          key={industry}
                          variant={formData.industry === industry ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateFormData('industry', industry)}
                          className="justify-start"
                        >
                          {industry}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-star-white">Current Monthly Revenue</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                      {COMPANY_SIZES.map((size) => (
                        <Button
                          key={size}
                          variant={formData.companySize === size ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateFormData('companySize', size)}
                          className="justify-start text-xs"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Current Metrics */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-star-white mb-2">Current Performance Metrics</h3>
                  <p className="text-star-white/70">Help us calculate your potential ROI</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="currentMRR" className="text-star-white">Monthly Recurring Revenue</Label>
                    <div className="relative mt-1">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-star-white/50" />
                      <Input
                        id="currentMRR"
                        type="number"
                        value={formData.currentMRR || ''}
                        onChange={(e) => updateFormData('currentMRR', parseInt(e.target.value) || 0)}
                        placeholder="50000"
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-star-white/60 mt-1">Your current monthly recurring revenue</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="leadsPerMonth" className="text-star-white">New Leads/Month</Label>
                    <div className="relative mt-1">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-star-white/50" />
                      <Input
                        id="leadsPerMonth"
                        type="number"
                        value={formData.leadsPerMonth || ''}
                        onChange={(e) => updateFormData('leadsPerMonth', parseInt(e.target.value) || 0)}
                        placeholder="500"
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-star-white/60 mt-1">Qualified leads you generate monthly</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="currentConversion" className="text-star-white">Lead to Customer Conversion Rate (%)</Label>
                    <div className="relative mt-1">
                      <Target className="absolute left-3 top-3 h-4 w-4 text-star-white/50" />
                      <Input
                        id="currentConversion"
                        type="number"
                        value={formData.currentConversion || ''}
                        onChange={(e) => updateFormData('currentConversion', parseFloat(e.target.value) || 0)}
                        placeholder="2.5"
                        className="pl-10"
                        step="0.1"
                      />
                    </div>
                    <p className="text-xs text-star-white/60 mt-1">% of leads that become paying customers</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="avgDealSize" className="text-star-white">Average Deal Size</Label>
                    <div className="relative mt-1">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-star-white/50" />
                      <Input
                        id="avgDealSize"
                        type="number"
                        value={formData.avgDealSize || ''}
                        onChange={(e) => updateFormData('avgDealSize', parseInt(e.target.value) || 0)}
                        placeholder="5000"
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-star-white/60 mt-1">Average monthly value per customer</p>
                  </div>
                </div>

                {/* Live Preview of Current Performance */}
                {formData.leadsPerMonth > 0 && formData.currentConversion > 0 && (
                  <div className="bg-star-white/5 p-6 rounded-lg border border-star-white/10">
                    <h4 className="text-star-white font-semibold mb-4">Current Performance Preview</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-star-white/70">New Customers/Month:</span>
                        <span className="text-electric-blue font-bold ml-2">
                          {formatNumber((formData.leadsPerMonth * formData.currentConversion) / 100)}
                        </span>
                      </div>
                      <div>
                        <span className="text-star-white/70">Customer Acquisition Rate:</span>
                        <span className="text-electric-blue font-bold ml-2">{formData.currentConversion}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Results & Contact */}
            {currentStep === 3 && (
              <div className="space-y-6">
                {isCalculating ? (
                  <div className="text-center py-12">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-electric-blue mx-auto mb-4"></div>
                      <Calculator className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-electric-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-star-white mb-2">Calculating Your ROI Potential...</h3>
                    <p className="text-star-white/70">Analyzing data from 500+ similar companies</p>
                    <div className="mt-4 flex justify-center items-center space-x-4 text-sm text-star-white/60">
                      <span className="flex items-center"><BarChart3 className="h-4 w-4 mr-1" /> Performance Analysis</span>
                      <span className="flex items-center"><TrendingUp className="h-4 w-4 mr-1" /> Growth Projections</span>
                      <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1" /> ROI Calculations</span>
                    </div>
                  </div>
                ) : results ? (
                  <div>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-star-white mb-2">Your ROI Projection</h3>
                      <p className="text-star-white/70">Based on our analysis of {formData.industry} companies</p>
                    </div>
                    
                    {/* Main ROI Results */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-electric-blue/20 to-purple-400/20 p-6 rounded-lg border border-electric-blue/30">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="h-5 w-5 text-electric-blue mr-2" />
                          <span className="text-star-white font-semibold">Additional Annual Revenue</span>
                        </div>
                        <div className="text-3xl font-bold text-electric-blue mb-2">{formatCurrency(results.additionalAnnualRevenue)}</div>
                        <div className="text-sm text-star-white/70">+{formatNumber(results.additionalCustomers)} customers/month</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-400/20 to-emerald-400/20 p-6 rounded-lg border border-green-400/30">
                        <div className="flex items-center mb-3">
                          <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                          <span className="text-star-white font-semibold">ROI in Year 1</span>
                        </div>
                        <div className="text-3xl font-bold text-green-400 mb-2">{results.roi.toFixed(0)}%</div>
                        <div className="text-sm text-star-white/70">Payback in {formatNumber(results.paybackPeriod)} months</div>
                      </div>
                    </div>

                    {/* Conversion Improvement */}
                    <div className="bg-star-white/5 p-6 rounded-lg border border-star-white/10 mb-8">
                      <h4 className="text-star-white font-semibold mb-4 flex items-center">
                        <Target className="h-5 w-5 text-electric-blue mr-2" />
                        Conversion Rate Improvement
                      </h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-2xl font-bold text-star-white/60">{formatNumber(results.currentConversion)}%</div>
                          <div className="text-sm text-star-white/70">Current Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-electric-blue">{formatNumber(results.projectedConversion)}%</div>
                          <div className="text-sm text-star-white/70">With Astra GTM</div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Projections */}
                    <div className="bg-gradient-to-r from-purple-400/10 to-electric-blue/10 p-6 rounded-lg border border-purple-400/20 mb-8">
                      <h4 className="text-star-white font-semibold mb-4 flex items-center">
                        <Clock className="h-5 w-5 text-purple-400 mr-2" />
                        Revenue Growth Timeline
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-purple-400">{formatCurrency(results.month3Revenue)}</div>
                          <div className="text-xs text-star-white/70">Month 3</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-electric-blue">{formatCurrency(results.month6Revenue)}</div>
                          <div className="text-xs text-star-white/70">Month 6</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-400">{formatCurrency(results.month12Revenue)}</div>
                          <div className="text-xs text-star-white/70">Month 12</div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 p-6 rounded-lg border border-electric-blue/20">
                      <h4 className="text-star-white font-semibold mb-4">Get Your Detailed ROI Report</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-star-white">First Name</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => updateFormData('firstName', e.target.value)}
                            placeholder="John"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-star-white">Last Name</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => updateFormData('lastName', e.target.value)}
                            placeholder="Doe"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-star-white">Work Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            placeholder="john@company.com"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="jobTitle" className="text-star-white">Job Title</Label>
                          <Input
                            id="jobTitle"
                            value={formData.jobTitle}
                            onChange={(e) => updateFormData('jobTitle', e.target.value)}
                            placeholder="CEO, VP of Sales, etc."
                            className="mt-1"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="phone" className="text-star-white">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            placeholder="+1 (555) 123-4567"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-star-white/10">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          
          {currentStep < 3 ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-electric-blue hover:bg-electric-blue/90 text-dark-navy font-bold flex items-center gap-2"
            >
              {currentStep === 2 ? 'Calculate ROI' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : results && !isCalculating ? (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="bg-electric-blue hover:bg-electric-blue/90 text-dark-navy font-bold flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-dark-navy"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Get My ROI Report
                </>
              )}
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
} 