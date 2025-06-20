"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CTAButton } from "@/components/ui/cta-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const blogPosts = [
  {
    id: "ai-gtm-transformation-2024",
    title: "How AI is Transforming GTM Operations in 2024",
    excerpt: "Discover the latest AI-powered strategies that are revolutionizing how B2B startups approach go-to-market operations.",
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
    tags: ["AI", "GTM Strategy", "B2B Sales"]
  },
  {
    id: "lead-scoring-best-practices",
    title: "Lead Scoring Best Practices for B2B Startups",
    excerpt: "Learn how to implement effective lead scoring models that increase conversion rates and accelerate your sales cycle.",
    category: "Lead Generation",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    author: {
      name: "Marcus Rodriguez",
      role: "Senior GTM Consultant",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["Lead Scoring", "Sales", "CRM"]
  },
  {
    id: "marketing-automation-roi",
    title: "Measuring Marketing Automation ROI: A Complete Guide",
    excerpt: "Step-by-step framework for tracking and optimizing your marketing automation investments for maximum returns.",
    category: "Marketing Automation",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    author: {
      name: "Alex Chen",
      role: "Founder & CEO",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["Marketing Automation", "ROI", "Analytics"]
  },
  {
    id: "sales-pipeline-optimization",
    title: "5 Data-Driven Ways to Optimize Your Sales Pipeline",
    excerpt: "Actionable strategies to identify bottlenecks, improve conversion rates, and accelerate deal velocity.",
    category: "Sales Operations",
    readTime: "7 min read",
    publishDate: "2023-12-28",
    author: {
      name: "Jennifer Park",
      role: "Revenue Operations Lead",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["Sales Pipeline", "Data Analytics", "Revenue Ops"]
  },
  {
    id: "crm-integration-guide",
    title: "The Ultimate CRM Integration Guide for Startups",
    excerpt: "Everything you need to know about integrating your CRM with marketing, sales, and customer success tools.",
    category: "Tech Integration",
    readTime: "12 min read",
    publishDate: "2023-12-20",
    author: {
      name: "David Kim",
      role: "Chief Technology Officer",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["CRM", "Integration", "Tech Stack"]
  },
  {
    id: "startup-gtm-strategy",
    title: "Building Your First GTM Strategy: A Startup's Guide",
    excerpt: "From product-market fit to scalable growth - learn how to build a winning go-to-market strategy from scratch.",
    category: "GTM Strategy",
    readTime: "15 min read",
    publishDate: "2023-12-15",
    author: {
      name: "Sarah Chen",
      role: "Head of GTM Strategy",
      avatar: "/placeholder-user.jpg"
    },
    image: "/placeholder.jpg",
    featured: false,
    tags: ["GTM Strategy", "Startups", "Product-Market Fit"]
  }
]

const categories = [
  "All Posts",
  "GTM Strategy",
  "AI & Automation", 
  "Lead Generation",
  "Marketing Automation",
  "Sales Operations",
  "Tech Integration"
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
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 mb-4">
                  Growth Insights
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
                  GTM <span className="text-electric-blue">Insights</span> & Resources
                </h1>
                <p className="text-xl text-star-white/80 mb-8 max-w-2xl mx-auto">
                  Expert insights, proven strategies, and actionable frameworks to accelerate your startup's growth.
                </p>
              </motion.div>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-star-white/50 w-5 h-5" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 bg-dark-navy/50 border-star-white/20 text-star-white"
                  />
                </div>
                <Button variant="outline" className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category, index) => (
                  <Badge 
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className={index === 0 
                      ? "bg-electric-blue text-dark-navy" 
                      : "border-star-white/20 text-star-white/70 hover:border-electric-blue/30 hover:text-electric-blue cursor-pointer"
                    }
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-4 left-8 z-10">
                  <Badge className="bg-electric-blue text-dark-navy font-semibold px-4 py-2">
                    Featured Article
                  </Badge>
                </div>
                
                <Card className="overflow-hidden bg-gradient-to-br from-electric-blue/5 to-electric-blue/10 border-electric-blue/30 shadow-2xl shadow-electric-blue/10">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-full">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent" />
                      </div>
                      
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="outline" className="text-electric-blue border-electric-blue/30">
                            {featuredPost.category}
                          </Badge>
                          <div className="flex items-center text-star-white/60 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-star-white mb-4">
                          {featuredPost.title}
                        </h2>
                        
                        <p className="text-star-white/80 mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-electric-blue/20 rounded-full flex items-center justify-center">
                              <span className="text-electric-blue font-bold text-sm">
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
                          >
                            Read Article
                          </CTAButton>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-dark-navy/50 border-star-white/10 hover:border-electric-blue/30 transition-all duration-300 h-full group hover:scale-105 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="text-electric-blue border-electric-blue/30 bg-dark-navy/80">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-star-white/60 text-sm mb-3">
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
                      
                      <h3 className="text-xl font-bold text-star-white mb-3 group-hover:text-electric-blue transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-star-white/70 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-electric-blue text-dark-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">
                Stay Ahead of the Growth Curve
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-navy/80">
                Get weekly insights, proven strategies, and exclusive frameworks delivered to your inbox. 
                Join 5,000+ growth professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-dark-navy/20 text-dark-navy placeholder:text-dark-navy/60"
                />
                <CTAButton
                  intent="secondary"
                  icon="arrow"
                  className="text-star-white bg-dark-navy hover:bg-dark-navy/90"
                >
                  Subscribe
                </CTAButton>
              </div>
              <p className="text-sm text-dark-navy/60 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 