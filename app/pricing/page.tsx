"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CTAButton } from "@/components/ui/cta-button"
import { MetricStat } from "@/components/ui/metric-stat"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const pricingTiers = [
  {
    name: "Growth Starter",
    price: "2,997",
    period: "one-time",
    description: "Perfect for early-stage startups ready to optimize their GTM foundation",
    features: [
      "GTM Strategy Audit",
      "Lead Scoring Implementation",
      "Basic CRM Setup & Automation",
      "Email Sequence Templates",
      "Landing Page Optimization",
      "30-day Support & Training"
    ],
    highlight: false,
    icon: Rocket,
    buttonText: "Start Growing",
    savings: null
  },
  {
    name: "Growth Accelerator",
    price: "7,997",
    period: "one-time",
    description: "Comprehensive GTM system for scaling startups with AI-powered automation",
    features: [
      "Everything in Growth Starter",
      "AI-Powered Lead Qualification",
      "Advanced Marketing Automation",
      "Sales Pipeline Optimization",
      "Custom Integrations (3)",
      "Predictive Analytics Dashboard",
      "90-day Support & Optimization"
    ],
    highlight: true,
    icon: Zap,
    buttonText: "Accelerate Growth",
    savings: "Most Popular"
  },
  {
    name: "Enterprise GTM",
    price: "Custom",
    period: "quote",
    description: "Full-scale GTM transformation with dedicated success team",
    features: [
      "Everything in Growth Accelerator",
      "Dedicated GTM Success Manager",
      "Custom AI Model Training",
      "Multi-channel Attribution",
      "Advanced Revenue Operations",
      "Executive Reporting Suite",
      "12-month Partnership Program"
    ],
    highlight: false,
    icon: Crown,
    buttonText: "Contact Sales",
    savings: null
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Growth",
    company: "TechFlow",
    content: "Astra GTM transformed our entire sales process. We saw a 40% increase in qualified leads within 60 days.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "DataSync",
    content: "The ROI was immediate. Our conversion rates doubled and our sales cycle shortened by 3 weeks.",
    rating: 5
  }
]

const faqs = [
  {
    question: "What's included in the implementation?",
    answer: "Each package includes strategy development, system setup, team training, and ongoing support. We handle everything from initial audit to go-live."
  },
  {
    question: "How quickly can we see results?",
    answer: "Most clients see improvements within 30 days. Full ROI typically achieved within 90 days of implementation."
  },
  {
    question: "Do you integrate with our existing tools?",
    answer: "Yes, we integrate with 200+ popular tools including Salesforce, HubSpot, Slack, and more. Custom integrations available."
  },
  {
    question: "What if we need changes after implementation?",
    answer: "All packages include optimization periods. We'll refine and adjust based on performance data and your feedback."
  }
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-navy">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 mb-4">
                  Transparent Pricing
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                  Invest in <span className="text-electric-blue">Growth</span> That Scales
                </h1>
                <p className="text-xl text-star-white/80 mb-8 max-w-2xl mx-auto">
                  Choose the GTM system that matches your growth stage. All packages include implementation, 
                  training, and proven frameworks that deliver measurable results.
                </p>
              </motion.div>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <MetricStat value={240} suffix="%" label="Avg ROI" delay={0.2} />
                <MetricStat value={45} suffix=" Days" label="To Full ROI" delay={0.4} />
                <MetricStat value={60} suffix="%" label="Faster Sales Cycles" delay={0.6} />
                <MetricStat value={98} suffix="%" label="Client Satisfaction" delay={0.8} />
              </div>
            </AnimatedSection>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-electric-blue text-dark-navy font-semibold px-4 py-1">
                        {tier.savings}
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`relative h-full transition-all duration-300 hover:scale-105 ${
                    tier.highlight 
                      ? 'bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border-electric-blue/30 shadow-xl shadow-electric-blue/10' 
                      : 'bg-dark-navy/50 border-star-white/10 hover:border-electric-blue/30'
                  }`}>
                    <CardHeader className="text-center pb-8">
                      <div className="flex justify-center mb-4">
                        <div className={`p-3 rounded-full ${
                          tier.highlight ? 'bg-electric-blue/20' : 'bg-star-white/10'
                        }`}>
                          <tier.icon className={`w-8 h-8 ${
                            tier.highlight ? 'text-electric-blue' : 'text-star-white'
                          }`} />
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl font-bold text-star-white mb-2">
                        {tier.name}
                      </CardTitle>
                      
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-electric-blue">
                          ${tier.price}
                        </span>
                        {tier.period !== "quote" && (
                          <span className="text-star-white/60 ml-2">
                            {tier.period}
                          </span>
                        )}
                      </div>
                      
                      <CardDescription className="text-star-white/70 text-base">
                        {tier.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-4">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                            <span className="text-star-white/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-6">
                        <CTAButton
                          intent={tier.highlight ? "primary" : "outline"}
                          icon="arrow"
                          href={tier.price === "Custom" ? "/contact" : "/contact?package=" + tier.name.replace(" ", "-").toLowerCase()}
                          className="w-full"
                          glow={tier.highlight}
                        >
                          {tier.buttonText}
                        </CTAButton>
                      </div>
                    </CardContent>

                    {tier.highlight && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-transparent to-electric-blue/10 rounded-lg"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <AnimatedSection className="mb-20">
              <h2 className="text-3xl font-bold text-center text-star-white mb-12">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="bg-dark-navy/50 border-star-white/10 h-full">
                      <CardContent className="p-6">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-electric-blue fill-current" />
                          ))}
                        </div>
                        <p className="text-star-white/90 mb-4 italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <div className="font-semibold text-star-white">
                            {testimonial.name}
                          </div>
                          <div className="text-star-white/60 text-sm">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* FAQ Section */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center text-star-white mb-12">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-dark-navy/50 border-star-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-star-white mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-star-white/80">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-electric-blue text-dark-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your GTM?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-navy/80">
                Join 200+ startups who've accelerated their growth with Astra GTM. 
                Book a free strategy call to discuss your specific needs.
              </p>
              <CTAButton
                intent="secondary"
                icon="phone"
                href="/contact"
                className="text-star-white bg-dark-navy hover:bg-dark-navy/90"
                glow
              >
                Book Free Strategy Call
              </CTAButton>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 