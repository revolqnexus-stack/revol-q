import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/ui/Cursor'
import ProgressBar from '@/components/ui/ProgressBar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'REVOLQ — Digital Agency, Kerala',
    template: '%s | REVOLQ',
  },
  description:
    'REVOLQ is a digital agency in Kerala building Next.js websites, AI automation systems, and SEO for businesses that refuse to be invisible.',
  keywords: [
    'digital agency Kerala',
    'web development Kerala',
    'AI automation Kerala',
    'SEO agency Kottayam',
    'WhatsApp AI agent',
    'n8n automation India',
    'Google Business Profile Kerala',
    'Next.js developer Kerala',
  ],
  metadataBase: new URL('https://revolq.in'),
  openGraph: {
    title: 'REVOLQ — Digital Agency, Kerala',
    description: 'We build digital systems that work while you sleep.',
    url: 'https://revolq.in',
    siteName: 'REVOLQ',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        style={{
          fontFamily: 'var(--font-body), system-ui, sans-serif',
          fontWeight: 200,
        }}
      >
        <Cursor />
        <ProgressBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
