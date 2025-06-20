"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CTAButton } from "@/components/ui/cta-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Search, Filter, BookOpen, TrendingUp, Users, Lightbulb } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const blogPosts = [
  {
    id: "ai-gtm-transformation-2024",
    title: "How AI is Transforming B2B SaaS GTM in 2024",
    excerpt: "Discover the latest AI-powered strategies that are revolutionizing how B2B startups approach go-to-market operations and scale revenue predictably.",
    category: "AI & Automation",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    author: {
      name: "Sarah Chen",
      role: "Head of GTM Strategy",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: true,
    tags: ["AI", "GTM Strategy", "B2B Sales", "Revenue Growth"]
  },
  {
    id: "lead-scoring-best-practices",
    title: "Lead Scoring Mastery: The Complete B2B SaaS Guide",
    excerpt: "Learn how to implement predictive lead scoring models that increase conversion rates by 340% and accelerate your sales cycle dramatically.",
    category: "Lead Generation",
    readTime: "12 min read",
    publishDate: "2024-01-10",
    author: {
      name: "Marcus Rodriguez",
      role: "Senior Revenue Consultant",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["Lead Scoring", "Sales", "CRM", "Conversion Optimization"]
  },
  {
    id: "marketing-automation-roi",
    title: "Marketing Automation ROI: $2.4M Revenue Case Study",
    excerpt: "Step-by-step framework showing how one SaaS company used our automation strategy to generate $2.4M in additional revenue within 8 months.",
    category: "Marketing Automation",
    readTime: "15 min read",
    publishDate: "2024-01-05",
    author: {
      name: "Alex Chen",
      role: "Founder & CEO",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["Marketing Automation", "ROI", "Case Study", "Revenue Growth"]
  },
  {
    id: "sales-pipeline-optimization",
    title: "5 Data-Driven Ways to Optimize Your Sales Pipeline",
    excerpt: "Actionable strategies to identify bottlenecks, improve conversion rates by 180%, and accelerate deal velocity using proven frameworks.",
    category: "Sales Operations",
    readTime: "10 min read",
    publishDate: "2023-12-28",
    author: {
      name: "Jennifer Park",
      role: "Revenue Operations Lead",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["Sales Pipeline", "Data Analytics", "Revenue Ops", "Conversion"]
  },
  {
    id: "saas-growth-strategies-2024",
    title: "SaaS Growth Strategies That Actually Work in 2024",
    excerpt: "Proven growth strategies from 500+ SaaS companies. Learn what's working now and what's not in the current market landscape.",
    category: "Growth Strategy",
    readTime: "14 min read",
    publishDate: "2023-12-20",
    author: {
      name: "David Kim",
      role: "Growth Strategy Director",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["Growth Strategy", "SaaS", "Market Trends", "Revenue"]
  },
  {
    id: "startup-gtm-strategy",
    title: "Building Your First GTM Strategy: A Startup's Playbook",
    excerpt: "From product-market fit to scalable growth - complete framework for building a winning go-to-market strategy from the ground up.",
    category: "GTM Strategy",
    readTime: "18 min read",
    publishDate: "2023-12-15",
    author: {
      name: "Sarah Chen",
      role: "Head of GTM Strategy",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["GTM Strategy", "Startups", "Product-Market Fit", "Growth"]
  }
]

const categories = [
  { name: "All Posts", count: 6, icon: <BookOpen className="w-4 h-4" /> },
  { name: "GTM Strategy", count: 2, icon: <TrendingUp className="w-4 h-4" /> },
  { name: "AI & Automation", count: 1, icon: <Lightbulb className="w-4 h-4" /> },
  { name: "Lead Generation", count: 1, icon: <Users className="w-4 h-4" /> },
  { name: "Marketing Automation", count: 1, icon: <TrendingUp className="w-4 h-4" /> },
  { name: "Sales Operations", count: 1, icon: <Users className="w-4 h-4" /> },
]

const featuredStats = [
  { value: "500+", label: "SaaS Companies Helped", icon: "🚀" },
  { value: "340%", label: "Average ROI Increase", icon: "📈" },
  { value: "$2.4B+", label: "Revenue Generated", icon: "💰" },
  { value: "50+", label: "Expert Insights", icon: "💡" },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="flex flex-col min-h-screen bg-dark-navy">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto mb-16">
              <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Growth Resources
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                SaaS Growth <span className="text-gradient bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">Insights</span> & Resources
              </h1>
              
              <p className="text-xl text-star-white/80 mb-8 max-w-3xl mx-auto">
                Expert insights, proven strategies, and actionable frameworks from helping 500+ SaaS companies 
                scale their revenue. Learn what actually works in today's market.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {featuredStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-electric-blue mb-1">
                      {stat.value}
                    </div>
                    <div className="text-star-white/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-star-white/50 w-5 h-5" />
                  <Input 
                    placeholder="Search growth insights..." 
                    className="pl-10 bg-dark-navy/50 border-star-white/20 text-star-white placeholder:text-star-white/50 focus:border-electric-blue"
                  />
                </div>
                <Button variant="outline" className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Category Tags */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category, index) => (
                  <Badge 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-300 ${index === 0 
                      ? "bg-electric-blue text-dark-navy hover:bg-electric-blue/90" 
                      : "border-star-white/20 text-star-white/70 hover:border-electric-blue/50 hover:text-electric-blue hover:bg-electric-blue/10"
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                    <span className="ml-2 text-xs opacity-70">({category.count})</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative max-w-6xl mx-auto">
                <div className="absolute -top-4 left-8 z-10">
                  <Badge className="bg-electric-blue text-dark-navy font-bold px-4 py-2 shadow-lg">
                    ✨ Featured Article
                  </Badge>
                </div>
                
                <Card className="overflow-hidden bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border-electric-blue/30 shadow-2xl hover:shadow-electric-blue/20 transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-full min-h-[300px]">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 backdrop-blur-sm">
                            {featuredPost.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6 text-star-white/60 text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        
                        <h2 className="text-3xl lg:text-4xl font-bold text-star-white mb-6 leading-tight">
                          {featuredPost.title}
                        </h2>
                        
                        <p className="text-star-white/80 mb-8 leading-relaxed text-lg">
                          {featuredPost.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {featuredPost.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-electric-blue/30 text-electric-blue">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center">
                              <span className="text-electric-blue font-bold">
                                {featuredPost.author.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="text-star-white font-semibold">
                                {featuredPost.author.name}
                              </div>
                              <div className="text-star-white/60 text-sm">
                                {featuredPost.author.role}
                              </div>
                            </div>
                          </div>
                          
                          <CTAButton
                            intent="primary"
                            icon="arrow"
                            href={`/blog/${featuredPost.id}`}
                            className="shadow-lg hover:shadow-electric-blue/30"
                          >
                            Read Full Article
                          </CTAButton>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-star-white text-center mb-12">
                Latest Growth Insights
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="bg-dark-navy/50 border-star-white/10 hover:border-electric-blue/30 transition-all duration-500 h-full group hover:scale-105 hover:shadow-xl hover:shadow-electric-blue/10 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="text-electric-blue border-electric-blue/30 bg-dark-navy/80 backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-star-white/60 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-star-white mb-4 group-hover:text-electric-blue transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-star-white/70 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-6">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs border-star-white/20 text-star-white/60">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs border-star-white/20 text-star-white/60">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center">
                            <span className="text-electric-blue font-bold text-xs">
                              {post.author.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-star-white/70 text-sm">
                            {post.author.name}
                          </span>
                        </div>
                        
                        <CTAButton
                          intent="outline"
                          icon="arrow"
                          href={`/blog/${post.id}`}
                          className="text-sm"
                        >
                          Read More
                        </CTAButton>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-electric-blue/10 via-purple-400/5 to-electric-blue/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-star-white mb-6">
                Get Weekly Growth Insights
              </h2>
              <p className="text-xl text-star-white/80 mb-8">
                Join 5,000+ SaaS founders and growth leaders getting proven strategies, frameworks, 
                and exclusive case studies delivered every Tuesday.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
                <Input 
                  placeholder="Enter your work email" 
                  className="bg-dark-navy/60 border-star-white/30 text-star-white placeholder:text-star-white/50 focus:border-electric-blue"
                />
                <CTAButton
                  intent="primary"
                  icon="arrow"
                  className="whitespace-nowrap"
                >
                  Subscribe Free
                </CTAButton>
              </div>
              
              <p className="text-sm text-star-white/60">
                ✓ No spam ✓ Unsubscribe anytime ✓ Read by founders at Stripe, Slack, Zoom & 500+ more
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 