import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Monthly Retainer',
  description: 'GBP management, SEO monitoring, content, AI maintenance — all handled every month. You run your business. We grow it.',
}

const monthlyDeliverables = [
  '8 GBP posts with captions',
  'All reviews monitored + responded',
  'Monthly SEO report',
  'Website content updates',
  'Competitor tracking',
  'WhatsApp AI maintenance',
  'Priority 4-hour support',
]

const tiers = [
  { name: 'STARTER', price: '₹4,000', items: ['4 GBP posts', 'Monitoring', 'Review responses'] },
  { name: 'STANDARD', price: '₹8,000', items: ['Full service (all 7 deliverables)', 'Recommended package'], featured: true },
  { name: 'PREMIUM', price: '₹15,000', items: ['Everything + AI maintenance', 'Strategy calls', 'Instagram automation', 'GST export'] },
]

export default function RetainerPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        <span className="label-tag">05 — MONTHLY RETAINER</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          We become your<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>digital team.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '540px', marginTop: '2rem' }}>
          GBP management, SEO monitoring, content, AI maintenance — all handled every month. You run your business. We grow it.
        </p>

        {/* Monthly deliverables */}
        <div style={{ marginTop: '5rem' }}>
          <span className="label-tag">MONTHLY DELIVERABLES</span>
          <div style={{ borderTop: '1px solid var(--line)', marginTop: '1.5rem' }}>
            {monthlyDeliverables.map((d) => (
              <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fog)' }}>
                <span style={{ color: 'var(--cobalt2)', flexShrink: 0 }}>✓</span>{d}
              </div>
            ))}
          </div>
        </div>

        {/* Tiers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '5rem' }} className="retainer-grid">
          {tiers.map((t) => (
            <div key={t.name} style={{ background: 'var(--ink3)', border: t.featured ? '1px solid rgba(26,26,255,0.5)' : '1px solid var(--line)', padding: '2.5rem', position: 'relative' }}>
              {t.featured && (
                <span style={{ position: 'absolute', top: '-1px', right: '1.5rem', background: 'var(--cobalt)', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.2em', padding: '0.25rem 0.8rem', textTransform: 'uppercase' }}>
                  RECOMMENDED
                </span>
              )}
              <div className="label-tag">{t.name}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 300, color: 'var(--white)', lineHeight: 1, margin: '1.2rem 0 0.3rem' }}>{t.price}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--fog)' }}>per month</div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '1.5rem 0' }} />
              {t.items.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.6rem', padding: '0.5rem 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--fog)' }}>
                  <span style={{ color: 'var(--cobalt2)', flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
              <Link href="/contact" style={{ display: 'block', textAlign: 'center', marginTop: '1.5rem', padding: '0.8rem', fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', background: t.featured ? 'var(--cobalt)' : 'transparent', color: t.featured ? 'var(--white)' : 'var(--fog)', border: t.featured ? 'none' : '1px solid var(--line2)' }}>
                GET STARTED
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .page-inner { padding: 0 1.5rem 5rem !important; } .retainer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  )
}
