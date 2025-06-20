"use client"

import { CTAButton } from "@/components/ui/cta-button"

export function CtaSection() {
  return (
    <section className="section-padding section-bg-accent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-electric-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto container-padding text-center relative z-10">
        <h2 className="font-bold text-star-white mb-6">
          Ready to Scale Your Revenue? Let's Build Your Growth Engine
        </h2>
        <p className="text-large text-star-white/80 mb-12 max-w-3xl mx-auto">
          Join 500+ SaaS companies that trust us to optimize their go-to-market strategy and accelerate growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <CTAButton
            intent="primary"
            size="lg"
            icon="sparkles"
            glow
            href="/contact"
          >
            Get Free Revenue Audit
          </CTAButton>
          
          <CTAButton
            intent="outline"
            size="lg"
            icon="phone"
            href="/contact"
          >
            Schedule a Call
          </CTAButton>
        </div>
        
        <div className="mt-8 text-star-white/60 text-sm">
          ✅ Free strategy session • ✅ No long-term commitment • ✅ 60-day results guarantee
        </div>
      </div>
    </section>
  )
}
