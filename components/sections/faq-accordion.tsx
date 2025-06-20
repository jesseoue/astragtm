import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"

const faqItems = [
  {
    question: "What types of startups do you typically work with?",
    answer:
      "We specialize in early-stage B2B SaaS startups, typically Seed to Series A, that are looking to establish or scale their Go-To-Market operations with AI-driven strategies.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While results vary, many clients see initial improvements in lead quality and campaign efficiency within the first month. Significant GTM transformation and ROI are typically observed within 3-6 months.",
  },
  {
    question: "What makes Astra GTM different from other consultancies?",
    answer:
      "Our core differentiator is our deep expertise in leveraging AI and automation tools (like Clay, n8n, Inngest) specifically for GTM. We don't just strategize; we build and implement intelligent systems.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes, while our listed packages cover common needs, we understand every startup is unique. We can tailor a custom engagement based on your specific requirements and budget.",
  },
  {
    question: "What is 'SDR-Assist automations'?",
    answer:
      "SDR-Assist automations are AI-powered workflows we build to handle repetitive tasks for Sales Development Reps, such as lead enrichment, personalized first-draft emails, and CRM data entry, freeing up SDRs to focus on selling.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Success is measured against mutually agreed-upon KPIs, which may include qualified leads generated, meeting booking rates, sales cycle length reduction, and ultimately, revenue growth.",
  },
]

export function FaqAccordion() {
  return (
    <section id="resources" className="py-20 md:py-32 bg-dark-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-star-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-star-white/80 max-w-2xl mx-auto">
            Find answers to common questions about our services and approach.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glassmorphism-card rounded-lg px-2 border-star-white/20"
              >
                <AccordionTrigger className="p-6 text-left font-semibold text-star-white hover:text-electric-blue hover:no-underline text-md">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-star-white/80 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
