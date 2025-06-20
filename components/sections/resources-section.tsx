"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, TrendingUp, Users, Calendar, ArrowRight, FileText, Video, Mic } from "lucide-react"
import { cn } from "@/lib/utils"

const resources = [
  {
    type: "Case Study",
    title: "How Zendesk Increased Lead Conversion by 285%",
    description: "Deep dive into the specific GTM optimizations that helped Zendesk transform their sales funnel and achieve record-breaking growth.",
    category: "Conversion Optimization",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    image: "/placeholder.jpg",
    slug: "/case-studies/zendesk-conversion-optimization",
    icon: TrendingUp,
    featured: true
  },
  {
    type: "Guide",
    title: "The Ultimate SaaS Growth Playbook 2025",
    description: "127-page comprehensive guide covering every aspect of SaaS go-to-market strategy from lead generation to revenue optimization. Real frameworks from 500+ successful companies.",
    category: "Free Download",
    readTime: "PDF Guide",
    date: "Jan 10, 2025",
    image: "/placeholder.jpg",
    slug: "/resources/saas-gtm-playbook-2025",
    icon: Download,
    featured: true
  },
  {
    type: "Blog Post",
    title: "AI-Powered Lead Scoring: 5 Strategies That Work in 2025",
    description: "Learn how to implement AI-driven lead scoring systems that identify your highest-value prospects automatically with 94% accuracy.",
    category: "AI & Automation",
    readTime: "6 min read",
    date: "Jan 8, 2025",
    image: "/placeholder.jpg",
    slug: "/blog/ai-lead-scoring-strategies-2025",
    icon: BookOpen
  },
  {
    type: "Webinar",
    title: "Live: Scaling B2B SaaS to $100M ARR in 2025",
    description: "Join our CEO for a live session on the exact strategies we used to help 50+ SaaS companies reach $100M ARR this year.",
    category: "Live Training",
    readTime: "90 min",
    date: "Jan 25, 2025",
    image: "/placeholder.jpg",
    slug: "/webinars/scaling-saas-100m-arr-2025",
    icon: Video
  },
  {
    type: "Podcast", 
    title: "Scale or Fail: SaaS Growth Secrets Podcast",
    description: "Weekly interviews with SaaS founders who've scaled from $0 to $100M+. This week: Slack's Stewart Butterfield reveals untold growth secrets.",
    category: "Growth Tactics",
    readTime: "45-60 min",
    date: "Jan 20, 2025",
    image: "/placeholder.jpg",
    slug: "/podcast/scale-or-fail",
    icon: Mic
  },
  {
    type: "Template",
    title: "GTM Strategy Canvas Template 2025",
    description: "Free Figma template to map out your complete go-to-market strategy. Updated for 2025 with AI automation workflows. Used by 2000+ SaaS companies.",
    category: "Free Template", 
    readTime: "Figma File",
    date: "Jan 5, 2025",
    image: "/placeholder.jpg",
    slug: "/templates/gtm-strategy-canvas-2025",
    icon: FileText
  },
  {
    type: "Tool",
    title: "AI Churn Prediction Calculator",
    description: "Interactive tool that predicts customer churn 90 days in advance. Save 45% more revenue with our machine learning model.",
    category: "Free Tool",
    readTime: "Web App",
    date: "Jan 12, 2025",
    image: "/placeholder.jpg", 
    slug: "/tools/churn-prediction-calculator",
    icon: TrendingUp
  },
  {
    type: "Newsletter",
    title: "Weekly Growth Insights Newsletter",
    description: "Get the latest SaaS growth strategies, case studies, and exclusive insights delivered every Tuesday. 12,000+ subscribers.",
    category: "Newsletter",
    readTime: "5 min read",
    date: "Weekly",
    image: "/placeholder.jpg",
    slug: "/newsletter",
    icon: BookOpen
  }
]

interface ResourcesSectionProps {
  className?: string
}

export function ResourcesSection({ className }: ResourcesSectionProps) {
  const featuredResources = resources.filter(resource => resource.featured)
  const regularResources = resources.filter(resource => !resource.featured)

  return (
    <section className={cn("py-20 md:py-32 bg-gradient-to-br from-dark-navy to-deep-purple relative overflow-hidden", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,212,255,0.03)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
            <BookOpen className="mr-2 h-4 w-4" />
            Growth Resources
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-star-white mb-6 leading-tight">
            Learn from the{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Best in SaaS
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/50 via-purple-400/50 to-pink-400/50 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-star-white/80 max-w-4xl mx-auto leading-relaxed">
            Free resources, case studies, and actionable strategies from{" "}
            <span className="text-electric-blue font-semibold">500+ successful SaaS companies</span> we've helped scale.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredResources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <Card key={resource.slug} className="group bg-gradient-to-br from-dark-navy/80 to-deep-purple/50 border-star-white/10 hover:border-electric-blue/30 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.jpg"}
                    alt={resource.title}
                    width={600}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      {resource.type}
                    </Badge>
                  </div>
                  {resource.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-400 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-star-white/60 mb-2">
                    <IconComponent className="h-4 w-4" />
                    <span>{resource.category}</span>
                    <span>•</span>
                    <span>{resource.readTime}</span>
                    <span>•</span>
                    <span>{resource.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-star-white group-hover:text-electric-blue transition-colors line-clamp-2">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-star-white/70 mb-4 line-clamp-3">
                    {resource.description}
                  </CardDescription>
                  <Link href={resource.slug}>
                    <Button className="w-full bg-gradient-to-r from-electric-blue/20 to-purple-400/20 text-electric-blue border border-electric-blue/30 hover:from-electric-blue/30 hover:to-purple-400/30 hover:border-electric-blue/50 transition-all duration-200">
                      {resource.type === "Guide" || resource.type === "Template" ? "Download Free" : "Read More"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Regular Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regularResources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <Card key={resource.slug} className="group bg-dark-navy/60 backdrop-blur-sm border-star-white/10 hover:border-electric-blue/30 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-electric-blue border-electric-blue/30">
                      {resource.type}
                    </Badge>
                    <IconComponent className="h-5 w-5 text-electric-blue" />
                  </div>
                  <CardTitle className="text-lg font-bold text-star-white group-hover:text-electric-blue transition-colors line-clamp-2">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-star-white/70 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-star-white/50 mb-4">
                    <span>{resource.readTime}</span>
                    <span>{resource.date}</span>
                  </div>
                  <Link href={resource.slug}>
                    <Button variant="ghost" size="sm" className="w-full text-electric-blue hover:bg-electric-blue/10">
                      View Resource
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block bg-gradient-to-r from-electric-blue/10 to-purple-400/10 border-electric-blue/20 p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Users className="h-8 w-8 text-electric-blue" />
              <div className="text-left">
                <div className="text-2xl font-bold text-star-white">2,500+</div>
                <div className="text-star-white/70 text-sm">Growth resources accessed</div>
              </div>
            </div>
            <p className="text-star-white/80 mb-6 max-w-md mx-auto">
              Join thousands of SaaS founders getting weekly growth insights delivered to their inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Link href="/resources" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90">
                  Browse All Resources
                </Button>
              </Link>
              <Link href="/newsletter" className="flex-1">
                <Button variant="outline" className="w-full border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
} 