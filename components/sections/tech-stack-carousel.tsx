"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AnimatedSection } from "@/components/animated-section"
import { BrainCircuit, Database, Zap, MessageSquare, BarChart } from "lucide-react" // Example icons

const techCategories = [
  {
    name: "AI & GTM Intelligence",
    icon: <BrainCircuit className="text-electric-blue mr-2" />,
    tools: ["Clay", "ChatGPT / OpenAI API", "Hex", "Bard / Gemini API"],
  },
  {
    name: "CRM & Data",
    icon: <Database className="text-electric-blue mr-2" />,
    tools: ["HubSpot", "Salesforce", "Airtable", "Google Sheets"],
  },
  {
    name: "Automation & Orchestration",
    icon: <Zap className="text-electric-blue mr-2" />,
    tools: ["Inngest", "n8n", "Zapier", "Make.com"],
  },
  {
    name: "Engagement & Outreach",
    icon: <MessageSquare className="text-electric-blue mr-2" />,
    tools: ["Smartlead.ai", "Instantly.ai", "Apollo.io", "Lemlist"],
  },
  {
    name: "Analytics & Reporting",
    icon: <BarChart className="text-electric-blue mr-2" />,
    tools: ["Looker Studio", "Tableau", "Mixpanel", "June.so"],
  },
]

export function TechStackCarousel() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-dark-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-star-white mb-4">Powered by a Cutting-Edge Tech Stack</h2>
          <p className="text-lg text-star-white/80 max-w-2xl mx-auto">
            We integrate best-in-class tools to build robust and scalable GTM solutions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {techCategories.map((category, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="glassmorphism-card rounded-lg p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        {category.icon}
                        <h3 className="text-xl font-semibold text-star-white">{category.name}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool) => (
                          <span
                            key={tool}
                            className="bg-star-white/10 text-star-white/80 px-3 py-1 rounded-full text-xs font-medium border border-star-white/20"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  )
}
