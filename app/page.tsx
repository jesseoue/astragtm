"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { ClientLogoBar } from "@/components/sections/client-logo-bar"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WallOfLove } from "@/components/sections/wall-of-love"
import { PackagesGrid } from "@/components/sections/packages-grid"
import { TechStackCarousel } from "@/components/sections/tech-stack-carousel"
import { ResourcesSection } from "@/components/sections/resources-section"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import { ROICalculator } from "@/components/ui/roi-calculator"


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

export default function HomePage() {
  const handleROILeadCapture = async (email: string, results: ROIResults) => {
    // Handle lead capture logic here
    console.log("ROI Lead captured:", { email, results })
    // In production, this would send to your CRM/email system
    try {
      // Example API call
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, results, source: 'roi-calculator' })
      })
      if (response.ok) {
        // Show success notification
        console.log('Lead captured successfully')
      }
    } catch (error) {
      console.error('Failed to capture lead:', error)
    }
  }



  return (
    <>
      <HeroSection />
      <ClientLogoBar />
      
      {/* ROI Calculator Section - High-converting placement */}
      <section id="roi-calculator" className="section-padding section-bg-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
              <span className="mr-2">🚀</span>
              Interactive Revenue Calculator
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-star-white mb-6 leading-tight">
              See Your{" "}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revenue Potential
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/50 via-purple-400/50 to-pink-400/50 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl text-star-white/80 max-w-4xl mx-auto">
              Discover how much additional revenue you could generate with optimized GTM processes.{" "}
              <span className="text-electric-blue font-semibold">Based on real results from 500+ SaaS companies.</span>
            </p>
          </div>
          <ROICalculator onLeadCapture={handleROILeadCapture} />
        </div>
      </section>
      
      <HowItWorks />
      <WallOfLove />
      <PackagesGrid />
      <TechStackCarousel />
      <ResourcesSection />
      <FaqAccordion />
      <CtaSection />
    </>
  )
}
