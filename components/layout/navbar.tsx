"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AstraLogo } from "@/components/icons/astra-logo"
import { Button } from "@/components/ui/button"
import { Menu, X, Calculator, Sparkles, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/pricing", label: "Pricing", description: "Plans that scale with you" },
  { href: "/case-studies", label: "Case Studies", description: "Real success stories" },
  { href: "/about", label: "About", description: "Our mission and team" },
  { href: "/resources", label: "Resources", description: "Free guides & tools" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
        isScrolled || isOpen
          ? "bg-deep-purple/95 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          <Link 
            href="/" 
            className="group relative" 
            aria-label="Astra GTM Home"
          >
            <div className="transform transition-all duration-300 group-hover:scale-105 group-focus:scale-105 group-focus:outline-none group-focus:ring-2 group-focus:ring-electric-blue group-focus:ring-offset-2 group-focus:ring-offset-dark-navy rounded-lg p-1">
              <AstraLogo />
            </div>
          </Link>

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
                  
                  <span 
                    className={cn(
                      "absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-electric-blue to-purple-400 transition-all duration-300 rounded-full",
                      pathname === link.href || hoveredItem === link.label
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    )}
                  />
                </Link>

                {hoveredItem === link.label && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-dark-navy/95 backdrop-blur-xl border border-electric-blue/20 rounded-lg shadow-2xl whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200">
                    <p className="text-xs text-star-white/70">{link.description}</p>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-navy/95 border-l border-t border-electric-blue/20 rotate-45" />
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="/#roi-calculator"
              className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-purple-400/10 group focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-dark-navy relative"
            >
              <Calculator size={16} className="mr-2 transform group-hover:scale-110 transition-transform duration-200" />
              <span className="relative">ROI Calculator</span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="outline"
              size="sm"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
            
            <Button
              asChild
              size="sm"
            >
              <Link href="/contact" className="flex items-center">
                <Sparkles size={16} className="mr-2" />
                Get Free Growth Plan
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={cn("absolute inset-0 transition-all duration-300", isOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100")} 
                />
                <X 
                  size={24} 
                  className={cn("absolute inset-0 transition-all duration-300", isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0")} 
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div 
        className={cn(
          "absolute top-full left-0 w-full lg:hidden bg-deep-purple/95 backdrop-blur-lg transition-all duration-500 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-2 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-lg font-medium rounded-lg",
                  pathname === link.href ? "bg-electric-blue/10 text-electric-blue" : "text-star-white/80 hover:bg-electric-blue/5 hover:text-electric-blue"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#roi-calculator"
              className="px-4 py-3 text-lg font-medium text-star-white/80 hover:bg-electric-blue/5 hover:text-electric-blue rounded-lg"
            >
              ROI Calculator
            </Link>
          </div>

          <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center justify-center w-full">
                <Sparkles size={16} className="mr-2" />
                Get Free Growth Plan
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing" className="w-full">View Pricing</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
