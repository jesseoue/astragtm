import { Button } from "@/components/ui/button"
import { CTAButton } from "@/components/ui/cta-button"
import { AnimatedSection } from "@/components/animated-section"
import { Phone, Sparkles } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section id="book-call" className="py-20 md:py-32 bg-electric-blue text-dark-navy">
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Shape Your Growth Operations?</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-dark-navy/80">
          Let's discuss how Astra GTM can build AI-powered systems to accelerate your startup's success. Schedule a free
          consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            intent="secondary"
            icon="phone"
            href="/contact"
            className="bg-dark-navy text-star-white hover:bg-dark-navy/90 shadow-lg"
            glow
          >
            Book a Free Call
          </CTAButton>
          <CTAButton
            intent="outline"
            icon="sparkles"
            href="/pricing"
            className="bg-transparent text-dark-navy border-dark-navy hover:bg-dark-navy/10 hover:text-dark-navy shadow-lg"
          >
            View Pricing
          </CTAButton>
        </div>
      </AnimatedSection>
    </section>
  )
}
