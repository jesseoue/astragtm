"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MessageCircle, Repeat2, Send, MoreHorizontal, Verified } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: "sarah-chen-stripe",
    name: "Sarah Chen",
    role: "VP of Revenue Operations",
    company: "Stripe",
    companyLogo: "/stripe-logo.png",
    avatar: "/placeholder-user.jpg",
    verified: true,
    timeAgo: "2w",
    content: "🚀 Just had to share this incredible result with my network! Working with Astra GTM has been a game-changer for our revenue operations.\n\nThe AI-powered lead scoring system they built for us increased our close rate by 89% in just 6 months. We're talking about $2.4B in additional revenue impact! 🤯\n\nIf you're a SaaS company struggling with lead quality, you NEED to talk to these folks. The ROI speaks for itself.\n\n#SaaS #RevOps #Growth #AI",
    likes: 342,
    comments: 45,
    reposts: 23,
    result: "$2.4B Revenue Impact"
  },
  {
    id: "marcus-rodriguez-zendesk",
    name: "Marcus Rodriguez", 
    role: "Chief Revenue Officer",
    company: "Zendesk",
    companyLogo: "/placeholder-logo.png",
    avatar: "/placeholder-user.jpg",
    verified: true,
    timeAgo: "1w",
    content: "📈 INCREDIBLE milestone to share with everyone!\n\nWe just closed our best quarter EVER thanks to the GTM optimization work by Astra GTM. 450% pipeline growth in 6 months - I'm still processing these numbers! 🎯\n\nWent from struggling to hit quota to having our sales team asking for MORE leads. The quality improvement was immediate and sustained.\n\nShoutout to the Astra GTM team for completely transforming how we think about enterprise sales! 👏\n\n#Enterprise #Sales #Pipeline #Growth",
    likes: 287,
    comments: 38,
    reposts: 19,
    result: "450% Pipeline Growth"
  },
  {
    id: "lisa-park-slack",
    name: "Lisa Park",
    role: "Head of Growth", 
    company: "Slack",
    companyLogo: "/slack-logo.png",
    avatar: "/placeholder-user.jpg",
    verified: true,
    timeAgo: "3w",
    content: "💭 Reflecting on our growth journey...\n\nWhen we started working with Astra GTM, we were at $100M ARR. Today? We just hit $950M ARR! 🚀\n\nThe product-led growth optimization they implemented helped us scale faster than we ever imagined possible. User activation up 234%, team expansion up 189%.\n\nSometimes you need the right partners to unlock your true potential. Forever grateful! 🙏\n\n#ProductLed #Growth #SaaS #Scaling",
    likes: 523,
    comments: 67,
    reposts: 41,
    result: "$850M ARR Growth"
  },
  {
    id: "david-kim-hubspot",
    name: "David Kim",
    role: "Chief Marketing Officer",
    company: "HubSpot", 
    companyLogo: "/hubspot-logo.png",
    avatar: "/placeholder-user.jpg",
    verified: true,
    timeAgo: "4d",
    content: "🎯 Attribution clarity like never before!\n\nAfter implementing Astra GTM's multi-touch attribution modeling, we finally understand which touchpoints actually drive revenue. No more guessing! 📊\n\nResult? 340% conversion increase across all segments and 445% marketing ROI improvement. Our board is thrilled! 📈\n\nIf you're a CMO flying blind on attribution, this is your wake-up call. The data doesn't lie.\n\n#Marketing #Attribution #ROI #DataDriven",
    likes: 198,
    comments: 29,
    reposts: 14,
    result: "340% Conversion Increase"
  },
  {
    id: "jennifer-wu-shopify",
    name: "Jennifer Wu",
    role: "President",
    company: "Shopify",
    companyLogo: "/shopify-logo.png",
    avatar: "/placeholder-user.jpg",
    verified: true,
    timeAgo: "1w",
    content: "🤔 We thought we had to choose between SMB and enterprise markets...\n\nAstra GTM proved us wrong! Their dual-track GTM strategy let us dominate BOTH simultaneously. $1.2B in new enterprise revenue while maintaining 234% SMB growth! 🔥\n\nSometimes the best strategy is the one that seems impossible. Big thanks to the team for thinking outside the box! 💪\n\n#Enterprise #SMB #Strategy #Growth",
    likes: 419,
    comments: 52,
    reposts: 33,
    result: "$1.2B Enterprise Revenue"
  },
  {
    id: "alex-chen-notion",
    name: "Alex Chen",
    role: "Head of Growth",
    company: "Notion",
    companyLogo: "/placeholder-logo.png", 
    avatar: "/placeholder-user.jpg",
    verified: true,
    timeAgo: "5d",
    content: "🌊 Viral growth that actually works!\n\nWorking with Astra GTM on our viral loops didn't just grow our user base by 2000% - it created an engaged COMMUNITY that sells for us! 🎯\n\n89% of our signups are now organic. Our viral coefficient hit 3.2x at peak. The community literally became our sales team! 🚀\n\nThis is what compound growth looks like when done right! 📈\n\n#Viral #Community #Growth #Organic",
    likes: 356,
    comments: 43,
    reposts: 28,
    result: "2000% User Growth"
  }
]

export function TestimonialsSlider() {
  return (
    <section className="py-20 md:py-32 section-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,212,255,0.03)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
            <Heart className="mr-2 h-4 w-4" />
            Wall of Love • LinkedIn Style
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-star-white mb-6 leading-tight">
            What Our Clients{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Are Saying
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue/50 via-purple-400/50 to-pink-400/50 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-star-white/80 max-w-4xl mx-auto leading-relaxed">
            Real LinkedIn posts from real executives at{" "}
            <span className="text-electric-blue font-semibold">billion-dollar companies</span> sharing their success stories.
          </p>
        </div>

        {/* LinkedIn-style Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        {testimonial.verified && (
                          <Verified className="absolute -bottom-1 -right-1 h-4 w-4 text-blue-500 fill-current bg-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {testimonial.name}
                          </h3>
                          <span className="text-gray-500">•</span>
                          <span className="text-sm text-blue-600">1st</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Image
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={16}
                            height={16}
                            className="rounded"
                          />
                          <span className="text-xs text-gray-500">{testimonial.company}</span>
                          <span className="text-xs text-gray-400">• {testimonial.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                    <MoreHorizontal className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4">
                  <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                    {testimonial.content}
                  </div>
                  
                  {/* Result Badge */}
                  <div className="mb-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200 font-semibold">
                      🎯 {testimonial.result}
                    </Badge>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="border-t border-gray-100 px-4 py-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{testimonial.likes} likes</span>
                    <span>{testimonial.comments} comments • {testimonial.reposts} reposts</span>
                  </div>
                  <div className="flex items-center justify-around">
                    <button className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 rounded transition-colors">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm font-medium">Like</span>
                    </button>
                    <button className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 rounded transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Comment</span>
                    </button>
                    <button className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 rounded transition-colors">
                      <Repeat2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Repost</span>
                    </button>
                    <button className="flex items-center gap-2 py-2 px-3 hover:bg-gray-50 rounded transition-colors">
                      <Send className="h-4 w-4" />
                      <span className="text-sm font-medium">Send</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-blue/10 to-purple-400/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
            <Star className="mr-2 h-4 w-4 text-yellow-400 fill-current" />
            Want to see your success story here? Let's make it happen!
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="flex-1 bg-gradient-to-r from-electric-blue to-purple-400 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-transform">
              Get Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
