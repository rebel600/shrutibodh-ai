"use client"
import { Geist_Mono, Inter } from "next/font/google"
import "@workspace/ui/globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

import { ConvexProvider, ConvexReactClient } from "convex/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL
  if (!convexUrl) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not set")
  }

  const convex = new ConvexReactClient(convexUrl)

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ConvexProvider client={convex}>{children}</ConvexProvider>
      </body>
    </html>
  )
}
