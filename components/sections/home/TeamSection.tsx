'use client'

import { useState, useEffect } from 'react'
import { useMobileReveal } from '@/hooks/useMobileReveal'

const founders = [
  {
    name: 'Eathen Baby',
    role: 'FOUNDER',
    img: '/team/eathen.png',
    position: 'center top',
  },
  {
    name: 'Ajmal Mullapati',
    role: 'FOUNDER',
    img: '/team/ajmal.png',
    position: 'center top',
  },
]

// Individual founder card — hooks called at component level
function FounderCard({
  founder,
  isMobile,
  delay,
}: {
  founder: typeof founders[0]
  isMobile: boolean
  delay: number
}) {
  const portraitReveal = useMobileReveal({ enabled: isMobile })
  const captionReveal = useMobileReveal({ enabled: isMobile })

  return (
    <div className="founder-profile">
      {/* Portrait — 4:5 ratio, reveals with scale */}
      <div
        ref={portraitReveal.ref}
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '125%',
          overflow: 'hidden',
          background: 'var(--ink4)',
          opacity: portraitReveal.isVisible ? 1 : 0,
          transform: portraitReveal.isVisible ? 'scale(1)' : 'scale(1.025)',
          transition: `opacity 850ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 850ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          borderRadius: '2px',
        }}
      >
        <img
          src={founder.img}
          alt={founder.name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: founder.position,
            filter: 'grayscale(1) contrast(1.1) brightness(0.92)',
            transition: 'transform 850ms cubic-bezier(0.2, 1, 0.3, 1), filter 600ms ease',
          }}
          className="founder-img"
        />
      </div>

      {/* Glass caption band — attached below portrait */}
      <div
        ref={captionReveal.ref}
        className="founder-caption-glass"
        style={{
          marginTop: '0',
          padding: '1.4rem 1.6rem 1.6rem',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 20%, rgba(9,14,28,0.18) 100%)',
          backdropFilter: 'blur(14px) saturate(130%)',
          WebkitBackdropFilter: 'blur(14px) saturate(130%)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderTop: '1px solid rgba(255,255,255,0.14)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.09), inset 0 -1px 0 rgba(255,255,255,0.03)',
          borderRadius: '0 0 2px 2px',
          opacity: captionReveal.isVisible ? 1 : 0,
          transform: captionReveal.isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: `opacity 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + 120}ms, transform 650ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + 120}ms`,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 2.2vw, 1.9rem)',
            fontWeight: 300,
            color: 'var(--white)',
            lineHeight: 1.1,
            marginBottom: '0.4rem',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
          }}
        >
          {founder.name}
        </div>
        <div
          className="label-tag"
          style={{ color: 'var(--cobalt2)' }}
        >
          {founder.role}
        </div>
      </div>
    </div>
  )
}

export default function TeamSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const eyebrowReveal = useMobileReveal({ enabled: isMobile })
  const headingReveal = useMobileReveal({ enabled: isMobile })
  const statementReveal = useMobileReveal({ enabled: isMobile })

  return (
    <section
      style={{
        padding: '10rem 4rem',
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
        position: 'relative',
        zIndex: 10,
      }}
      className="studio-section"
    >
      {/* Intro — full 12-column split */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '7fr 1fr 4fr',
          gap: '0 2rem',
          marginBottom: '6rem',
          alignItems: 'end',
        }}
        className="studio-intro"
      >
        <div>
          <div
            ref={eyebrowReveal.ref}
            style={{
              opacity: eyebrowReveal.isVisible ? 1 : 0,
              transform: eyebrowReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span className="label-tag">FOUNDERS</span>
          </div>
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
                fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                marginTop: '1rem',
                color: 'var(--white)',
              }}
            >
              The founders
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'transparent',
                  WebkitTextStroke: '1.2px var(--white)',
                  fontSize: '0.92em',
                }}
              >
                behind REVOLQ.
              </em>
            </h2>
          </div>
        </div>

        {/* Spacer column */}
        <div />

        <div
          ref={statementReveal.ref}
          className="studio-statement-glass"
          style={{
            padding: '1.5rem 1.75rem',
            background: 'linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.018) 40%, rgba(9,14,28,0.14) 100%)',
            backdropFilter: 'blur(12px) saturate(125%)',
            WebkitBackdropFilter: 'blur(12px) saturate(125%)',
            border: '1px solid rgba(255,255,255,0.085)',
            borderTop: '1px solid rgba(255,255,255,0.13)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.07)',
            borderRadius: '2px',
            alignSelf: 'end',
            display: 'flex',
            alignItems: 'center',
            minHeight: '4.5rem',
            opacity: statementReveal.isVisible ? 1 : 0,
            transform: statementReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.84rem',
              lineHeight: 1.65,
              color: 'var(--fog)',
              margin: 0,
            }}
          >
            Every decision stays close to the people responsible for the outcome.
          </p>
        </div>
      </div>

      {/* Full-width founder spread */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
        }}
        className="founders-grid"
      >
        {founders.map((founder, i) => (
          <FounderCard
            key={founder.name}
            founder={founder}
            isMobile={isMobile}
            delay={i * 100}
          />
        ))}
      </div>

      <style>{`
        .founder-profile:hover .founder-img {
          transform: scale(1.02);
          filter: grayscale(0.4) contrast(1.05) brightness(0.95);
        }
        /* Caption glass hover — strengthen edge */
        .founder-caption-glass {
          transition: border-color 280ms cubic-bezier(0.16,1,0.3,1),
                      box-shadow 280ms cubic-bezier(0.16,1,0.3,1);
        }
        .founder-profile:hover .founder-caption-glass {
          border-color: rgba(255,255,255,0.16) !important;
          box-shadow: 0 12px 32px rgba(0,0,0,0.28),
                      inset 0 1px 0 rgba(255,255,255,0.13),
                      inset 0 -1px 0 rgba(255,255,255,0.04) !important;
        }
        /* Fallback */
        @supports not (backdrop-filter: blur(1px)) {
          .founder-caption-glass,
          .studio-statement-glass {
            background: rgba(14, 17, 32, 0.90) !important;
          }
        }
        @media (max-width: 768px) {
          .studio-section { padding: 6rem 1.5rem !important; }
          .studio-intro { grid-template-columns: 1fr !important; gap: 2rem 0 !important; }
          .founders-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .founder-caption-glass {
            backdrop-filter: blur(8px) saturate(115%) !important;
            -webkit-backdrop-filter: blur(8px) saturate(115%) !important;
          }
          .studio-statement-glass { display: none !important; }
        }
      `}</style>
    </section>
  )
}
