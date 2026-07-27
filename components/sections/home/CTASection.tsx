'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import GlassButton from '@/components/ui/GlassButton'
import { useMobileReveal } from '@/hooks/useMobileReveal'

export default function CTASection() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const badgeReveal = useMobileReveal({ enabled: isMobile })
  const headingReveal = useMobileReveal({ enabled: isMobile })
  const subReveal = useMobileReveal({ enabled: isMobile })
  const ctaReveal = useMobileReveal({ enabled: isMobile })

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
      className="cta-section"
    >
      {/* Availability badge */}
      <div
        ref={badgeReveal.ref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          border: '1px solid var(--line2)',
          padding: '0.55rem 1.4rem',
          marginBottom: '3rem',
          opacity: badgeReveal.isVisible ? 1 : 0,
          transform: badgeReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
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
          Currently taking selected projects for Q1 2026
        </span>
      </div>

      {/* Headline */}
      <div
        ref={headingReveal.ref}
        style={{
          opacity: headingReveal.isVisible ? 1 : 0,
          transform: headingReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) 70ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) 70ms',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
          }}
        >
          Tell us where
        </h2>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 9vw, 9rem)',
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            fontStyle: 'italic',
            color: 'transparent',
            WebkitTextStroke: '2px var(--white)',
            marginBottom: '2rem',
          }}
        >
          the system breaks.
        </h2>
      </div>

      {/* Sub */}
      <div
        ref={subReveal.ref}
        style={{
          opacity: subReveal.isVisible ? 1 : 0,
          transform: subReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            fontWeight: 200,
            lineHeight: 1.9,
            color: 'var(--fog)',
            maxWidth: '500px',
            margin: '0 auto 3rem',
          }}
        >
          We will help identify what should be fixed first, what should be built next 
          and what should never require manual effort again.
        </p>
      </div>

      {/* CTAs */}
      <div
        ref={ctaReveal.ref}
        style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: ctaReveal.isVisible ? 1 : 0,
          transform: ctaReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 210ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 210ms',
        }}
      >
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

      <style>{`
        @media (max-width: 768px) {
          .cta-section { padding: 6rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
