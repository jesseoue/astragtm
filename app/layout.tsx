import type React from "react"
import type { Metadata } from "next"
import { Inter, IBM_Plex_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // This CSS variable will be used in tailwind.config.ts
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

// Configure IBM Plex Sans font
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans", // This CSS variable will be used in tailwind.config.ts
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Astra GTM - Shape Your Growth Operations",
  description: "AI-powered GTM systems for early-stage B2B startups.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // Apply font variables to the html tag
      className={`${inter.variable} ${ibmPlexSans.variable}`}
    >
      <body
        className={cn(
          "min-h-screen bg-background font-body text-foreground antialiased",
          // Font families are now applied via CSS variables in globals.css and tailwind.config.ts
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
