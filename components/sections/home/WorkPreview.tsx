'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useMobileReveal } from '@/hooks/useMobileReveal'
import { getHomepageFeatured, STATUS_LABELS, STATUS_COLORS } from '@/lib/workData'

const featured = getHomepageFeatured()

// Status pill
function StatusPill({ status }: { status: string }) {
  const color = STATUS_COLORS[status as keyof typeof STATUS_COLORS] ?? 'var(--dim)'
  const label = STATUS_LABELS[status as keyof typeof STATUS_LABELS] ?? status.toUpperCase()
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-body)',
        fontSize: '0.52rem',
        letterSpacing: '0.2em',
        color,
        textTransform: 'uppercase',
        border: `1px solid ${color}44`,
        padding: '0.3rem 0.7rem',
        background: `${color}12`,
      }}
    >
      {status === 'live' && (
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: color, display: 'inline-block' }} />
      )}
      {label}
    </span>
  )
}

function PreviewRow({
  project,
  index,
  isMobile,
}: {
  project: typeof featured[0]
  index: number
  isMobile: boolean
}) {
  const reveal = useMobileReveal({ enabled: isMobile })

  return (
    <div
      ref={reveal.ref}
      className="wp-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '48px 1fr auto',
        gap: '2rem',
        alignItems: 'start',
        padding: '2.4rem 0',
        borderTop: '1px solid var(--line)',
        opacity: reveal.isVisible ? 1 : 0,
        transform: reveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 650ms cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, transform 650ms cubic-bezier(0.16,1,0.3,1) ${index * 80}ms`,
        cursor: 'default',
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          color: 'var(--dim)',
          paddingTop: '0.2rem',
        }}
      >
        {project.number}
      </div>

      {/* Middle — name + description */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontWeight: 300,
              color: 'var(--white)',
              lineHeight: 1,
              margin: 0,
            }}
          >
            {project.name}
          </h3>
          <StatusPill status={project.status} />
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.15em',
            color: 'var(--cobalt2)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          {project.categoryLabel}
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            color: 'var(--fog)',
            maxWidth: '580px',
          }}
        >
          {project.shortDescription}
        </p>
      </div>

      {/* CTA */}
      <div style={{ paddingTop: '0.3rem' }}>
        {project.status === 'live' && project.externalUrl ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="wp-link"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              color: 'var(--cobalt2)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'gap 250ms cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '12px')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '6px')}
          >
            VIEW LIVE ↗
          </a>
        ) : project.status === 'private' ? (
          <Link
            href="/contact"
            className="wp-link"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              color: 'var(--cobalt2)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              minHeight: '44px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'gap 250ms cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '12px')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '6px')}
          >
            REQUEST WALKTHROUGH →
          </Link>
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              color: 'var(--dim)',
              textTransform: 'uppercase',
            }}
          >
            IN BUILD
          </span>
        )}
      </div>
    </div>
  )
}

export default function WorkPreview() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const eyebrowReveal = useMobileReveal({ enabled: isMobile })
  const headingReveal = useMobileReveal({ enabled: isMobile })

  return (
    <section
      style={{
        padding: '10rem 4rem 8rem',
        position: 'relative',
        zIndex: 10,
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
      }}
      className="work-section"
    >
      {/* Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'flex-end',
          marginBottom: '3rem',
          gap: '2rem',
        }}
        className="work-header"
      >
        <div>
          <div
            ref={eyebrowReveal.ref}
            style={{
              opacity: eyebrowReveal.isVisible ? 1 : 0,
              transform: eyebrowReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span className="label-tag">SELECTED WORK</span>
          </div>
          <div
            ref={headingReveal.ref}
            style={{
              opacity: headingReveal.isVisible ? 1 : 0,
              transform: headingReveal.isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 650ms cubic-bezier(0.16,1,0.3,1) 70ms, transform 650ms cubic-bezier(0.16,1,0.3,1) 70ms',
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
              Proof before
              <br />
              <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
                everything else.
              </em>
            </h2>
          </div>
        </div>
      </div>

      {/* Three flagship rows */}
      <div>
        {featured.map((project, i) => (
          <PreviewRow key={project.slug} project={project} index={i} isMobile={isMobile} />
        ))}
        {/* Final rule */}
        <div style={{ borderTop: '1px solid var(--line)' }} />
      </div>

      {/* Explore all CTA */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '2rem',
        }}
      >
        <Link
          href="/work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            color: 'var(--cobalt2)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            minHeight: '44px',
            transition: 'gap 250ms cubic-bezier(0.16,1,0.3,1)',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '14px')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '8px')}
        >
          EXPLORE ALL WORK ↗
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-section { padding: 5rem 20px 4rem !important; }
          .work-header { grid-template-columns: 1fr !important; }
          .wp-row {
            grid-template-columns: 32px 1fr !important;
            grid-template-rows: auto auto;
            gap: 1rem 14px !important;
          }
          .wp-row > *:last-child {
            grid-column: 2;
            margin-top: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}
