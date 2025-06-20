"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

const trustedCompanies = [
  { name: "Stripe", domain: "stripe.com", logo: "/stripe-logo.png" },
  { name: "Slack", domain: "slack.com", logo: "/slack-logo.png" },
  { name: "Zoom", domain: "zoom.us", logo: "/zoom-logo.png" },
  { name: "HubSpot", domain: "hubspot.com", logo: "/hubspot-logo.png" },
  { name: "Shopify", domain: "shopify.com", logo: "/shopify-logo.png" },
  { name: "Salesforce", domain: "salesforce.com", logo: "/salesforce-logo.png" }
]

interface ClientLogoBarProps {
  className?: string
}

export function ClientLogoBar({ className }: ClientLogoBarProps) {
  return (
    <section className={cn("py-16 bg-deep-purple/30 border-t border-star-white/10", className)}>
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <p className="text-star-white/60 text-lg">
            Trusted by the world's fastest-growing SaaS companies
          </p>
        </div>
        
        {/* Clean company logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 max-w-4xl mx-auto">
          {trustedCompanies.map((company) => (
            <div key={company.domain} className="group hover:scale-110 transition-transform duration-300 opacity-60 hover:opacity-100">
              <div className="w-28 h-14 relative flex items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={112}
                  height={56}
                  className="object-contain filter brightness-0 invert max-h-10 max-w-24"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder-logo.svg`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
