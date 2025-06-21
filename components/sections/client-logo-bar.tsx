"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

const trustedCompanies = [
  { name: "Stripe", logo: "/stripe-logo.png" },
  { name: "Slack", logo: "/slack-logo.png" },
  { name: "Zoom", logo: "/zoom-logo.png" },
  { name: "HubSpot", logo: "/hubspot-logo.png" },
  { name: "Shopify", logo: "/shopify-logo.png" },
  { name: "Salesforce", logo: "/salesforce-logo.png" }
]

interface ClientLogoBarProps {
  className?: string
}

export function ClientLogoBar({ className }: ClientLogoBarProps) {
  return (
    <div className={cn("mt-20 pt-12 border-t border-star-white/10", className)}>
      <div className="text-center mb-8">
        <p className="text-star-white/60 text-sm font-medium tracking-wide uppercase">
          Trusted by the world's fastest-growing SaaS companies
        </p>
      </div>
      
      {/* Company logos grid */}
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 max-w-4xl mx-auto">
        {trustedCompanies.map((company) => (
          <div 
            key={company.name} 
            className="group transition-all duration-300 hover:scale-110 opacity-50 hover:opacity-80"
          >
            <div className="relative w-24 h-12 flex items-center justify-center">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={96}
                height={48}
                className="object-contain filter brightness-0 invert max-h-8 max-w-20"
                style={{ 
                  filter: "brightness(0) invert(1) opacity(0.6)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
