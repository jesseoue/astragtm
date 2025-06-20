import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ClientLogoBar } from "@/components/sections/client-logo-bar"
import { PackagesGrid } from "@/components/sections/packages-grid"
import { HowItWorks } from "@/components/sections/how-it-works"
import { TechStackCarousel } from "@/components/sections/tech-stack-carousel"
import { TestimonialsSlider } from "@/components/sections/testimonials-slider"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-navy">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ClientLogoBar />
        <PackagesGrid />
        <HowItWorks />
        <TechStackCarousel />
        <TestimonialsSlider />
        <FaqAccordion />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
