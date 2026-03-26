import type { Metadata } from 'next'
import TeamSection from '@/components/sections/home/TeamSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'REVOLQ was built out of frustration. We build websites that rank, AI systems that work at 3am, and SEO that compounds.',
}

const values = [
  { title: 'PRECISION', desc: 'We research before we build. Every decision is backed by data, math, and spatial intent.' },
  { title: 'TRANSPARENCY', desc: 'No hidden fees. No jargon. Clear deliverables. You know exactly what you\'re paying for.' },
  { title: 'SYSTEMS', desc: 'We don\'t just build websites. We build engines. Everything we make works harder over time.' },
]

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      {/* Hero */}
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        <span className="label-tag">ABOUT REVOLQ</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          Not an agency.<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>A digital system.</em>
        </h1>

        {/* Story */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '6rem' }} className="page-grid">
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9 }}>
              REVOLQ was built out of frustration. Watching brilliant small businesses
              across Kerala get ignored online — not because they weren&apos;t good enough,
              but because nobody was building their digital presence properly.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              We&apos;re four people in Kerala. We build websites that rank, AI systems
              that work at 3am, and SEO that compounds over time.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--white)', lineHeight: 1.9 }}>
              Every client we take, we treat as a long-term partner — not a project.
            </p>
          </div>
        </div>

        {/* Values */}
        <div style={{ marginTop: '8rem' }}>
          <span className="label-tag">OUR STANDARDS</span>
          <div style={{ borderTop: '1px solid var(--line)', marginTop: '2rem' }}>
            {values.map((v, i) => (
              <div key={v.title} style={{ display: 'grid', gridTemplateColumns: '60px 220px 1fr', gap: '2rem', padding: '2.5rem 0', borderBottom: '1px solid var(--line)', alignItems: 'start' }} className="val-row">
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.3em', color: 'var(--dim)', paddingTop: '0.5rem' }}>0{i + 1}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.8, maxWidth: '480px' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TeamSection />

      <style>{`@media (max-width: 768px) { .page-inner { padding: 0 1.5rem 5rem !important; } .page-grid, .val-row { grid-template-columns: 1fr !important; gap: 1rem !important; } .val-row > span { display: none; } }`}</style>
    </main>
  )
}
