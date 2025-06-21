"use client"

import { motion } from "framer-motion"
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
    href: "https://calendly.com/astragtm/strategy-call",
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
    description: "Chat with our team during business hours (9AM-6PM PST)",
    action: "Start Chat",
    href: "#chat",
    highlight: false
  }
]

// Custom form submission handler
const handleFormSubmit = async (data: any) => {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        company: data.company,
        phone: data.jobTitle || '', // Use jobTitle field as phone if needed
        message: `Company Size: ${data.companySize || 'Not specified'}\nGTM Challenge: ${data.challenge || 'Not specified'}`,
        source: 'contact-form'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-deep-purple to-dark-navy">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 mb-6 px-4 py-2">
                  Let's Talk Growth
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6 leading-tight">
                  Ready to <span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">Accelerate</span> Your Growth?
                </h1>
                <p className="text-xl text-star-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                  onSubmit={handleFormSubmit}
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
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <Card key={index} className={`transition-all duration-300 hover:scale-105 ${
                        method.highlight 
                          ? 'bg-gradient-to-br from-electric-blue/10 to-purple-400/5 border-electric-blue/30' 
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
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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

                {/* Additional Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 border border-electric-blue/20 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-star-white mb-4">Quick Response Guarantee</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-star-white/70">
                      <Clock className="w-4 h-4 mr-3 text-electric-blue" />
                      <span>Strategy sessions typically scheduled within 48 hours</span>
                    </div>
                    <div className="flex items-center text-star-white/70">
                      <Mail className="w-4 h-4 mr-3 text-electric-blue" />
                      <span>Email responses within 24 hours (often much faster)</span>
                    </div>
                    <div className="flex items-center text-star-white/70">
                      <MapPin className="w-4 h-4 mr-3 text-electric-blue" />
                      <span>San Francisco, CA (Remote-First Team)</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 