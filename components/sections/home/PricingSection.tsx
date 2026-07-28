'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useMobileReveal } from '@/hooks/useMobileReveal'

const engagementModels = [
  {
    number: '01',
    title: 'Launch System',
    price: '₹38,000',
    audience: 'For businesses establishing or rebuilding their primary digital presence.',
    includes: [
      'Strategy and content structure',
      'Custom responsive website',
      'Core enquiry journey',
      'Analytics setup',
      'Foundational search setup',
      'Launch and handover',
    ],
    cta: 'Discuss Launch',
    recommended: false,
  },
  {
    number: '02',
    title: 'Growth System',
    price: '₹55,000',
    audience: 'For businesses that need stronger visibility, lead capture and conversion.',
    includes: [
      'Everything in Launch',
      'Up to 12 core pages',
      'Local-search architecture',
      'Advanced SEO foundations',
      'CRM or enquiry integration',
      'Conversion-focused optimisation',
    ],
    cta: 'Discuss Growth',
    recommended: true,
  },
  {
    number: '03',
    title: 'Custom Operations System',
    price: '₹1,20,000',
    audience: 'For custom platforms, ecommerce, automation and internal operations.',
    includes: [
      'Product and workflow strategy',
      'Custom platform architecture',
      'CRM and system integrations',
      'Automation workflows',
      'Internal admin tools',
      'Deployment and documentation',
    ],
    cta: 'Scope a Custom System',
    recommended: false,
  },
]

export default function PricingSection() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const eyebrowReveal = useMobileReveal({ enabled: isMobile })
  const headingReveal = useMobileReveal({ enabled: isMobile })
  const descriptionReveal = useMobileReveal({ enabled: isMobile })
  const gridReveal = useMobileReveal({ enabled: isMobile })

  return (
    <section
      style={{
        padding: '10rem 4rem 8rem',
        position: 'relative',
        zIndex: 10,
      }}
      className="pricing-section"
    >
      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '4rem',
          marginBottom: '5rem',
        }}
        className="pricing-header"
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
            <span className="label-tag">ENGAGEMENT MODELS</span>
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
              Clear pricing.
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'transparent',
                  WebkitTextStroke: '1.5px var(--white)',
                }}
              >
                Defined scope.
              </em>
            </h2>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div
            ref={descriptionReveal.ref}
            style={{
              opacity: descriptionReveal.isVisible ? 1 : 0,
              transform: descriptionReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) 140ms',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                lineHeight: 1.8,
                color: 'var(--fog)',
              }}
            >
              Three fixed engagement models. Every project begins with a scoping conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial grid */}
      <div
        ref={gridReveal.ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '48px',
          opacity: gridReveal.isVisible ? 1 : 0,
          transform: gridReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 210ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 210ms',
          position: 'relative',
        }}
        className="pricing-grid"
      >
        {/* Vertical electric-blue dividers */}
        <div
          className="pricing-divider"
          style={{
            position: 'absolute',
            left: 'calc(33.333% + 24px)',
            top: '10%',
            bottom: '10%',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(70, 90, 255, 0.7) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div
          className="pricing-divider"
          style={{
            position: 'absolute',
            left: 'calc(66.666% + 24px)',
            top: '10%',
            bottom: '10%',
            width: '1px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(70, 90, 255, 0.7) 50%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {engagementModels.map((model, i) => (
          <div
            key={model.number}
            className={`pricing-panel ${model.recommended ? 'pricing-panel--strong' : 'pricing-panel--subtle'}`}
            style={{
              padding: '3rem 2.5rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderRadius: '2px',
              background: model.recommended
                ? 'linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 60%, rgba(30,60,160,0.08) 100%)'
                : 'linear-gradient(160deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 60%, rgba(4,8,20,0.18) 100%)',
              backdropFilter: 'blur(12px)',
              border: model.recommended
                ? '1px solid rgba(70, 90, 255, 0.25)'
                : '1px solid rgba(255,255,255,0.06)',
              boxShadow: model.recommended
                ? '0 0 32px rgba(48, 75, 255, 0.12), inset 0 1px 0 rgba(255,255,255,0.08)'
                : 'inset 0 1px 0 rgba(255,255,255,0.04)',
              transform: model.recommended ? 'translateY(-24px)' : 'translateY(0)',
              transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Recommended label — glass chip */}
            {model.recommended && (
              <div
                className="pricing-chip"
                style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  padding: '0.4rem 1rem',
                  background: 'var(--cobalt)',
                  border: '1px solid rgba(100,100,255,0.6)',
                  borderRadius: '2px',
                  boxShadow: '0 0 12px rgba(26,26,255,0.4)',
                }}
              >
                MOST SELECTED
              </div>
            )}

            {/* Number */}
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                color: 'var(--dim)',
                textTransform: 'uppercase',
                marginBottom: model.recommended ? '0' : '1.75rem',
              }}
            >
              {model.number}
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
                fontWeight: 300,
                color: 'var(--white)',
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                marginBottom: '2rem',
              }}
            >
              {model.title}
            </div>

            {/* Price */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  color: 'var(--dim)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                FROM
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 4.5vw, 5rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.045em',
                }}
              >
                {model.price}
              </div>
            </div>

            {/* Audience */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: 'var(--fog)',
                maxWidth: '380px',
                marginBottom: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {model.audience}
            </p>

            {/* Includes */}
            <div style={{ flex: 1, marginBottom: '3rem' }}>
              {model.includes.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--fog)',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: 'var(--cobalt2)',
                      fontSize: '0.5rem',
                      flexShrink: 0,
                      marginTop: '0.15rem',
                    }}
                  >
                    ◆
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => router.push('/contact')}
              className="pricing-cta-btn"
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                background: model.recommended
                  ? 'var(--cobalt)'
                  : 'transparent',
                border: model.recommended
                  ? '1px solid var(--cobalt)'
                  : '1px solid var(--border-default)',
                color: 'var(--white)',
                fontFamily: 'var(--font-utility)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 260ms cubic-bezier(0.16,1,0.3,1), border-color 260ms, box-shadow 260ms, transform 260ms',
                minHeight: '52px',
                borderRadius: '0',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-1px)'
                if (model.recommended) {
                  el.style.background = 'var(--cobalt2)'
                } else {
                  el.style.borderColor = 'var(--border-strong)'
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0)'
                if (model.recommended) {
                  el.style.background = 'var(--cobalt)'
                } else {
                  el.style.borderColor = 'var(--border-default)'
                }
              }}
            >
              {model.cta} →
            </button>
          </div>
        ))}
      </div>

      {/* Bottom rule + note */}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          paddingTop: '1.5rem',
          marginTop: '0',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            lineHeight: 1.7,
            color: 'var(--fog)',
          }}
        >
          Final pricing depends on scope. GST, hosting, third-party subscriptions, photography,
          content production and advertising spend are quoted separately.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .pricing-divider {
            display: none !important;
          }
          .pricing-panel {
            transform: translateY(0) !important;
          }
        }
        @media (max-width: 768px) {
          .pricing-section { padding: 6rem 1.5rem 5rem !important; }
          .pricing-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
