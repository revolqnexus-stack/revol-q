'use client'

import Link from 'next/link'

const metrics = [
  { num: '464+', label: 'GOOGLE REVIEWS' },
  { num: '4.9★', label: 'CLIENT RATING' },
  { num: '124%', label: 'TRAFFIC GROWTH' },
  { num: '3.2k', label: 'MONTHLY BOOKINGS' },
]

export default function WorkPreview() {
  return (
    <section
      style={{
        padding: '10rem 4rem',
        position: 'relative',
        zIndex: 10,
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
      }}
      className="work-section"
    >
      {/* Label + Headline */}
      <div style={{ marginBottom: '4rem' }}>
        <span className="label-tag">SELECTED WORK</span>
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
          The work.
          <br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
            Built for real businesses.
          </em>
        </h2>
      </div>

      {/* Featured card — NIXTUDIO */}
      <div className="work-card" style={{ background: 'var(--ink3)' }}>
        {/* Image area */}
        <div
          style={{
            height: '55vh',
            overflow: 'hidden',
            position: 'relative',
            background: 'var(--ink4)',
          }}
        >
          {/* Placeholder gradient image */}
          <div
            className="work-card-img"
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #0a0a1a 0%, #0d0d30 40%, #050520 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 12vw, 12rem)',
                fontWeight: 300,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.07)',
                letterSpacing: '0.15em',
              }}
            >
              NIXTUDIO
            </span>
          </div>

          {/* Badge */}
          <span
            style={{
              position: 'absolute',
              top: '1.5rem',
              left: '1.5rem',
              border: '1px solid var(--line2)',
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              padding: '0.4rem 1rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.56rem',
              letterSpacing: '0.3em',
              color: 'var(--fog)',
              textTransform: 'uppercase',
            }}
          >
            BRIDAL STUDIO · PALA, KERALA · 2025
          </span>
        </div>

        {/* Content */}
        <div
          style={{
            padding: '3rem 4rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
          }}
          className="work-card-content"
        >
          {/* Left */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                color: 'var(--white)',
                display: 'block',
              }}
            >
              NIXTUDIO
            </span>
            <em
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2vw, 2rem)',
                fontStyle: 'italic',
                color: 'var(--cobalt2)',
                display: 'block',
                marginTop: '0.3rem',
              }}
            >
              by Nikita Liby
            </em>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: 200,
                lineHeight: 1.9,
                color: 'var(--fog)',
                marginTop: '1.2rem',
                maxWidth: '400px',
              }}
            >
              Redefining the digital presence for Kerala&apos;s premier bridal studio.
              Complete web, SEO, and AI automation system built from the ground up.
            </p>
            <Link
              href="/work/nixtudio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '2rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                color: 'var(--cobalt2)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'gap 300ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '14px')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '8px')}
            >
              VIEW CASE STUDY →
            </Link>
          </div>

          {/* Right — metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              alignContent: 'start',
            }}
          >
            {metrics.map((m) => (
              <div key={m.label} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 3vw, 3rem)',
                    fontWeight: 300,
                    color: 'var(--white)',
                    lineHeight: 1,
                  }}
                >
                  {m.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6rem',
                    color: 'var(--dim)',
                    letterSpacing: '0.25em',
                    marginTop: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second row — 2 coming soon cards */}
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}
        className="work-row2"
      >
        {[
          { title: 'Holy Family Dental',  tag: 'DENTAL CLINIC · KOTTAYAM' },
          { title: 'Studio Anagram',      tag: 'CREATIVE STUDIO · KOCHI' },
        ].map((p) => (
          <div
            key={p.title}
            className="work-card"
            style={{ background: 'var(--ink3)', cursor: 'default' }}
          >
            <div
              style={{
                height: '320px',
                overflow: 'hidden',
                background: 'var(--ink4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="work-card-img"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #0a0a0a, #111)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.06)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {p.title.split(' ')[0].toUpperCase()}
                </span>
              </div>
            </div>
            <div style={{ padding: '1.8rem' }}>
              <span className="label-tag">{p.tag}</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.7rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  {p.title}
                </h3>
                <span
                  style={{
                    border: '1px solid var(--dim)',
                    color: 'var(--dim)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    padding: '0.2rem 0.7rem',
                    textTransform: 'uppercase',
                  }}
                >
                  COMING SOON
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) { .work-card-content { grid-template-columns: 1fr !important; gap: 2rem !important; }} 
        @media (max-width: 768px) { .work-section { padding: 6rem 1.5rem !important; } .work-row2 { grid-template-columns: 1fr !important; } .work-card-content { padding: 2rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
