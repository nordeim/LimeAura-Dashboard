import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Examples | LimeAura Dashboard",
  description: "Component examples and showcase",
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
