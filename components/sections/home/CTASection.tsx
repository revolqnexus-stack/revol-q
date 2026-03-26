'use client'

import Link from 'next/link'

export default function CTASection() {
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
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/contact"
          style={{
            background: 'var(--white)',
            color: 'var(--black)',
            padding: '1.1rem 3rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'background 300ms, color 300ms',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--cobalt)'
            el.style.color = 'var(--white)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--white)'
            el.style.color = 'var(--black)'
          }}
        >
          START A PROJECT
        </Link>

        <a
          href="https://wa.me/917995617374"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'transparent',
            border: '1px solid var(--line2)',
            color: 'var(--fog)',
            padding: '1.1rem 3rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'border-color 300ms, color 300ms',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'var(--cobalt)'
            el.style.color = 'var(--cobalt2)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'var(--line2)'
            el.style.color = 'var(--fog)'
          }}
        >
          WHATSAPP US
        </a>
      </div>
    </section>
  )
}
