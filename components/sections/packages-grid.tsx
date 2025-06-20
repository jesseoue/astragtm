import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Zap, Rocket, Brain } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

const packages = [
  {
    icon: <Rocket size={32} className="text-electric-blue mb-4" />,
    title: "GTM Launch",
    description: "Perfect for startups ready to define their market and make an initial impact.",
    features: [
      "ICP Definition & Validation",
      "TAM Scoring & Prioritization",
      "Quick-Wins Campaign Setup (1x)",
      "Basic CRM Setup Guide",
    ],
    price: "$X,XXX",
    cta: "Book GTM Launch",
  },
  {
    icon: <Zap size={32} className="text-electric-blue mb-4" />,
    title: "Growth Accelerator",
    description: "Scale your outreach and automate sales processes for consistent growth.",
    features: [
      "2-3 Outbound Campaigns/Month",
      "SDR-Assist AI Automations",
      "Weekly Performance Insights",
      "Advanced CRM Integration",
    ],
    price: "$Y,YYY",
    cta: "Book Accelerator",
    popular: true,
  },
  {
    icon: <Brain size={32} className="text-electric-blue mb-4" />,
    title: "Strategy Sprint",
    description: "A focused consultation to refine your GTM strategy and unlock new opportunities.",
    features: [
      "1-Hour Intensive Consult",
      "Custom Clay Table Blueprint",
      "Detailed ICP Documentation",
      "Actionable Roadmap",
    ],
    price: "$Z,ZZ",
    cta: "Book Strategy Sprint",
  },
]

export function PackagesGrid() {
  return (
    <section id="packages" className="py-20 md:py-32 bg-dark-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-star-white mb-4">Flexible Packages for Every Stage</h2>
          <p className="text-lg text-star-white/80 max-w-2xl mx-auto">
            Choose the right level of support to supercharge your Go-To-Market strategy.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <AnimatedSection key={pkg.title} delay={index * 0.1}>
              <Card
                className={`h-full flex flex-col glassmorphism-card rounded-lg overflow-hidden ${pkg.popular ? "border-electric-blue ring-2 ring-electric-blue" : "border-star-white/20"}`}
              >
                {pkg.popular && (
                  <div className="bg-electric-blue text-center py-1.5 text-sm font-semibold text-dark-navy">
                    Most Popular
                  </div>
                )}
                <CardHeader className="items-center text-center">
                  {pkg.icon}
                  <CardTitle className="text-2xl font-bold text-star-white">{pkg.title}</CardTitle>
                  <CardDescription className="text-star-white/70 pt-2 min-h-[60px]">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle size={18} className="text-electric-blue mr-3 mt-1 flex-shrink-0" />
                        <span className="text-star-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch pt-6 mt-auto">
                  <p className="text-3xl font-bold text-star-white text-center mb-6">
                    {pkg.price}
                    <span className="text-base font-normal text-star-white/70">/mo (Est.)</span>
                  </p>
                  <Button
                    asChild
                    variant={pkg.popular ? "default" : "outline"}
                    className={`w-full font-semibold ${pkg.popular ? "bg-electric-blue text-dark-navy hover:bg-electric-blue/90" : "bg-transparent text-electric-blue border-electric-blue hover:bg-electric-blue/10"}`}
                  >
                    <Link href="#book-call">{pkg.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
