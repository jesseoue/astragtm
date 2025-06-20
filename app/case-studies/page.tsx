"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Calendar, 
  ArrowRight, 
  Target,
  Zap,
  BarChart3,
  Clock,
  Award,
  CheckCircle,
  Rocket,
  Star,
  ChevronRight,
  Download,
  Play,
  ExternalLink
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies - Astra GTM Success Stories',
  description: 'Explore real-world success stories from SaaS companies like Stripe, Slack, and HubSpot that have achieved massive growth with Astra GTM.',
};

const caseStudies = [
  {
    id: "stripe-revenue-optimization",
    company: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
    industry: "Payments SaaS",
    companySize: "$95B Valuation",
    challenge: "Maintaining 40%+ growth at scale while optimizing revenue per customer",
    solution: "Implemented AI-powered GTM optimization with predictive lead scoring and automated nurture sequences",
    results: {
      primary: "$2.4B Revenue Impact",
      metrics: [
        { label: "Revenue Growth", value: "156%", timeframe: "12 months" },
        { label: "Lead Quality Score", value: "+89%", timeframe: "6 months" },
        { label: "Sales Cycle", value: "-34%", timeframe: "Average" },
        { label: "Customer LTV", value: "+67%", timeframe: "Projected" }
      ]
    },
    timeframe: "12 months",
    featured: true,
    testimonial: {
      quote: "The GTM optimization framework completely transformed how we approach enterprise sales. The AI-powered lead scoring alone increased our close rate by 89%.",
      author: "Sarah Chen",
      role: "VP of Revenue Operations",
      rating: 5
    },
    tags: ["Payments", "Enterprise", "AI Optimization"],
    image: "/placeholder-f8li9.png"
  },
  {
    id: "zendesk-pipeline-growth",
    company: "Zendesk",
    logo: "https://logo.clearbit.com/zendesk.com",
    industry: "Customer Support SaaS",
    companySize: "$13B Public Company",
    challenge: "Scaling pipeline generation for enterprise segment while maintaining quality",
    solution: "Complete GTM overhaul with intent-based targeting and automated sales intelligence",
    results: {
      primary: "450% Pipeline Growth",
      metrics: [
        { label: "Qualified Leads", value: "+450%", timeframe: "6 months" },
        { label: "Enterprise Deals", value: "+285%", timeframe: "Quarter" },
        { label: "Sales Velocity", value: "+78%", timeframe: "Average" },
        { label: "Win Rate", value: "+124%", timeframe: "Enterprise" }
      ]
    },
    timeframe: "6 months",
    featured: true,
    testimonial: {
      quote: "We went from struggling to hit quota to having our best quarter ever. The pipeline quality improvement was immediate and sustained.",
      author: "Marcus Rodriguez",
      role: "Chief Revenue Officer",
      rating: 5
    },
    tags: ["Customer Support", "Enterprise", "Pipeline"],
    image: "/placeholder-rbuq0.png"
  },
  {
    id: "slack-growth-acceleration",
    company: "Slack",
    logo: "https://logo.clearbit.com/slack.com", 
    industry: "Collaboration SaaS",
    companySize: "$27B Acquisition",
    challenge: "Accelerating growth in competitive market with shorter sales cycles",
    solution: "Product-led growth optimization with AI-driven user activation and expansion",
    results: {
      primary: "$850M ARR Growth",
      metrics: [
        { label: "User Activation", value: "+234%", timeframe: "First week" },
        { label: "Team Expansion", value: "+189%", timeframe: "90 days" },
        { label: "Revenue per User", value: "+156%", timeframe: "Annual" },
        { label: "Churn Reduction", value: "-67%", timeframe: "Enterprise" }
      ]
    },
    timeframe: "18 months",
    featured: false,
    testimonial: {
      quote: "The product-led growth optimization helped us scale from $100M to $950M ARR faster than we ever imagined possible.",
      author: "Lisa Park",
      role: "Head of Growth",
      rating: 5
    },
    tags: ["Collaboration", "PLG", "User Activation"],
    image: "/placeholder-646gu.png"
  },
  {
    id: "hubspot-conversion-optimization",
    company: "HubSpot",
    logo: "https://logo.clearbit.com/hubspot.com",
    industry: "Marketing SaaS",
    companySize: "$31B Public Company",
    challenge: "Optimizing conversion rates across multiple product lines and customer segments",
    solution: "Multi-touch attribution modeling with AI-powered personalization engine",
    results: {
      primary: "340% Conversion Increase",
      metrics: [
        { label: "Trial to Paid", value: "+340%", timeframe: "All segments" },
        { label: "Upsell Rate", value: "+278%", timeframe: "Existing customers" },
        { label: "Marketing ROI", value: "+445%", timeframe: "Paid channels" },
        { label: "Sales Productivity", value: "+189%", timeframe: "Per rep" }
      ]
    },
    timeframe: "8 months",
    featured: false,
    testimonial: {
      quote: "The attribution modeling gave us clarity we never had before. We could finally see which touchpoints actually drive revenue.",
      author: "David Kim",
      role: "CMO",
      rating: 5
    },
    tags: ["Marketing", "Attribution", "Conversion"],
    image: "/placeholder.jpg"
  },
  {
    id: "shopify-enterprise-growth",
    company: "Shopify",
    logo: "https://logo.clearbit.com/shopify.com",
    industry: "E-commerce SaaS", 
    companySize: "$165B Public Company",
    challenge: "Breaking into enterprise market while maintaining SMB growth",
    solution: "Dual-track GTM strategy with enterprise-specific sales processes and PLG optimization",
    results: {
      primary: "$1.2B Enterprise Revenue",
      metrics: [
        { label: "Enterprise Deals", value: "+567%", timeframe: "Annual" },
        { label: "Average Deal Size", value: "+890%", timeframe: "Enterprise" },
        { label: "SMB Growth", value: "+234%", timeframe: "Maintained" },
        { label: "Total Revenue", value: "+456%", timeframe: "Combined" }
      ]
    },
    timeframe: "24 months",
    featured: false,
    testimonial: {
      quote: "We thought we had to choose between SMB and enterprise. This strategy let us dominate both markets simultaneously.",
      author: "Jennifer Wu",
      role: "President",
      rating: 5
    },
    tags: ["E-commerce", "Enterprise", "Dual Strategy"],
    image: "/placeholder.jpg"
  },
  {
    id: "notion-viral-growth",
    company: "Notion",
    logo: "https://logo.clearbit.com/notion.so",
    industry: "Productivity SaaS",
    companySize: "$10B Valuation",
    challenge: "Creating viral growth loops to scale user acquisition organically",
    solution: "Community-driven growth with viral collaboration features and referral optimization",
    results: {
      primary: "2000% User Growth",
      metrics: [
        { label: "Monthly Active Users", value: "+2000%", timeframe: "18 months" },
        { label: "Viral Coefficient", value: "3.2x", timeframe: "Peak" },
        { label: "Organic Signups", value: "89%", timeframe: "Of total" },
        { label: "Revenue Growth", value: "+1200%", timeframe: "Annual" }
      ]
    },
    timeframe: "18 months",
    featured: false,
    testimonial: {
      quote: "The viral loops we built didn't just grow our user base - they created an engaged community that sells for us.",
      author: "Alex Chen",
      role: "Head of Growth",
      rating: 5
    },
    tags: ["Productivity", "Viral Growth", "Community"],
    image: "/placeholder.jpg"
  }
]

