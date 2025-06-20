"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CTAButton } from "@/components/ui/cta-button"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import Link from "next/link"

interface Star {
  id: number
  left: number
  top: number
  width: number
  height: number
  animationDelay: number
  animationDuration: number
}

export function HeroSection() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    // Generate stars on client side only to avoid hydration mismatch
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 2 + 3,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-gradient-to-br from-dark-navy via-dark-navy to-deep-purple">
      {/* Animated stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-star-white rounded-full animate-star-glow"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.width}px`,
              height: `${star.height}px`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-star-white leading-tight">
              Scale Your <span className="text-electric-blue bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">Revenue Engine</span>
            </h1>
            <p className="text-lg sm:text-xl text-star-white/80 max-w-xl mx-auto md:mx-0">
              AI-powered GTM systems for B2B SaaS companies. We build intelligent workflows that drive predictable revenue growth and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <CTAButton
                intent="primary"
                icon="phone"
                href="/contact"
                glow
                className="shadow-2xl shadow-electric-blue/25 text-lg px-8 py-4"
              >
                Get Free Revenue Audit
              </CTAButton>
              <CTAButton
                intent="outline"
                icon="calculator"
                href="#roi-calculator"
                className="text-lg px-8 py-4"
              >
                Calculate ROI
              </CTAButton>
            </div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6 text-center md:text-left"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-electric-blue to-purple-400 rounded-full border-2 border-dark-navy flex items-center justify-center">
                      <span className="text-xs text-dark-navy font-bold">✓</span>
                    </div>
                  ))}
                </div>
                <span className="text-star-white/80 text-sm font-medium">
                  500+ SaaS companies scaled
                </span>
              </div>
              <div className="text-electric-blue font-medium text-sm">
                • Average 340% ROI • 60-day results guarantee
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="hidden md:flex justify-center items-center">
            <div className="w-full max-w-md lg:max-w-lg aspect-square relative">
              <Image
                src="/abstract-rocket-launch.png"
                alt="Abstract 3D rocket and constellation lines"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
              {/* Enhanced animation rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 border-2 border-electric-blue/40 rounded-full animate-pulse"></div>
                <div className="absolute w-full h-full border border-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute w-1/2 h-1/2 border border-star-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

// Add this to your tailwind.config.js if you want to use animation-delay utilities
// theme: { extend: { animationDelay: { '500': '500ms', /* etc. */ } } }
// Or just use style={{ animationDelay: '0.5s' }}
