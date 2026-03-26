'use client'

import { useRouter } from 'next/navigation'
import GlassButton from '@/components/ui/GlassButton'

export default function CTASection() {
  const router = useRouter()

  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6rem 4rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Availability badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid var(--line2)',
          padding: '0.55rem 1.4rem',
          marginBottom: '3rem',
        }}
      >
        <span className="pulse-dot" />
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--fog)',
            textTransform: 'uppercase',
          }}
        >
          Currently taking selected projects for Q4 2025
        </span>
      </div>

      {/* Headline */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          fontWeight: 300,
          lineHeight: 0.88,
          letterSpacing: '-0.02em',
          color: 'var(--white)',
        }}
      >
        Let&apos;s build
      </h2>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 10vw, 10rem)',
          fontWeight: 300,
          lineHeight: 0.88,
          letterSpacing: '-0.02em',
          fontStyle: 'italic',
          color: 'transparent',
          WebkitTextStroke: '2px var(--white)',
          marginBottom: '2rem',
        }}
      >
        legacy.
      </h2>

      {/* Sub */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.92rem',
          fontWeight: 200,
          lineHeight: 1.9,
          color: 'var(--fog)',
          maxWidth: '480px',
          margin: '0 auto 3rem',
        }}
      >
        Your competitors are online. Your customers are searching. Let&apos;s make sure
        they find you.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <GlassButton
          variant="bold"
          onClick={() => router.push('/contact')}
          textClassName="text-[0.72rem] tracking-[0.18em] font-medium"
          borderRadius={100}
          borderWidth={0.15}
          distortionScale={-280}
          style={{ padding: '0.2rem 1.8rem' }}
        >
          START A PROJECT
        </GlassButton>

        <GlassButton
          variant="subtle"
          onClick={() => window.open('https://wa.me/917995617374', '_blank', 'noopener,noreferrer')}
          textClassName="text-[0.72rem] tracking-[0.18em] font-medium text-white/80"
          borderRadius={100}
          borderWidth={0.1}
          distortionScale={-140}
          style={{ padding: '0.2rem 1.8rem' }}
        >
          WHATSAPP US
        </GlassButton>
      </div>
    </section>
  )
}
