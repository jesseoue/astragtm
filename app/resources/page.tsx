"use client"

import React, { useState } from 'react'
import { Mail, Search, Download, Star, Calendar, Users, BookOpen, Mic, Video, Award, Filter, FileText, Tool, Headphones, FileImage } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AnimatedSection } from '@/components/animated-section'

const featuredContent = [
  {
    id: 1,
    title: "The Complete SaaS GTM Playbook 2025",
    description: "150-page comprehensive guide covering lead scoring, revenue attribution, sales automation, and growth strategies used by unicorn SaaS companies",
    type: "guide",
    rating: 4.9,
    downloads: "12.5K",
    image: "/placeholder.jpg",
    featured: true,
    details: {
      pages: 150,
      chapters: [
        "ICP Definition & Market Segmentation",
        "Lead Scoring & Qualification Systems", 
        "Sales Funnel Optimization",
        "Revenue Attribution Models",
        "AI-Powered Sales Automation",
        "Customer Success & Expansion",
        "Metrics & KPI Frameworks",
        "Case Studies from Stripe, Slack, HubSpot"
      ],
      includes: ["Templates", "Checklists", "Calculators", "Scripts"]
    }
  },
  {
    id: 2,
    title: "AI Lead Scoring Calculator & Framework",
    description: "Interactive Excel/Google Sheets tool with 15+ scoring criteria, automated lead grading, and integration templates for HubSpot & Salesforce",
    type: "tool",
    rating: 4.8,
    downloads: "8.2K",
    image: "/placeholder.jpg",
    featured: true,
    details: {
      includes: [
        "Excel & Google Sheets versions",
        "15+ scoring criteria (demographic, firmographic, behavioral)",
        "Automated lead grading (A, B, C, D)",
        "HubSpot integration template",
        "Salesforce integration guide",
        "ROI tracking dashboard",
        "Setup video tutorials"
      ],
      useCase: "Perfect for sales teams handling 100+ leads per month"
    }
  },
  {
    id: 3,
    title: "SaaS Revenue Operations Toolkit",
    description: "Complete RevOps framework with forecasting models, pipeline analysis, commission calculators, and growth tracking dashboards",
    type: "tool",
    rating: 4.9,
    downloads: "6.8K",
    image: "/placeholder.jpg",
    featured: true,
    details: {
      includes: [
        "Revenue forecasting models (ARR, MRR, Churn)",
        "Sales pipeline analysis templates",
        "Commission & compensation calculators",
        "Customer lifetime value (CLV) models",
        "Cohort analysis dashboards",
        "Unit economics calculators",
        "Growth metrics tracking sheets"
      ],
      formats: ["Excel", "Google Sheets", "Notion templates"]
    }
  },
  {
    id: 4,
    title: "B2B Cold Email Sequences That Convert",
    description: "50+ proven email templates, follow-up sequences, and personalization frameworks that generated $10M+ in pipeline for SaaS companies",
    type: "guide",
    rating: 4.7,
    downloads: "9.3K",
    image: "/placeholder.jpg",
    featured: true,
    details: {
      includes: [
        "50+ email templates by industry & role",
        "7-touch follow-up sequences",
        "Personalization frameworks",
        "Subject line formulas (30+ examples)",
        "A/B testing guidelines",
        "Deliverability best practices",
        "CRM automation setups"
      ],
      industries: ["SaaS", "FinTech", "HealthTech", "E-commerce"]
    }
  }
]

