import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Development',
  description: 'Custom Next.js websites built for performance, SEO, and growth. No templates. Not themes. From ₹25,000.',
}

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
