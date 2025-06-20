"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

const saasCompanies = [
  {
    name: "Stripe",
    domain: "stripe.com",
    description: "Payment processing"
  },
  {
    name: "Slack", 
    domain: "slack.com",
    description: "Team communication"
  },
  {
    name: "Zoom",
    domain: "zoom.us", 
    description: "Video conferencing"
  },
  {
    name: "Shopify",
    domain: "shopify.com",
    description: "E-commerce platform"
  },
  {
    name: "HubSpot",
    domain: "hubspot.com",
    description: "CRM & Marketing"
  },
  {
    name: "Salesforce",
    domain: "salesforce.com",
    description: "CRM platform"
  },
  {
    name: "Atlassian",
    domain: "atlassian.com", 
    description: "Productivity tools"
  },
  {
    name: "Notion",
    domain: "notion.so",
    description: "Workspace platform"
  },
  {
    name: "Intercom",
    domain: "intercom.com",
    description: "Customer messaging"
  },
  {
    name: "Figma",
    domain: "figma.com",
    description: "Design platform"
  },
  {
    name: "Airtable",
    domain: "airtable.com",
    description: "Database platform"
  },
  {
    name: "Zendesk",
    domain: "zendesk.com",
    description: "Customer service"
  }
]

interface ClientLogoBarProps {
  className?: string
}

export function ClientLogoBar({ className }: ClientLogoBarProps) {
  // Double the array for seamless infinite scroll
  const duplicatedCompanies = [...saasCompanies, ...saasCompanies]

  return (
    <section className={cn("py-16 md:py-24 bg-dark-navy/50", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-star-white mb-4">
            Trusted by Leading <span className="text-electric-blue">SaaS Companies</span>
          </h2>
          <p className="text-star-white/70 text-lg max-w-2xl mx-auto">
            Join 500+ SaaS companies that have scaled their revenue with our proven GTM optimization strategies
          </p>
          <div className="flex justify-center gap-8 mt-6 text-sm">
            <div className="text-center">
              <div className="text-electric-blue font-bold text-2xl">500+</div>
              <div className="text-star-white/60">Companies Scaled</div>
            </div>
            <div className="text-center">
              <div className="text-electric-blue font-bold text-2xl">$2.4B+</div>
              <div className="text-star-white/60">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-electric-blue font-bold text-2xl">340%</div>
              <div className="text-star-white/60">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Scrolling logo container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.domain}-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-star-white/5 hover:bg-star-white/10 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={`https://logo.clearbit.com/${company.domain}`}
                      alt={`${company.name} logo`}
                      width={64}
                      height={64}
                      className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if Clearbit fails
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder-logo.svg`
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-star-white font-medium text-sm">
                      {company.name}
                    </div>
                    <div className="text-star-white/50 text-xs">
                      {company.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-dark-navy/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-dark-navy/80 to-transparent pointer-events-none z-10" />
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-star-white/60 text-sm mb-4">
            Ready to join the fastest-growing SaaS companies?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-semibold rounded-lg hover:from-electric-blue/90 hover:to-purple-400/90 transition-all duration-200 transform hover:scale-105"
            >
              Get Your Free Revenue Audit
            </a>
            <a
              href="#roi-calculator"
              className="inline-flex items-center px-6 py-3 border border-electric-blue/30 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all duration-200"
            >
              Calculate Your ROI
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
