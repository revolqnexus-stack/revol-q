'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useMobileReveal } from '@/hooks/useMobileReveal'

const systems = [
  {
    num: '01',
    title: 'ATTENTION',
    outcome: 'Become visible, legible and memorable to the right audience.',
    includes: [
      'Brand positioning',
      'Websites',
      'Local search',
      'SEO',
      'Campaign pages',
      'Content structure',
    ],
  },
  {
    num: '02',
    title: 'CONVERSION',
    outcome: 'Turn interest into a clear next action.',
    includes: [
      'UX design',
      'Enquiry journeys',
      'Ecommerce',
      'Booking systems',
      'Lead capture',
      'Analytics',
    ],
  },
  {
    num: '03',
    title: 'OPERATIONS',
    outcome: 'Remove repetitive work and make the business easier to operate.',
    includes: [
      'Automation',
      'CRM',
      'Dashboards',
      'Integrations',
      'Internal platforms',
      'AI-assisted workflows',
    ],
  },
]

function SystemCard({ system }: { system: typeof systems[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        border: '1px solid var(--line)',
        background: 'var(--ink3)',
        transition: 'border-color 300ms',
      }}
      className="system-card"
    >
      {/* Always visible header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '2rem 2.5rem',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: 'var(--dim)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            SYSTEM {system.num}
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              fontWeight: 300,
              color: 'var(--white)',
              marginBottom: '1rem',
              lineHeight: 1,
            }}
          >
            {system.title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              lineHeight: 1.7,
              color: 'var(--fog)',
              maxWidth: '500px',
            }}
          >
            {system.outcome}
          </p>
        </div>

        <div
          style={{
            width: '40px',
            height: '40px',
            border: '1px solid var(--line2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'transform 300ms, border-color 300ms',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            borderColor: isOpen ? 'var(--cobalt)' : 'var(--line2)',
          }}
        >
          <ChevronDown size={18} color={isOpen ? 'var(--cobalt)' : 'var(--fog)'} />
        </div>
      </button>

      {/* Expandable content */}
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 400ms ease-in-out',
        }}
      >
        <div
          style={{
            padding: '0 2.5rem 2rem',
            borderTop: '1px solid var(--line)',
            marginTop: '0',
            paddingTop: '2rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--cobalt2)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Includes
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.75rem',
            }}
          >
            {system.includes.map((item) => (
              <div
                key={item}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--fog)',
                  paddingLeft: '1rem',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--cobalt2)',
                  }}
                >
                  •
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesIndex() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const eyebrowReveal = useMobileReveal({ enabled: isMobile })
  const headingReveal = useMobileReveal({ enabled: isMobile })
  const contentReveal = useMobileReveal({ enabled: isMobile })

  return (
    <section
      style={{
        padding: '10rem 4rem',
        position: 'relative',
        zIndex: 10,
      }}
      className="services-section"
    >
      <div style={{ marginBottom: '4rem' }}>
        <div
          ref={eyebrowReveal.ref}
          style={{
            opacity: eyebrowReveal.isVisible ? 1 : 0,
            transform: eyebrowReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="label-tag">SYSTEMS</span>
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
            Three systems.
            <br />
            <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
              One business.
            </em>
          </h2>
        </div>
      </div>

      <div
        ref={contentReveal.ref}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          opacity: contentReveal.isVisible ? 1 : 0,
          transform: contentReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms',
        }}
      >
        {systems.map((system) => (
          <SystemCard key={system.num} system={system} />
        ))}
      </div>

      <style>{`
        .system-card:hover {
          border-color: rgba(26, 26, 255, 0.4) !important;
        }
        @media (max-width: 768px) {
          .services-section { padding: 6rem 1.5rem !important; }
          .system-card button { padding: 1.5rem !important; }
          .system-card > div > div { padding: 0 1.5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
