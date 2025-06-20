import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00D4FF',
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://astragtm.com'),
  title: {
    default: 'Astra GTM - Scale Your SaaS Revenue with AI-Powered GTM Systems',
    template: '%s | Astra GTM'
  },
  description: 'Transform your B2B SaaS revenue with AI-powered go-to-market systems. Join 500+ companies that achieved 340% average ROI with our proven GTM optimization strategies.',
  keywords: [
    'SaaS GTM optimization',
    'B2B revenue growth',
    'AI-powered sales systems',
    'conversion rate optimization',
    'sales funnel optimization',
    'GTM strategy consulting',
    'SaaS growth hacking',
    'revenue operations',
    'lead generation automation',
    'B2B marketing automation'
  ],
  authors: [{ name: 'Astra GTM Team' }],
  creator: 'Astra GTM',
  publisher: 'Astra GTM',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Astra GTM',
    title: 'Scale Your SaaS Revenue with AI-Powered GTM Systems',
    description: 'Transform your B2B SaaS revenue with AI-powered go-to-market systems. Join 500+ companies that achieved 340% average ROI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Astra GTM - SaaS Revenue Growth Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@astragtm',
    creator: '@astragtm',
    title: 'Scale Your SaaS Revenue with AI-Powered GTM Systems',
    description: 'Transform your B2B SaaS revenue with AI-powered go-to-market systems. 340% average ROI.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
  category: 'Business Software',
  classification: 'SaaS Revenue Growth Platform',
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Astra GTM",
  "description": "AI-powered go-to-market systems for B2B SaaS companies",
  "url": "https://astragtm.com",
  "logo": "https://astragtm.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://linkedin.com/company/astragtm",
    "https://twitter.com/astragtm"
  ],
  "foundingDate": "2023",
  "numberOfEmployees": "10-50",
  "industry": "Software",
  "serviceArea": {
    "@type": "Place",
    "name": "Global"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "GTM Optimization Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Revenue Optimization Audit",
          "description": "Comprehensive analysis of your current GTM strategy"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Conversion Rate Optimization",
          "description": "Systematic improvement of your sales funnel performance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "AI-Powered Lead Generation",
          "description": "Automated systems for qualified lead generation"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preload" href="/abstract-rocket-launch.png" as="image" />
        <link rel="dns-prefetch" href="//logo.clearbit.com" />
      </head>
      <body className={`${inter.className} min-h-screen bg-dark-navy text-star-white antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
