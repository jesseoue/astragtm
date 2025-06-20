"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-star-white rounded-full animate-star-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-star-white leading-tight">
              Shape Your <span className="text-electric-blue">Growth</span> Operations
            </h1>
            <p className="text-lg sm:text-xl text-star-white/80 max-w-xl mx-auto md:mx-0">
              AI-powered GTM systems for early-stage B2B startups. We build intelligent workflows that drive revenue and
              scale your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-electric-blue text-dark-navy hover:bg-electric-blue/90 font-semibold text-base"
              >
                <Link href="#services">
                  Get Started <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-star-white border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue font-semibold text-base"
              >
                <Link href="#packages">
                  See Packages <Sparkles size={20} className="ml-2" />
                </Link>
              </Button>
            </div>
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
              {/* Placeholder for more complex animation if needed */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 border-2 border-electric-blue/30 rounded-full animate-pulse"></div>
                <div className="absolute w-full h-full border border-star-white/10 rounded-full animate-pulse animation-delay-500"></div>
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
