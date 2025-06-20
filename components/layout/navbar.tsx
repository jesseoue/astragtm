"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AstraLogo } from "@/components/icons/astra-logo"
import { Menu, X, Sparkles, Calculator, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Resources" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled || isOpen
          ? "bg-dark-navy/95 backdrop-blur-xl shadow-2xl border-b border-electric-blue/10"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Clean Logo - No Duplication */}
          <Link href="/" className="group" aria-label="Astra GTM Home">
            <AstraLogo />
          </Link>

          {/* Simplified Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 hover:text-electric-blue group",
                  pathname === link.href
                    ? "text-electric-blue"
                    : "text-star-white/80"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* ROI Calculator Quick Access */}
            <Link
              href="#roi-calculator"
              className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-purple-400/10"
            >
              <Calculator size={16} className="mr-2" />
              ROI Calculator
            </Link>
          </nav>

          {/* Conversion-Focused CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-electric-blue/40 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue transition-all duration-300 font-medium"
            >
              <Link href="/pricing">
                View Pricing
              </Link>
            </Button>
            
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-bold shadow-xl shadow-electric-blue/25 hover:shadow-electric-blue/40 hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <Link href="/contact" className="flex items-center relative z-10">
                <Sparkles size={16} className="mr-2" />
                Get Free Marketing Plan
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="border-star-white/30 text-star-white hover:bg-star-white/10 hover:text-electric-blue hover:border-electric-blue/50 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-navy/98 backdrop-blur-xl shadow-2xl border-b border-electric-blue/20">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 hover:bg-electric-blue/10 hover:text-electric-blue",
                    pathname === link.href
                      ? "text-electric-blue bg-electric-blue/10"
                      : "text-star-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* ROI Calculator for Mobile */}
              <Link
                href="#roi-calculator"
                onClick={() => setIsOpen(false)}
                className="flex items-center py-3 px-4 rounded-xl text-base font-medium text-purple-400 hover:bg-purple-400/10 hover:text-purple-300 transition-all duration-300"
              >
                <Calculator size={18} className="mr-3" />
                ROI Calculator
              </Link>
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-4 border-t border-star-white/10">
              <Button
                asChild
                variant="outline"
                className="w-full border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 transition-all duration-300 py-3"
                size="lg"
              >
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  View Pricing
                </Link>
              </Button>
              
              <Button
                asChild
                className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-bold shadow-xl shadow-electric-blue/25 transition-all duration-300 py-3"
                size="lg"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center">
                  <Sparkles size={18} className="mr-2" />
                  Get Free Marketing Plan
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
