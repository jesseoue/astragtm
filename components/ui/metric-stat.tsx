"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MetricStatProps {
  value: string | number
  label: string
  suffix?: string
  prefix?: string
  description?: string
  highlight?: boolean
  className?: string
  delay?: number
}

export function MetricStat({
  value,
  label,
  suffix = "",
  prefix = "",
  description,
  highlight = false,
  className,
  delay = 0
}: MetricStatProps) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Animate number counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          
          if (typeof value === 'number') {
            let start = 0
            const end = value
            const duration = 2000
            const incrementTime = 50
            const totalSteps = duration / incrementTime
            const increment = end / totalSteps

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                setDisplayValue(end)
                clearInterval(timer)
              } else {
                setDisplayValue(Math.floor(start))
              }
            }, incrementTime)

            return () => clearInterval(timer)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, isVisible])

  return (
    <div
      ref={ref}
      className={cn(
        "text-center p-6 transition-all duration-700 opacity-0 translate-y-10",
        isVisible && "opacity-100 translate-y-0",
        highlight && "bg-gradient-to-br from-electric-blue/10 to-electric-blue/5 rounded-xl border border-electric-blue/20 relative",
        className
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div
        className={cn(
          "text-4xl md:text-5xl font-bold mb-2 transition-all duration-500",
          isVisible && "scale-100",
          !isVisible && "scale-75",
          highlight ? "text-electric-blue" : "text-star-white"
        )}
      >
        {prefix}
        {typeof value === 'number' ? displayValue : value}
        {suffix}
      </div>
      
      <div className={cn(
        "text-lg font-semibold mb-1",
        highlight ? "text-electric-blue/90" : "text-star-white/90"
      )}>
        {label}
      </div>
      
      {description && (
        <div className="text-sm text-star-white/60 max-w-[200px] mx-auto">
          {description}
        </div>
      )}

      {highlight && (
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-transparent to-electric-blue/20 rounded-xl animate-pulse-slow" />
      )}
    </div>
  )
} 