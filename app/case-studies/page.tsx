"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CTAButton } from "@/components/ui/cta-button"
import { MetricStat } from "@/components/ui/metric-stat"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, ExternalLink } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const caseStudies = [
  {
    id: "techflow-growth",
    company: "TechFlow",
    industry: "B2B SaaS",
    size: "Series A",
    challenge: "Low conversion rates and long sales cycles were preventing scale",
    solution: "Implemented AI-powered lead scoring and automated nurture sequences",
    results: {
      pipeline: 340,
      conversion: 65,
      cycle: 42,
      roi: 240
    },
    testimonial: {
      quote: "Astra GTM didn't just improve our metrics – they transformed how we think about growth. Our entire revenue engine is now predictable and scalable.",
      author: "Sarah Chen",
      role: "VP of Growth",
      avatar: "/placeholder-user.jpg"
    },
    timeline: "90 days",
    tags: ["Lead Scoring", "Marketing Automation", "Sales Enablement"],
    featured: true
  },
  {
    id: "datasync-scale",
    company: "DataSync",
    industry: "Data Analytics",
    size: "Seed Stage",
    challenge: "Manual processes couldn't keep up with rapid customer acquisition",
    solution: "Built comprehensive GTM automation with predictive analytics",
    results: {
      pipeline: 280,
      conversion: 45,
      cycle: 28,
      roi: 320
    },
    testimonial: {
      quote: "The ROI was immediate. We doubled our conversion rates and cut our sales cycle by almost a month. Game-changing.",
      author: "Marcus Rodriguez",
      role: "Founder & CEO",
      avatar: "/placeholder-user.jpg"
    },
    timeline: "120 days",
    tags: ["Process Automation", "Analytics", "CRM Integration"],
    featured: false
  },
  {
    id: "innovatech-enterprise",
    company: "InnovaTech",
    industry: "Enterprise Software",
    size: "Series B",
    challenge: "Complex sales process with multiple stakeholders causing bottlenecks",
    solution: "Custom multi-touch attribution and stakeholder engagement automation",
    results: {
      pipeline: 450,
      conversion: 80,
      cycle: 35,
      roi: 380
    },
    testimonial: {
      quote: "Finally, we have visibility into our entire revenue pipeline. The attribution system alone has paid for itself 10x over.",
      author: "Jennifer Park",
      role: "Head of Revenue Operations",
      avatar: "/placeholder-user.jpg"
    },
    timeline: "180 days",
    tags: ["Enterprise Sales", "Attribution", "Revenue Ops"],
    featured: false
  }
]

const industries = [
  { name: "B2B SaaS", count: 180, percentage: 60 },
  { name: "FinTech", count: 45, percentage: 15 },
  { name: "HealthTech", count: 30, percentage: 10 },
  { name: "Enterprise", count: 45, percentage: 15 }
]

