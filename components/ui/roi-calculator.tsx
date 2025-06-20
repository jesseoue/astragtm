"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ROICalculatorProps {
  className?: string
  onLeadCapture?: (email: string, results: ROIResults) => void
}

interface ROIResults {
  currentMRR: number
  currentConversion: number
  leadsPerMonth: number
  targetConversion: number
  projectedMRR: number
  monthlyGrowth: number
  annualGrowth: number
  roi: number
  investment: number
}

export function ROICalculator({ className, onLeadCapture }: ROICalculatorProps) {
  // Input states
  const [currentMRR, setCurrentMRR] = useState([50000])
  const [leadsPerMonth, setLeadsPerMonth] = useState([500])
  const [currentConversion, setCurrentConversion] = useState([2])
  const [averageDealSize, setAverageDealSize] = useState([2500])
  const [email, setEmail] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [showEmailCapture, setShowEmailCapture] = useState(false)

  // Calculated results
  const [results, setResults] = useState<ROIResults>({
    currentMRR: 0,
    currentConversion: 0,
    leadsPerMonth: 0,
    targetConversion: 0,
    projectedMRR: 0,
    monthlyGrowth: 0,
    annualGrowth: 0,
    roi: 0,
    investment: 15000
  })

  // Calculate ROI whenever inputs change
  useEffect(() => {
    const targetConversion = currentConversion[0] * 2.4 // 140% improvement (our average)
    const newLeadsConverted = leadsPerMonth[0] * (targetConversion / 100)
    const currentLeadsConverted = leadsPerMonth[0] * (currentConversion[0] / 100)
    const additionalRevenue = (newLeadsConverted - currentLeadsConverted) * averageDealSize[0]
    const projectedMRR = currentMRR[0] + additionalRevenue
    const monthlyGrowth = additionalRevenue
    const annualGrowth = monthlyGrowth * 12
    const investment = 15000 // Our average engagement cost
    const roi = ((annualGrowth - investment) / investment) * 100

    setResults({
      currentMRR: currentMRR[0],
      currentConversion: currentConversion[0],
      leadsPerMonth: leadsPerMonth[0],
      targetConversion: Math.min(targetConversion, 25), // Cap at 25% for realism
      projectedMRR,
      monthlyGrowth,
      annualGrowth,
      roi,
      investment
    })
  }, [currentMRR, leadsPerMonth, currentConversion, averageDealSize])

  const handleCalculate = () => {
    setShowResults(true)
    setTimeout(() => setShowEmailCapture(true), 1500)
  }

  const handleEmailSubmit = () => {
    if (email && onLeadCapture) {
      onLeadCapture(email, results)
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

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  return (
    <Card className={cn("w-full max-w-4xl mx-auto bg-dark-navy/80 backdrop-blur-lg border-star-white/20", className)}>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="h-8 w-8 text-electric-blue" />
          <CardTitle className="text-3xl font-bold text-star-white">
            Revenue Growth Calculator
          </CardTitle>
        </div>
        <CardDescription className="text-star-white/70 text-lg">
          See how our GTM optimization can impact your revenue in the next 12 months
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-star-white mb-4">Current Metrics</h3>
            
            <div className="space-y-2">
              <Label className="text-star-white">Monthly Recurring Revenue (MRR)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={currentMRR}
                  onValueChange={setCurrentMRR}
                  max={500000}
                  min={10000}
                  step={5000}
                  className="flex-1"
                />
                <Badge variant="outline" className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 min-w-[120px]">
                  {formatCurrency(currentMRR[0])}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-star-white">Leads per Month</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={leadsPerMonth}
                  onValueChange={setLeadsPerMonth}
                  max={2000}
                  min={50}
                  step={50}
                  className="flex-1"
                />
                <Badge variant="outline" className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 min-w-[120px]">
                  {leadsPerMonth[0].toLocaleString()}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-star-white">Current Conversion Rate</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={currentConversion}
                  onValueChange={setCurrentConversion}
                  max={10}
                  min={0.5}
                  step={0.1}
                  className="flex-1"
                />
                <Badge variant="outline" className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 min-w-[120px]">
                  {formatPercentage(currentConversion[0])}
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-star-white">Average Deal Size</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={averageDealSize}
                  onValueChange={setAverageDealSize}
                  max={10000}
                  min={500}
                  step={100}
                  className="flex-1"
                />
                <Badge variant="outline" className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 min-w-[120px]">
                  {formatCurrency(averageDealSize[0])}
                </Badge>
              </div>
            </div>

            <Button 
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-semibold py-6 text-lg"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calculate My ROI
            </Button>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-star-white mb-4">Projected Growth</h3>
            
            {showResults ? (
              <div className="space-y-4 animate-in slide-in-from-right duration-500">
                <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 rounded-lg p-4 border border-electric-blue/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-5 w-5 text-electric-blue" />
                    <span className="text-star-white font-medium">Optimized Conversion Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-electric-blue">
                    {formatPercentage(results.targetConversion)}
                  </div>
                  <div className="text-sm text-star-white/70">
                    +{formatPercentage(results.targetConversion - results.currentConversion)} improvement
                  </div>
                </div>

                <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 rounded-lg p-4 border border-electric-blue/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-electric-blue" />
                    <span className="text-star-white font-medium">Additional Monthly Revenue</span>
                  </div>
                  <div className="text-2xl font-bold text-electric-blue">
                    {formatCurrency(results.monthlyGrowth)}
                  </div>
                  <div className="text-sm text-star-white/70">
                    New MRR: {formatCurrency(results.projectedMRR)}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 rounded-lg p-4 border border-electric-blue/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-electric-blue" />
                    <span className="text-star-white font-medium">Annual Revenue Growth</span>
                  </div>
                  <div className="text-2xl font-bold text-electric-blue">
                    {formatCurrency(results.annualGrowth)}
                  </div>
                  <div className="text-sm text-star-white/70">
                    Investment: {formatCurrency(results.investment)}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-400/10 rounded-lg p-4 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <span className="text-star-white font-medium">ROI</span>
                  </div>
                  <div className="text-3xl font-bold text-green-400">
                    {formatPercentage(results.roi)}
                  </div>
                  <div className="text-sm text-star-white/70">
                    Return on investment in 12 months
                  </div>
                </div>

                {showEmailCapture && (
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-400/10 rounded-lg p-6 border border-purple-400/20 animate-in slide-in-from-bottom duration-500">
                    <h4 className="text-lg font-semibold text-star-white mb-3">
                      Get Your Detailed Growth Plan
                    </h4>
                    <p className="text-star-white/70 text-sm mb-4">
                      Enter your email to receive a personalized 12-month growth strategy based on these projections.
                    </p>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-dark-navy/50 border-star-white/20 text-star-white focus:border-electric-blue/50"
                      />
                      <Button 
                        onClick={handleEmailSubmit}
                        className="bg-gradient-to-r from-purple-500 to-pink-400 text-white hover:from-purple-600 hover:to-pink-500 whitespace-nowrap"
                      >
                        Get Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4 text-center py-12">
                <div className="w-16 h-16 mx-auto bg-electric-blue/10 rounded-full flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-electric-blue" />
                </div>
                <p className="text-star-white/70">
                  Adjust your metrics on the left and click "Calculate My ROI" to see your growth potential.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Social Proof Section */}
        <Separator className="bg-star-white/10" />
        <div className="text-center">
          <p className="text-star-white/60 text-sm mb-4">
            Based on results from 500+ SaaS companies we've optimized
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-electric-blue font-bold text-lg">340%</div>
              <div className="text-star-white/70">Avg ROI</div>
            </div>
            <div className="text-center">
              <div className="text-electric-blue font-bold text-lg">2.4x</div>
              <div className="text-star-white/70">Conversion Boost</div>
            </div>
            <div className="text-center">
              <div className="text-electric-blue font-bold text-lg">60 days</div>
              <div className="text-star-white/70">To Results</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 