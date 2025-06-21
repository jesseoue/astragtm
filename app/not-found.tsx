"use client"

import { motion } from "framer-motion"
import { CTAButton } from "@/components/ui/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, Phone, ArrowLeft } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const popularPages = [
  { href: "/pricing", label: "Pricing", description: "See our packages and pricing" },
  { href: "/case-studies", label: "Case Studies", description: "Real client success stories" },
  { href: "/about", label: "About Us", description: "Learn about our team and mission" },
  { href: "/blog", label: "Blog", description: "GTM insights and strategies" },
  { href: "/contact", label: "Contact", description: "Get your free GTM audit" }
]

export default function NotFound() {
  return (
    <div className="flex items-center min-h-[70vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="text-8xl md:text-9xl font-bold text-electric-blue/20 mb-4">
                404
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                Page Not Found
              </h1>
              <p className="text-xl text-star-white/80 mb-8 max-w-2xl mx-auto">
                Looks like this page wandered off the growth path. Let's get you back on track 
                to scaling your GTM operations.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <CTAButton
                intent="primary"
                icon="arrow"
                href="/"
                glow
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </CTAButton>
              <CTAButton
                intent="outline"
                icon="phone"
                href="/contact"
              >
                Get Free Audit
              </CTAButton>
            </motion.div>

            {/* Popular Pages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-star-white mb-8">
                Popular Pages
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {popularPages.map((page, index) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="bg-dark-navy/50 border-star-white/10 hover:border-electric-blue/30 transition-all duration-300 group hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-semibold text-star-white mb-2 group-hover:text-electric-blue transition-colors">
                          {page.label}
                        </h3>
                        <p className="text-star-white/70 text-sm mb-4">
                          {page.description}
                        </p>
                        <CTAButton
                          intent="outline"
                          href={page.href}
                          className="w-full text-sm"
                        >
                          Visit Page
                        </CTAButton>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-r from-electric-blue/10 to-electric-blue/5 rounded-2xl p-8 border border-electric-blue/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-star-white mb-4">
                  Still Can't Find What You're Looking For?
                </h3>
                <p className="text-star-white/80 mb-6">
                  Our team is here to help. Get a free consultation and let us guide you 
                  to the right GTM solution for your startup.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton
                    intent="primary"
                    icon="phone"
                    href="/contact"
                    glow
                  >
                    Talk to an Expert
                  </CTAButton>
                  <CTAButton
                    intent="outline"
                    icon="chevron"
                    href="/blog"
                  >
                    Browse Resources
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
} 