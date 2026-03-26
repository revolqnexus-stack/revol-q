import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NIXTUDIO Case Study',
  description: 'How REVOLQ built a complete digital system for NIXTUDIO — Kerala\'s premier bridal studio. 464+ reviews, 4.9★ rating.',
}

const results = [
  { num: '464+', label: 'Google Reviews' },
  { num: '4.9★', label: 'Client Rating' },
  { num: '#4',   label: 'Map Pack Ranking' },
  { num: '24/7', label: 'AI Agent Active' },
  { num: '₹46K', label: 'Project Value' },
]

const builtItems = [
  'Custom Next.js website',
  'Full SEO infrastructure',
  'Google Business Profile',
  'WhatsApp AI agent (Claude AI)',
  'n8n automation workflow',
  'Automated review collection',
]

export default function NixtudioPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        <span className="label-tag">CASE STUDY</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 9rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          NIXTUDIO
        </h1>
        <em style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 3rem)', fontStyle: 'italic', color: 'var(--cobalt2)', display: 'block', marginTop: '0.5rem' }}>
          by Nikita Liby
        </em>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '600px', marginTop: '2rem' }}>
          Redefining the digital presence for Kerala&apos;s premier bridal studio in Pala. Complete web, SEO, and AI automation system built from the ground up.
        </p>

        {/* Image hero */}
        <div className="work-card" style={{ background: 'var(--ink3)', marginTop: '4rem' }}>
          <div style={{ height: '50vh', background: 'linear-gradient(135deg, #0a0a1a, #0d0d30, #050520)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 15vw, 16rem)', fontWeight: 300, color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.05)', letterSpacing: '0.15em' }}>NIXTUDIO</span>
            <span style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', border: '1px solid var(--line2)', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', padding: '0.4rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.56rem', letterSpacing: '0.3em', color: 'var(--fog)', textTransform: 'uppercase' }}>BRIDAL STUDIO · PALA, KERALA · 2025</span>
          </div>
        </div>

        {/* Results */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', marginTop: '3rem' }} className="results-grid">
          {results.map((r) => (
            <div key={r.label} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.5rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{r.num}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--dim)', marginTop: '0.4rem', textTransform: 'uppercase' }}>{r.label}</div>
            </div>
          ))}
        </div>

        {/* Challenge + Built */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '6rem' }} className="page-grid">
          <div>
            <span className="label-tag">THE CHALLENGE</span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--fog)', lineHeight: 2.0, marginTop: '1.5rem' }}>
              NIXTUDIO was doing exceptional bridal makeup in Pala but had zero digital presence. Bookings came only through word of mouth. Dozens of WhatsApp enquiries went unanswered every day.
            </p>
          </div>
          <div>
            <span className="label-tag">WHAT WE BUILT</span>
            <div style={{ borderTop: '1px solid var(--line)', marginTop: '1.5rem' }}>
              {builtItems.map((b) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fog)' }}>
                  <span style={{ color: 'var(--cobalt2)', flexShrink: 0 }}>✓</span>{b}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--white)', color: 'var(--black)', padding: '1.1rem 3rem', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
            BUILD SOMETHING LIKE THIS →
          </Link>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .page-inner { padding: 0 1.5rem 5rem !important; } .page-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } .results-grid { grid-template-columns: repeat(3, 1fr) !important; } }`}</style>
    </main>
  )
}
