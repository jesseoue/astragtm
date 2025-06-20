"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { LeadCaptureForm } from "@/components/ui/lead-capture-form"
import { CTAButton } from "@/components/ui/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, MessageSquare, Phone, Clock, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Strategy Call",
    description: "Schedule a 30-minute consultation to discuss your GTM challenges",
    action: "Book Now",
    href: "/book-call",
    highlight: true
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions and we'll respond within 24 hours",
    action: "hello@astragtm.com",
    href: "mailto:hello@astragtm.com",
    highlight: false
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team during business hours",
    action: "Start Chat",
    href: "#",
    highlight: false
  }
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-navy">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 mb-4">
                    Let's Talk Growth
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                    Ready to <span className="text-electric-blue">Accelerate</span> Your Growth?
                  </h1>
                  <p className="text-xl text-star-white/80 mb-8 max-w-2xl mx-auto">
                    Get a free GTM audit and personalized growth strategy. No sales pitch, 
                    just actionable insights you can implement immediately.
                  </p>
                </motion.div>
              </AnimatedSection>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <LeadCaptureForm
                    title="Get Your Free GTM Audit"
                    description="Tell us about your business and we'll send you a personalized growth strategy within 24 hours."
                    submitButtonText="Get Free Audit"
                    className="sticky top-8"
                  />
                </motion.div>

                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-star-white mb-6">
                      Other Ways to Connect
                    </h2>
                    <div className="space-y-4">
                      {contactMethods.map((method, index) => (
                        <Card key={index} className={`transition-all duration-300 hover:scale-105 ${
                          method.highlight 
                            ? 'bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border-electric-blue/30' 
                            : 'bg-dark-navy/50 border-star-white/10 hover:border-electric-blue/30'
                        }`}>
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className={`p-3 rounded-full ${
                                method.highlight ? 'bg-electric-blue/20' : 'bg-star-white/10'
                              }`}>
                                <method.icon className={`w-6 h-6 ${
                                  method.highlight ? 'text-electric-blue' : 'text-star-white'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-star-white mb-2">
                                  {method.title}
                                </h3>
                                <p className="text-star-white/70 mb-4">
                                  {method.description}
                                </p>
                                <CTAButton
                                  intent={method.highlight ? "primary" : "outline"}
                                  href={method.href}
                                  className="w-full sm:w-auto"
                                >
                                  {method.action}
                                </CTAButton>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 