import Link from "next/link"
import { AstraLogo } from "@/components/icons/astra-logo"
import { CTAButton } from "@/components/ui/cta-button"
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
    { name: "X (Twitter)", href: "#", icon: <Twitter size={20} /> },
    { name: "Email", href: "mailto:hello@astragtm.com", icon: <Mail size={20} /> },
  ]

  const quickLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ]

  const services = [
    { name: "GTM Strategy", href: "#" },
    { name: "Marketing Automation", href: "#" },
    { name: "Sales Pipeline", href: "#" },
    { name: "CRM Integration", href: "#" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ]

  return (
    <AnimatedSection delay={0.2}>
      <footer className="bg-dark-navy border-t border-star-white/10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link href="/" className="inline-block mb-4 group">
                  <AstraLogo className="h-8 w-auto text-star-white" />
                </Link>
                <p className="text-star-white/70 mb-6 max-w-md">
                  AI-powered GTM systems for early-stage B2B startups. We help you build scalable, 
                  intelligent growth operations that deliver measurable results.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-star-white/60">
                    <MapPin className="w-4 h-4 mr-3 text-electric-blue" />
                    <span className="text-sm">San Francisco, CA (Remote-First)</span>
                  </div>
                  <div className="flex items-center text-star-white/60">
                    <Phone className="w-4 h-4 mr-3 text-electric-blue" />
                    <span className="text-sm">hello@astragtm.com</span>
                  </div>
                </div>

                {/* CTA */}
                <CTAButton
                  intent="primary"
                  icon="phone"
                  href="/contact"
                  className="mb-6"
                  glow
                >
                  Get Free GTM Audit
                </CTAButton>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : undefined}
                      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="p-2 bg-star-white/10 rounded-lg text-star-white/70 hover:text-electric-blue hover:bg-electric-blue/10 transition-all duration-300"
                      aria-label={`Astra GTM on ${link.name}`}
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-star-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-star-white/70 hover:text-electric-blue transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-star-white font-semibold mb-4">Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-star-white/70 hover:text-electric-blue transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-star-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-3">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-star-white/70 hover:text-electric-blue transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-star-white/10 py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-star-white/50 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Astra GTM. All rights reserved.
              </div>
              <div className="text-sm text-star-white/60">
                🚀 Proudly helping startups scale since 2021
              </div>
            </div>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  )
}
