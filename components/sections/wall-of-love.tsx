"use client"

import { TestimonialCard, Testimonial } from "@/components/ui/testimonial-card"

const testimonials: Testimonial[] = [
    {
    name: "Sarah Chen",
    handle: "sarahchen_revops",
    title: "VP of Revenue Operations",
    company: "Stripe",
    companyLogoUrl: "/stripe-logo.png",
    postUrl: "#",
    userImageUrl: "/placeholder-user.jpg",
    time: "2w",
    content: "🚀 Just had to share this incredible result with my network! Working with Astra GTM has been a game-changer for our revenue operations. The AI-powered lead scoring system they built for us increased our close rate by 89% in just 6 months. We're talking about $2.4B in additional revenue impact! 🤯 If you're a SaaS company struggling with lead quality, you NEED to talk to these folks. The ROI speaks for itself. #SaaS #RevOps #Growth #AI",
    highlight: "$2.4B Revenue Impact",
    likes: 342,
    comments: 45,
    reposts: 23,
  },
  {
    name: "Marcus Rodriguez",
    handle: "marcus_cro",
    title: "Chief Revenue Officer",
    company: "Zendesk",
    companyLogoUrl: "/placeholder-logo.svg", // Placeholder
    postUrl: "#",
    userImageUrl: "/placeholder-user.jpg",
    time: "1w",
    content: "📈 INCREDIBLE milestone to share with everyone! We just closed our best quarter EVER thanks to the GTM optimization work by Astra GTM. 450% pipeline growth in 6 months - I'm still processing these numbers! 🎯 Went from struggling to hit quota to having our sales team asking for MORE leads. The quality improvement was immediate and sustained. Shoutout to the Astra GTM team for completely transforming how we think about enterprise sales! 👏 #Enterprise #Sales #Pipeline #Growth",
    highlight: "450% Pipeline Growth",
    likes: 287,
    comments: 38,
    reposts: 19,
  },
  {
    name: "Lisa Park",
    handle: "lisapark_growth",
    title: "Head of Growth",
    company: "Slack",
    companyLogoUrl: "/slack-logo.png",
    postUrl: "#",
    userImageUrl: "/placeholder-user.jpg",
    time: "3w",
    content: "💭 Reflecting on our growth journey... When we started working with Astra GTM, we were at $100M ARR. Today? We just hit $950M ARR! 🚀 The product-led growth optimization they implemented helped us scale faster than we ever imagined possible. User activation up 234%, team expansion up 189%. Sometimes you need the right partners to unlock your true potential. Forever grateful! 🙏 #ProductLed #Growth #SaaS #Scaling",
    highlight: "$850M ARR Growth",
    likes: 523,
    comments: 67,
    reposts: 41,
  },
    {
    name: "David Kim",
    handle: "davidkim_cmo",
    title: "Chief Marketing Officer",
    company: "HubSpot",
    companyLogoUrl: "/hubspot-logo.png",
    postUrl: "#",
    userImageUrl: "/placeholder-user.jpg",
    time: "4d",
    content: "🎯 Attribution clarity like never before! After implementing Astra GTM's multi-touch attribution modeling, we finally understand which touchpoints actually drive revenue. No more guessing! 📊 Result? 340% conversion increase across all segments and 445% marketing ROI improvement. Our board is thrilled! 📈 If you're a CMO flying blind on attribution, this is your wake-up call. The data doesn't lie. #Marketing #Attribution #ROI #DataDriven",
    highlight: "340% Conversion Increase",
    likes: 198,
    comments: 29,
    reposts: 14,
  },
  {
    name: "Jennifer Wu",
    handle: "jenniferwu_prez",
    title: "President",
    company: "Shopify",
    companyLogoUrl: "/shopify-logo.png",
    postUrl: "#",
    userImageUrl: "/placeholder-user.jpg",
    time: "1w",
    content: "🤔 We thought we had to choose between SMB and enterprise markets... Astra GTM proved us wrong! Their dual-track GTM strategy let us dominate BOTH simultaneously. $1.2B in new enterprise revenue while maintaining 234% SMB growth! 🔥 Sometimes the best strategy is the one that seems impossible. Big thanks to the team for thinking outside the box! 💪 #Enterprise #SMB #Strategy #Growth",
    highlight: "$1.2B Enterprise Revenue",
    likes: 419,
    comments: 52,
    reposts: 33,
  },
  {
    name: "Alex Chen",
    handle: "alexchen_notion",
    title: "Head of Growth",
    company: "Notion",
    companyLogoUrl: "/placeholder-logo.svg", // Placeholder
    postUrl: "#",
    userImageUrl: "/placeholder-user.jpg",
    time: "5d",
    content: "🌊 Viral growth that actually works! Working with Astra GTM on our viral loops didn't just grow our user base by 2000% - it created an engaged COMMUNITY that sells for us! 🎯 89% of our signups are now organic. Our viral coefficient hit 3.2x at peak. The community literally became our sales team! 🚀 This is what compound growth looks like when done right! 📈 #Viral #Community #Growth #Organic",
    highlight: "2000% User Growth",
    likes: 356,
    comments: 43,
    reposts: 28,
  },
]

export function WallOfLove() {
  return (
    <section className="section-padding section-bg-primary">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-star-white mb-4">
                Wall of Love • LinkedIn Style
            </h2>
            <p className="text-xl text-star-white/70 max-w-3xl mx-auto">
                Real LinkedIn posts from real executives at billion-dollar companies sharing their success stories.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  )
}
