import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Algorithmic Positioning & Local Graph Dominance',
  description: 'Securing the top position on Google isn\'t about keywords; it\'s about dominating the algorithmic graph. Aggressive local search architecture.',
}

const deliverables = [
  'Technical SEO audit and fix',
  'Google Search Console setup',
  'XML Sitemap generation',
  'JSON-LD Schema markup',
  'Meta and OG optimization',
  'GBP complete setup',
  'GBP posts 8/month',
  'Review monitoring + responses',
  'Monthly ranking reports',
  'Competitor analysis',
]

export default function SeoGbpPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        <span className="label-tag">03 — ALGORITHMIC POSITIONING</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          Be found by the<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>customers who matter.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '540px', marginTop: '2rem' }}>
          Local SEO and Google Business Profile management that compounds over time. Show up first. Every time.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '6rem' }} className="page-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '2rem' }}>Deliverables</h2>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {deliverables.map((d) => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fog)' }}>
                  <span style={{ color: 'var(--cobalt2)', flexShrink: 0 }}>✓</span>{d}
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* Case study callout */}
            <div style={{ background: 'var(--ink3)', borderLeft: '3px solid var(--cobalt)', padding: '2rem 2.5rem', marginBottom: '3rem' }}>
              <div className="label-tag">NIXTUDIO — PALA, KERALA</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--white)', lineHeight: 1.4, marginTop: '1rem' }}>
                From zero digital presence to targeting #1 in local bridal makeup search — with 464 reviews at 4.9★.
              </p>
            </div>

            <div style={{ background: 'var(--ink3)', border: '1px solid var(--cobalt)', padding: '2.5rem', marginBottom: '2rem' }}>
              <div className="label-tag">STARTING FROM</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginTop: '1rem' }}>₹8,000</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--fog)', marginTop: '0.4rem' }}>per month</div>
            </div>

            <Link href="/contact" style={{ display: 'block', textAlign: 'center', background: 'var(--cobalt)', color: 'var(--white)', padding: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
              GET STARTED →
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .page-inner { padding: 0 1.5rem 5rem !important; } .page-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </main>
  )
}
