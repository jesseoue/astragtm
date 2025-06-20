"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  BookOpen, 
  Mic, 
  Calendar, 
  Mail, 
  Download, 
  Play, 
  Clock, 
  Users,
  TrendingUp,
  Zap,
  Target,
  Rocket,
  Calculator,
  FileText,
  Video,
  Search,
  Filter,
  ChevronRight,
  Star,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const contentCategories = [
  { id: "all", label: "All Resources", icon: BookOpen },
  { id: "guides", label: "Growth Guides", icon: Target },
  { id: "tools", label: "Free Tools", icon: Calculator },
  { id: "podcast", label: "Podcast", icon: Mic },
  { id: "webinars", label: "Webinars", icon: Video },
  { id: "case-studies", label: "Case Studies", icon: TrendingUp },
  { id: "templates", label: "Templates", icon: FileText },
]

const featuredContent = [
  {
    id: "growth-playbook-2025",
    title: "The Complete SaaS Growth Playbook 2025",
    description: "The definitive 127-page guide that helped 500+ SaaS companies scale from $10K to $1M+ MRR",
    type: "guide",
    category: "guides",
    downloadCount: "12,847",
    rating: 4.9,
    publishDate: "2025-01-15",
    readTime: "45 min",
    author: "Alex Chen, Head of Growth",
    image: "/placeholder-f8li9.png",
    tags: ["Growth", "Scaling", "Revenue"],
    downloadUrl: "#",
    featured: true
  },
  {
    id: "roi-calculator-tool",
    title: "SaaS GTM ROI Calculator 2025",
    description: "Calculate your exact revenue potential with our advanced GTM optimization calculator. Used by 1000+ companies.",
    type: "tool",
    category: "tools",
    downloadCount: "8,493",
    rating: 4.8,
    publishDate: "2025-01-10",
    author: "Sarah Johnson, Data Scientist",
    image: "/placeholder-rbuq0.png",
    tags: ["Calculator", "ROI", "Growth"],
    downloadUrl: "#roi-calculator",
    featured: true
  },
  {
    id: "scale-or-fail-podcast",
    title: "Scale or Fail Podcast: Latest Episodes",
    description: "Weekly deep-dives into SaaS growth with founders who've scaled from 0 to $100M+. 50K+ weekly listeners.",
    type: "podcast",
    category: "podcast",
    episodeCount: "127",
    rating: 4.9,
    publishDate: "2025-01-12",
    author: "Marcus Rivera, CEO",
    image: "/placeholder-646gu.png",
    tags: ["Podcast", "Founders", "Scaling"],
    downloadUrl: "#",
    featured: true
  }
]

const guides = [
  {
    id: "lead-scoring-ai-2025",
    title: "AI-Powered Lead Scoring That Actually Works",
    description: "Transform your lead qualification with our proven AI framework. Increase conversion rates by 340%.",
    type: "guide",
    category: "guides",
    downloadCount: "6,234",
    rating: 4.8,
    publishDate: "2025-01-08",
    readTime: "25 min",
    author: "Dr. Emily Zhang, AI Strategist",
    tags: ["AI", "Lead Scoring", "Conversion"],
    downloadUrl: "#"
  },
  {
    id: "onboarding-optimization-2025",
    title: "The 7-Day User Onboarding Optimization Framework",
    description: "Reduce churn by 67% and increase activation by 89% with our battle-tested onboarding system.",
    type: "guide",
    category: "guides",
    downloadCount: "9,847",
    rating: 4.9,
    publishDate: "2025-01-05",
    readTime: "35 min",
    author: "Jake Thompson, UX Director",
    tags: ["Onboarding", "Retention", "UX"],
    downloadUrl: "#"
  },
  {
    id: "pricing-psychology-2025",
    title: "SaaS Pricing Psychology: The $10M Framework",
    description: "The pricing strategies used by unicorn SaaS companies to maximize revenue per customer.",
    type: "guide",
    category: "guides",
    downloadCount: "4,567",
    rating: 4.7,
    publishDate: "2025-01-03",
    readTime: "30 min",
    author: "Lisa Park, Pricing Strategist",
    tags: ["Pricing", "Psychology", "Revenue"],
    downloadUrl: "#"
  }
]

