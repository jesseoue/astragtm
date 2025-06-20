"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { CheckCircle, Loader2, ArrowRight } from "lucide-react"

const leadCaptureSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().optional(),
  companySize: z.string().optional(),
  challenge: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to continue")
})

type LeadCaptureForm = z.infer<typeof leadCaptureSchema>

interface LeadCaptureFormProps {
  variant?: "modal" | "inline" | "sidebar"
  title?: string
  description?: string
  submitButtonText?: string
  className?: string
  onSubmit?: (data: LeadCaptureForm) => Promise<void>
}

export function LeadCaptureForm({
  variant = "inline",
  title = "Get Your Free Revenue Audit",
  description = "Discover growth opportunities in your current GTM strategy",
  submitButtonText = "Get Free Audit",
  className,
  onSubmit
}: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<LeadCaptureForm>({
    resolver: zodResolver(leadCaptureSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      challenge: "",
      consent: false
    }
  })

  const handleSubmit = async (data: LeadCaptureForm) => {
    setIsSubmitting(true)
    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Default submission logic (could be API call)
        console.log("Form submitted:", data)
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        className={cn(
          "bg-gradient-to-br from-electric-blue/10 to-purple-400/10 border border-electric-blue/20 rounded-xl p-8 text-center transition-all duration-500 scale-100 opacity-100",
          className
        )}
      >
        <div className="animate-bounce">
          <CheckCircle className="w-16 h-16 text-electric-blue mx-auto mb-4" />
        </div>
        <h3 className="text-2xl font-bold text-star-white mb-2">Thank You!</h3>
        <p className="text-star-white/80 mb-4">
          We've received your request and will be in touch within 24 hours with your personalized revenue audit.
        </p>
        <p className="text-sm text-star-white/60">
          Check your email for next steps and calendar link.
        </p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "bg-dark-navy/80 backdrop-blur-lg border border-star-white/20 rounded-xl p-6 shadow-2xl shadow-electric-blue/10 animate-in slide-in-from-bottom-4 duration-700",
        variant === "modal" && "max-w-md mx-auto",
        variant === "sidebar" && "sticky top-8",
        className
      )}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-star-white mb-2">{title}</h3>
        <p className="text-star-white/70 text-sm">{description}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="animate-in slide-in-from-left duration-300">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-star-white">First Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John" 
                        className="bg-dark-navy/50 border-star-white/20 text-star-white focus:border-electric-blue/50 transition-colors" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="animate-in slide-in-from-right duration-300 delay-75">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-star-white">Last Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Doe" 
                        className="bg-dark-navy/50 border-star-white/20 text-star-white focus:border-electric-blue/50 transition-colors" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="animate-in slide-in-from-bottom duration-300 delay-150">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-star-white">Work Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-dark-navy/50 border-star-white/20 text-star-white focus:border-electric-blue/50 transition-colors" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="animate-in slide-in-from-bottom duration-300 delay-200">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-star-white">Company</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your Company" 
                      className="bg-dark-navy/50 border-star-white/20 text-star-white focus:border-electric-blue/50 transition-colors" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="animate-in slide-in-from-bottom duration-300 delay-250">
            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-star-white">Company Size</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-dark-navy/50 border-star-white/20 text-star-white focus:border-electric-blue/50 transition-colors">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201+">201+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="animate-in slide-in-from-bottom duration-300 delay-300">
            <FormField
              control={form.control}
              name="challenge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-star-white">Biggest GTM Challenge (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="e.g., Low conversion rates, long sales cycles, lead quality..." 
                      className="bg-dark-navy/50 border-star-white/20 text-star-white resize-none focus:border-electric-blue/50 transition-colors" 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="animate-in slide-in-from-bottom duration-300 delay-350">
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-star-white/20 data-[state=checked]:bg-electric-blue data-[state=checked]:border-electric-blue"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-star-white/80">
                      I agree to receive communications from Astra GTM about relevant content and services.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="animate-in slide-in-from-bottom duration-300 delay-400">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy hover:from-electric-blue/90 hover:to-purple-400/90 font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg shadow-electric-blue/25"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {submitButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
} 