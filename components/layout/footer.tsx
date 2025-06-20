import Link from "next/link"
import { AstraLogo } from "@/components/icons/astra-logo"
import { Linkedin, Twitter, Mail } from "lucide-react" // Using X as Twitter
import { AnimatedSection } from "@/components/animated-section"

export function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
    { name: "X (Twitter)", href: "#", icon: <Twitter size={20} /> },
    { name: "Email", href: "mailto:hello@astragtm.com", icon: <Mail size={20} /> },
  ]

  return (
    <AnimatedSection delay={0.2}>
      <footer className="bg-dark-navy border-t border-star-white/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="mb-4 group">
                <AstraLogo className="h-8 w-auto text-star-white" />
              </Link>
              <p className="text-sm text-star-white/60 text-center md:text-left">
                AI-powered GTM systems for early-stage B2B startups.
              </p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-star-white/70 hover:text-electric-blue transition-colors"
                  aria-label={`Astra GTM on ${link.name}`}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-star-white/10 text-center text-sm text-star-white/50">
            &copy; {new Date().getFullYear()} Astra GTM. All rights reserved.
          </div>
        </div>
      </footer>
    </AnimatedSection>
  )
}
