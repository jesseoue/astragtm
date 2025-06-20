"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Sparkles, Calculator, Mail, MessageCircle, ChevronRight } from "lucide-react"
import Link from "next/link"

const iconMap = {
  arrow: ArrowRight,
  phone: Phone,
  sparkles: Sparkles,
  calculator: Calculator,
  mail: Mail,
  message: MessageCircle,
  chevron: ChevronRight,
} as const

interface CTAButtonProps {
  children: React.ReactNode
  intent?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  icon?: keyof typeof iconMap
  href?: string
  onClick?: () => void
  glow?: boolean
  className?: string
  disabled?: boolean
}

export function CTAButton({
  children,
  intent = "primary",
  size = "md",
  icon,
  href,
  onClick,
  glow = false,
  className,
  disabled = false,
}: CTAButtonProps) {
  const Icon = icon ? iconMap[icon] : null

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
  
  const intentStyles = {
    primary: "bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 shadow-lg shadow-electric-blue/25",
    secondary: "bg-gradient-to-r from-purple-500 to-pink-400 text-white hover:from-purple-600 hover:to-pink-500 shadow-lg shadow-purple-500/25",
    outline: "border-2 border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue/70 backdrop-blur-sm",
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  }

  const glowStyles = glow ? "shadow-2xl shadow-electric-blue/30 hover:shadow-electric-blue/40" : ""

  const buttonClassName = cn(
    baseStyles,
    intentStyles[intent],
    sizeStyles[size],
    glowStyles,
    disabled && "opacity-50 cursor-not-allowed hover:scale-100",
    className
  )

  const content = (
    <>
      {children}
      {Icon && <Icon className="ml-2 h-4 w-4" />}
    </>
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonClassName}>
        {content}
      </Link>
    )
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
      variant="ghost"
    >
      {content}
    </Button>
  )
} 