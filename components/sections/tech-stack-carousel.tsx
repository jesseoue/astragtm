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
    name: "Data Enrichment",
    icon: <Database className="text-electric-blue mr-2" />,
    tools: ["Email Enrichment - LeadMagic", "Mobile Enrichment - LeadMagic", "Job Board Enrichment - LeadMagic", "Apollo.io"],
  },
  {
    name: "CRM & Data Management",
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
          <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
            <span className="mr-2">⚡</span>
            Cutting-Edge Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-star-white mb-6">
            Powered by <span className="text-electric-blue">Best-in-Class</span> Tools
          </h2>
          <p className="text-lg text-star-white/80 max-w-3xl mx-auto">
            We integrate industry-leading tools and AI-powered solutions to build robust, 
            scalable GTM systems that deliver exceptional results.
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
                    <div className="bg-gradient-to-br from-dark-navy to-deep-purple border border-star-white/10 hover:border-electric-blue/30 rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-center mb-6">
                        <div className="bg-electric-blue/10 p-2 rounded-lg mr-3 group-hover:bg-electric-blue/20 transition-colors">
                          {category.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-star-white group-hover:text-electric-blue transition-colors">
                          {category.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 flex-grow">
                        {category.tools.map((tool) => (
                          <span
                            key={tool}
                            className="bg-electric-blue/10 hover:bg-electric-blue/20 text-star-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-200 cursor-default"
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
              <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20 hover:border-electric-blue transition-all duration-200" />
              <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20 hover:border-electric-blue transition-all duration-200" />
            </div>
          </Carousel>
        </AnimatedSection>

        {/* Additional Tech Stack Info */}
        <AnimatedSection delay={0.4} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 border border-electric-blue/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-star-white mb-4">
              🔧 Custom Integrations Available
            </h3>
            <p className="text-star-white/80 mb-6">
              Don't see your favorite tool? We build custom integrations and can connect with 200+ platforms 
              through APIs, webhooks, and automation workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-star-white/70">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                99.9% Uptime SLA
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Real-time Sync
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Enterprise Security
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                24/7 Monitoring
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
