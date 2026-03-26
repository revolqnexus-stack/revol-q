'use client'

import Link from 'next/link'

const deliverables = [
  'Custom Next.js App Router',
  'TypeScript — fully typed',
  'Tailwind CSS + design system',
  'Mobile-first responsive',
  'Vercel deployment + CI/CD',
  'Core Web Vitals optimization',
  'Full SEO infrastructure',
  'Google Analytics integration',
  'Custom domain setup',
  '30 days post-launch support',
]

const tech = ['Next.js', 'TypeScript', 'Tailwind', 'Vercel', 'GSAP', 'Framer Motion']

export default function WebDevPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        {/* Hero */}
        <span className="label-tag">01 — DIGITAL ECOSYSTEM ARCHITECTURE</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          Websites that rank,<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>convert, and scale.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '540px', marginTop: '2rem' }}>
          Custom Next.js systems built for performance, SEO, and growth. Not templates. Not themes. Built from scratch.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '6rem' }} className="page-grid">
          {/* Deliverables */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '2rem' }}>Deliverables</h2>
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {deliverables.map((d) => (
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fog)' }}>
                  <span style={{ color: 'var(--cobalt2)', flexShrink: 0 }}>✓</span>
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Tech + pricing */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', marginBottom: '2rem' }}>Tech Stack</h2>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {tech.map((t) => (
                <span key={t} style={{ border: '1px solid var(--line2)', padding: '0.35rem 0.9rem', fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--fog)' }}>{t}</span>
              ))}
            </div>

            <div style={{ background: 'var(--ink3)', border: '1px solid var(--cobalt)', padding: '2.5rem', marginBottom: '2rem' }}>
              <div className="label-tag">STARTING FROM</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginTop: '1rem' }}>₹25,000</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--fog)', marginTop: '0.4rem' }}>one time</div>
            </div>

            <Link href="/contact" style={{ display: 'block', textAlign: 'center', background: 'var(--cobalt)', color: 'var(--white)', padding: '1rem', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 250ms' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--cobalt2)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--cobalt)')}>
              START A PROJECT →
            </Link>

            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1.5rem' }}>FAQ</h3>
              {[
                ['How long does a website take?', '2–4 weeks from brief to launch.'],
                ['Do you use templates?', 'Never. Every site is custom-built from scratch.'],
                ['What about after launch?', '30 days support included. We stay available.'],
              ].map(([q, a]) => (
                <div key={q} style={{ borderBottom: '1px solid var(--line)', paddingBottom: '1.2rem', marginBottom: '1.2rem' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--white)', marginBottom: '0.4rem' }}>{q}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--fog)' }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .page-inner { padding: 0 1.5rem 5rem !important; } .page-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </main>
  )
}
