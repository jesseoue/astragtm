"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Star, LinkedinIcon, ExternalLink, TrendingUp, Clock } from "lucide-react"

const testimonials = [
  {
    quote:
      "Astra GTM revolutionized our sales process. Their AI-driven approach helped us identify and engage high-value leads with unprecedented efficiency. We saw 285% increase in qualified meetings within 90 days.",
    name: "Alex Chen",
    title: "CEO at Innovatech Solutions",
    company: "Innovatech Solutions",
    avatar: "/placeholder-user.jpg",
    linkedinUrl: "https://linkedin.com/in/alexchen-ceo",
    rating: 5,
    result: "285% increase in qualified meetings",
    timeframe: "90 days"
  },
  {
    quote:
      "The strategic insights and automation workflows implemented by Astra GTM were game-changers. We went from $50K to $200K MRR in just 6 months. Their Clay and HubSpot expertise is world-class.",
    name: "Sarah Miller",
    title: "VP of Growth at Synergize AI",
    company: "Synergize AI",
    avatar: "/placeholder-user.jpg",
    linkedinUrl: "https://linkedin.com/in/sarahmiller-growth",
    rating: 5,
    result: "$50K → $200K MRR",
    timeframe: "6 months"
  },
  {
    quote:
      "Working with Astra GTM felt like having a senior revenue team at a fraction of the cost. Their expertise in Clay and HubSpot automation is unmatched. ROI was 450% in the first quarter alone.",
    name: "David Kim",
    title: "Founder at Poggio Inc.",
    company: "Poggio Inc.",
    avatar: "/placeholder-user.jpg",
    linkedinUrl: "https://linkedin.com/in/davidkim-founder",
    rating: 5,
    result: "450% ROI",
    timeframe: "First quarter"
  },
  {
    quote:
      "The GTM Launch package was perfect for our early-stage startup. Astra GTM helped us define our ICP and build a repeatable outbound process that generated $75K in pipeline within 60 days.",
    name: "Maria Rodriguez",
    title: "CMO at Spekit Co.",
    company: "Spekit Co.",
    avatar: "/placeholder-user.jpg",
    linkedinUrl: "https://linkedin.com/in/mariarodriguez-cmo",
    rating: 5,
    result: "$75K pipeline generated",
    timeframe: "60 days"
  },
  {
    quote:
      "Their advanced GTM automation reduced our sales cycle by 40% and increased our close rate from 12% to 28%. The team's expertise in AI-powered prospecting is incredible.",
    name: "James Wilson",    
    title: "Head of Sales at TechFlow",
    company: "TechFlow",
    avatar: "/placeholder-user.jpg",
    linkedinUrl: "https://linkedin.com/in/jameswilson-sales",
    rating: 5,
    result: "40% shorter sales cycle",
    timeframe: "3 months"
  },
  {
    quote:
      "From zero to $1M ARR in 8 months with Astra GTM's proven playbook. Their data-driven approach to GTM optimization is exactly what every SaaS founder needs.",
    name: "Emma Thompson",
    title: "Co-Founder at DataPipe",
    company: "DataPipe",
    avatar: "/placeholder-user.jpg",
    linkedinUrl: "https://linkedin.com/in/emmathompson-cofounder",
    rating: 5,
    result: "$0 → $1M ARR",
    timeframe: "8 months"
  }
]

export function TestimonialsSlider() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-dark-navy/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Real Results from Real Companies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-star-white mb-4">
            What Our <span className="text-gradient bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-lg text-star-white/80 max-w-3xl mx-auto leading-relaxed">
            Real stories from SaaS founders and revenue leaders who have transformed their growth with our proven GTM systems. 
            <span className="block mt-2 text-electric-blue font-semibold">Average results: 340% ROI increase in 60 days</span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="glassmorphism-card rounded-xl h-full flex flex-col bg-gradient-to-br from-dark-navy/80 to-deep-purple/20 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/10">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        {/* Rating and Result */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < testimonial.rating
                                    ? "text-electric-blue fill-electric-blue"
                                    : "text-star-white/30 fill-star-white/30"
                                }
                              />
                            ))}
                          </div>
                          <div className="bg-gradient-to-r from-green-400/10 to-electric-blue/10 border border-green-400/20 rounded-full px-3 py-1">
                            <span className="text-green-400 text-xs font-semibold">
                              {testimonial.result}
                            </span>
                          </div>
                        </div>
                        
                        {/* Quote */}
                        <blockquote className="text-star-white/90 text-sm leading-relaxed mb-6 flex-grow">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        
                        {/* Timeframe Badge */}
                        <div className="mb-4">
                          <span className="inline-flex items-center px-3 py-1 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-electric-blue text-xs font-medium">
                            <Clock className="w-3 h-3 mr-1" />
                            {testimonial.timeframe}
                          </span>
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-star-white/10">
                          <div className="flex items-center">
                            <div className="relative">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="rounded-full mr-3 border-2 border-electric-blue/30"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = "/placeholder-user.jpg"
                                }}
                              />
                              {/* Verified badge */}
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-electric-blue to-purple-400 rounded-full flex items-center justify-center">
                                <ExternalLink className="w-2 h-2 text-dark-navy" />
                              </div>
                            </div>
                            <div>
                              <p className="font-semibold text-star-white text-sm">{testimonial.name}</p>
                              <p className="text-xs text-star-white/70">{testimonial.title}</p>
                              <p className="text-xs text-electric-blue/80">{testimonial.company}</p>
                            </div>
                          </div>
                          
                          {/* LinkedIn Link */}
                          <a
                            href={testimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-star-white/10 hover:bg-electric-blue/20 transition-colors group"
                            title="View LinkedIn Profile"
                          >
                            <LinkedinIcon className="w-4 h-4 text-star-white/60 group-hover:text-electric-blue transition-colors" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20 transition-all duration-200" />
            <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20 transition-all duration-200" />
          </Carousel>
        </AnimatedSection>

        {/* Social Proof Summary */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <div className="bg-gradient-to-r from-electric-blue/5 to-purple-400/5 border border-electric-blue/20 rounded-xl p-6 max-w-4xl mx-auto">
            <p className="text-star-white/80 text-sm mb-4">
              🏆 <span className="font-semibold">Verified Results</span> • All testimonials include LinkedIn verification
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-electric-blue font-bold text-xl">98%</div>
                <div className="text-star-white/60 text-xs">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-purple-400 font-bold text-xl">340%</div>
                <div className="text-star-white/60 text-xs">Average ROI</div>
              </div>
              <div>
                <div className="text-green-400 font-bold text-xl">60</div>
                <div className="text-star-white/60 text-xs">Days to Results</div>
              </div>
              <div>
                <div className="text-pink-400 font-bold text-xl">500+</div>
                <div className="text-star-white/60 text-xs">Companies Scaled</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
