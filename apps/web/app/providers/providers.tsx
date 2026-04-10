// apps/web/app/providers.tsx
"use client"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import { ThemeProvider } from "@/components/theme-provider"

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL
if (!convexUrl) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL is not set")
}

const convex = new ConvexReactClient(convexUrl)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ConvexProvider client={convex}>{children}</ConvexProvider>
    </ThemeProvider>
  )
}