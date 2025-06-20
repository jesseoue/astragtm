import Image from "next/image"
import { ThumbsUp, MessageSquare, Repeat, Send } from "lucide-react"

export interface Testimonial {
  name: string
  handle: string
  title: string
  company: string
  companyLogoUrl: string
  postUrl: string
  userImageUrl: string
  time: string
  content: string
  highlight: string
  likes: number
  comments: number
  reposts: number
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]">
      <div className="flex items-start gap-4 mb-4">
        <Image src={testimonial.userImageUrl} alt={testimonial.name} width={48} height={48} className="rounded-full" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <a href={testimonial.postUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-star-white hover:underline">{testimonial.name}</a>
            <span className="text-star-white/50">·</span>
            <span className="text-star-white/50 text-sm">@{testimonial.handle}</span>
          </div>
          <p className="text-star-white/70 text-sm">{testimonial.title}</p>
          <div className="flex items-center gap-2 text-star-white/50 text-sm mt-1">
            <Image src={testimonial.companyLogoUrl} alt={`${testimonial.company} Logo`} width={16} height={16} />
            <span>{testimonial.company}</span>
            <span className="text-star-white/50">·</span>
            <span>{testimonial.time}</span>
          </div>
        </div>
      </div>
      
      <p className="text-star-white/90 mb-4 whitespace-pre-line leading-relaxed">{testimonial.content}</p>

      <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-4 mb-4 text-center">
        <p className="text-electric-blue font-bold text-lg">🎯 {testimonial.highlight}</p>
      </div>
      
      <div className="flex items-center justify-between text-star-white/50 text-sm">
        <div className="flex gap-6">
            <button className="flex items-center gap-2 hover:text-electric-blue transition-colors">
              <ThumbsUp size={16} />
              <span>{testimonial.likes}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-electric-blue transition-colors">
              <MessageSquare size={16} />
              <span>{testimonial.comments}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-electric-blue transition-colors">
              <Repeat size={16} />
              <span>{testimonial.reposts}</span>
            </button>
        </div>
        <button className="flex items-center gap-2 hover:text-electric-blue transition-colors">
          <Send size={16} />
        </button>
      </div>
    </div>
  )
} 