const tools = [
  {
    id: "churn-predictor",
    title: "AI Churn Prediction Calculator",
    description: "Identify at-risk customers 90 days before they churn. Save 45% more revenue.",
    type: "tool",
    category: "tools",
    downloadCount: "3,421",
    rating: 4.6,
    publishDate: "2025-01-07",
    author: "Tech Team",
    tags: ["Churn", "AI", "Prediction"],
    downloadUrl: "#"
  },
  {
    id: "growth-metrics-dashboard",
    title: "SaaS Growth Metrics Dashboard Template",
    description: "Track the 23 essential SaaS metrics that matter most. Includes Google Sheets & Notion versions.",
    type: "tool",
    category: "tools",
    downloadCount: "7,892",
    rating: 4.8,
    publishDate: "2025-01-04",
    author: "Analytics Team",
    tags: ["Metrics", "Dashboard", "Analytics"],
    downloadUrl: "#"
  }
]

const podcastEpisodes = [
  {
    id: "episode-127",
    title: "From $0 to $50M ARR: Slack's Growth Secrets",
    description: "Stewart Butterfield reveals the untold growth strategies that built Slack into a $27B company.",
    type: "podcast",
    category: "podcast",
    duration: "58 min",
    rating: 4.9,
    publishDate: "2025-01-12",
    listenerCount: "23,847",
    author: "Stewart Butterfield, Co-founder of Slack",
    tags: ["Scaling", "B2B SaaS", "Leadership"],
    downloadUrl: "#"
  },
  {
    id: "episode-126", 
    title: "The $100M Product-Led Growth Playbook",
    description: "How Calendly's CEO scaled to $100M ARR with zero sales team using PLG strategies.",
    type: "podcast",
    category: "podcast",
    duration: "45 min",
    rating: 4.8,
    publishDate: "2025-01-05",
    listenerCount: "19,234",
    author: "Tope Awotona, CEO of Calendly",
    tags: ["PLG", "No Sales", "Product"],
    downloadUrl: "#"
  }
]

const webinars = [
  {
    id: "ai-sales-automation-2025",
    title: "AI Sales Automation: 10x Your Pipeline in 90 Days",
    description: "Live masterclass: How to implement AI sales automation that generated $50M+ in new pipeline.",
    type: "webinar",
    category: "webinars",
    datetime: "Jan 25, 2025 • 2:00 PM EST",
    duration: "90 min",
    rating: 4.9,
    attendeeCount: "1,247",
    author: "Marcus Rivera & Alex Chen",
    tags: ["AI", "Sales", "Automation"],
    registerUrl: "#"
  },
  {
    id: "pricing-optimization-workshop",
    title: "Pricing Optimization Workshop: Double Your Revenue",
    description: "Interactive workshop on advanced pricing strategies that increased ARPU by 156% on average.",
    type: "webinar", 
    category: "webinars",
    datetime: "Feb 8, 2025 • 1:00 PM EST",
    duration: "120 min",
    rating: 4.8,
    attendeeCount: "892",
    author: "Lisa Park & Sarah Johnson",
    tags: ["Pricing", "Revenue", "Strategy"],
    registerUrl: "#"
  }
]

const caseStudies = [
  {
    id: "zendesk-450-percent-growth",
    title: "How Zendesk Achieved 450% Pipeline Growth in 6 Months",
    description: "The complete breakdown of how we helped Zendesk optimize their GTM engine and scale from $50M to $200M ARR.",
    type: "case-study",
    category: "case-studies", 
    result: "450% Pipeline Growth",
    timeframe: "6 months",
    industry: "Customer Support SaaS",
    rating: 4.9,
    publishDate: "2025-01-10",
    author: "Growth Team",
    tags: ["B2B SaaS", "Pipeline", "GTM"],
    downloadUrl: "#"
  },
  {
    id: "stripe-revenue-optimization", 
    title: "Stripe's $2.4B Revenue Optimization Strategy",
    description: "Inside look at how Stripe uses AI-powered GTM optimization to maintain 40%+ growth at scale.",
    type: "case-study",
    category: "case-studies",
    result: "$2.4B Revenue Impact", 
    timeframe: "12 months",
    industry: "Payments SaaS",
    rating: 4.8,
    publishDate: "2025-01-08",
    author: "Strategy Team",
    tags: ["Payments", "Scale", "Revenue"],
    downloadUrl: "#"
  }
]

