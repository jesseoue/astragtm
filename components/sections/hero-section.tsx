"use client"

import { useState, useEffect } from "react"
import { CTAButton } from "@/components/ui/cta-button"

export function HeroSection() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([])

  // Generate stars on client side only to avoid hydration mismatch
  useEffect(() => {
    const generatedStars = Array.from({ length: 20 }, (_, i) => ({
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

      {/* Clean background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/15 via-purple-400/5 to-transparent"></div>
      <div className="absolute top-1/4 -left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-electric-blue/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Simple Trust Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="mr-2">🚀</span>
            <span>500+ SaaS Companies Scaled • $2.4B+ Revenue Generated</span>
          </div>

          {/* Clean, Powerful Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-star-white mb-6 leading-tight">
            Transform Your SaaS Into a{" "}
            <span className="relative inline-block">
              <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revenue Machine
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/60 via-purple-400/60 to-pink-400/60 rounded-full animate-pulse"></div>
            </span>
          </h1>

          {/* Simple, Clear Subheading */}
          <p className="text-xl md:text-2xl text-star-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered go-to-market systems that convert more leads, close deals faster, and scale predictably.
          </p>

          {/* Clean CTA Section */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <CTAButton
                intent="primary"
                size="lg"
                icon="sparkles"
                href="/contact"
                glow
                className="text-lg px-12 py-4 font-bold shadow-2xl shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:scale-110 transition-all duration-300"
              >
                Get Free Marketing Plan
              </CTAButton>
              
              <CTAButton
                intent="outline"
                size="lg"
                icon="calculator"
                href="#roi-calculator"
                className="text-lg px-12 py-4 border-2 border-electric-blue/50 hover:border-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
              >
                Calculate ROI
              </CTAButton>
            </div>

            {/* Simple Value Props */}
            <div className="flex flex-wrap justify-center gap-8 text-star-white/70">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Free 60-min strategy session</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Results in 60 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>340% average ROI</span>
              </div>
            </div>
          </div>

          {/* Key Stats - Simplified */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-electric-blue font-bold text-3xl lg:text-4xl">500+</div>
              <div className="text-star-white/60 text-sm">Companies Scaled</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 font-bold text-3xl lg:text-4xl">340%</div>
              <div className="text-star-white/60 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-bold text-3xl lg:text-4xl">60</div>
              <div className="text-star-white/60 text-sm">Days to Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Add this to your tailwind.config.js if you want to use animation-delay utilities
// theme: { extend: { animationDelay: { '500': '500ms', /* etc. */ } } }
// Or just use style={{ animationDelay: '0.5s' }}
