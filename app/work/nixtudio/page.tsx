'use client'

import Link from 'next/link'

const scope = [
  'Brand strategy and content structure',
  'Custom Next.js website',
  'Portfolio and gallery system',
  'Local search architecture',
  'Google Business Profile setup',
  'WhatsApp AI enquiry automation',
  'n8n automation workflow',
]

export default function NixtudioPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span className="label-tag">CASE STUDY</span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.5rem',
                letterSpacing: '0.2em',
                color: '#22c55e',
                border: '1px solid #22c55e44',
                padding: '0.25rem 0.6rem',
                background: '#22c55e10',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22c55e' }} />
              LIVE
            </span>
          </div>
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
            Brand Website / Search / Conversion · Beauty · Bridal · Salon
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 9rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              color: 'var(--white)',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}
          >
            NIXTUDIO
          </h1>
          <em
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 3rem)',
              fontStyle: 'italic',
              color: 'var(--cobalt2)',
              display: 'block',
              marginBottom: '2rem',
            }}
          >
            by Nikita Liby
          </em>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.80)',
              lineHeight: 1.8,
              maxWidth: '620px',
            }}
          >
            An editorial bridal studio and salon website designed around portfolio discovery,
            service information, local search and direct enquiry pathways.
          </p>
        </div>

        {/* Hero image */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16/7',
            background: 'var(--ink3)',
            border: '1px solid var(--line)',
            overflow: 'hidden',
            marginBottom: '5rem',
            position: 'relative',
          }}
        >
          <img
            src="/work/nixtudio.png"
            alt="NIXTUDIO bridal studio website"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(0.3) brightness(0.8)',
            }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              border: '1px solid var(--line2)',
              background: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(8px)',
              padding: '0.4rem 1rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.56rem',
              letterSpacing: '0.3em',
              color: 'var(--fog)',
              textTransform: 'uppercase',
            }}
          >
            BRIDAL STUDIO · INDIA · 2025
          </div>
        </div>

        {/* Metadata row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '6rem',
            borderTop: '1px solid var(--line)',
            paddingTop: '2rem',
          }}
          className="meta-grid"
        >
          {[
            { label: 'Industry', value: 'Beauty / Bridal / Salon' },
            { label: 'Year', value: '2025' },
            { label: 'Location', value: 'India' },
            { label: 'Status', value: 'Live — nixtudio.in' },
          ].map((m) => (
            <div key={m.label}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {m.label}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--fog)' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Problem / What we built */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '6rem' }} className="case-grid">
          <div>
            <span className="label-tag">BUSINESS PROBLEM</span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.9,
                marginTop: '1.5rem',
              }}
            >
              NIXTUDIO was a well-regarded bridal makeup studio in Pala with strong word of mouth
              but no digital presence that matched the quality of their work. Enquiries arrived
              entirely through personal contacts. There was no way for prospective clients to
              discover, evaluate or reach out online.
            </p>
          </div>

          <div>
            <span className="label-tag">SYSTEM BUILT</span>
            <div style={{ borderTop: '1px solid var(--line)', marginTop: '1.5rem' }}>
              {scope.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.9rem',
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--line)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: 'var(--cobalt2)', flexShrink: 0, marginTop: '0.1rem' }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div
          style={{
            borderTop: '1px solid var(--line)',
            borderLeft: '2px solid var(--cobalt)',
            padding: '2rem 0 2rem 2.5rem',
            marginBottom: '5rem',
          }}
        >
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.25em', color: 'var(--cobalt2)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            OUTCOME
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, maxWidth: '640px' }}>
            Live at nixtudio.in. Portfolio, services, and enquiry pathways active.
            Local search presence established. WhatsApp enquiries now handled through
            an automated workflow that qualifies intent and routes to the right next step.
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href="https://nixtudio.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '1rem 2rem',
              background: 'var(--cobalt)',
              color: 'var(--white)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              minHeight: '52px',
              transition: 'background 200ms',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--cobalt2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--cobalt)')}
          >
            VIEW LIVE PROJECT ↗
          </a>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '1rem 2rem',
              border: '1px solid var(--line2)',
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              minHeight: '52px',
              transition: 'border-color 200ms',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--cobalt2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--line2)')}
          >
            BUILD SOMETHING SIMILAR →
          </Link>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .page-inner  { padding: 0 1.5rem 5rem !important; }
          .case-grid   { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .meta-grid   { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  )
}
