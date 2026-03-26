import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NIXTUDIO Case Study',
  description: 'How REVOLQ built a complete digital system for NIXTUDIO — Kerala\'s premier bridal studio. 464+ reviews, 4.9★ rating.',
}

export default function NixtudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
