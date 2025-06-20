"use client"

import { useState, useEffect } from "react"
import { CTAButton } from "@/components/ui/cta-button"
import { MetricStat } from "@/components/ui/metric-stat"

export function HeroSection() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([])

  // Generate stars on client side only to avoid hydration mismatch
  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
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
            className="absolute w-1 h-1 bg-star-white rounded-full animate-pulse opacity-60"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/20 via-purple-400/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-electric-blue/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-8">
            <span className="mr-2">🚀</span>
            Trusted by 500+ SaaS Companies
          </div>

          {/* Main heading */}
          <h1 className="font-bold text-star-white mb-8 leading-tight">
            Scale Your{" "}
            <span className="relative">
              <span className="text-gradient">
                Revenue Engine
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/50 via-purple-400/50 to-pink-400/50 rounded-full"></div>
            </span>
            <br />
            with AI-Powered GTM Systems
          </h1>

          {/* Subheading */}
          <p className="text-large text-star-white/80 mb-12 max-w-4xl mx-auto">
            Transform your go-to-market strategy with data-driven automation that converts more leads, 
            closes deals faster, and scales revenue predictably. 
            <span className="text-electric-blue font-semibold"> Join companies growing 340% faster.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <CTAButton
              intent="primary"
              size="lg"
              icon="sparkles"
              href="/contact"
              glow
            >
              Get Free Revenue Audit
            </CTAButton>
            
            <CTAButton
              intent="outline"
              size="lg"
              icon="arrow"
              href="#roi-calculator"
            >
              See Your Growth Potential
            </CTAButton>
          </div>

          {/* Social proof metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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
              label="Average ROI"
              icon="📈"
            />
            <MetricStat
              value="60 Days"
              label="To See Results"
              icon="⚡"
            />
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/6 w-4 h-4 border border-electric-blue/30 rotate-45 animate-spin"></div>
          <div className="absolute top-2/3 right-1/6 w-6 h-6 border border-purple-400/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-electric-blue/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-1/3 w-5 h-5 border border-pink-400/30 rotate-12 animate-pulse"></div>
        </div>

        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="absolute w-1/3 h-1/3 border border-star-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute w-1/2 h-1/2 border border-star-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-2/3 h-2/3 border border-star-white/5 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </section>
  )
}

// Add this to your tailwind.config.js if you want to use animation-delay utilities
// theme: { extend: { animationDelay: { '500': '500ms', /* etc. */ } } }
// Or just use style={{ animationDelay: '0.5s' }}
