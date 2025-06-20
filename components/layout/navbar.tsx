"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AstraLogo } from "@/components/icons/astra-logo"
import { Menu, X, Sparkles, Calculator, ArrowRight, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { 
    href: "/about", 
    label: "About",
    submenu: [
      { href: "/about", label: "Our Story" },
      { href: "/about#team", label: "Team" },
      { href: "/about#careers", label: "Careers" },
    ]
  },
  { href: "/blog", label: "Resources" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
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
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Astra GTM Home">
            <AstraLogo className="h-9 w-auto text-star-white group-hover:text-electric-blue transition-colors duration-300" />
            <span className="ml-3 text-xl font-bold text-star-white hidden sm:block">
              Astra<span className="text-gradient bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">GTM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-all duration-300 hover:text-electric-blue group flex items-center",
                    pathname === link.href
                      ? "text-electric-blue"
                      : "text-star-white/80"
                  )}
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown size={14} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Submenu */}
                {link.submenu && activeSubmenu === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-dark-navy/95 backdrop-blur-xl border border-electric-blue/20 rounded-lg shadow-2xl py-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-3 text-sm text-star-white/80 hover:text-electric-blue hover:bg-electric-blue/10 transition-all duration-200"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* ROI Calculator Link */}
            <Link
              href="#roi-calculator"
              className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-purple-400/10"
            >
              <Calculator size={16} className="mr-2" />
              ROI Calculator
            </Link>
          </nav>

          {/* Desktop CTAs - Inspired by Galactic Fed */}
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

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-dark-navy/98 backdrop-blur-xl shadow-2xl border-b border-electric-blue/20">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 mb-8">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
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
                  
                  {/* Mobile Submenu */}
                  {link.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-4 text-sm text-star-white/70 hover:text-electric-blue hover:bg-electric-blue/5 rounded-lg transition-all duration-300"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
            <div className="space-y-4 pt-6 border-t border-star-white/10">
              <Button
                asChild
                variant="outline"
                className="w-full border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 transition-all duration-300 py-3"
                size="lg"
              >
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  View Pricing Plans
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
              
              {/* Contact info for mobile */}
              <div className="mt-6 pt-4 border-t border-star-white/10 text-center">
                <p className="text-star-white/60 text-sm">
                  Ready to scale your revenue? 
                  <Link href="mailto:hello@astragtm.com" className="text-electric-blue hover:text-electric-blue/80 ml-1 font-medium">
                    Let&apos;s talk
                  </Link>
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
