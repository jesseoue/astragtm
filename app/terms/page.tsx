import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Astra GTM | Legal Terms & Conditions",
  description: "Comprehensive terms of service governing your use of Astra GTM's SaaS revenue optimization platform. Clear legal framework for our business relationship.",
  openGraph: {
    title: "Terms of Service - Astra GTM",
    description: "Legal terms and conditions for using our services",
  }
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-navy">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="bg-gradient-to-br from-dark-navy/80 to-deep-purple/20 border border-electric-blue/20 rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-star-white mb-4">
                Terms of Service
              </h1>
              <p className="text-star-white/70 text-lg max-w-2xl mx-auto">
                These terms establish the legal framework for our business relationship. 
                By using our services, you agree to these terms in their entirety.
              </p>
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-red-400/10 border border-red-400/20 rounded-full text-red-400 text-sm font-medium">
                ⚖️ Last Updated: January 2025 • Legally Binding Agreement
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6 mb-8">
                <h2 className="text-star-white text-xl font-bold mb-3">⚠️ Important Legal Notice</h2>
                <p className="text-star-white/80 text-sm leading-relaxed mb-0">
                  These terms constitute a legally binding agreement. By accessing or using Astra GTM services, 
                  you acknowledge that you have read, understood, and agree to be bound by these terms. 
                  <strong className="text-red-400"> If you do not agree, you must not use our services.</strong>
                </p>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  1. Acceptance of Terms & Binding Agreement
                </h2>
                
                <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                  <p className="text-star-white/80 text-sm leading-relaxed mb-4">
                    <strong className="text-electric-blue">Binding Contract:</strong> These Terms of Service ("Terms") form a legally 
                    binding contract between you ("Customer," "Client," "User," or "You") and Astra GTM, LLC ("Company," "We," "Us," or "Our").
                  </p>
                  
                  <ul className="text-star-white/80 space-y-2 text-sm">
                    <li>• <strong>Immediate Effect:</strong> These terms take effect immediately upon your first use of our services</li>
                    <li>• <strong>Ongoing Acceptance:</strong> Continued use constitutes ongoing acceptance of current terms</li>
                    <li>• <strong>Authority Requirement:</strong> You must have legal authority to bind your organization to these terms</li>
                    <li>• <strong>Age Requirement:</strong> You must be at least 18 years old and legally competent to enter contracts</li>
                    <li>• <strong>Business Use Only:</strong> Our services are intended for business use by qualified commercial entities</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  2. Service Description & Scope
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-electric-blue mb-3">Services Provided</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>GTM Consulting:</strong> Strategic go-to-market planning and implementation</li>
                      <li>• <strong>Process Automation:</strong> Sales and marketing workflow optimization using industry-standard tools</li>
                      <li>• <strong>Data Analysis:</strong> Revenue performance analysis and recommendations</li>
                      <li>• <strong>Training & Support:</strong> Team education and ongoing system support</li>
                      <li>• <strong>Custom Solutions:</strong> Bespoke implementations based on client requirements</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
                    <h3 className="text-yellow-400 font-semibold mb-3">⚠️ Service Limitations & Disclaimers</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Services are provided "AS IS" without guarantees of specific outcomes</li>
                      <li>• Results depend on client implementation, market conditions, and other factors beyond our control</li>
                      <li>• We reserve the right to modify, suspend, or discontinue services with 30 days notice</li>
                      <li>• Service availability is not guaranteed to be uninterrupted or error-free</li>
                      <li>• Third-party tool dependencies may affect service delivery</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  3. Payment Terms & Billing (Strict Enforcement)
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-green-400 font-semibold mb-3">💳 Payment Requirements</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Payment due within 15 days of invoice date</li>
                      <li>• All fees are non-refundable unless specified</li>
                      <li>• Late payments incur 1.5% monthly interest charge</li>
                      <li>• Services may be suspended for non-payment</li>
                      <li>• Currency: USD unless otherwise agreed</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6">
                    <h3 className="text-red-400 font-semibold mb-3">⚠️ Payment Enforcement</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Accounts 30+ days overdue: service suspension</li>
                      <li>• Accounts 60+ days overdue: termination</li>
                      <li>• Collection costs charged to delinquent accounts</li>
                      <li>• No work performed during payment disputes</li>
                      <li>• Credit card chargebacks incur $50 fee</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6">
                  <h3 className="text-electric-blue font-semibold mb-3">💰 Pricing & Fee Structure</h3>
                  <ul className="text-star-white/80 space-y-2 text-sm">
                    <li>• Prices subject to change with 30 days written notice for new engagements</li>
                    <li>• Existing contracts honor agreed pricing for contract duration</li>
                    <li>• Custom work quoted separately and requires written approval</li>
                    <li>• Travel expenses, third-party tools, and software licenses billed separately</li>
                    <li>• Cancellation fees apply per contract terms (typically 50% of remaining value)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  4. Client Responsibilities & Obligations
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-3">📋 Required Client Actions</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Data Access:</strong> Provide timely access to systems, data, and personnel</li>
                      <li>• <strong>Accurate Information:</strong> Supply complete and accurate business information</li>
                      <li>• <strong>Implementation:</strong> Follow recommended strategies and implementation guidelines</li>
                      <li>• <strong>Communication:</strong> Respond to requests within 48 hours during business days</li>
                      <li>• <strong>Legal Compliance:</strong> Ensure all activities comply with applicable laws and regulations</li>
                    </ul>
                  </div>

                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6">
                    <h3 className="text-red-400 font-semibold mb-3">🚫 Prohibited Client Actions</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Reverse engineering, copying, or redistributing our methodologies</li>
                      <li>• Using our strategies to compete directly with our services</li>
                      <li>• Sharing confidential information with third parties without consent</li>
                      <li>• Attempting to recruit our employees or contractors</li>
                      <li>• Using services for illegal, unethical, or spam-related activities</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
                    <h3 className="text-yellow-400 font-semibold mb-3">⚡ Performance Standards</h3>
                    <p className="text-star-white/80 text-sm leading-relaxed">
                      <strong>Client Cooperation Required:</strong> Service success depends on client engagement and implementation. 
                      Failure to meet cooperation standards may result in project delays, additional costs, or termination 
                      without refund. We reserve the right to document non-cooperation for legal protection.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  5. Intellectual Property Rights (Strictly Protected)
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-3">🏢 Our Property</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• All methodologies, processes, and frameworks</li>
                      <li>• Templates, tools, and automation workflows</li>
                      <li>• Training materials and documentation</li>
                      <li>• Software, code, and technical implementations</li>
                      <li>• Brand elements, trademarks, and content</li>
                    </ul>
                  </div>

                  <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-6">
                    <h3 className="text-green-400 font-semibold mb-3">✅ Your Property</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Your company data and business information</li>
                      <li>• Your existing processes and procedures</li>
                      <li>• Your customer relationships and data</li>
                      <li>• Your brand and marketing materials</li>
                      <li>• Custom configurations within your systems</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-red-400/10 border border-red-400/20 rounded-lg p-6">
                  <h3 className="text-red-400 font-semibold mb-3">🔒 IP Protection & Enforcement</h3>
                  <div className="space-y-4">
                    <p className="text-star-white/80 text-sm">
                      <strong>Unauthorized Use Prohibited:</strong> Any unauthorized use, reproduction, or distribution of our 
                      intellectual property will result in immediate termination and legal action for damages, including 
                      attorney fees and injunctive relief.
                    </p>
                    <p className="text-star-white/80 text-sm">
                      <strong>Work-for-Hire:</strong> All custom work performed becomes our intellectual property unless 
                      specifically transferred via separate written agreement with additional compensation.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  6. Confidentiality & Non-Disclosure (Mutual Obligations)
                </h2>
                
                <div className="bg-gradient-to-r from-purple-400/10 to-electric-blue/10 border border-purple-400/20 rounded-lg p-6">
                  <h3 className="text-purple-400 font-semibold mb-4">🤐 Confidentiality Framework</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-star-white font-semibold mb-2">Information Protected:</h4>
                      <ul className="text-star-white/80 space-y-1 text-sm">
                        <li>• Business strategies and financial data</li>
                        <li>• Customer lists and contact information</li>
                        <li>• Technical implementations and processes</li>
                        <li>• Performance metrics and analytics</li>
                        <li>• Any non-public business information</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-star-white font-semibold mb-2">Obligations:</h4>
                      <ul className="text-star-white/80 space-y-1 text-sm">
                        <li>• Maintain strict confidentiality perpetually</li>
                        <li>• Use information only for intended purposes</li>
                        <li>• Protect with same care as own confidential info</li>
                        <li>• Return/destroy upon termination</li>
                        <li>• Report any unauthorized disclosure immediately</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-red-400/10 border border-red-400/20 rounded-lg">
                    <p className="text-red-400 text-sm font-semibold">
                      ⚖️ Breach Consequences: Confidentiality breaches will result in immediate termination, injunctive relief, 
                      and monetary damages including attorney fees. Liquidated damages of $100,000 minimum apply for material breaches.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  7. Limitation of Liability & Disclaimers (Maximum Protection)
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6">
                    <h3 className="text-red-400 font-semibold mb-3">⚠️ LIABILITY CAPS & EXCLUSIONS</h3>
                    <div className="space-y-3 text-sm">
                      <p className="text-star-white/80">
                        <strong>MAXIMUM LIABILITY:</strong> Our total liability for any claims arising from or related to these 
                        terms or our services is strictly limited to the total amount paid by you in the 12 months preceding the claim.
                      </p>
                      <p className="text-star-white/80">
                        <strong>EXCLUDED DAMAGES:</strong> Under no circumstances will we be liable for indirect, incidental, 
                        special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, 
                        lost opportunities, or business interruption.
                      </p>
                      <p className="text-star-white/80">
                        <strong>NO WARRANTIES:</strong> Services provided "AS IS" without warranties of any kind, express or implied, 
                        including merchantability, fitness for purpose, or non-infringement.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
                    <h3 className="text-yellow-400 font-semibold mb-3">🛡️ Additional Protections</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Force majeure events excuse performance delays</li>
                      <li>• Third-party service failures are not our responsibility</li>
                      <li>• Client's failure to implement recommendations voids any performance expectations</li>
                      <li>• Market conditions and external factors are beyond our control</li>
                      <li>• Results statements are estimates based on historical data, not guarantees</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  8. Termination Rights & Procedures
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-3">Standard Termination</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Either party: 30 days written notice</li>
                      <li>• Outstanding invoices remain due</li>
                      <li>• Transition period for knowledge transfer</li>
                      <li>• Return of confidential materials</li>
                      <li>• Final accounting and settlement</li>
                    </ul>
                  </div>

                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6">
                    <h3 className="text-red-400 font-semibold mb-3">Immediate Termination</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Material breach of contract terms</li>
                      <li>• Non-payment after 15-day cure period</li>
                      <li>• Bankruptcy or insolvency proceedings</li>
                      <li>• Violation of confidentiality or IP rights</li>
                      <li>• Illegal or unethical conduct</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6">
                  <h3 className="text-electric-blue font-semibold mb-3">Post-Termination Obligations</h3>
                  <ul className="text-star-white/80 space-y-2 text-sm">
                    <li>• Immediate cessation of service access and usage</li>
                    <li>• Payment of all outstanding amounts within 15 days</li>
                    <li>• Return or destruction of all confidential materials</li>
                    <li>• Continued compliance with confidentiality and IP obligations</li>
                    <li>• No rights to use our methodologies or materials post-termination</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  9. Dispute Resolution & Governing Law
                </h2>
                
                <div className="bg-gradient-to-r from-purple-400/10 to-red-400/10 border border-purple-400/20 rounded-lg p-6">
                  <h3 className="text-purple-400 font-semibold mb-4">⚖️ Legal Framework</h3>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Governing Law:</h4>
                        <p className="text-star-white/80 text-sm">
                          These terms are governed by the laws of Delaware, USA, without regard to conflict of law principles.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Jurisdiction:</h4>
                        <p className="text-star-white/80 text-sm">
                          Exclusive jurisdiction in Delaware state and federal courts. You consent to personal jurisdiction.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Dispute Process:</h4>
                      <ol className="text-star-white/80 space-y-1 text-sm">
                        <li>1. <strong>Direct Negotiation:</strong> 30-day good faith discussion period</li>
                        <li>2. <strong>Mediation:</strong> Binding mediation through Delaware Dispute Resolution Services</li>
                        <li>3. <strong>Arbitration:</strong> Final binding arbitration under Delaware Arbitration Rules</li>
                        <li>4. <strong>Attorney Fees:</strong> Prevailing party entitled to recover legal costs</li>
                      </ol>
                    </div>

                    <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                      <p className="text-red-400 text-sm font-semibold">
                        🚫 CLASS ACTION WAIVER: You waive all rights to participate in class action lawsuits or 
                        class-wide arbitration. All disputes must be resolved individually.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  10. General Provisions & Legal Effect
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">Severability</h4>
                      <p className="text-star-white/80 text-sm">Invalid provisions don't affect remaining terms</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">Entire Agreement</h4>
                      <p className="text-star-white/80 text-sm">Supersedes all previous agreements and understandings</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">Assignment</h4>
                      <p className="text-star-white/80 text-sm">We may assign; you may not without written consent</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">Modifications</h4>
                      <p className="text-star-white/80 text-sm">Changes only via written amendment or updated posting</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">Waiver</h4>
                      <p className="text-star-white/80 text-sm">No waiver unless in writing; single waiver not ongoing</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">Survival</h4>
                      <p className="text-star-white/80 text-sm">Key provisions survive termination indefinitely</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-red-400/20 to-electric-blue/20 border border-red-400/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-star-white mb-4">
                  ⚖️ Legal Acknowledgment Required
                </h3>
                <p className="text-star-white/80 text-lg leading-relaxed mb-6">
                  These terms create binding legal obligations. By using our services, you confirm understanding 
                  and acceptance. If you cannot agree to these terms, you must discontinue use immediately.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-semibold rounded-lg hover:from-electric-blue/90 hover:to-purple-400/90 transition-all duration-200"
                  >
                    Legal Questions? Contact Us
                  </a>
                  <a 
                    href="/privacy" 
                    className="inline-flex items-center px-6 py-3 border border-electric-blue/30 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all duration-200"
                  >
                    View Privacy Policy
                  </a>
                </div>
                
                <div className="mt-6 p-4 bg-dark-navy/50 rounded-lg">
                  <p className="text-star-white/60 text-sm">
                    📧 <strong>Legal Contact:</strong> legal@astragtm.com | 📱 <strong>Emergency Legal:</strong> +1 (555) 123-4567
                    <br />
                    <span className="text-xs">Business hours: Monday-Friday 9AM-6PM EST</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 