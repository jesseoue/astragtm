"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, X, Send, Check, Users, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface LiveChatProps {
  className?: string
}

export function LiveChat({ className }: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if chat has been shown before
    const chatShown = localStorage.getItem('live-chat-shown')
    if (chatShown) {
      setHasShown(true)
    }

    // Show chat bubble after user engagement
    const timer = setTimeout(() => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 40 || window.scrollY > 1500) {
        setIsVisible(true)
        if (!hasShown) {
          localStorage.setItem('live-chat-shown', 'true')
          setHasShown(true)
        }
      }
    }, 30000) // Show after 30 seconds

    // Also show on deeper engagement
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !isVisible) {
        setTimeout(() => {
          setIsVisible(true)
          if (!hasShown) {
            localStorage.setItem('live-chat-shown', 'true')
            setHasShown(true)
          }
        }, 2000)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible, hasShown])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message || isSubmitting) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          message,
          source: 'live-chat',
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Close chat after showing success
        setTimeout(() => {
          setIsOpen(false)
          setIsVisible(false)
        }, 4000)
      }
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className={cn("fixed bottom-6 left-6 z-50", className)}>
      {/* Chat Bubble */}
      {!isOpen && (
        <div className="relative">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy p-4 rounded-full shadow-2xl shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
          >
            <MessageCircle className="h-6 w-6" />
            
            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-dark-navy/95 text-star-white text-sm py-2 px-3 rounded-lg shadow-xl backdrop-blur-sm border border-electric-blue/20 whitespace-nowrap">
              💬 Quick question? We're here to help!
              <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-navy/95"></div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 max-w-[calc(100vw-3rem)] bg-gradient-to-br from-dark-navy/95 to-deep-purple/90 border border-electric-blue/30 rounded-xl shadow-2xl shadow-electric-blue/20 backdrop-blur-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-electric-blue/20 to-purple-400/20 p-4 border-b border-electric-blue/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-purple-400 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-dark-navy" />
                </div>
                <div>
                  <h3 className="text-star-white font-semibold text-sm">Quick Support</h3>
                  <div className="flex items-center space-x-1 text-xs text-star-white/60">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Usually replies instantly</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-star-white/10 transition-colors group"
              >
                <X className="h-4 w-4 text-star-white/60 group-hover:text-star-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {!isSubmitted ? (
              <>
                {/* Welcome Message */}
                <div className="mb-4 p-3 bg-electric-blue/10 border border-electric-blue/20 rounded-lg">
                  <p className="text-star-white text-sm mb-2">
                    👋 Hi! Need help with your GTM strategy?
                  </p>
                  <p className="text-star-white/70 text-xs">
                    Drop us a quick message and we'll get back to you within minutes.
                  </p>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-between text-xs text-star-white/60 mb-4 px-2">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-electric-blue" />
                    <span>847 messages this week</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-green-400" />
                    <span>~2 min response time</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-dark-navy/60 border-star-white/30 text-star-white placeholder:text-star-white/50 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-sm"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="What can we help you with? (e.g., 'How do I increase my conversion rate?')"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="bg-dark-navy/60 border-star-white/30 text-star-white placeholder:text-star-white/50 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 text-sm resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-medium py-2 text-sm rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-dark-navy/30 border-t-dark-navy rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-star-white/50 mt-3 text-center">
                  🔒 Your message is secure and private
                </p>
              </>
            ) : (
              <>
                {/* Success State */}
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400/20 to-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                    <Check className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-star-white font-semibold text-lg mb-2">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-star-white/70 text-sm mb-4">
                    Thanks for reaching out! We'll get back to you within 2 minutes.
                  </p>
                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-3">
                    <p className="text-star-white/80 text-xs">
                      💡 <strong>While you wait:</strong> Check out our free ROI calculator above to see your revenue potential!
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
} 