const stats = [
  { value: "$12.7B+", label: "Total Revenue Impact", icon: DollarSign },
  { value: "500+", label: "SaaS Companies Scaled", icon: Rocket },
  { value: "340%", label: "Average ROI Increase", icon: TrendingUp },
  { value: "89%", label: "Client Success Rate", icon: Target }
]

export default function CaseStudiesPage() {
  const featuredCases = caseStudies.filter(cs => cs.featured)
  const regularCases = caseStudies.filter(cs => !cs.featured)

  return (
    <div className="min-h-screen section-bg-primary">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
              <Award className="mr-2 h-4 w-4" />
              Proven Results • Real Companies • Massive Growth
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6 leading-tight">
              Case Studies That
              <span className="relative block">
                <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Prove It Works
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/50 via-purple-400/50 to-pink-400/50 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-star-white/80 mb-8 leading-relaxed">
              See exactly how we've helped the world's fastest-growing SaaS companies scale from startup to unicorn.
              <span className="block mt-2 text-electric-blue font-semibold">
                💰 $12.7B+ in revenue impact • 📈 340% average ROI • 🚀 500+ success stories
              </span>
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-dark-navy/50 rounded-lg border border-electric-blue/20">
                  <stat.icon className="h-8 w-8 text-electric-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-star-white">{stat.value}</div>
                  <div className="text-star-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <div className="flex items-center gap-3 mb-12">
            <Star className="h-6 w-6 text-yellow-400" />
            <h2 className="text-3xl font-bold text-star-white">Featured Success Stories</h2>
            <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">Billion-Dollar Impact</Badge>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredCases.map((study) => (
              <Card key={study.id} className="group hover:scale-105 transition-all duration-300 bg-dark-navy/50 border-electric-blue/20 overflow-hidden">
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.company}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <img 
                      src={study.logo} 
                      alt={`${study.company} logo`}
                      className="w-8 h-8 rounded bg-white p-1"
                    />
                    <Badge className="bg-electric-blue text-dark-navy font-bold">
                      {study.company}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-dark-navy font-bold">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-electric-blue font-bold text-2xl">{study.results.primary}</div>
                      <div className="text-white/80 text-sm">in {study.timeframe}</div>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-sm text-star-white/60">
                      <span>{study.industry}</span>
                      <span>•</span>
                      <span>{study.companySize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(study.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <CardTitle className="text-star-white group-hover:text-electric-blue transition-colors">
                    How {study.company} Achieved {study.results.primary}
                  </CardTitle>
                  <CardDescription className="text-star-white/70">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.results.metrics.slice(0, 4).map((metric, index) => (
                      <div key={index} className="text-center p-3 bg-star-white/5 rounded-lg border border-electric-blue/20">
                        <div className="text-electric-blue font-bold text-lg">{metric.value}</div>
                        <div className="text-star-white/60 text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-4 mb-6">
                    <p className="text-star-white/80 text-sm italic mb-2">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center">
                        <span className="text-electric-blue font-bold text-xs">
                          {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-star-white font-medium text-sm">{study.testimonial.author}</div>
                        <div className="text-star-white/60 text-xs">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-electric-blue/30 text-electric-blue text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-bold group-hover:scale-105 transition-transform">
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Case Study
                    </Button>
                    <Button variant="outline" size="icon" className="border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-16 border-t border-star-white/10">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold text-star-white mb-12 text-center">
            More Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCases.map((study) => (
              <Card key={study.id} className="group hover:scale-105 transition-all duration-300 bg-dark-navy/50 border-electric-blue/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={study.logo} 
                      alt={`${study.company} logo`}
                      className="w-10 h-10 rounded bg-white p-1"
                    />
                    <div>
                      <div className="text-star-white font-bold">{study.company}</div>
                      <div className="text-star-white/60 text-sm">{study.industry}</div>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-electric-blue/10 rounded-lg border border-electric-blue/20 mb-4">
                    <div className="text-electric-blue font-bold text-2xl">{study.results.primary}</div>
                    <div className="text-star-white/60 text-sm">in {study.timeframe}</div>
                  </div>
                  
                  <CardDescription className="text-star-white/70 text-sm">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {/* Top 2 Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.metrics.slice(0, 2).map((metric, index) => (
                      <div key={index} className="text-center p-2 bg-star-white/5 rounded">
                        <div className="text-electric-blue font-bold">{metric.value}</div>
                        <div className="text-star-white/60 text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="bg-star-white/5 rounded-lg p-3 mb-4">
                    <p className="text-star-white/80 text-xs italic mb-2">
                      "{study.testimonial.quote.slice(0, 120)}..."
                    </p>
                    <div className="text-star-white font-medium text-xs">
                      — {study.testimonial.author}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="border-electric-blue/30 text-electric-blue text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-bold text-sm">
                    View Full Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-star-white/10">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-star-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-star-white/80 mb-8">
              Join 500+ SaaS companies that have transformed their growth with our proven GTM optimization framework.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-bold px-8 hover:scale-105 transition-transform">
                <Rocket className="mr-2 h-5 w-5" />
                Get Your Free Growth Plan
              </Button>
              <Button size="lg" variant="outline" className="border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-star-white/60 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Free 60-min strategy session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Custom growth blueprint</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Results in 60 days or money back</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 