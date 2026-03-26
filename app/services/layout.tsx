import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'REVOLQ services: web development, AI automation, SEO & GBP, brand strategy, and monthly retainer for Kerala businesses.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
