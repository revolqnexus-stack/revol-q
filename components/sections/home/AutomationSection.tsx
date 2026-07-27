'use client'

import { Smartphone, Bot, Calendar, CheckCircle, User, BarChart2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useMobileReveal } from '@/hooks/useMobileReveal'

const nodes = [
  { Icon: Smartphone,  text: 'Customer sends WhatsApp enquiry' },
  { Icon: Bot,         text: 'AI understands and qualifies intent' },
  { Icon: Calendar,    text: 'Availability or inventory is checked' },
  { Icon: CheckCircle, text: 'Customer receives correct next step' },
  { Icon: User,        text: 'Staff alerted when human is required' },
  { Icon: BarChart2,   text: 'Follow-ups happen automatically' },
]

const stats = [
  { num: '24/7', label: 'ENQUIRY CAPTURE' },
  { num: 'Faster', label: 'FIRST RESPONSE' },
  { num: 'Fewer', label: 'MISSED FOLLOW-UPS' },
]

export default function AutomationSection() {
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
  const flowReveal = useMobileReveal({ enabled: isMobile })

  return (
    <section
      style={{
        padding: '10rem 4rem',
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
        position: 'relative',
        zIndex: 10,
      }}
      className="auto-section"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="auto-grid"
      >
        {/* Left — description */}
        <div>
          <div
            ref={eyebrowReveal.ref}
            style={{
              opacity: eyebrowReveal.isVisible ? 1 : 0,
              transform: eyebrowReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <span className="label-tag">AI AUTOMATION</span>
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
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 300,
                lineHeight: 0.95,
                marginTop: '1rem',
                color: 'var(--white)',
              }}
            >
              Your business doesn't stop
              <br />
              <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
                when you log off.
              </em>
            </h2>
          </div>

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
                fontSize: '0.9rem',
                fontWeight: 200,
                lineHeight: 2.0,
                color: 'var(--fog)',
                marginTop: '2rem',
                maxWidth: '420px',
              }}
            >
              We build AI systems that handle WhatsApp enquiries, qualify leads, check availability, 
              and send the right next step—24/7. Staff are alerted when human handoff is needed. 
              Automatic handling with human oversight whenever required.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.2rem',
                      fontWeight: 300,
                      color: 'var(--white)',
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.55rem',
                      letterSpacing: '0.2em',
                      color: 'var(--dim)',
                      marginTop: '0.4rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — CSS flow diagram */}
        <div
          ref={flowReveal.ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            opacity: flowReveal.isVisible ? 1 : 0,
            transform: flowReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 210ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 210ms',
          }}
        >
          {nodes.map((n, i) => (
            <div key={i}>
              <div className="flow-node">
                <n.Icon size={14} color="var(--cobalt2)" strokeWidth={1.5} />
                <span style={{ fontFamily: 'var(--font-body)' }}>{n.text}</span>
              </div>
              {i < nodes.length - 1 && (
                <div className="flow-connector">
                  <div className="flow-dot" style={{ animationDelay: `${i * 0.28}s` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .auto-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        @media (max-width: 768px) { .auto-section { padding: 6rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
