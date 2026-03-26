import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us about your project. We reply within 24 hours. Usually much faster.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
