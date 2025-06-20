"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButton } from "@/components/ui/cta-button"
import { Search, Zap, Target, BarChart3, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Analyze Your Current GTM",
    description: "We audit your existing systems, identify bottlenecks, and map out opportunities for growth.",
    details: ["CRM analysis", "Lead flow assessment", "Conversion tracking", "Process documentation"],
    duration: "Week 1-2",
    color: "from-blue-500/20 to-electric-blue/20"
  },
  {
    icon: Zap,
    title: "Design Custom Automation",
    description: "Create AI-powered workflows tailored to your business model and customer journey.",
    details: ["Lead scoring models", "Email sequences", "Sales pipeline automation", "Customer segmentation"],
    duration: "Week 3-4",
    color: "from-electric-blue/20 to-cyan-500/20"
  },
  {
    icon: Target,
    title: "Implement & Integrate",
    description: "Deploy systems across your tech stack with seamless integrations and minimal disruption.",
    details: ["CRM setup", "Marketing automation", "Analytics implementation", "Team training"],
    duration: "Week 5-8",
    color: "from-cyan-500/20 to-green-500/20"
  },
  {
    icon: BarChart3,
    title: "Optimize & Scale",
    description: "Continuously improve performance with data-driven insights and expand as you grow.",
    details: ["Performance monitoring", "A/B testing", "ROI optimization", "Scale planning"],
    duration: "Ongoing",
    color: "from-green-500/20 to-electric-blue/20"
  }
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-star-white mb-6">
            How We Transform Your <span className="text-electric-blue">GTM Operations</span>
          </h2>
          <p className="text-lg text-star-white/80">
            Our proven 4-step methodology has helped 300+ startups build scalable, AI-powered growth systems that deliver measurable results in 90 days or less.
          </p>
        </AnimatedSection>

        <div ref={ref} className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue/30 via-electric-blue/60 to-electric-blue/30 transform -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <Card className="bg-dark-navy/50 border-star-white/10 hover:border-electric-blue/30 transition-all duration-500 h-full group hover:scale-105 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardHeader className="text-center pb-4 relative z-10">
                    {/* Step Number with Animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                      className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-electric-blue/25"
                    >
                      <span className="text-dark-navy font-bold text-lg">{index + 1}</span>
                    </motion.div>
                    
                    {/* Icon with Hover Animation */}
                    <motion.div
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-blue/20"
                    >
                      <step.icon className="w-8 h-8 text-electric-blue" />
                    </motion.div>
                    
                    <CardTitle className="text-xl text-star-white mb-2 group-hover:text-electric-blue transition-colors">
                      {step.title}
                    </CardTitle>
                    
                    <Badge variant="outline" className="text-electric-blue/80 border-electric-blue/30 text-xs">
                      {step.duration}
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="text-center relative z-10">
                    <CardDescription className="text-star-white/70 mb-6 leading-relaxed">
                      {step.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-4">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div 
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.8 }}
                          className="flex items-center text-sm text-star-white/60"
                        >
                          <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  
                  {/* Arrow for connection (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + 1 }}
                      >
                        <ArrowRight className="w-8 h-8 text-electric-blue/60" />
                      </motion.div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5 }}
            className="bg-gradient-to-r from-electric-blue/10 to-electric-blue/5 rounded-2xl p-8 border border-electric-blue/20"
          >
            <h3 className="text-2xl font-bold text-star-white mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-star-white/80 mb-6 max-w-2xl mx-auto">
              Get a free GTM audit and see how we can optimize your growth operations for maximum impact.
            </p>
            <CTAButton
              intent="primary"
              icon="arrow"
              href="/contact"
              glow
            >
              Get Your Free Audit
            </CTAButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
