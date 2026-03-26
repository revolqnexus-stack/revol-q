'use client'

import Link from 'next/link'

const services = [
  { num: '01', title: 'WEB DEVELOPMENT', tag: 'Next.js · TypeScript · Tailwind', desc: 'Custom websites built for performance, SEO, and conversion. No templates. No themes.', href: '/services/web-development', from: '₹25,000' },
  { num: '02', title: 'AI AUTOMATION',   tag: 'GPT-4 · n8n · WhatsApp API',     desc: 'AI agents that handle bookings, reminders, and reviews — 24/7, zero human effort.', href: '/services/ai-automation', from: '₹20,000 + ₹3,000/mo' },
  { num: '03', title: 'SEO & GBP',       tag: 'Local Search · Google Maps',      desc: 'Local SEO and Google Business Profile that puts you first in every search.', href: '/services/seo-gbp', from: '₹8,000/month' },
  { num: '04', title: 'BRAND STRATEGY',  tag: 'Identity · Positioning · Voice',  desc: 'The visual language and positioning that makes your brand unforgettable.', href: '/services/brand-strategy', from: '₹15,000' },
  { num: '05', title: 'MONTHLY RETAINER',tag: 'Ongoing · Managed · Compounding', desc: 'GBP management, SEO monitoring, content, and AI maintenance every month.', href: '/services/retainer', from: '₹4,000/month' },
]

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="services-page-inner">
        {/* Hero */}
        <div style={{ borderBottom: '1px solid var(--line)', paddingBottom: '4rem', marginBottom: '4rem' }}>
          <span className="label-tag">WHAT WE DO</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw, 8rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              marginTop: '1.2rem',
              color: 'var(--white)',
            }}
          >
            Every service.
            <br />
            <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>
              Carefully delivered.
            </em>
          </h1>
        </div>

        {/* Service detail rows */}
        {services.map((s) => (
          <div key={s.num} style={{ borderBottom: '1px solid var(--line)', paddingBottom: '3rem', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                gap: '2rem',
                alignItems: 'start',
              }}
              className="srv-detail-row"
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--dim)', paddingTop: '0.5rem' }}>{s.num}</span>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginBottom: '0.6rem' }}>{s.title}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.8, maxWidth: '520px', marginBottom: '1rem' }}>{s.desc}</p>
                <span className="label-tag" style={{ color: 'var(--dim)' }}>{s.tag}</span>
              </div>
              <div style={{ textAlign: 'right', paddingTop: '0.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--white)', marginBottom: '0.8rem' }}>{s.from}</div>
                <Link
                  href={s.href}
                  style={{
                    border: '1px solid var(--line2)',
                    color: 'var(--fog)',
                    padding: '0.55rem 1.2rem',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'border-color 200ms, color 200ms',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='var(--cobalt)'; el.style.color='var(--cobalt2)' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='var(--line2)'; el.style.color='var(--fog)' }}
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) { .services-page-inner { padding: 0 1.5rem 5rem !important; } .srv-detail-row { grid-template-columns: 40px 1fr !important; } .srv-detail-row > div:last-child { grid-column: 2; text-align: left !important; } }
      `}</style>
    </main>
  )
}
