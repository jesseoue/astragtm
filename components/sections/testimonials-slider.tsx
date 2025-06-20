"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Astra GTM revolutionized our sales process. Their AI-driven approach helped us identify and engage high-value leads with unprecedented efficiency.",
    name: "Alex Chen",
    title: "CEO, Innovatech Solutions",
    avatar: "/placeholder.svg?width=64&height=64",
    rating: 5,
  },
  {
    quote:
      "The strategic insights and automation workflows implemented by Astra GTM were game-changers. We saw a 3x increase in qualified meetings within the first quarter.",
    name: "Sarah Miller",
    title: "VP of Growth, Synergize AI",
    avatar: "/placeholder.svg?width=64&height=64",
    rating: 5,
  },
  {
    quote:
      "Working with Astra GTM felt like having an extension of our own team. Their expertise in Clay and HubSpot is unmatched.",
    name: "David Kim",
    title: "Founder, Poggio Inc.",
    avatar: "/placeholder.svg?width=64&height=64",
    rating: 5,
  },
  {
    quote:
      "The GTM Launch package was perfect for us. Astra GTM helped us define our ICP and kickstart our outbound efforts effectively.",
    name: "Maria Rodriguez",
    title: "CMO, Spekit Co.",
    avatar: "/placeholder.svg?width=64&height=64",
    rating: 4,
  },
]

export function TestimonialsSlider() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-dark-navy/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-star-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-star-white/80 max-w-2xl mx-auto">
            Real stories from startups that have transformed their growth with Astra GTM.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="glassmorphism-card rounded-lg h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex mb-2">
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
                        <blockquote className="text-star-white/90 italic text-md leading-relaxed mb-6 flex-grow">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center mt-auto">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full mr-4 border-2 border-electric-blue/50"
                          />
                          <div>
                            <p className="font-semibold text-star-white">{testimonial.name}</p>
                            <p className="text-sm text-star-white/70">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20" />
            <CarouselNext className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-star-white/10 text-star-white hover:bg-electric-blue hover:text-dark-navy border-star-white/20" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  )
}
