import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Ecosystem Architecture',
  description: 'We don\'t build websites; we engineer headless digital ecosystems. Lightning-fast platforms designed for maximum conversion and zero latency.',
}

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
