"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AstraLogo } from "@/components/icons/astra-logo"
import { Menu, X, Sparkles, Calculator, ArrowRight, Zap } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/pricing", label: "Pricing", description: "Simple, transparent pricing" },
  { href: "/case-studies", label: "Case Studies", description: "Real results from real clients" },
  { href: "/about", label: "About", description: "Meet the growth experts" },
  { href: "/blog", label: "Resources", description: "GTM insights & strategies" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Progressive disclosure for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
        isScrolled || isOpen
          ? "bg-dark-navy/98 backdrop-blur-xl shadow-2xl border-b border-electric-blue/10"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Enhanced Logo with Micro-Animation */}
          <Link 
            href="/" 
            className="group relative" 
            aria-label="Astra GTM Home - Revenue Growth Experts"
          >
            <div className="transform transition-all duration-300 group-hover:scale-105 group-focus:scale-105 group-focus:outline-none group-focus:ring-2 group-focus:ring-electric-blue group-focus:ring-offset-2 group-focus:ring-offset-dark-navy rounded-lg p-1">
              <AstraLogo />
            </div>
          </Link>

          {/* Enhanced Desktop Navigation with Hover Effects */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredItem(link.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group flex items-center focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-dark-navy",
                    pathname === link.href
                      ? "text-electric-blue bg-electric-blue/10"
                      : "text-star-white/80 hover:text-electric-blue hover:bg-electric-blue/5"
                  )}
                >
                  {link.label}
                  
                  {/* Enhanced Bottom Border Animation */}
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-electric-blue to-purple-400 transition-all duration-300 rounded-full",
                      pathname === link.href || hoveredItem === link.label
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    )}
                  />
                </Link>

                {/* Micro-Interaction Tooltip */}
                {hoveredItem === link.label && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-dark-navy/95 backdrop-blur-xl border border-electric-blue/20 rounded-lg shadow-2xl whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
                    <p className="text-xs text-star-white/70">{link.description}</p>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-navy/95 border-l border-t border-electric-blue/20 rotate-45" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Enhanced ROI Calculator Link with Pulse Animation */}
            <Link
              href="#roi-calculator"
              className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-purple-400/10 group focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-dark-navy relative"
            >
              <div className="absolute inset-0 bg-purple-400/5 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Calculator size={16} className="mr-2 transform group-hover:scale-110 transition-transform duration-200" />
              <span className="relative">ROI Calculator</span>
              <Zap size={12} className="ml-1 text-yellow-400 animate-pulse" />
            </Link>
          </nav>

          {/* Conversion-Optimized CTAs with Enhanced Micro-Copy */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-electric-blue/40 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue transition-all duration-300 font-medium hover:scale-105 focus:scale-105 group"
            >
              <Link href="/pricing" className="relative overflow-hidden">
                <span className="relative z-10">View Pricing</span>
                <div className="absolute inset-0 bg-electric-blue/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-bold shadow-xl shadow-electric-blue/25 hover:shadow-electric-blue/40 hover:scale-110 focus:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <Link href="/contact" className="flex items-center relative z-10">
                <Sparkles size={16} className="mr-2 animate-pulse" />
                <span>Get Free Growth Plan</span>
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </Link>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className={cn(
                "border-star-white/30 text-star-white hover:bg-star-white/10 hover:text-electric-blue hover:border-electric-blue/50 transition-all duration-300 focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-dark-navy",
                isOpen && "border-electric-blue/50 text-electric-blue bg-electric-blue/10"
              )}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                  )} 
                />
                <X 
                  size={24} 
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0"
                  )} 
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu with Progressive Disclosure */}
      <div 
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-dark-navy/98 backdrop-blur-xl shadow-2xl border-b border-electric-blue/20 transition-all duration-500 ease-out",
          isOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-8 pointer-events-none"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Mobile Navigation Links with Staggered Animation */}
          <div className="flex flex-col space-y-2 mb-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex flex-col py-4 px-4 rounded-xl text-base font-medium transition-all duration-300 hover:bg-electric-blue/10 hover:text-electric-blue group focus:outline-none focus:ring-2 focus:ring-electric-blue focus:ring-offset-2 focus:ring-offset-dark-navy",
                  pathname === link.href
                    ? "text-electric-blue bg-electric-blue/10"
                    : "text-star-white",
                  isOpen && `animate-in slide-in-from-left-8 fade-in-0 duration-300`,
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-semibold">{link.label}</span>
                <span className="text-sm text-star-white/60 group-hover:text-electric-blue/80 transition-colors duration-200">
                  {link.description}
                </span>
              </Link>
            ))}
            
            {/* Mobile ROI Calculator */}
            <Link
              href="#roi-calculator"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center py-4 px-4 rounded-xl text-base font-medium text-purple-400 hover:bg-purple-400/10 hover:text-purple-300 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-dark-navy",
                isOpen && "animate-in slide-in-from-left-8 fade-in-0 duration-300"
              )}
              style={{ animationDelay: "400ms" }}
            >
              <Calculator size={18} className="mr-3 group-hover:scale-110 transition-transform duration-200" />
              <span>ROI Calculator</span>
              <Zap size={14} className="ml-2 text-yellow-400 animate-pulse" />
            </Link>
          </div>

          {/* Mobile CTAs with Enhanced Micro-Copy */}
          <div 
            className={cn(
              "space-y-3 pt-4 border-t border-star-white/10",
              isOpen && "animate-in slide-in-from-bottom-8 fade-in-0 duration-300"
            )}
            style={{ animationDelay: "500ms" }}
          >
            <Button
              asChild
              variant="outline"
              className="w-full border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 transition-all duration-300 py-3 group"
              size="lg"
            >
              <Link href="/pricing" onClick={() => setIsOpen(false)} className="relative overflow-hidden">
                <span className="relative z-10">View Pricing Plans</span>
                <div className="absolute inset-0 bg-electric-blue/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
            
            <Button
              asChild
              className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-bold shadow-xl shadow-electric-blue/25 transition-all duration-300 py-3 group relative overflow-hidden"
              size="lg"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center relative z-10">
                <Sparkles size={18} className="mr-2 animate-pulse" />
                <span>Get Free Growth Plan</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Mobile Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </Link>
            </Button>

            {/* Value Proposition for Mobile */}
            <div className="text-center pt-4">
              <p className="text-star-white/60 text-sm">
                🚀 <span className="text-electric-blue font-semibold">500+ companies</span> scaled with our proven GTM system
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
