"use client"

import { useState, useEffect } from "react"
import { CTAButton } from "@/components/ui/cta-button"
import { MetricStat } from "@/components/ui/metric-stat"
import Image from "next/image"

const trustedCompanies = [
  { name: "Stripe", domain: "stripe.com", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Slack", domain: "slack.com", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Zoom", domain: "zoom.us", logo: "https://logo.clearbit.com/zoom.us" },
  { name: "HubSpot", domain: "hubspot.com", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Shopify", domain: "shopify.com", logo: "https://logo.clearbit.com/shopify.com" },
  { name: "Salesforce", domain: "salesforce.com", logo: "https://logo.clearbit.com/salesforce.com" }
]

export function HeroSection() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([])

  // Generate stars on client side only to avoid hydration mismatch
  useEffect(() => {
    const generatedStars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center section-bg-primary overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-star-white rounded-full animate-pulse opacity-30"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Enhanced background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/15 via-purple-400/5 to-transparent"></div>
      <div className="absolute top-1/4 -left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-electric-blue/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Social Proof - Moved Higher with Real Company Logos */}
          <div className="text-center mb-8 lg:mb-12">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-xs lg:text-sm font-medium mb-6 lg:mb-8 backdrop-blur-sm">
              <span className="mr-2">🚀</span>
              <span className="font-semibold">500+ SaaS Companies Scaled</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span className="text-electric-blue/80 hidden sm:inline">$2.4B+ Revenue Generated</span>
            </div>

            {/* Company Logos - Premium Placement */}  
            <div className="mb-8">
              <p className="text-star-white/60 text-sm mb-4">Trusted by companies like:</p>
              <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 mb-6">
                {trustedCompanies.slice(0, 6).map((company) => (
                  <div key={company.domain} className="flex items-center space-x-2 group hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder-logo.svg`
                        }}
                      />
                    </div>
                    <span className="text-star-white/70 font-medium text-sm lg:text-base">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Stats Row - More Prominent */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-center p-3 lg:p-4 bg-star-white/5 rounded-lg border border-electric-blue/20">
                <div className="text-electric-blue font-bold text-xl lg:text-2xl">$2.4B+</div>
                <div className="text-star-white/60 text-xs lg:text-sm">Revenue Generated</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-star-white/5 rounded-lg border border-purple-400/20">
                <div className="text-purple-400 font-bold text-xl lg:text-2xl">340%</div>
                <div className="text-star-white/60 text-xs lg:text-sm">Average ROI</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-star-white/5 rounded-lg border border-green-400/20">
                <div className="text-green-400 font-bold text-xl lg:text-2xl">60 Days</div>
                <div className="text-star-white/60 text-xs lg:text-sm">To Results</div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center">
            {/* Main heading - More responsive */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-star-white mb-6 lg:mb-8 leading-tight max-w-6xl mx-auto">
              Transform Your SaaS Into a{" "}
              <span className="relative inline-block">
                <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Revenue Machine
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/60 via-purple-400/60 to-pink-400/60 rounded-full animate-pulse"></div>
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl">with AI-Powered GTM Systems</span>
            </h1>

            {/* Enhanced subheading */}
            <p className="text-base md:text-lg lg:text-xl text-star-white/80 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Stop losing deals to manual processes. Our AI-driven go-to-market automation 
              converts more leads, closes deals faster, and scales predictably.
              <br />
              <span className="text-electric-blue font-semibold text-lg md:text-xl lg:text-2xl mt-4 block">
                Join the fastest-growing SaaS companies using our proven system.
              </span>
            </p>

            {/* Enhanced CTA section - Better Mobile Layout */}
            <div className="mb-12 lg:mb-16">
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-6 lg:mb-8 px-4">
                <CTAButton
                  intent="primary"
                  size="lg"
                  icon="sparkles"
                  href="/contact"
                  glow
                  className="w-full sm:w-auto text-base lg:text-lg px-8 lg:px-12 py-3 lg:py-4 font-bold shadow-2xl shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:scale-110 transition-all duration-300"
                >
                  Get Free Revenue Audit
                </CTAButton>
                
                <CTAButton
                  intent="outline"
                  size="lg"
                  icon="calculator"
                  href="#roi-calculator"
                  className="w-full sm:w-auto text-base lg:text-lg px-8 lg:px-12 py-3 lg:py-4 border-2 border-electric-blue/50 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                >
                  Calculate Your ROI
                </CTAButton>
              </div>

              {/* Value proposition callouts - Responsive */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-6 text-star-white/70 text-sm lg:text-base px-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Free 60-min strategy session</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom GTM blueprint</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Results in 60 days or money back</span>
                </div>
              </div>
            </div>

            {/* Enhanced social proof metrics - Better Mobile Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto mb-8 px-4">
              <MetricStat
                value="500+"
                label="SaaS Companies Scaled"
                icon="🚀"
              />
              <MetricStat
                value="$2.4B+"
                label="Revenue Generated"
                icon="💰"
              />
              <MetricStat
                value="340%"
                label="Average ROI Increase"
                icon="📈"
              />
              <MetricStat
                value="60 Days"
                label="Average Time to Results"
                icon="⚡"
              />
            </div>
          </div>
        </div>

        {/* Subtle floating elements - Reduced for mobile performance */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-1/4 left-1/6 w-3 h-3 border border-electric-blue/20 rotate-45 animate-spin"></div>
          <div className="absolute top-3/4 right-1/6 w-4 h-4 border border-purple-400/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-electric-blue/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 border border-pink-400/20 rotate-12 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

// Add this to your tailwind.config.js if you want to use animation-delay utilities
// theme: { extend: { animationDelay: { '500': '500ms', /* etc. */ } } }
// Or just use style={{ animationDelay: '0.5s' }}
