'use client'

import Link from 'next/link'

const services = [
  { num: '01', title: 'WEB DEVELOPMENT', tag: 'Next.js · TypeScript · Tailwind', href: '/services/web-development' },
  { num: '02', title: 'AI AUTOMATION',   tag: 'GPT-4 · n8n · WhatsApp API',     href: '/services/ai-automation' },
  { num: '03', title: 'SEO & GBP',       tag: 'Local Search · Google Maps',      href: '/services/seo-gbp' },
  { num: '04', title: 'BRAND STRATEGY',  tag: 'Identity · Positioning · Voice',  href: '/services/brand-strategy' },
  { num: '05', title: 'MONTHLY RETAINER',tag: 'Ongoing · Managed · Compounding', href: '/services/retainer' },
]

export default function ServicesIndex() {
  return (
    <section
      style={{
        padding: '10rem 4rem',
        position: 'relative',
        zIndex: 10,
      }}
      className="services-section"
    >
      {/* Label + Headline */}
      <div style={{ marginBottom: '4rem' }}>
        <span className="label-tag">WHAT WE DO</span>
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
          Every service.
          <br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
            Carefully delivered.
          </em>
        </h2>
      </div>

      {/* Service list */}
      <div style={{ borderTop: '1px solid var(--line)' }}>
        {services.map((s) => (
          <Link
            key={s.num}
            href={s.href}
            className="service-row"
            style={{ textDecoration: 'none' }}
          >
            <span className="srv-num">{s.num}</span>
            <span className="srv-title" style={{ fontFamily: 'var(--font-display)' }}>{s.title}</span>
            <span className="srv-tag">{s.tag}</span>
            <span className="srv-arrow">→</span>
          </Link>
        ))}
      </div>

      {/* All services link */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
        <Link
          href="/services"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: 'var(--cobalt2)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'opacity 200ms',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.7')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
        >
          All services →
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) { .services-section { padding: 6rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
