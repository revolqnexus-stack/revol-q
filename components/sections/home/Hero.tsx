'use client'

import { useRouter } from 'next/navigation'
import GlassButton from '@/components/ui/GlassButton'

export default function Hero() {
  const router = useRouter()

  return (
    <main
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 4rem 5rem',
      }}
      className="hero-outer"
    >
      {/* Top-right label */}
      <span
        style={{
          position: 'absolute',
          top: '2rem',
          right: '4rem',
          writingMode: 'vertical-lr',
          fontFamily: 'var(--font-body)',
          fontSize: '0.58rem',
          letterSpacing: '0.3em',
          color: 'var(--dim)',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
        className="hero-corner"
      >
        KERALA · INDIA
      </span>

      {/* Main content */}
      <div style={{ maxWidth: '1200px' }}>
        {/* Label */}
        <div className="animate-reveal" style={{ overflow: 'hidden', animationDelay: '0.1s', marginBottom: '1.5rem' }}>
          <span className="label-tag">DIGITAL AGENCY — EST. 2025</span>
        </div>

        {/* Headline */}
        <div style={{ overflow: 'hidden', marginBottom: '0.25rem' }}>
          <h1
            className="animate-reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 10vw, 11rem)',
              fontWeight: 300,
              lineHeight: 0.86,
              letterSpacing: '-0.02em',
              color: 'var(--white)',
              animationDelay: '0.2s',
              paddingLeft: '0.05em', // Prevent clipping
            }}
          >
            Building systems
          </h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
          <h1
            className="animate-reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 10vw, 11rem)',
              fontWeight: 300,
              lineHeight: 0.86,
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
              color: 'transparent',
              WebkitTextStroke: '2px var(--white)',
              animationDelay: '0.35s',
              paddingLeft: '0.05em', // Prevent clipping
            }}
          >
            that work.
          </h1>
        </div>

        {/* Two-column below headline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            marginTop: '3rem',
            alignItems: 'flex-end',
          }}
          className="hero-bottom"
        >
          {/* Body */}
          <div style={{ overflow: 'hidden' }}>
            <p
              className="animate-reveal"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                fontWeight: 200,
                lineHeight: 1.9,
                color: 'var(--fog)',
                maxWidth: '360px',
                animationDelay: '0.5s',
              }}
            >
              Web development, AI automation, SEO, and brand strategy for Kerala
              businesses that refuse to be invisible.
            </p>
          </div>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              overflow: 'hidden',
              padding: '10px 0',
            }}
            className="hero-ctas"
          >
            <GlassButton
              variant="bold"
              className="animate-reveal"
              style={{ animationDelay: '0.6s' }}
              onClick={() => router.push('/contact')}
              textClassName="text-[0.62rem] tracking-[0.2em] font-medium"
              borderRadius={0}
              borderWidth={0.1}
            >
              START A PROJECT →
            </GlassButton>

            <GlassButton
              variant="subtle"
              className="animate-reveal"
              style={{ animationDelay: '0.7s' }}
              onClick={() => router.push('/work')}
              textClassName="text-[0.62rem] tracking-[0.2em] font-medium text-white/70"
              borderRadius={0}
              borderWidth={0.05}
            >
              VIEW OUR WORK
            </GlassButton>
          </div>
        </div>
      </div>

      {/* Bottom-left phone */}
      <span
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '4rem',
          writingMode: 'vertical-lr',
          fontFamily: 'var(--font-body)',
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          color: 'var(--dim)',
        }}
        className="hero-corner"
      >
        +91 79956 17374
      </span>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        className="hero-corner"
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.5rem',
            letterSpacing: '0.4em',
            color: 'var(--dim)',
            textTransform: 'uppercase',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(to bottom, var(--cobalt), transparent)',
            animation: 'scaleYPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scaleYPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.8; }
          50% { transform: scaleY(0.6); opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .hero-outer { padding: 0 1.5rem 4rem !important; }
          .hero-bottom { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-bottom > div:last-child { justify-content: flex-start !important; }
          .hero-corner { display: none !important; }
        }
      `}</style>
    </main>
  )
}
