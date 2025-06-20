import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Script from 'next/script'
import './globals.css'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup"
import { NotificationOptin } from "@/components/ui/notification-optin"
import { LiveChat } from "@/components/ui/live-chat"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00D4FF' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1426' },
  ],
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://astragtm.com'),
  title: {
    default: "Astra GTM - AI-Powered SaaS Growth & Revenue Optimization",
    template: "%s | Astra GTM - SaaS Growth Experts"
  },
  description: "Transform your SaaS revenue with AI-powered go-to-market systems. We help B2B companies scale predictably with proven frameworks. 340% average ROI in 60 days.",
  keywords: [
    "SaaS growth",
    "go-to-market",
    "GTM optimization",
    "B2B SaaS marketing",
    "revenue optimization",
    "AI-powered marketing",
    "SaaS automation",
    "lead generation",
    "sales funnel optimization",
    "SaaS revenue growth",
    "marketing automation",
    "CRM integration",
    "sales pipeline",
    "conversion optimization"
  ],
  authors: [{ name: "Astra GTM Team" }],
  creator: "Astra GTM",
  publisher: "Astra GTM",
  applicationName: 'Astra GTM Platform',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://astragtm.com',
    siteName: 'Astra GTM',
    title: 'Astra GTM - AI-Powered SaaS Growth & Revenue Optimization',
    description: 'Transform your SaaS revenue with AI-powered go-to-market systems. We help B2B companies scale predictably with proven frameworks. 340% average ROI in 60 days.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Astra GTM - SaaS Growth Experts',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Astra GTM Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@astragtm',
    creator: '@astragtm',
    title: 'Astra GTM - AI-Powered SaaS Growth & Revenue Optimization',
    description: 'Transform your SaaS revenue with AI-powered go-to-market systems. 340% average ROI in 60 days.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://astragtm.com',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  category: 'technology',
  classification: 'Business',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

// Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Astra GTM',
  description: 'AI-powered go-to-market systems for B2B SaaS companies. We help startups scale revenue predictably with data-driven automation and proven frameworks.',
  url: 'https://astragtm.com',
  logo: 'https://astragtm.com/icon.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-ASTRA-GTM',
    contactType: 'customer service',
    email: 'hello@astragtm.com',
    availableLanguage: 'English'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    addressCountry: 'US'
  },
  sameAs: [
    'https://linkedin.com/company/astragtm',
    'https://twitter.com/astragtm'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500'
  },
  offers: {
    '@type': 'Offer',
    description: 'SaaS Growth Consultation',
    price: '0',
    priceCurrency: 'USD'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/abstract-rocket-launch.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//logo.clearbit.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Favicons and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} min-h-screen bg-dark-navy text-star-white antialiased`}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}

        {/* Hotjar Tracking */}
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <Script id="hotjar-tracking" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
          <ExitIntentPopup />
          <NotificationOptin />
          <LiveChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
