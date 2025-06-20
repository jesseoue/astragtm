import Link from "next/link"
import { AstraLogo } from "@/components/icons/astra-logo"
import { CTAButton } from "@/components/ui/cta-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight, Star, TrendingUp, Sparkles } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/astragtm", icon: <Linkedin size={20} /> },
    { name: "X (Twitter)", href: "https://twitter.com/astragtm", icon: <Twitter size={20} /> },
    { name: "Email", href: "mailto:hello@astragtm.com", icon: <Mail size={20} /> },
  ]

  const quickLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ]

  const services = [
    { name: "Free Revenue Audit", href: "/contact" },
    { name: "GTM Strategy", href: "/services/gtm-strategy" },
    { name: "Marketing Automation", href: "/services/automation" },
    { name: "Sales Pipeline Optimization", href: "/services/sales-optimization" },
    { name: "CRM Integration", href: "/services/crm" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ]

  const stats = [
    { value: "500+", label: "SaaS Companies" },
    { value: "$2.4B+", label: "Revenue Generated" },
    { value: "340%", label: "Average ROI" },
    { value: "60 Days", label: "To Results" },
  ]

  return (
    <footer className="bg-dark-navy border-t border-electric-blue/20">
      {/* Pre-footer CTA Section - Inspired by Galactic Fed */}
      <div className="bg-gradient-to-r from-electric-blue/10 via-purple-400/5 to-electric-blue/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Free Marketing Plan
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-star-white mb-6">
              Ready to <span className="text-gradient bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">10x Your Revenue?</span>
            </h2>
            
            <p className="text-xl text-star-white/80 mb-8 max-w-3xl mx-auto">
              Get a custom marketing plan that shows you exactly how to scale your SaaS revenue. 
              <span className="text-electric-blue font-semibold"> No cost, no commitment.</span>
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-electric-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-star-white/60 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <CTAButton
              intent="primary"
              size="lg"
              icon="sparkles"
              href="/contact"
              glow
              className="text-lg px-10 py-4 font-bold shadow-2xl shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:scale-110 transition-all duration-300 mb-6"
            >
              Get My Free Marketing Plan
            </CTAButton>

            <p className="text-star-white/60 text-sm">
              ✓ Custom strategy in 48 hours ✓ No sales pitch ✓ Actionable insights
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16 border-b border-star-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-star-white mb-4">
              Stay Ahead of the Growth Curve
            </h3>
            <p className="text-star-white/70 mb-8">
              Get weekly insights, proven frameworks, and exclusive strategies delivered to your inbox. 
              Join <span className="text-electric-blue font-semibold">5,000+ growth professionals.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your work email" 
                className="bg-dark-navy/60 border-star-white/30 text-star-white placeholder:text-star-white/50 focus:border-electric-blue"
              />
              <Button className="bg-electric-blue text-dark-navy hover:bg-electric-blue/90 font-semibold whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-star-white/50 text-sm mt-4">
              No spam. Unsubscribe anytime. Read by founders at Stripe, Slack, and 500+ more.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6 group">
                <div className="flex items-center">
                  <AstraLogo className="h-10 w-auto text-star-white group-hover:text-electric-blue transition-colors duration-300" />
                  <span className="ml-3 text-2xl font-bold text-star-white">
                    Astra<span className="text-gradient bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">GTM</span>
                  </span>
                </div>
              </Link>
              
              <p className="text-star-white/70 mb-6 max-w-md leading-relaxed">
                AI-powered go-to-market systems for B2B SaaS companies. We help startups scale revenue 
                predictably with data-driven automation and proven frameworks.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-star-white/60">
                  <MapPin className="w-4 h-4 mr-3 text-electric-blue" />
                  <span className="text-sm">San Francisco, CA (Remote-First)</span>
                </div>
                <div className="flex items-center text-star-white/60">
                  <Mail className="w-4 h-4 mr-3 text-electric-blue" />
                  <Link href="mailto:hello@astragtm.com" className="text-sm hover:text-electric-blue transition-colors">
                    hello@astragtm.com
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="p-3 bg-star-white/10 rounded-xl text-star-white/70 hover:text-electric-blue hover:bg-electric-blue/10 hover:scale-110 transition-all duration-300"
                    aria-label={`Astra GTM on ${link.name}`}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-star-white font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-star-white/70 hover:text-electric-blue transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-star-white font-bold mb-6 text-lg">Services</h3>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-star-white/70 hover:text-electric-blue transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-star-white font-bold mb-6 text-lg">Legal</h3>
              <ul className="space-y-4">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-star-white/70 hover:text-electric-blue transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Trust Signals */}
      <div className="border-t border-star-white/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-star-white/50 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Astra GTM Corp. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-star-white/60">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span>340% Average ROI</span>
              </div>
              <div className="hidden sm:block text-star-white/50">
                🚀 Trusted by 500+ SaaS companies
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
