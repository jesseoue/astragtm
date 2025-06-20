import React, { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'resources-hub-newsletter' })
      })

      if (response.ok) {
        setIsSubmitted(true)
        console.log('Newsletter subscription successful:', email)
      } else {
        console.error('Newsletter subscription failed.')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
    }
  }
  
  const allContent = [...featuredContent, ...guides, ...tools, ...podcastEpisodes, ...webinars, ...caseStudies]

  return (
    <div>
      {/* Rest of the component code */}
    </div>
  )
} 