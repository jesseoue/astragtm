import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

const clientLogos = [
  { name: "Poggio", src: "/placeholder-rbuq0.png", alt: "Poggio Logo" },
  { name: "Spekit", src: "/placeholder-646gu.png", alt: "Spekit Logo" },
  { name: "Metramodo", src: "/placeholder-f8li9.png", alt: "Metramodo Logo" },
  { name: "Innovatech", src: "/innovatech-logo-grayscale.png", alt: "Innovatech Logo" },
  { name: "Synergy AI", src: "/placeholder.svg?width=150&height=50", alt: "Synergy AI Logo" },
]

export function ClientLogoBar() {
  return (
    <AnimatedSection className="py-16 bg-dark-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-star-white/60 uppercase tracking-wider mb-10">
          Trusted by Innovative Startups
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