const guides = [
  {
    id: 5,
    title: "SaaS Metrics Mastery: KPIs That Matter",
    description: "Complete guide to tracking and optimizing the 25 most important SaaS metrics, from CAC to NPS, with benchmarks and improvement strategies",
    type: "guide",
    rating: 4.8,
    downloads: "7.1K",
    image: "/placeholder.jpg",
    details: {
      covers: [
        "Customer Acquisition Cost (CAC) optimization",
        "Lifetime Value (LTV) calculation methods",
        "Monthly Recurring Revenue (MRR) tracking",
        "Churn analysis & reduction strategies",
        "Net Promoter Score (NPS) improvement",
        "Product-Market Fit measurement"
      ]
    }
  },
  {
    id: 6,
    title: "CRM Setup & Automation Masterclass",
    description: "Step-by-step guide for setting up HubSpot, Salesforce, and Pipedrive with automated workflows, lead routing, and reporting dashboards",
    type: "guide",
    rating: 4.6,
    downloads: "5.4K",
    image: "/placeholder.jpg",
    details: {
      platforms: ["HubSpot", "Salesforce", "Pipedrive", "Monday.com"],
      includes: [
        "Initial setup checklists",
        "Lead routing automation",
        "Email sequence automation",
        "Reporting dashboard templates",
        "Integration guides (Slack, Zoom, etc.)"
      ]
    }
  },
  {
    id: 7,
    title: "Product-Led Growth Implementation Guide",
    description: "How to build viral loops, in-app engagement, and self-serve onboarding that drives 40%+ organic growth, based on Slack and Zoom strategies",
    type: "guide", 
    rating: 4.9,
    downloads: "4.2K",
    image: "/placeholder.jpg",
    details: {
      strategies: [
        "Viral loop design & implementation",
        "In-app engagement optimization",
        "Self-serve onboarding flows",
        "Feature adoption tracking",
        "User-generated content strategies"
      ],
      caseStudies: ["Slack", "Zoom", "Notion", "Figma"]
    }
  }
]

const tools = [
  {
    id: 8,
    title: "SaaS Financial Model Template",
    description: "5-year financial projection model with unit economics, scenario planning, and investor-ready outputs used by 500+ funded startups",
    type: "tool",
    rating: 4.9,
    downloads: "11.2K",
    image: "/placeholder.jpg",
    details: {
      includes: [
        "5-year revenue projections",
        "Unit economics calculations",
        "Scenario planning (best/worst/realistic)",
        "Cash flow modeling",
        "Burn rate & runway calculations",
        "Investor presentation templates"
      ],
      formats: ["Excel", "Google Sheets"]
    }
  },
  {
    id: 9,
    title: "Customer Journey Mapping Toolkit",
    description: "Visual templates and frameworks to map customer touchpoints, identify optimization opportunities, and improve conversion rates by 25%+",
    type: "tool",
    rating: 4.7,
    downloads: "6.8K",
    image: "/placeholder.jpg",
    details: {
      includes: [
        "Journey mapping templates (Miro, Figma)",
        "Touchpoint analysis frameworks",
        "Conversion optimization checklists",
        "Customer interview scripts",
        "Pain point identification tools"
      ]
    }
  },
  {
    id: 10,
    title: "Competitive Analysis Framework",
    description: "Complete toolkit for analyzing competitors' pricing, features, messaging, and go-to-market strategies with automated tracking sheets",
    type: "tool",
    rating: 4.6,
    downloads: "5.1K",
    image: "/placeholder.jpg",
    details: {
      includes: [
        "Competitor tracking spreadsheets",
        "Feature comparison matrices",
        "Pricing analysis templates",
        "Messaging audit frameworks",
        "Market positioning maps"
      ]
    }
  }
]

const podcastEpisodes = [
  {
    id: 11,
    title: "Scaling to $100M ARR: Lessons from Stripe's VP of Growth",
    description: "45-min deep dive with Stripe's growth team on building scalable acquisition channels, optimizing conversion funnels, and international expansion",
    type: "podcast",
    rating: 4.8,
    downloads: "3.2K",
    image: "/placeholder.jpg",
    details: {
      guest: "Sarah Chen, VP of Growth at Stripe",
      topics: [
        "Building scalable acquisition channels",
        "International market expansion",
        "Conversion funnel optimization",
        "Team scaling strategies"
      ],
      duration: "45 minutes"
    }
  },
  {
    id: 12,
    title: "AI-Powered Sales: How HubSpot Increased Efficiency 300%",
    description: "Interview with HubSpot's Sales Operations Director on implementing AI tools, automating lead qualification, and scaling sales teams",
    type: "podcast",
    rating: 4.9,
    downloads: "2.8K",
    image: "/placeholder.jpg",
    details: {
      guest: "Marcus Rodriguez, Director of Sales Operations at HubSpot",
      topics: [
        "AI tool implementation",
        "Lead qualification automation",
        "Sales team scaling",
        "Technology stack optimization"
      ],
      duration: "38 minutes"
    }
  }
]

