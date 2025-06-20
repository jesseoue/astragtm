"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CTAButton } from "@/components/ui/cta-button"
import { MetricStat } from "@/components/ui/metric-stat"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Award, Users, Target, Zap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former VP of Growth at 3 successful B2B SaaS exits. Built GTM systems that generated $50M+ in revenue.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Martinez",
    role: "Head of GTM Strategy",
    bio: "Ex-McKinsey consultant specializing in revenue operations. Led GTM transformations for 200+ startups.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Kim",
    role: "Chief Technology Officer",
    bio: "Former engineering leader at Salesforce. Expert in AI-powered automation and CRM integrations.",
    image: "/placeholder-user.jpg",
    linkedin: "#",
    twitter: "#"
  }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy, system, and automation we build is designed to deliver measurable ROI within 90 days."
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We don't just deliver and disappear. We become an extension of your team, invested in your long-term success."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We leverage the latest AI and automation technologies to give our clients unfair competitive advantages."
  }
]

const milestones = [
  { year: "2021", event: "Founded Astra GTM", description: "Started with a mission to democratize enterprise-level GTM systems for startups" },
  { year: "2022", event: "First 50 Clients", description: "Helped 50 startups implement AI-powered GTM systems, generating $15M in pipeline" },
  { year: "2023", event: "GTM Framework Launch", description: "Released our proprietary GTM optimization framework, adopted by 500+ companies" },
  { year: "2025", event: "Industry Leadership", description: "Leading the next generation of AI-powered GTM automation, setting new standards for SaaS growth" }
]

export default function AboutPage() {
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
                  Our Story
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                  Building the <span className="text-electric-blue">Future</span> of GTM
                </h1>
                <p className="text-xl text-star-white/80 mb-8 max-w-2xl mx-auto">
                  We believe every startup deserves enterprise-level GTM systems. Our mission is to democratize 
                  AI-powered growth operations for the next generation of B2B companies.
                </p>
              </motion.div>
              
              {/* Company Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <MetricStat value={500} suffix="+" label="Startups Helped" delay={0.2} />
                <MetricStat value={120} suffix="M" prefix="$" label="Pipeline Generated" delay={0.4} />
                <MetricStat value={3} suffix=" Years" label="Average ROI Timeline" delay={0.6} />
                <MetricStat value={240} suffix="%" label="Average ROI Increase" delay={0.8} />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-electric-blue/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-star-white/80 mb-8 leading-relaxed">
                Too many promising startups fail not because of bad products, but because of inefficient GTM systems. 
                We've seen brilliant founders struggle with manual processes, fragmented data, and reactive strategies 
                that prevent them from scaling effectively.
              </p>
              <p className="text-xl text-star-white/80 leading-relaxed">
                That's why we built Astra GTM – to give every startup access to the same sophisticated, AI-powered 
                GTM systems that only Fortune 500 companies could afford before.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-star-white/70 max-w-2xl mx-auto">
                These principles guide everything we do, from how we build systems to how we work with clients.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="bg-dark-navy/50 border-star-white/10 h-full text-center hover:border-electric-blue/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-electric-blue/10 rounded-full">
                          <value.icon className="w-8 h-8 text-electric-blue" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-star-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-star-white/70 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-dark-navy/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-star-white/70 max-w-2xl mx-auto">
                A diverse group of growth experts, engineers, and strategists united by one goal: 
                helping startups scale efficiently.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-electric-blue/5 border-electric-blue/20 text-center overflow-hidden hover:scale-105 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-star-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-electric-blue font-semibold mb-4">
                          {member.role}
                        </p>
                        <p className="text-star-white/70 mb-6 leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="flex justify-center space-x-4">
                          <a
                            href={member.linkedin}
                            className="p-2 bg-star-white/10 rounded-full hover:bg-electric-blue/20 transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-star-white" />
                          </a>
                          <a
                            href={member.twitter}
                            className="p-2 bg-star-white/10 rounded-full hover:bg-electric-blue/20 transition-colors"
                          >
                            <Twitter className="w-5 h-5 text-star-white" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-star-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-star-white/70 max-w-2xl mx-auto">
                From a small team with a big vision to the leading GTM automation platform for startups.
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-electric-blue/30" />
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 px-8">
                      <Card className="bg-dark-navy/50 border-star-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <Badge className="bg-electric-blue text-dark-navy font-bold">
                              {milestone.year}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-star-white mb-2">
                            {milestone.event}
                          </h3>
                          <p className="text-star-white/70">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-electric-blue rounded-full border-4 border-dark-navy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-electric-blue text-dark-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-navy/80">
                Let's discuss how we can build a GTM system that accelerates your growth and 
                gives you the competitive edge you need to succeed.
              </p>
              <CTAButton
                intent="secondary"
                icon="arrow"
                href="/contact"
                className="text-star-white bg-dark-navy hover:bg-dark-navy/90"
                glow
              >
                Start Your Growth Journey
              </CTAButton>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 