export default function ResourcesHub() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const allContent = [...featuredContent, ...guides, ...tools, ...podcastEpisodes, ...webinars, ...caseStudies]
  
  const filteredContent = allContent.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen section-bg-primary">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-blue/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto container-padding relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
              <Rocket className="mr-2 h-4 w-4" />
              2025's #1 SaaS Growth Resource Hub
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6 leading-tight">
              Growth Resources That
              <span className="relative block">
                <span className="text-gradient bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Actually Work
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/50 via-purple-400/50 to-pink-400/50 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-star-white/80 mb-8 leading-relaxed">
              Free tools, guides, and insights used by 500+ SaaS companies to scale from $10K to $100M+ ARR.
              <span className="block mt-2 text-electric-blue font-semibold">
                🚀 Downloaded 50,000+ times • ⭐ 4.9/5 average rating
              </span>
            </p>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-8">
              <Input 
                placeholder="Enter email for weekly growth insights..."
                className="flex-1 bg-dark-navy/50 border-electric-blue/30 text-star-white placeholder:text-star-white/50"
              />
              <Button className="bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-bold px-8 hover:scale-105 transition-transform">
                <Mail className="mr-2 h-4 w-4" />
                Get Free Weekly Tips
              </Button>
            </div>

            <p className="text-star-white/60 text-sm">
              Join 12,000+ SaaS founders getting weekly growth insights • No spam, unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-star-white/10">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-star-white/50 h-4 w-4" />
              <Input 
                placeholder="Search resources, tools, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-dark-navy/50 border-electric-blue/30 text-star-white placeholder:text-star-white/50"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-electric-blue text-dark-navy" 
                    : "border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
                  }
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      {selectedCategory === "all" && (
        <section className="py-16">
          <div className="container mx-auto container-padding">
            <div className="flex items-center gap-3 mb-12">
              <Star className="h-6 w-6 text-yellow-400" />
              <h2 className="text-3xl font-bold text-star-white">Featured Resources</h2>
              <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">Most Popular</Badge>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredContent.map((item) => (
                <Card key={item.id} className="group hover:scale-105 transition-all duration-300 bg-dark-navy/50 border-electric-blue/20 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-electric-blue text-dark-navy font-bold">
                        {item.type === "guide" && <BookOpen className="mr-1 h-3 w-3" />}
                        {item.type === "tool" && <Calculator className="mr-1 h-3 w-3" />}
                        {item.type === "podcast" && <Mic className="mr-1 h-3 w-3" />}
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs font-medium">{item.rating}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-star-white group-hover:text-electric-blue transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-star-white/70">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-electric-blue/30 text-electric-blue text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-star-white/60 mb-4">
                      <span>By {item.author}</span>
                      <span>{item.publishDate}</span>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-bold group-hover:scale-105 transition-transform">
                      {item.type === "tool" ? "Use Tool" : item.type === "podcast" ? "Listen Now" : "Download Free"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item) => (
              <Card key={item.id} className="group hover:scale-105 transition-all duration-300 bg-dark-navy/50 border-electric-blue/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      {item.type === "guide" && <BookOpen className="mr-1 h-3 w-3" />}
                      {item.type === "tool" && <Calculator className="mr-1 h-3 w-3" />}
                      {item.type === "podcast" && <Mic className="mr-1 h-3 w-3" />}
                      {item.type === "webinar" && <Video className="mr-1 h-3 w-3" />}
                      {item.type === "case-study" && <TrendingUp className="mr-1 h-3 w-3" />}
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1).replace("-", " ")}
                    </Badge>
                    
                    {item.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-star-white text-xs">{item.rating}</span>
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-star-white group-hover:text-electric-blue transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-star-white/70">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-electric-blue/30 text-electric-blue text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2 text-sm text-star-white/60 mb-4">
                    <div className="flex items-center justify-between">
                      <span>By {item.author}</span>
                      <span>{item.publishDate}</span>
                    </div>
                    
                    {item.downloadCount && (
                      <div className="flex items-center gap-2">
                        <Download className="h-3 w-3" />
                        <span>{item.downloadCount} downloads</span>
                      </div>
                    )}
                    
                    {item.duration && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{item.duration}</span>
                      </div>
                    )}
                    
                    {item.result && (
                      <div className="flex items-center gap-2 text-electric-blue font-medium">
                        <TrendingUp className="h-3 w-3" />
                        <span>{item.result}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-bold group-hover:scale-105 transition-transform">
                    {item.type === "tool" ? "Use Tool" : 
                     item.type === "podcast" ? "Listen Now" : 
                     item.type === "webinar" ? "Register Free" :
                     "Download Free"}
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
          <h2 className="text-3xl font-bold text-star-white mb-4">
            Ready to Scale Your SaaS to $100M+?
          </h2>
          <p className="text-xl text-star-white/80 mb-8 max-w-2xl mx-auto">
            Get personalized growth recommendations from our team of experts who've helped 500+ SaaS companies scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-bold px-8 hover:scale-105 transition-transform">
              <Rocket className="mr-2 h-5 w-5" />
              Get Free Growth Plan
            </Button>
            <Button size="lg" variant="outline" className="border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10">
              <Calendar className="mr-2 h-5 w-5" />
              Book Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 