const webinars = [
  {
    id: 13,
    title: "Live Workshop: Building Your First GTM Automation",
    description: "60-minute hands-on workshop covering lead scoring setup, email automation, and CRM integration with live Q&A and templates",
    type: "webinar",
    rating: 4.9,
    downloads: "7.1K",
    image: "/placeholder.jpg",
    details: {
      format: "Live workshop + recording",
      duration: "60 minutes",
      includes: [
        "Live automation setup",
        "Template downloads",
        "Q&A session",
        "Follow-up resources"
      ],
      nextSession: "Every Thursday at 2PM EST"
    }
  },
  {
    id: 14,
    title: "SaaS Pricing Strategy Masterclass",
    description: "90-minute deep dive into value-based pricing, packaging strategies, and pricing psychology with case studies from Slack, Zoom, and Notion",
    type: "webinar", 
    rating: 4.8,
    downloads: "5.9K",
    image: "/placeholder.jpg",
    details: {
      duration: "90 minutes",
      covers: [
        "Value-based pricing models",
        "Feature packaging strategies", 
        "Pricing psychology principles",
        "A/B testing pricing changes"
      ],
      caseStudies: ["Slack", "Zoom", "Notion", "Figma"]
    }
  }
]

const caseStudies = [
  {
    id: 15,
    title: "How Stripe Increased Enterprise Conversion by 89%",
    description: "Deep dive into Stripe's enterprise GTM transformation: AI lead scoring, automated nurturing, and account-based selling that generated $2.4B in additional revenue",
    type: "case-study",
    rating: 5.0,
    downloads: "11.2K",
    image: "/placeholder.jpg",
    details: {
      company: "Stripe",
      industry: "FinTech",
      challenge: "Low enterprise conversion rates and long sales cycles",
      solution: [
        "AI-powered lead scoring implementation",
        "Automated nurturing sequences",
        "Account-based selling framework",
        "Sales enablement optimization"
      ],
      results: [
        "89% increase in enterprise conversion",
        "$2.4B additional annual revenue",
        "45% reduction in sales cycle length",
        "3x improvement in lead quality"
      ]
    }
  },
  {
    id: 16,
    title: "Slack's Viral Growth Strategy: 2000% User Acquisition",
    description: "How Slack built viral loops, referral programs, and community-driven growth to achieve 2000% user growth and $26B valuation",
    type: "case-study",
    rating: 4.9,
    downloads: "8.7K",
    image: "/placeholder.jpg",
    details: {
      company: "Slack",
      industry: "SaaS/Productivity",
      challenge: "Competing against established players like Microsoft Teams",
      solution: [
        "Viral sharing mechanisms",
        "Community-driven growth",
        "Product-led acquisition",
        "Strategic partnership program"
      ],
      results: [
        "2000% user growth in 18 months",
        "$26B acquisition by Salesforce",
        "89% of signups from organic referrals",
        "Industry-leading retention rates"
      ]
    }
  },
  {
    id: 17,
    title: "HubSpot's Inbound Marketing Revolution",
    description: "The complete story of how HubSpot created the inbound marketing category and scaled to $1.3B revenue through content-driven growth",
    type: "case-study",
    rating: 4.8,
    downloads: "6.9K",
    image: "/placeholder.jpg",
    details: {
      company: "HubSpot",
      industry: "MarTech/CRM",
      challenge: "Creating a new product category and educating the market",
      solution: [
        "Content marketing strategy",
        "Educational resource creation",
        "Freemium product model",
        "Partner ecosystem development"
      ],
      results: [
        "$1.3B annual revenue",
        "100,000+ customers globally",
        "Created 'inbound marketing' category",
        "Industry-leading growth rates"
      ]
    }
  }
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [email, setEmail] = useState('')

  const allContent = [...featuredContent, ...guides, ...tools, ...podcastEpisodes, ...webinars, ...caseStudies]
  
  const filteredContent = allContent.filter(item => {
    const matchesCategory = selectedType === "all" || item.type === selectedType
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories = [
    { id: "all", label: "All Resources", count: allContent.length },
    { id: "guide", label: "Guides", count: guides.length },
    { id: "tool", label: "Tools", count: tools.length },
    { id: "podcast", label: "Podcasts", count: podcastEpisodes.length },
    { id: "webinar", label: "Webinars", count: webinars.length },
    { id: "case-study", label: "Case Studies", count: caseStudies.length }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return <BookOpen className="h-4 w-4" />
      case 'tool': return <Download className="h-4 w-4" />
      case 'podcast': return <Mic className="h-4 w-4" />
      case 'webinar': return <Video className="h-4 w-4" />
      case 'case-study': return <Award className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: '',
          company: '',
          phone: '',
          message: 'Newsletter signup from Resources page',
          source: 'newsletter'
        })
      })

      if (response.ok) {
        setEmail('')
        alert('Thanks for subscribing! Check your email for confirmation.')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-deep-purple to-dark-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 mb-6 px-4 py-2 text-sm font-medium">
              2025's #1 SaaS Growth Resource Hub
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-star-white mb-6 leading-tight">
              Growth Resources That
              <span className="block bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
                Actually Work
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-star-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Free tools, guides, and insights used by 500+ SaaS companies to scale from $10K to $100M+ ARR.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center text-star-white/70">
                <Download className="h-5 w-5 mr-2 text-electric-blue" />
                <span className="font-medium">🚀 Downloaded 50,000+ times</span>
              </div>
              <div className="flex items-center text-star-white/70">
                <Star className="h-5 w-5 mr-2 text-yellow-400 fill-current" />
                <span className="font-medium">⭐ 4.9/5 average rating</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 rounded-2xl p-8 border border-electric-blue/20 max-w-2xl mx-auto">
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="jesseouel@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-dark-navy/50 border-electric-blue/30 text-star-white placeholder:text-star-white/50 h-12 text-lg"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-electric-blue hover:bg-electric-blue/90 text-dark-navy font-bold h-12 px-8 whitespace-nowrap"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get Free Weekly Tips
                </Button>
              </form>
              <p className="text-sm text-star-white/60 mt-4 text-center">
                Join 12,000+ SaaS founders getting weekly growth insights • No spam, unsubscribe anytime
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Search and Filter */}
        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-star-white/50" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedType === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(category.id)}
                className="flex items-center gap-2"
              >
                {category.label}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-12">
              <h2 className="text-3xl font-bold text-star-white mb-8 text-center">Featured Resources</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredContent.map((item) => (
                  <Card key={item.id} className="bg-gradient-to-br from-dark-navy to-deep-purple border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105 group">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                          {getTypeIcon(item.type)}
                          <span className="ml-1 capitalize">{item.type}</span>
                        </Badge>
                        <div className="flex items-center text-yellow-400">
                          <Star className="h-4 w-4 fill-current mr-1" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-star-white group-hover:text-electric-blue transition-colors mb-3">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-star-white/70 text-sm mb-4">
                        {item.description}
                      </CardDescription>
                      
                      {/* Enhanced Details for Featured Items */}
                      {item.details && (
                        <div className="space-y-3 text-sm">
                          {item.details.pages && (
                            <div className="flex items-center text-star-white/60">
                              <BookOpen className="h-4 w-4 mr-2 text-electric-blue" />
                              {item.details.pages} pages of actionable content
                            </div>
                          )}
                          
                          {item.details.includes && (
                            <div>
                              <p className="text-star-white/80 font-medium mb-2">What's Included:</p>
                              <div className="grid grid-cols-2 gap-1">
                                {item.details.includes.slice(0, 4).map((include, idx) => (
                                  <div key={idx} className="flex items-center text-xs text-star-white/60">
                                    <span className="w-1 h-1 bg-electric-blue rounded-full mr-2 flex-shrink-0"></span>
                                    {include}
                                  </div>
                                ))}
                              </div>
                              {item.details.includes.length > 4 && (
                                <p className="text-xs text-electric-blue mt-1">
                                  +{item.details.includes.length - 4} more items
                                </p>
                              )}
                            </div>
                          )}
                          
                          {item.details.useCase && (
                            <div className="bg-electric-blue/10 p-3 rounded-lg border border-electric-blue/20">
                              <p className="text-xs text-electric-blue font-medium">Perfect For:</p>
                              <p className="text-xs text-star-white/80">{item.details.useCase}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-star-white/60 text-sm">
                          <Download className="h-4 w-4 mr-1" />
                          {item.downloads} downloads
                        </div>
                        <Button size="sm" className="bg-electric-blue hover:bg-electric-blue/90 text-dark-navy font-bold">
                          <Download className="h-4 w-4 mr-2" />
                          Download Free
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* All Resources Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContent.map((item) => (
                  <Card key={item.id} className="bg-gradient-to-br from-dark-navy to-deep-purple border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300 hover:scale-105 group">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                          {getTypeIcon(item.type)}
                          <span className="ml-1 capitalize">{item.type}</span>
                        </Badge>
                        <div className="flex items-center text-yellow-400">
                          <Star className="h-4 w-4 fill-current mr-1" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-star-white group-hover:text-electric-blue transition-colors mb-2">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-star-white/70 text-sm mb-3">
                        {item.description}
                      </CardDescription>
                      
                      {/* Show key details for each resource type */}
                      {item.details && (
                        <div className="space-y-2 text-xs">
                          {/* For Guides */}
                          {item.details.covers && (
                            <div>
                              <p className="text-star-white/80 font-medium mb-1">Key Topics:</p>
                              <div className="space-y-1">
                                {item.details.covers.slice(0, 3).map((topic, idx) => (
                                  <div key={idx} className="flex items-center text-star-white/60">
                                    <span className="w-1 h-1 bg-electric-blue rounded-full mr-2 flex-shrink-0"></span>
                                    {topic}
                                  </div>
                                ))}
                                {item.details.covers.length > 3 && (
                                  <p className="text-electric-blue">+{item.details.covers.length - 3} more topics</p>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* For Tools */}
                          {item.details.formats && (
                            <div className="flex items-center text-star-white/60">
                              <Tool className="h-3 w-3 mr-2 text-electric-blue" />
                              Available in: {item.details.formats.join(', ')}
                            </div>
                          )}
                          
                          {/* For Podcasts */}
                          {item.details.duration && (
                            <div className="flex items-center text-star-white/60">
                              <Headphones className="h-3 w-3 mr-2 text-electric-blue" />
                              Duration: {item.details.duration}
                            </div>
                          )}
                          
                          {item.details.guest && (
                            <div className="bg-electric-blue/10 p-2 rounded border border-electric-blue/20">
                              <p className="text-electric-blue font-medium">Featured Guest:</p>
                              <p className="text-star-white/80">{item.details.guest}</p>
                            </div>
                          )}
                          
                          {/* For Webinars */}
                          {item.details.nextSession && (
                            <div className="bg-green-500/10 p-2 rounded border border-green-500/20">
                              <p className="text-green-400 font-medium">Next Session:</p>
                              <p className="text-star-white/80">{item.details.nextSession}</p>
                            </div>
                          )}
                          
                          {/* For Case Studies */}
                          {item.details.company && (
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-star-white/80 font-medium">Company:</span>
                                <span className="text-electric-blue font-bold">{item.details.company}</span>
                              </div>
                              {item.details.results && (
                                <div>
                                  <p className="text-star-white/80 font-medium mb-1">Key Results:</p>
                                  <div className="space-y-1">
                                    {item.details.results.slice(0, 2).map((result, idx) => (
                                      <div key={idx} className="flex items-center text-star-white/60">
                                        <span className="w-1 h-1 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                                        {result}
                                      </div>
                                    ))}
                                    {item.details.results.length > 2 && (
                                      <p className="text-electric-blue">+{item.details.results.length - 2} more results</p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-star-white/60 text-sm">
                          <Download className="h-4 w-4 mr-1" />
                          {item.downloads} downloads
                        </div>
                        <Button size="sm" className="bg-electric-blue hover:bg-electric-blue/90 text-dark-navy font-bold">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredContent.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-star-white/60">No resources found matching your criteria.</p>
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  )
} 