'use client'

import { useEffect, useRef, useState } from 'react'
import { useMobileReveal } from '@/hooks/useMobileReveal'

const processStages = [
  {
    number: '01',
    title: 'Diagnose',
    description:
      'We identify the commercial problem, customer journey and operational friction before recommending a solution.',
    deliverable:
      'A prioritised system map, opportunities and recommended scope.',
    decision: 'Proceed with the defined scope or revise priorities.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We establish the user journeys, information structure, technical requirements and success criteria.',
    deliverable:
      'The project architecture, content requirements, timeline and implementation plan.',
    decision:
      'Approve the system structure before visual design and development begin.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We design, develop and connect every component into one functioning system.',
    deliverable:
      'A staging build, structured review rounds and performance validation.',
    decision: 'Approve the complete system for launch.',
  },
  {
    number: '04',
    title: 'Operate',
    description:
      'We deploy, monitor and improve the system using real customer and operational data.',
    deliverable:
      'The live product, analytics access, documentation and agreed post-launch support.',
    decision:
      'Begin the ongoing optimisation cycle or complete the handover.',
  },
]

// Individual mobile stage — hooks called at component level (not inside map)
function MobileStage({
  stage,
  index,
  isMobile,
  isLast,
}: {
  stage: typeof processStages[0]
  index: number
  isMobile: boolean
  isLast: boolean
}) {
  const { ref, isVisible } = useMobileReveal({ enabled: isMobile })

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        paddingLeft: '2.5rem',
        paddingBottom: isLast ? '0' : '4rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms`,
      }}
    >
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            left: '9px',
            top: '2rem',
            bottom: '0',
            width: '2px',
            background: 'var(--cobalt)',
          }}
        />
      )}
      <div
        style={{
          position: 'absolute',
          left: '5px',
          top: '0.8rem',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'var(--cobalt)',
          border: '2px solid var(--ink2)',
        }}
      />
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'var(--cobalt)',
          marginBottom: '0.5rem',
        }}
      >
        {stage.number}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.6rem, 12vw, 4rem)',
          fontWeight: 300,
          color: 'var(--white)',
          lineHeight: 0.95,
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
        }}
      >
        {stage.title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'var(--fog)',
          marginBottom: '2rem',
        }}
      >
        {stage.description}
      </p>
      <div style={{ marginBottom: '1.5rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--cobalt2)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          You receive
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--fog)' }}>
          {stage.deliverable}
        </p>
      </div>
      <div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--cobalt2)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          Decision
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--fog)' }}>
          {stage.decision}
        </p>
      </div>
    </div>
  )
}

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const eyebrowReveal = useMobileReveal({ enabled: isMobile })
  const headingReveal = useMobileReveal({ enabled: isMobile })
  const descriptionReveal = useMobileReveal({ enabled: isMobile })

  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      const track = trackRef.current
      if (!track) return

      const rect = track.getBoundingClientRect()
      const trackHeight = track.offsetHeight
      const viewportHeight = window.innerHeight
      const headerHeight = 96

      const scrolledIntoTrack = Math.max(0, headerHeight - rect.top)
      const trackScrollableHeight = trackHeight - viewportHeight
      
      const progress = Math.min(1, Math.max(0, scrolledIntoTrack / trackScrollableHeight))

      const newIndex = Math.min(
        processStages.length - 1,
        Math.floor(progress * processStages.length)
      )

      setActiveIndex(newIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const progressPercent = ((activeIndex + 1) / processStages.length) * 100

  return (
    <section
      style={{
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
        position: 'relative',
        zIndex: 10,
      }}
      className="build-sequence-section"
    >
      {/* Section header */}
      <div
        style={{
          padding: '10rem 4rem 6rem',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '4rem',
        }}
        className="sequence-header"
      >
        <div>
          <div
            ref={eyebrowReveal.ref}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.3em',
              color: 'var(--dim)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              opacity: eyebrowReveal.isVisible ? 1 : 0,
              transform: eyebrowReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            04 / PROCESS
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
                fontSize: 'clamp(2.5rem, 4.5vw, 5rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                color: 'var(--white)',
                letterSpacing: '-0.01em',
              }}
            >
              FROM UNCLEAR PROBLEM
              <br />
              TO WORKING SYSTEM.
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
                fontSize: '0.88rem',
                lineHeight: 1.8,
                color: 'var(--fog)',
              }}
            >
              A clear four-stage engagement with defined decisions, deliverables
              and ownership at every step.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop: Sticky sequence track */}
      <div
        ref={trackRef}
        className="process-track"
        style={{
          position: 'relative',
          height: '260vh',
        }}
      >
        <div
          className="process-sticky"
          style={{
            position: 'sticky',
            top: '96px',
            height: 'calc(100vh - 96px)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 0.9fr) 40px minmax(0, 2.6fr)',
            columnGap: 'clamp(32px, 4vw, 72px)',
            alignItems: 'center',
            padding: '0 4rem',
          }}
        >
          {/* LEFT: Stage index */}
          <aside
            className="process-index"
            style={{
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(24px, 3vh, 40px)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.55rem',
                letterSpacing: '0.25em',
                color: 'var(--dim)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              04 / PROCESS
            </div>

            {processStages.map((stage, i) => {
              const isActive = activeIndex === i
              return (
                <div
                  key={stage.number}
                  style={{
                    transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                    transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: isActive ? '0.75rem' : '0.65rem',
                      letterSpacing: '0.15em',
                      color: isActive ? 'var(--cobalt)' : 'rgba(255,255,255,0.65)',
                      marginBottom: '0.3rem',
                      transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {stage.number}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: isActive ? '1.6rem' : '1.3rem',
                      fontWeight: 300,
                      color: 'var(--white)',
                      textTransform: 'uppercase',
                      borderBottom: isActive ? '2px solid var(--cobalt)' : 'none',
                      paddingBottom: isActive ? '0.3rem' : '0',
                      display: 'inline-block',
                      transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {stage.title}
                  </div>
                </div>
              )
            })}
          </aside>

          {/* MIDDLE: Progress signal */}
          <div
            className="process-signal"
            style={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignSelf: 'stretch',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '19px',
                top: '15%',
                bottom: '15%',
                width: '2px',
                background: 'var(--line)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '19px',
                top: '15%',
                width: '2px',
                height: `${progressPercent * 0.7}%`,
                background: 'var(--cobalt)',
                transition: 'height 500ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                left: '15px',
                top: '15%',
                bottom: '15%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              {processStages.map((stage, i) => {
                const isActive = activeIndex === i
                const isComplete = activeIndex > i
                return (
                  <div
                    key={stage.number}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: isActive || isComplete ? 'var(--cobalt)' : 'transparent',
                      border: `2px solid ${isActive || isComplete ? 'var(--cobalt)' : 'var(--line)'}`,
                      transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* RIGHT: Stage content viewport */}
          <div
            className="process-content-viewport"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: 'min(620px, calc(100vh - 192px))',
              alignSelf: 'center',
            }}
          >
            {processStages.map((stage, i) => (
              <article
                key={stage.number}
                className="process-stage-panel"
                data-active={activeIndex === i}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  opacity: activeIndex === i ? 1 : 0,
                  visibility: activeIndex === i ? 'visible' : 'hidden',
                  pointerEvents: activeIndex === i ? 'auto' : 'none',
                  transform: activeIndex === i ? 'translateY(0)' : 'translateY(16px)',
                  transition:
                    'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1), visibility 600ms',
                }}
              >
                <h3
                  className="process-stage-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3.5rem, 6vw, 7rem)',
                    fontWeight: 300,
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                    color: 'var(--white)',
                    margin: '0 0 2rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {stage.title}
                </h3>

                <p
                  className="process-stage-description"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    color: 'var(--fog)',
                    maxWidth: '680px',
                    marginBottom: '3rem',
                  }}
                >
                  {stage.description}
                </p>

                <div
                  className="process-stage-details"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: 'clamp(32px, 5vw, 72px)',
                    paddingTop: '1.75rem',
                    borderTop: '1px solid var(--line)',
                    maxWidth: '680px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        color: 'var(--cobalt2)',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                      }}
                    >
                      You receive
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: 'var(--fog)',
                      }}
                    >
                      {stage.deliverable}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.2em',
                        color: 'var(--cobalt2)',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                      }}
                    >
                      Decision
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        color: 'var(--fog)',
                      }}
                    >
                      {stage.decision}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical timeline — each stage uses IntersectionObserver inline */}
      <div className="sequence-mobile" style={{ padding: '4rem 1.5rem' }}>
        {processStages.map((stage, i) => (
          <MobileStage key={stage.number} stage={stage} index={i} isMobile={isMobile} isLast={i === processStages.length - 1} />
        ))}
      </div>

      <style>{`
        @media (min-width: 769px) {
          .sequence-mobile { display: none !important; }
        }
        @media (max-width: 768px) {
          .sequence-header { 
            padding: 6rem 1.5rem 3rem !important;
            grid-template-columns: 1fr !important; 
            gap: 2rem !important; 
          }
          .process-track { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-stage-panel,
          .process-index > div,
          .process-signal > div {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}
