import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Script from 'next/script'
import './globals.css'

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://astragtm.com'),
  title: {
    default: 'Astra GTM - Scale Your SaaS Revenue with AI-Powered GTM Systems | 340% Average ROI',
    template: '%s | Astra GTM - SaaS Revenue Growth Platform'
  },
  description: 'Transform your B2B SaaS into a revenue machine with AI-powered go-to-market systems. Join 500+ companies that generated $2.4B+ revenue with 340% average ROI. Get your free revenue audit today.',
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
    'B2B marketing automation',
    'SaaS revenue optimization',
    'go-to-market strategy',
    'B2B conversion optimization',
    'revenue growth consulting',
    'SaaS scaling strategies'
  ],
  authors: [{ name: 'Astra GTM Team', url: 'https://astragtm.com/about' }],
  creator: 'Astra GTM',
  publisher: 'Astra GTM',
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
    url: '/',
    siteName: 'Astra GTM',
    title: 'Scale Your SaaS Revenue with AI-Powered GTM Systems | 340% ROI',
    description: 'Transform your B2B SaaS into a revenue machine. Join 500+ companies that generated $2.4B+ with our AI-powered GTM systems. Free revenue audit available.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Astra GTM - AI-Powered SaaS Revenue Growth Platform',
        type: 'image/png',
      },
      {
        url: '/og-image-square.png',
        width: 800,
        height: 800,
        alt: 'Astra GTM Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@astragtm',
    creator: '@astragtm',
    title: 'Scale Your SaaS Revenue with AI-Powered GTM Systems',
    description: 'Transform your B2B SaaS into a revenue machine. 500+ companies, $2.4B+ generated, 340% average ROI.',
    images: {
      url: '/twitter-image.png',
      alt: 'Astra GTM - SaaS Revenue Growth Platform',
    },
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  category: 'Business Software',
  classification: 'SaaS Revenue Growth Platform',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
    },
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://astragtm.com/#organization",
      "name": "Astra GTM",
      "alternateName": "AstraGTM",
      "description": "AI-powered go-to-market systems for B2B SaaS companies that scale revenue predictably",
      "url": "https://astragtm.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://astragtm.com/logo.png",
        "width": 300,
        "height": 100
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://astragtm.com/og-image.png",
        "width": 1200,
        "height": 630
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-0123",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": "Worldwide"
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "availableLanguage": "English",
          "areaServed": "Worldwide"
        }
      ],
      "sameAs": [
        "https://linkedin.com/company/astragtm",
        "https://twitter.com/astragtm",
        "https://github.com/astragtm"
      ],
      "foundingDate": "2023",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "minValue": 10,
        "maxValue": 50
      },
      "industry": "Software",
      "serviceArea": {
        "@type": "Place",
        "name": "Global"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://astragtm.com/#website",
      "url": "https://astragtm.com",
      "name": "Astra GTM",
      "description": "AI-powered SaaS revenue growth platform",
      "publisher": {
        "@id": "https://astragtm.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://astragtm.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://astragtm.com/#service",
      "name": "AI-Powered GTM Optimization",
      "description": "Comprehensive go-to-market optimization for B2B SaaS companies",
      "provider": {
        "@id": "https://astragtm.com/#organization"
      },
      "serviceType": "Revenue Growth Consulting",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GTM Optimization Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Revenue Audit",
              "description": "Comprehensive analysis of your current GTM strategy with actionable recommendations"
            },
            "price": "0",
            "priceCurrency": "USD"
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
      }
    },
    {
      "@type": "Article",
      "@id": "https://astragtm.com/#homepage",
      "headline": "Scale Your SaaS Revenue with AI-Powered GTM Systems",
      "description": "Transform your B2B SaaS into a revenue machine with proven GTM optimization strategies",
      "author": {
        "@id": "https://astragtm.com/#organization"
      },
      "publisher": {
        "@id": "https://astragtm.com/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://astragtm.com/"
      }
    }
  ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
