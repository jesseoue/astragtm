"use client"

import { useEffect } from "react"
// import { Metadata } from "next"

/* Note: Metadata would normally be defined here for server components,
   but this is a client component due to interactive elements */

export default function CookiesPage() {
  useEffect(() => {
    document.title = "Cookie Policy - Astra GTM | Data Collection & Tracking"
  }, [])

  return (
    <main className="min-h-screen">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <div className="bg-gradient-to-br from-dark-navy/80 to-deep-purple/20 border border-electric-blue/20 rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-star-white mb-4">
                Cookie Policy
              </h1>
              <p className="text-star-white/70 text-lg max-w-2xl mx-auto">
                We use advanced tracking technologies to optimize your experience, analyze performance, 
                and deliver personalized services. This policy details our comprehensive data collection practices.
              </p>
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-orange-400/10 border border-orange-400/20 rounded-full text-orange-400 text-sm font-medium">
                🍪 Last Updated: January 2025 • Comprehensive Tracking Notice
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-orange-400/10 border border-orange-400/20 rounded-lg p-6 mb-8">
                <h2 className="text-star-white text-xl font-bold mb-3">🍪 Cookie Consent & Agreement</h2>
                <p className="text-star-white/80 text-sm leading-relaxed mb-0">
                  By accessing our website, you consent to our use of cookies and tracking technologies as described in this policy. 
                  <strong className="text-orange-400"> Continued use constitutes ongoing consent to data collection.</strong> 
                  Some features require cookies to function properly, and disabling them may limit your experience.
                </p>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  1. What Are Cookies & Tracking Technologies
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-electric-blue mb-3">Technology Overview</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">🍪 Cookies</h4>
                        <p className="text-star-white/80 text-sm">Small text files stored on your device to remember preferences, track behavior, and enable functionality.</p>
                      </div>
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">📊 Web Beacons</h4>
                        <p className="text-star-white/80 text-sm">Invisible pixels that track email opens, page views, and user interactions across our platform.</p>
                      </div>
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">🏷️ Local Storage</h4>
                        <p className="text-star-white/80 text-sm">Browser storage for enhanced functionality, faster loading, and personalized experiences.</p>
                      </div>
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">📍 Device Fingerprinting</h4>
                        <p className="text-star-white/80 text-sm">Technical identifiers for security, fraud prevention, and enhanced user experience optimization.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
                    <h3 className="text-yellow-400 font-semibold mb-3">⚠️ Data Collection Notice</h3>
                    <p className="text-star-white/80 text-sm leading-relaxed">
                      We employ sophisticated tracking mechanisms to gather comprehensive data about your interactions, 
                      preferences, and behavioral patterns. This enables us to optimize performance, personalize content, 
                      and deliver superior service quality. Data collection occurs automatically upon site access.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  2. Types of Cookies We Use (Comprehensive Collection)
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-6">
                    <h3 className="text-green-400 font-semibold mb-4">✅ Essential Cookies (Required)</h3>
                    <p className="text-star-white/80 text-sm mb-4">
                      <strong>Mandatory for Service Function:</strong> These cookies are absolutely necessary for website operation 
                      and cannot be disabled. Blocking them will impair site functionality.
                    </p>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Authentication:</strong> Session management and secure login functionality</li>
                      <li>• <strong>Security:</strong> CSRF protection, bot detection, and fraud prevention</li>
                      <li>• <strong>Load Balancing:</strong> Server routing and performance optimization</li>
                      <li>• <strong>Basic Functionality:</strong> Form submissions, shopping cart, and core features</li>
                      <li>• <strong>Legal Compliance:</strong> Cookie consent tracking and regulatory requirements</li>
                    </ul>
                  </div>

                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-4">📊 Analytics & Performance Cookies</h3>
                    <p className="text-star-white/80 text-sm mb-4">
                      <strong>Comprehensive Usage Tracking:</strong> We collect detailed analytics to understand user behavior, 
                      optimize performance, and improve service delivery. This includes advanced behavioral analysis.
                    </p>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Google Analytics:</strong> Page views, session duration, bounce rates, conversion tracking</li>
                      <li>• <strong>Hotjar:</strong> Heatmaps, session recordings, user journey analysis, form analytics</li>
                      <li>• <strong>Performance Monitoring:</strong> Page load times, error tracking, server response metrics</li>
                      <li>• <strong>A/B Testing:</strong> Experiment tracking, conversion optimization, feature testing</li>
                      <li>• <strong>Custom Analytics:</strong> Proprietary tracking for business intelligence and optimization</li>
                    </ul>
                  </div>

                  <div className="bg-purple-400/10 border border-purple-400/20 rounded-lg p-6">
                    <h3 className="text-purple-400 font-semibold mb-4">🎯 Marketing & Advertising Cookies</h3>
                    <p className="text-star-white/80 text-sm mb-4">
                      <strong>Targeted Marketing Optimization:</strong> We track your interests and behaviors to deliver 
                      personalized marketing messages and measure campaign effectiveness across platforms.
                    </p>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Facebook Pixel:</strong> Ad targeting, conversion tracking, custom audience building</li>
                      <li>• <strong>Google Ads:</strong> Remarketing, conversion optimization, audience insights</li>
                      <li>• <strong>LinkedIn Insight:</strong> B2B targeting, professional demographic analysis</li>
                      <li>• <strong>Email Marketing:</strong> Campaign tracking, engagement analysis, behavioral triggers</li>
                      <li>• <strong>Cross-Platform Tracking:</strong> Multi-device identification and unified user profiles</li>
                    </ul>
                  </div>

                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-star-white font-semibold mb-4">⚙️ Functional & Preference Cookies</h3>
                    <p className="text-star-white/80 text-sm mb-4">
                      <strong>Enhanced User Experience:</strong> These cookies remember your preferences and settings 
                      to provide a personalized, optimized experience across sessions.
                    </p>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>User Preferences:</strong> Language settings, display preferences, accessibility options</li>
                      <li>• <strong>Personalization:</strong> Content recommendations, customized dashboards</li>
                      <li>• <strong>Social Media:</strong> Integration with social platforms, sharing functionality</li>
                      <li>• <strong>Chat & Support:</strong> Live chat history, support ticket tracking</li>
                      <li>• <strong>Geographic Customization:</strong> Location-based content and currency settings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  3. Third-Party Services & Data Sharing
                </h2>
                
                <div className="bg-gradient-to-r from-orange-400/10 to-red-400/10 border border-orange-400/20 rounded-lg p-6 mb-6">
                  <h3 className="text-orange-400 font-semibold mb-4">🔗 Extensive Third-Party Integration</h3>
                  <p className="text-star-white/80 text-sm leading-relaxed mb-4">
                    <strong>Comprehensive Service Ecosystem:</strong> We integrate with numerous third-party services 
                    that may collect and process your data according to their own privacy policies. By using our site, 
                    you consent to this data sharing ecosystem.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">📊 Analytics Providers</h4>
                      <ul className="text-star-white/80 text-xs space-y-1">
                        <li>• Google Analytics & Tag Manager</li>
                        <li>• Hotjar (Session Recording)</li>
                        <li>• Mixpanel (Event Tracking)</li>
                        <li>• Amplitude (User Analytics)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">🎯 Advertising Platforms</h4>
                      <ul className="text-star-white/80 text-xs space-y-1">
                        <li>• Google Ads & DoubleClick</li>
                        <li>• Facebook/Meta Business</li>
                        <li>• LinkedIn Campaign Manager</li>
                        <li>• Twitter Ads Platform</li>
                      </ul>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">💬 Communication Tools</h4>
                      <ul className="text-star-white/80 text-xs space-y-1">
                        <li>• Intercom (Live Chat)</li>
                        <li>• Mailchimp (Email Marketing)</li>
                        <li>• Calendly (Scheduling)</li>
                        <li>• Zoom (Video Calls)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">🛠️ Technical Services</h4>
                      <ul className="text-star-white/80 text-xs space-y-1">
                        <li>• Cloudflare (CDN & Security)</li>
                        <li>• AWS (Hosting & Storage)</li>
                        <li>• Stripe (Payment Processing)</li>
                        <li>• Vercel (Performance Optimization)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">📈 Business Intelligence</h4>
                      <ul className="text-star-white/80 text-xs space-y-1">
                        <li>• HubSpot (CRM & Marketing)</li>
                        <li>• Salesforce (Customer Data)</li>
                        <li>• Clay (Data Enrichment)</li>
                        <li>• Zapier (Automation)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-4">
                      <h4 className="text-electric-blue font-semibold mb-2">🔒 Security & Monitoring</h4>
                      <ul className="text-star-white/80 text-xs space-y-1">
                        <li>• Sentry (Error Tracking)</li>
                        <li>• DataDog (Performance)</li>
                        <li>• Auth0 (Authentication)</li>
                        <li>• Cloudflare (DDoS Protection)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  4. How We Use Collected Data (Comprehensive Utilization)
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-electric-blue/10 to-purple-400/10 border border-electric-blue/20 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-4">🎯 Primary Data Applications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Service Optimization</h4>
                        <ul className="text-star-white/80 space-y-1 text-sm">
                          <li>• Personalized content delivery</li>
                          <li>• Performance monitoring & improvement</li>
                          <li>• User experience enhancement</li>
                          <li>• Feature usage analysis</li>
                          <li>• Load balancing & scaling</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Business Intelligence</h4>
                        <ul className="text-star-white/80 space-y-1 text-sm">
                          <li>• Market research & analysis</li>
                          <li>• Customer behavior patterns</li>
                          <li>• Conversion funnel optimization</li>
                          <li>• ROI measurement & reporting</li>
                          <li>• Competitive positioning</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Marketing Enhancement</h4>
                        <ul className="text-star-white/80 space-y-1 text-sm">
                          <li>• Targeted advertising campaigns</li>
                          <li>• Lead scoring & qualification</li>
                          <li>• Email marketing automation</li>
                          <li>• Retargeting & remarketing</li>
                          <li>• Campaign effectiveness measurement</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Security & Compliance</h4>
                        <ul className="text-star-white/80 space-y-1 text-sm">
                          <li>• Fraud detection & prevention</li>
                          <li>• Bot identification & blocking</li>
                          <li>• Regulatory compliance monitoring</li>
                          <li>• Audit trail maintenance</li>
                          <li>• Risk assessment & mitigation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
                    <h3 className="text-yellow-400 font-semibold mb-3">📊 Advanced Analytics & Profiling</h3>
                    <p className="text-star-white/80 text-sm leading-relaxed">
                      <strong>Comprehensive User Profiling:</strong> We create detailed profiles based on your interactions, 
                      preferences, and behavioral patterns. This enables predictive analytics, personalized recommendations, 
                      and optimized service delivery. Data is analyzed using machine learning algorithms for enhanced insights.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  5. Cookie Management & Your Choices
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-4">🔧 Control Options Available</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Browser Settings</h4>
                        <ul className="text-star-white/80 space-y-1 text-sm">
                          <li>• Block all cookies (may break functionality)</li>
                          <li>• Block third-party cookies only</li>
                          <li>• Clear existing cookies and data</li>
                          <li>• Set cookie expiration preferences</li>
                          <li>• Enable/disable specific tracking features</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-star-white font-semibold mb-2">Platform Opt-Outs</h4>
                        <ul className="text-star-white/80 space-y-1 text-sm">
                          <li>• Google Analytics opt-out browser addon</li>
                          <li>• Facebook advertising preferences</li>
                          <li>• LinkedIn ad preferences settings</li>
                          <li>• Email marketing unsubscribe links</li>
                          <li>• Do Not Track browser signals</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-6">
                    <h3 className="text-red-400 font-semibold mb-3">⚠️ Impact of Disabling Cookies</h3>
                    <p className="text-star-white/80 text-sm leading-relaxed mb-4">
                      <strong>Functionality Limitations:</strong> Disabling cookies will significantly impact your experience 
                      and may prevent access to key features. We cannot guarantee service quality without cookie acceptance.
                    </p>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• Loss of personalization and saved preferences</li>
                      <li>• Inability to maintain login sessions</li>
                      <li>• Reduced security and fraud protection</li>
                      <li>• Limited analytics and performance optimization</li>
                      <li>• Potential inability to complete transactions or forms</li>
                    </ul>
                  </div>

                  <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-3">🍪 Cookie Consent Management</h3>
                    <p className="text-star-white/80 text-sm leading-relaxed">
                      <strong>Granular Control:</strong> You can manage cookie preferences through our consent banner 
                      and settings panel. However, some cookies are essential for core functionality and cannot be disabled. 
                      Consent choices are stored and respected across future sessions.
                    </p>
                    
                    <div className="mt-4 p-4 bg-star-white/5 rounded-lg">
                      <p className="text-star-white/80 text-sm">
                        <strong>Current Consent Status:</strong> By continuing to use this site, you maintain active 
                        consent for all enabled cookie categories. You may withdraw consent at any time through 
                        browser settings or by contacting us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  6. Data Retention & Security
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-3">⏰ Retention Periods</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Session Cookies:</strong> Deleted when browser closes</li>
                      <li>• <strong>Persistent Cookies:</strong> 30 days to 2 years based on purpose</li>
                      <li>• <strong>Analytics Data:</strong> Up to 26 months for trend analysis</li>
                      <li>• <strong>Marketing Data:</strong> Until consent withdrawal or legal limits</li>
                      <li>• <strong>Essential Data:</strong> As long as necessary for service delivery</li>
                    </ul>
                  </div>
                  
                  <div className="bg-star-white/5 border border-star-white/10 rounded-lg p-6">
                    <h3 className="text-electric-blue font-semibold mb-3">🔐 Security Measures</h3>
                    <ul className="text-star-white/80 space-y-2 text-sm">
                      <li>• <strong>Encryption:</strong> All data transmitted via HTTPS/TLS</li>
                      <li>• <strong>Access Control:</strong> Limited access to authorized personnel</li>
                      <li>• <strong>Regular Audits:</strong> Periodic security assessments and reviews</li>
                      <li>• <strong>Secure Storage:</strong> Industry-standard data protection methods</li>
                      <li>• <strong>Breach Protocols:</strong> Incident response and notification procedures</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  7. International Data Transfers & Compliance
                </h2>
                
                <div className="bg-gradient-to-r from-purple-400/10 to-electric-blue/10 border border-purple-400/20 rounded-lg p-6">
                  <h3 className="text-purple-400 font-semibold mb-4">🌍 Global Data Processing</h3>
                  <p className="text-star-white/80 text-sm leading-relaxed mb-4">
                    <strong>Worldwide Service Infrastructure:</strong> Our services operate globally, and your data 
                    may be processed in multiple jurisdictions. We ensure appropriate safeguards for international transfers.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-star-white font-semibold mb-2">Compliance Standards:</h4>
                      <ul className="text-star-white/80 space-y-1 text-sm">
                        <li>• GDPR (European Union)</li>
                        <li>• CCPA (California, USA)</li>
                        <li>• PIPEDA (Canada)</li>
                        <li>• LGPD (Brazil)</li>
                        <li>• Other applicable data protection laws</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-star-white font-semibold mb-2">Transfer Safeguards:</h4>
                      <ul className="text-star-white/80 space-y-1 text-sm">
                        <li>• Standard Contractual Clauses (SCCs)</li>
                        <li>• Adequacy decisions where available</li>
                        <li>• Binding Corporate Rules (BCRs)</li>
                        <li>• Certification schemes and codes of conduct</li>
                        <li>• Explicit consent where required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-star-white mb-6 border-b border-electric-blue/20 pb-3">
                  8. Updates & Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-6">
                    <h3 className="text-yellow-400 font-semibold mb-3">📝 Policy Updates</h3>
                    <p className="text-star-white/80 text-sm leading-relaxed">
                      <strong>Regular Policy Reviews:</strong> We update this policy periodically to reflect changes 
                      in our practices, legal requirements, or service offerings. Material changes will be communicated 
                      via website notice or direct notification. Continued use after updates constitutes acceptance of revised terms.
                    </p>
                  </div>

                  <div className="bg-green-400/10 border border-green-400/20 rounded-lg p-6">
                    <h3 className="text-green-400 font-semibold mb-3">📞 Data Protection Contact</h3>
                    <div className="space-y-3">
                      <p className="text-star-white/80 text-sm">
                        <strong>Data Protection Officer:</strong> For cookie-related questions, opt-out requests, 
                        or data protection concerns, contact our dedicated team:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <p className="text-star-white/80">📧 <strong>Email:</strong> privacy@astragtm.com</p>
                          <p className="text-star-white/80">📱 <strong>Phone:</strong> +1 (555) 123-4567</p>
                          <p className="text-star-white/80">⏱️ <strong>Response:</strong> Within 72 hours</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-star-white/80">🏢 <strong>Address:</strong> Astra GTM Data Protection</p>
                          <p className="text-star-white/80">📍 <strong>Location:</strong> Delaware, USA</p>
                          <p className="text-star-white/80">🕒 <strong>Hours:</strong> Mon-Fri 9AM-6PM EST</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-orange-400/20 to-purple-400/20 border border-orange-400/30 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-star-white mb-4">
                  🍪 Cookie Acknowledgment
                </h3>
                <p className="text-star-white/80 text-lg leading-relaxed mb-6">
                  By continuing to use our website, you acknowledge understanding and acceptance of our cookie practices. 
                  We use cookies extensively to optimize your experience and our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault()
                      // Cookie settings would be handled by a cookie management tool
                      alert('Cookie preferences panel would open here')
                    }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-electric-blue to-purple-400 text-dark-navy font-semibold rounded-lg hover:from-electric-blue/90 hover:to-purple-400/90 transition-all duration-200"
                  >
                    Manage Cookie Preferences
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
                    🔒 <strong>Your Privacy Matters:</strong> We balance data collection needs with privacy protection. 
                    Contact us for any concerns about our cookie practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
} 