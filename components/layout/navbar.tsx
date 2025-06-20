"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AstraLogo } from "@/components/icons/astra-logo"
import { Menu, XIcon, Briefcase, Zap, BookOpen, Phone } from "lucide-react" // Added more icons
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Services", icon: <Briefcase size={16} /> },
  { href: "#tech-stack", label: "Tech Stack", icon: <Zap size={16} /> },
  { href: "#resources", label: "Resources", icon: <BookOpen size={16} /> }, // Assuming FAQ is a resource
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
          ? "bg-dark-navy/80 backdrop-blur-lg shadow-lg border-b border-star-white/10"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center group" aria-label="Astra GTM Home">
            <AstraLogo className="h-7 w-auto text-star-white" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-star-white/80 hover:text-electric-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-electric-blue text-dark-navy hover:bg-electric-blue/90">
              <Link href="#book-call">
                <Phone size={16} className="mr-2" />
                Book Call
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="border-star-white/50 text-star-white hover:bg-star-white/10 hover:text-electric-blue"
            >
              {isOpen ? <XIcon size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-navy/95 backdrop-blur-md shadow-xl pb-6 border-b border-star-white/10">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 py-2 text-base font-medium text-star-white hover:text-electric-blue transition-colors"
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
            <Button
              asChild
              variant="default"
              className="w-full bg-electric-blue text-dark-navy hover:bg-electric-blue/90"
            >
              <Link href="#book-call" onClick={() => setIsOpen(false)}>
                <Phone size={16} className="mr-2" />
                Book Call
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
