"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Gift, ArrowRight, Sparkles, TrendingUp, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExitIntentPopupProps {
  onEmailCapture?: (email: string) => void
  className?: string
}

export function ExitIntentPopup({ onEmailCapture, className }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isBlurring, setIsBlurring] = useState(false)

  const showPopup = useCallback(() => {
    if (!hasTriggered) {
      setIsBlurring(true)
      // Start blur effect before showing popup
      setTimeout(() => {
        setIsVisible(true)
        setHasTriggered(true)
      }, 300)
    }
  }, [hasTriggered])

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if cursor leaves from the top of the viewport with more strict conditions
    if (e.clientY <= 0 && e.clientX > 100 && e.clientX < window.innerWidth - 100 && !hasTriggered) {
      // Add delay to prevent accidental triggering
      setTimeout(() => {
        if (!hasTriggered) {
          showPopup()
        }
      }, 800)
    }
  }, [hasTriggered, showPopup])

  const handleScroll = useCallback(() => {
    // Enhanced scroll trigger: when user has scrolled significantly
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    if (scrollPercent > 60 && !hasTriggered) {
      // Add delay to avoid premature triggering during normal scrolling
      setTimeout(() => {
        if (!hasTriggered) {
          document.addEventListener('mouseleave', handleMouseLeave, { once: true })
        }
      }, 2000)
    }
  }, [hasTriggered, handleMouseLeave])

  useEffect(() => {
    if (!hasTriggered) {
      // Don't add mouse leave listener immediately - only after user engagement
      let engagementTimer: NodeJS.Timeout
      let scrollTimer: NodeJS.Timeout
      let fallbackTimer: NodeJS.Timeout

      // Wait for user engagement before activating exit intent
      const activateAfterEngagement = () => {
        engagementTimer = setTimeout(() => {
          document.addEventListener('mouseleave', handleMouseLeave)
          window.addEventListener('scroll', handleScroll)
        }, 15000) // Wait 15 seconds before even activating exit intent
      }

      // Scroll-based activation (user shows interest)
      const handleInitialScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        if (scrollPercent > 25) {
          activateAfterEngagement()
          window.removeEventListener('scroll', handleInitialScroll)
        }
      }

      // Time-based activation (fallback after longer period)
      fallbackTimer = setTimeout(() => {
        if (!hasTriggered) {
          showPopup()
        }
      }, 90000) // 90 seconds instead of 30

      // Start listening for initial engagement
      window.addEventListener('scroll', handleInitialScroll)

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave)
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', handleInitialScroll)
        clearTimeout(engagementTimer)
        clearTimeout(scrollTimer)
        clearTimeout(fallbackTimer)
      }
    }
  }, [hasTriggered, handleMouseLeave, handleScroll, showPopup])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && !isSubmitted) {
      setIsSubmitted(true)
      if (onEmailCapture) {
        await onEmailCapture(email)
      }
      
      // Close popup after showing success
      setTimeout(() => {
        setIsVisible(false)
        setIsBlurring(false)
      }, 3000)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      setIsBlurring(false)
    }, 500)
  }

  if (!isBlurring && !isVisible) return null

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-out",
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      className
    )}>
      {/* Enhanced backdrop with progressive blur */}
      <div 
        className={cn(
          "absolute inset-0 bg-dark-navy/60 transition-all duration-1500 ease-out",
          isBlurring && "backdrop-blur-sm",
          isVisible && "backdrop-blur-lg bg-dark-navy/80"
        )}
        onClick={handleClose}
      />
      
      {/* Popup content with enhanced design */}
      <Card className={cn(
        "relative w-full max-w-lg mx-4 bg-gradient-to-br from-dark-navy/95 via-deep-purple/90 to-dark-navy/95 border border-electric-blue/30 shadow-2xl shadow-electric-blue/20 backdrop-blur-xl transform transition-all duration-700 ease-out",
        isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
      )}>
        {/* Close button with better styling */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-star-white/10 hover:bg-star-white/20 hover:scale-110 transition-all duration-200 group"
        >
          <X className="h-4 w-4 text-star-white group-hover:text-electric-blue transition-colors" />
        </button>

        <CardHeader className="text-center pb-6 pt-8">
          <div className="flex items-center justify-center mb-6">
            <div className="relative p-4 bg-gradient-to-r from-electric-blue/20 to-purple-400/20 rounded-full border border-electric-blue/30">
              <Gift className="h-10 w-10 text-electric-blue animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          {!isSubmitted ? (
            <>
              <CardTitle className="text-3xl font-bold text-star-white mb-4 leading-tight">
                Don&apos;t Miss Out on <span className="text-gradient bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">2024&apos;s #1</span> SaaS Growth Blueprint
              </CardTitle>
              <CardDescription className="text-star-white/80 text-lg leading-relaxed">
                Before you leave, grab our <span className="text-electric-blue font-semibold">exclusive playbook</span> that helped 
                <span className="text-electric-blue font-semibold"> 500+ SaaS companies</span> generate 
                <span className="text-green-400 font-bold"> $2.4B+ in revenue.</span>
                <br />
                <span className="text-sm text-star-white/60 mt-2 block">
                  Usually $497 • Free for limited time
                </span>
              </CardDescription>
            </>
          ) : (
            <>
              <div className="animate-bounce mb-6">
                <div className="relative">
                  <Sparkles className="h-16 w-16 text-electric-blue mx-auto" />
                  <div className="absolute inset-0 h-16 w-16 mx-auto bg-electric-blue/20 rounded-full animate-ping"></div>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-electric-blue mb-4">
                🎉 Welcome to the Club!
              </CardTitle>
              <CardDescription className="text-star-white/80 text-lg">
                Your SaaS Growth Blueprint is on its way! You&apos;ll receive it within 2 minutes.
                <br />
                <span className="text-electric-blue font-semibold text-sm block mt-2">
                  Check your spam folder just in case
                </span>
              </CardDescription>
            </>
          )}
        </CardHeader>

        {!isSubmitted && (
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your work email (e.g., you@company.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-navy/60 border-star-white/30 text-star-white placeholder:text-star-white/50 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-200 py-4 text-lg"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-bold py-4 text-lg shadow-2xl shadow-electric-blue/30 hover:shadow-electric-blue/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Claim My Free Blueprint
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </form>

            {/* Enhanced value proposition */}
            <div className="mt-8 pt-6 border-t border-star-white/20">
              <div className="grid grid-cols-3 gap-4 text-center text-sm mb-6">
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                    <span className="text-green-400 font-bold text-xl">340%</span>
                  </div>
                  <div className="text-star-white/60">Average ROI</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 text-electric-blue mr-1" />
                    <span className="text-electric-blue font-bold text-xl">60</span>
                  </div>
                  <div className="text-star-white/60">Days to Results</div>
                </div>
                <div className="space-y-1">
                  <div className="text-purple-400 font-bold text-xl">500+</div>
                  <div className="text-star-white/60">Companies Scaled</div>
                </div>
              </div>
              
              <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-4 text-center">
                <p className="text-star-white/80 text-sm">
                  🔒 <span className="font-semibold">Completely Free.</span> No spam. Unsubscribe anytime.
                  <br />
                  <span className="text-electric-blue text-xs">Join top SaaS founders who trust our strategies</span>
                </p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
} 