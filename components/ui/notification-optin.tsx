"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bell, X, Shield, Users, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface NotificationOptinProps {
  className?: string
}

export function NotificationOptin({ className }: NotificationOptinProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isOptedIn, setIsOptedIn] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user has already opted in or dismissed
    const hasOptedIn = localStorage.getItem('notifications-opted-in')
    const hasDismissed = localStorage.getItem('notifications-dismissed')
    
    if (hasOptedIn || hasDismissed) {
      return
    }

    // Show after user has been engaged for a while (after they've scrolled or stayed)
    const timer = setTimeout(() => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 20 || window.scrollY > 1000) {
        setIsVisible(true)
      }
    }, 25000) // Show after 25 seconds of engagement

    // Also show when user scrolls past hero section
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 30 && !isDismissed) {
        setTimeout(() => setIsVisible(true), 3000)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDismissed])

  const handleOptIn = async () => {
    try {
      // Request notification permission
      if ('Notification' in window) {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          setIsOptedIn(true)
          localStorage.setItem('notifications-opted-in', 'true')
          
          // Send opt-in to your backend
          await fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              source: 'notification-optin',
              timestamp: new Date().toISOString()
            })
          })

          // Show success and hide after delay
          setTimeout(() => {
            setIsVisible(false)
          }, 3000)
        }
      }
    } catch (error) {
      console.error('Failed to opt in to notifications:', error)
    }
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
    localStorage.setItem('notifications-dismissed', 'true')
  }

  if (!isVisible) return null

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-40 max-w-sm transform transition-all duration-500 ease-out",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      className
    )}>
      <div className="bg-gradient-to-br from-dark-navy/95 to-deep-purple/90 border border-electric-blue/30 rounded-xl shadow-2xl shadow-electric-blue/20 backdrop-blur-xl p-5 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-blue via-purple-400 to-pink-400"></div>
        
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-star-white/10 transition-colors group"
        >
          <X className="h-4 w-4 text-star-white/60 group-hover:text-star-white" />
        </button>

        {!isOptedIn ? (
          <>
            {/* Icon and Header */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-electric-blue/20 to-purple-400/20 rounded-full flex items-center justify-center border border-electric-blue/30">
                  <Bell className="h-5 w-5 text-electric-blue animate-pulse" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-star-white font-semibold text-sm mb-1">
                  🚀 Stay Ahead of the Game
                </h3>
                <p className="text-star-white/70 text-xs leading-relaxed">
                  Get instant alerts for new GTM strategies, case studies, and tools that could boost your revenue.
                </p>
              </div>
            </div>

            {/* Social Proof & Safety */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-4 text-xs text-star-white/60">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3 text-electric-blue" />
                  <span>2,847 SaaS founders subscribed</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 text-xs text-star-white/60">
                <Shield className="h-3 w-3 text-green-400" />
                <span>Privacy-first • No spam • Unsubscribe anytime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-2">
              <Button
                onClick={handleOptIn}
                className="flex-1 bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-medium text-xs py-2 px-3 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Enable Notifications
              </Button>
              <Button
                onClick={handleDismiss}
                variant="ghost"
                className="text-star-white/60 hover:text-star-white hover:bg-star-white/10 text-xs py-2 px-3 rounded-lg transition-colors"
              >
                Not now
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center py-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400/20 to-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-400/30">
                <Check className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-star-white font-semibold text-sm mb-2">
                🎉 You're all set!
              </h3>
              <p className="text-star-white/70 text-xs">
                You'll now get alerts for new growth strategies and tools.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
} 