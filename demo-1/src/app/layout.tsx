import type { Metadata } from "next"
import "@/styles/tokens.css"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "LimeAura Dashboard",
  description: "A comprehensive productivity dashboard with the LimeAura design system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
