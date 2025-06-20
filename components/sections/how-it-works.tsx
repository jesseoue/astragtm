import { Search, Settings, TrendingUp, ChevronRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    icon: <Search size={32} className="text-electric-blue" />,
    title: "Discover & Strategize",
    description: "We dive deep into your business, market, and goals to craft a tailored GTM blueprint.",
  },
  {
    icon: <Settings size={32} className="text-electric-blue" />,
    title: "Deploy AI Workflows",
    description: "Leveraging cutting-edge AI tools, we build and implement intelligent GTM systems.",
  },
  {
    icon: <TrendingUp size={32} className="text-electric-blue" />,
    title: "Scale & Iterate",
    description: "We monitor performance, provide insights, and continuously optimize for sustainable growth.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-dark-navy/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-star-white mb-4">Our Proven Process for Success</h2>
          <p className="text-lg text-star-white/80 max-w-2xl mx-auto">
            Three simple steps to transform your growth operations and achieve remarkable results.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4 items-start">
          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.15} className="relative">
              <div className="flex flex-col items-center text-center p-6 glassmorphism-card rounded-lg h-full">
                <div className="p-4 bg-electric-blue/10 rounded-full mb-6 inline-block">{step.icon}</div>
                <h3 className="text-xl font-semibold text-star-white mb-3">{step.title}</h3>
                <p className="text-star-white/70 text-sm leading-relaxed flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ChevronRight size={32} className="text-electric-blue/50" />
                </div>
              )}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ChevronRight size={24} className="text-electric-blue/50 rotate-90" />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
