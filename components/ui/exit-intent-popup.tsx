"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Gift, ArrowRight, Sparkles } from "lucide-react"
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

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if cursor leaves from the top of the viewport
    if (e.clientY <= 0 && !hasTriggered) {
      setIsVisible(true)
      setHasTriggered(true)
    }
  }, [hasTriggered])

  const handleScroll = useCallback(() => {
    // Alternative trigger: when user has scrolled down significantly and then tries to leave
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    if (scrollPercent > 50 && !hasTriggered) {
      // Add slight delay to avoid premature triggering
      setTimeout(() => {
        if (!hasTriggered) {
          document.addEventListener('mouseleave', handleMouseLeave)
        }
      }, 1000)
    }
  }, [hasTriggered, handleMouseLeave])

  useEffect(() => {
    if (!hasTriggered) {
      // Add event listeners
      document.addEventListener('mouseleave', handleMouseLeave)
      window.addEventListener('scroll', handleScroll)

      // Alternative timeout trigger (fallback after 30 seconds of activity)
      const timeoutId = setTimeout(() => {
        if (!hasTriggered) {
          setIsVisible(true)
          setHasTriggered(true)
        }
      }, 30000)

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave)
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [hasTriggered, handleMouseLeave, handleScroll])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && !isSubmitted) {
      setIsSubmitted(true)
      if (onEmailCapture) {
        await onEmailCapture(email)
      }
      
      // Close popup after 2 seconds showing success
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-out",
      isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      className
    )}>
      {/* Backdrop with slow blur effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-dark-navy/80 backdrop-blur-sm transition-all duration-1000 ease-out",
          isVisible && "backdrop-blur-md"
        )}
        onClick={handleClose}
      />
      
      {/* Popup content */}
      <Card className={cn(
        "relative w-full max-w-md mx-4 bg-gradient-to-br from-dark-navy via-deep-purple to-dark-navy border-electric-blue/20 shadow-2xl shadow-electric-blue/10 transform transition-all duration-500 ease-out",
        isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
      )}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-star-white/10 hover:bg-star-white/20 transition-colors duration-200"
        >
          <X className="h-4 w-4 text-star-white" />
        </button>

        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-electric-blue/20 to-purple-400/20 rounded-full">
              <Gift className="h-8 w-8 text-electric-blue" />
            </div>
          </div>
          
          {!isSubmitted ? (
            <>
              <CardTitle className="text-2xl font-bold text-star-white mb-2">
                Wait! Before You Go...
              </CardTitle>
              <CardDescription className="text-star-white/80 text-base">
                Get our exclusive <span className="text-electric-blue font-semibold">SaaS Growth Playbook</span> 
                {" "}with proven strategies that generated <span className="text-electric-blue font-semibold">$2.4B+ in revenue</span> for our clients.
              </CardDescription>
            </>
          ) : (
            <>
              <div className="animate-bounce mb-4">
                <Sparkles className="h-12 w-12 text-electric-blue mx-auto" />
              </div>
              <CardTitle className="text-2xl font-bold text-electric-blue mb-2">
                Success! 🎉
              </CardTitle>
              <CardDescription className="text-star-white/80">
                Your Growth Playbook is on its way! Check your email in the next few minutes.
              </CardDescription>
            </>
          )}
        </CardHeader>

        {!isSubmitted && (
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-dark-navy/50 border-star-white/20 text-star-white placeholder:text-star-white/50 focus:border-electric-blue/50 transition-colors"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-semibold py-3 text-lg shadow-lg shadow-electric-blue/25 hover:shadow-electric-blue/40 transition-all duration-200"
              >
                Get My Free Playbook
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            {/* Value proposition */}
            <div className="mt-6 pt-4 border-t border-star-white/10">
              <div className="grid grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <div className="text-electric-blue font-bold text-lg">340%</div>
                  <div className="text-star-white/60">Average ROI</div>
                </div>
                <div>
                  <div className="text-electric-blue font-bold text-lg">60 days</div>
                  <div className="text-star-white/60">To Results</div>
                </div>
              </div>
              <p className="text-center text-star-white/60 text-xs mt-4">
                Join 500+ SaaS companies that scaled with these strategies. No spam, unsubscribe anytime.
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
} 