export default function CaseStudiesPage() {
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
                  Success Stories
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                  Real Results from <span className="text-electric-blue">Real</span> Companies
                </h1>
                <p className="text-xl text-star-white/80 mb-8 max-w-2xl mx-auto">
                  See how startups like yours have transformed their GTM operations and 
                  accelerated growth with our AI-powered systems.
                </p>
              </motion.div>
              
              {/* Overall Results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <MetricStat value={300} suffix="+" label="Startups Transformed" delay={0.2} />
                <MetricStat value={240} suffix="%" label="Average ROI Increase" delay={0.4} />
                <MetricStat value={120} suffix="M" prefix="$" label="Pipeline Generated" delay={0.6} />
                <MetricStat value={60} suffix="%" label="Faster Sales Cycles" delay={0.8} />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative ${study.featured ? 'mb-24' : ''}`}
                >
                  {study.featured && (
                    <div className="absolute -top-4 left-8 z-10">
                      <Badge className="bg-electric-blue text-dark-navy font-semibold px-4 py-2">
                        Featured Case Study
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`overflow-hidden ${
                    study.featured 
                      ? 'bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border-electric-blue/30 shadow-2xl shadow-electric-blue/10' 
                      : 'bg-dark-navy/50 border-star-white/10'
                  }`}>
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Left Side - Story */}
                        <div className="p-8 lg:p-12">
                          <div className="flex items-center gap-4 mb-6">
                            <div>
                              <h2 className="text-3xl font-bold text-star-white mb-2">
                                {study.company}
                              </h2>
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-electric-blue border-electric-blue/30">
                                  {study.industry}
                                </Badge>
                                <Badge variant="outline" className="text-star-white/70 border-star-white/20">
                                  {study.size}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h3 className="text-xl font-semibold text-star-white mb-3">
                                The Challenge
                              </h3>
                              <p className="text-star-white/80">
                                {study.challenge}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold text-star-white mb-3">
                                Our Solution
                              </h3>
                              <p className="text-star-white/80">
                                {study.solution}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {study.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="bg-electric-blue/10 text-electric-blue">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="mt-8 p-6 bg-electric-blue/5 rounded-lg border border-electric-blue/20">
                            <p className="text-star-white italic mb-4">
                              "{study.testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-electric-blue/20 rounded-full flex items-center justify-center">
                                <span className="text-electric-blue font-bold">
                                  {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <div className="font-semibold text-star-white">
                                  {study.testimonial.author}
                                </div>
                                <div className="text-star-white/60 text-sm">
                                  {study.testimonial.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Results */}
                        <div className="bg-electric-blue/5 p-8 lg:p-12 border-l border-electric-blue/20">
                          <h3 className="text-2xl font-bold text-star-white mb-8">
                            Results Delivered
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="text-center">
                              <div className="text-4xl font-bold text-electric-blue mb-2">
                                +{study.results.pipeline}%
                              </div>
                              <div className="text-star-white/80 text-sm">
                                Pipeline Growth
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-4xl font-bold text-electric-blue mb-2">
                                +{study.results.conversion}%
                              </div>
                              <div className="text-star-white/80 text-sm">
                                Conversion Rate
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-4xl font-bold text-electric-blue mb-2">
                                -{study.results.cycle}%
                              </div>
                              <div className="text-star-white/80 text-sm">
                                Sales Cycle Time
                              </div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-4xl font-bold text-electric-blue mb-2">
                                {study.results.roi}%
                              </div>
                              <div className="text-star-white/80 text-sm">
                                ROI Achieved
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center">
                              <span className="text-star-white/80">Implementation Timeline</span>
                              <span className="text-electric-blue font-semibold">{study.timeline}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-star-white/80">Investment Recovery</span>
                              <span className="text-electric-blue font-semibold">&lt; 90 days</span>
                            </div>
                          </div>

                          <CTAButton
                            intent="primary"
                            icon="arrow"
                            href={`/case-studies/${study.id}`}
                            className="w-full"
                          >
                            View Full Case Study
                          </CTAButton>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-electric-blue/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-star-white/70 max-w-2xl mx-auto">
                Our GTM systems are proven across diverse B2B industries and company stages.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-dark-navy/50 border-star-white/10 text-center hover:border-electric-blue/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-electric-blue mb-2">
                        {industry.count}+
                      </div>
                      <div className="text-lg font-semibold text-star-white mb-2">
                        {industry.name}
                      </div>
                      <div className="text-star-white/60 text-sm">
                        {industry.percentage}% of our clients
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-star-white/70 max-w-2xl mx-auto">
                Every success story follows the same systematic approach to GTM transformation.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Analysis",
                  description: "Deep dive into your current GTM systems and identify optimization opportunities"
                },
                {
                  step: "02", 
                  title: "Strategy Design",
                  description: "Create a custom GTM strategy tailored to your market and growth stage"
                },
                {
                  step: "03",
                  title: "System Implementation", 
                  description: "Build and deploy AI-powered automation systems with seamless integrations"
                },
                {
                  step: "04",
                  title: "Optimization & Scale",
                  description: "Continuously optimize performance and scale systems as you grow"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-electric-blue">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-star-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-star-white/70">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-electric-blue text-dark-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-navy/80">
                Join the 300+ startups who've transformed their GTM operations with Astra GTM. 
                Your success story could be next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton
                  intent="secondary"
                  icon="phone"
                  href="/contact"
                  className="text-star-white bg-dark-navy hover:bg-dark-navy/90"
                  glow
                >
                  Start Your Transformation
                </CTAButton>
                <CTAButton
                  intent="outline"
                  icon="chevron"
                  href="/pricing"
                  className="border-dark-navy text-dark-navy hover:bg-dark-navy/10"
                >
                  View Pricing Options
                </CTAButton>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 