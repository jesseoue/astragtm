import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Astra GTM | Data Protection & Security",
  description: "Comprehensive privacy policy detailing how Astra GTM collects, uses, and protects your personal and business data. GDPR and CCPA compliant.",
  openGraph: {
    title: "Privacy Policy - Astra GTM",
    description: "Our commitment to protecting your data and privacy",
  }
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="bg-gradient-to-br from-dark-navy/80 to-deep-purple/20 border border-electric-blue/20 rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-star-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-star-white/70 text-lg max-w-2xl mx-auto">
                Your privacy is not just important to us—it's fundamental to our business relationship. 
                This policy details our unwavering commitment to data protection.
              </p>
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-full text-green-400 text-sm font-medium">
                🔒 Last Updated: January 2025 • GDPR & CCPA Compliant
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6 mb-8">
                <h2 className="text-star-white text-xl font-bold mb-3">🛡️ Our Privacy Commitment</h2>
                <p className="text-star-white/80 text-sm leading-relaxed mb-0">
                  Astra GTM operates under the strictest data protection standards. We collect only what's necessary, 
                  use it only as disclosed, and protect it with enterprise-grade security. Your trust is our business.
                </p>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  1. Information We Collect & Why
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-electric-blue mb-3">Personal Information</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Contact Data:</strong> Name, email, phone, company information (for service delivery)</li>
                      <li>• <strong>Business Data:</strong> Revenue figures, team size, GTM metrics (for customized recommendations)</li>
                      <li>• <strong>Communication Records:</strong> All interactions for service improvement and legal compliance</li>
                      <li>• <strong>Technical Data:</strong> IP addresses, device information, usage analytics (for security and optimization)</li>
                    </ul>
                  </div>

                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-electric-blue mb-3">Automatic Data Collection</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Cookies & Tracking:</strong> Essential for site functionality, analytics for improvement</li>
                      <li>• <strong>Usage Patterns:</strong> How you interact with our services to optimize your experience</li>
                      <li>• <strong>Performance Data:</strong> System performance metrics to ensure service quality</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  2. How We Use Your Information (Strictly Controlled)
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Permitted Uses</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Service delivery and optimization</li>
                      <li>• Customer support and communication</li>
                      <li>• Security monitoring and fraud prevention</li>
                      <li>• Legal compliance and business operations</li>
                      <li>• Product development and improvement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">❌ Prohibited Uses</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Selling your data to third parties</li>
                      <li>• Unsolicited marketing communications</li>
                      <li>• Sharing with competitors</li>
                      <li>• Any use outside this policy</li>
                      <li>• Data processing without legal basis</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  3. Data Sharing & Third Parties (Minimal & Controlled)
                </h2>
                
                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6 mb-6">
                  <p className="text-yellow-300 font-semibold mb-2">⚠️ We share data only when absolutely necessary:</p>
                  <ul className="text-star-white/80 space-y-2 text-sm">
                    <li>• <strong>Service Providers:</strong> Vetted partners under strict contractual obligations (hosting, analytics, payment processing)</li>
                    <li>• <strong>Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                    <li>• <strong>Business Transfers:</strong> In the unlikely event of merger/acquisition (with notification)</li>
                    <li>• <strong>Your Consent:</strong> Only with your explicit permission for specific purposes</li>
                  </ul>
                </div>

                <p className="text-electric-blue font-semibold text-sm">
                  🔐 All third-party processors are contractually bound to GDPR standards and undergo regular security audits.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  4. Your Rights & Control (Comprehensive)
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">🔍 Access & Transparency</h4>
                      <p className="text-star-white/80 text-sm">Request complete details of data we hold about you</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">✏️ Correction Rights</h4>
                      <p className="text-star-white/80 text-sm">Update or correct inaccurate information immediately</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">🗑️ Deletion Rights</h4>
                      <p className="text-star-white/80 text-sm">Request complete removal of your data (where legally permissible)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">📦 Data Portability</h4>
                      <p className="text-star-white/80 text-sm">Receive your data in machine-readable format</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">⏸️ Processing Restrictions</h4>
                      <p className="text-star-white/80 text-sm">Limit how we process your information</p>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">🚫 Objection Rights</h4>
                      <p className="text-star-white/80 text-sm">Object to processing for marketing or legitimate interests</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  5. Data Security (Enterprise-Grade Protection)
                </h2>
                
                <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 border border-electric-blue/20 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-electric-blue text-xl">🔐</span>
                      </div>
                      <h4 className="text-star-white font-semibold mb-2">Encryption</h4>
                      <p className="text-star-white/70 text-sm">AES-256 encryption in transit and at rest</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-400 text-xl">🛡️</span>
                      </div>
                      <h4 className="text-star-white font-semibold mb-2">Access Control</h4>
                      <p className="text-star-white/70 text-sm">Multi-factor authentication and role-based access</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-400 text-xl">📊</span>
                      </div>
                      <h4 className="text-star-white font-semibold mb-2">Monitoring</h4>
                      <p className="text-star-white/70 text-sm">24/7 security monitoring and threat detection</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  6. Data Retention (Minimal & Purposeful)
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                    <p className="text-star-white/80 text-sm">
                      <strong className="text-electric-blue">Active Customers:</strong> Data retained during service relationship and 
                      3 years after termination for legal and business continuity purposes.
                    </p>
                  </div>
                  
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                    <p className="text-star-white/80 text-sm">
                      <strong className="text-electric-blue">Marketing Data:</strong> Retained until consent is withdrawn or 
                      7 years for tax and legal compliance (whichever is shorter).
                    </p>
                  </div>
                  
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                    <p className="text-star-white/80 text-sm">
                      <strong className="text-electric-blue">Legal Requirements:</strong> Some data may be retained longer 
                      to comply with regulatory obligations or resolve disputes.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  7. International Transfers & Jurisdiction
                </h2>
                
                <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-6">
                  <p className="text-star-white/80 text-sm leading-relaxed mb-4">
                    <strong className="text-purple-400">Global Operations:</strong> Your data may be processed in countries outside your 
                    jurisdiction. We ensure adequate protection through:
                  </p>
                  <ul className="text-star-white/80 space-y-2 text-sm">
                    <li>• European Commission adequacy decisions</li>
                    <li>• Standard Contractual Clauses (SCCs)</li>
                    <li>• Binding Corporate Rules where applicable</li>
                    <li>• Explicit consent for specific transfers when required</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  8. Contact & Complaints
                </h2>
                
                <div className="bg-gradient-to-r from-green-400/10 to-electric-blue/10 border border-green-400/20 rounded-lg p-6">
                  <p className="text-star-white/80 text-sm leading-relaxed mb-4">
                    <strong className="text-green-400">Data Protection Officer:</strong> For any privacy concerns, data requests, 
                    or complaints, contact us immediately:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-star-white/80">📧 <strong>Email:</strong> privacy@astragtm.com</p>
                    <p className="text-star-white/80">📱 <strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p className="text-star-white/80">⏱️ <strong>Response Time:</strong> Within 72 hours (urgent matters within 24 hours)</p>
                  </div>
                  
                  <div className="mt-4 p-4 bg-electric-blue/10 border border-electric-blue/20 rounded-lg">
                    <p className="text-electric-blue text-sm font-semibold">
                      🏛️ Right to Complain: You have the right to lodge a complaint with your local data protection authority 
                      if you believe we've violated your privacy rights.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  9. Policy Updates & Changes
                </h2>
                
                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
                  <p className="text-star-white/80 text-sm leading-relaxed">
                    <strong className="text-yellow-400">Material Changes:</strong> We will notify you at least 30 days before any 
                    material changes to this policy. Continued use of our services after notification constitutes acceptance. 
                    You may terminate your account if you disagree with changes.
                  </p>
                  
                  <p className="text-star-white/80 text-sm mt-4">
                    <strong className="text-electric-blue">Version Control:</strong> This policy is version-controlled with 
                    change logs available upon request. Archive versions are maintained for transparency.
                  </p>
                </div>
              </section>

              <div className="bg-gradient-to-r from-electric-blue/20 to-purple-400/20 border border-electric-blue/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-star-white mb-4">
                  🤝 Our Privacy Promise
                </h3>
                <p className="text-star-white/80 text-lg leading-relaxed mb-6">
                  Your privacy is not negotiable. We commit to transparency, security, and respect for your data rights. 
                  When you trust us with your information, we take that responsibility seriously.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-semibold rounded-lg hover:from-electric-blue/90 hover:to-purple-400/90 transition-all duration-200"
                  >
                    Contact Privacy Team
                  </a>
                  <a 
                    href="/terms" 
                    className="inline-flex items-center px-6 py-3 border border-electric-blue/30 text-electric-blue font-semibold rounded-lg hover:bg-electric-blue/10 transition-all duration-200"
                  >
                    View Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
} 