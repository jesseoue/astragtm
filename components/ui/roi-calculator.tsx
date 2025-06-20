"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowRight, Mail, Sparkles } from "lucide-react"
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
  const [mrr, setMrr] = useState(50000)
  const [leads, setLeads] = useState(500)
  const [avgDeal, setAvgDeal] = useState(5000)
  const [results, setResults] = useState<ROIResults | null>(null)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const calculateROI = () => {
    const currentAcr = (mrr / leads) / (avgDeal / mrr) || 0.05; // Simplified initial conversion
    const projectedAcr = currentAcr * 2.5; // 150% improvement
    
    const projectedMrr = leads * projectedAcr * avgDeal;
    const monthlyGrowth = projectedMrr - mrr;
    const annualGrowth = monthlyGrowth * 12;
    const investment = mrr * 0.1; // Simplified investment
    const roi = (annualGrowth - investment) / investment * 100;

    const calculatedResults = {
      currentMRR: mrr,
      leadsPerMonth: leads,
      currentConversion: currentAcr * 100,
      targetConversion: projectedAcr * 100,
      projectedMRR: projectedMrr,
      monthlyGrowth: monthlyGrowth,
      annualGrowth: annualGrowth,
      roi: roi,
      investment: investment,
    };
    setResults(calculatedResults)
  }

  useEffect(() => {
    calculateROI()
  }, [mrr, leads, avgDeal])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onLeadCapture) {
      onLeadCapture(email, results as ROIResults);
      setIsSubmitted(true);
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
    <Card className={cn("w-full max-w-6xl mx-auto bg-gradient-to-b from-deep-purple to-dark-navy border-electric-blue/20 shadow-2xl shadow-electric-blue/10", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-3xl font-bold text-star-white">Revenue Growth Calculator</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-8">
            <div>
              <label className="text-star-white/80 mb-2 block">Monthly Recurring Revenue (MRR)</label>
              <div className="flex items-center gap-4">
                <Slider value={[mrr]} onValueChange={(val) => setMrr(val[0])} max={500000} step={1000} />
                <Input value={formatCurrency(mrr)} readOnly className="w-32" />
              </div>
            </div>
            <div>
              <label className="text-star-white/80 mb-2 block">New Leads per Month</label>
              <div className="flex items-center gap-4">
                <Slider value={[leads]} onValueChange={(val) => setLeads(val[0])} max={5000} step={10} />
                <Input value={leads.toLocaleString()} readOnly className="w-32" />
              </div>
            </div>
            <div>
              <label className="text-star-white/80 mb-2 block">Average Annual Deal Size</label>
              <div className="flex items-center gap-4">
                <Slider value={[avgDeal]} onValueChange={(val) => setAvgDeal(val[0])} max={100000} step={100} />
                <Input value={formatCurrency(avgDeal)} readOnly className="w-32" />
              </div>
            </div>
          </CardContent>
        </div>
        <div className="bg-electric-blue/10 p-8 rounded-r-lg">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-3xl font-bold text-electric-blue flex items-center gap-3">
              <TrendingUp />
              Your Revenue Potential
            </CardTitle>
          </CardHeader>
          {results && !isSubmitted && (
             <div className="space-y-4 animate-in fade-in-50 duration-500">
               <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-sm text-star-white/70">Projected Additional Annual Revenue</p>
                  <p className="text-4xl font-bold text-green-400">{formatCurrency(results.annualGrowth)}</p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-star-white/70">Projected ROI</p>
                    <p className="text-2xl font-bold text-star-white">{formatPercentage(results.roi)}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-star-white/70">Monthly Growth</p>
                    <p className="text-2xl font-bold text-star-white">{formatCurrency(results.monthlyGrowth)}</p>
                  </div>
               </div>
               <form onSubmit={handleEmailSubmit} className="pt-4 border-t border-white/10">
                 <p className="text-star-white font-semibold mb-2">Unlock Your Full Growth Report</p>
                 <div className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-grow"
                    />
                    <Button type="submit" className="bg-electric-blue hover:bg-electric-blue/90 text-dark-navy font-bold">
                      <Mail className="mr-2 h-4 w-4" />
                      Get Report
                    </Button>
                 </div>
               </form>
             </div>
          )}
          {isSubmitted && (
            <div className="text-center p-8 bg-green-400/10 rounded-lg animate-in fade-in-50 duration-500">
              <Sparkles className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-star-white mb-2">Success!</h3>
              <p className="text-star-white/80">Your personalized growth report is on its way to your inbox.</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
} 