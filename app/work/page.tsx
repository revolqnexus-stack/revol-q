import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies and selected work by REVOLQ — digital systems crafted with precision for Kerala businesses.',
}

export default function WorkPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        <span className="label-tag">CASE STUDIES</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          The work.<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>Real results.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '540px', marginTop: '2rem' }}>
          A collection of digital systems crafted with precision.
        </p>

        {/* NIXTUDIO featured */}
        <div className="work-card" style={{ background: 'var(--ink3)', marginTop: '5rem' }}>
          <div style={{ height: '50vh', overflow: 'hidden', position: 'relative', background: 'var(--ink4)' }}>
            <div className="work-card-img" style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0a0a1a 0%, #0d0d30 40%, #050520 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 12rem)', fontWeight: 300, color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.07)', letterSpacing: '0.15em' }}>NIXTUDIO</span>
            </div>
            <span style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', border: '1px solid var(--line2)', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '0.4rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.56rem', letterSpacing: '0.3em', color: 'var(--fog)', textTransform: 'uppercase' }}>
              BRIDAL STUDIO · PALA, KERALA · 2025
            </span>
          </div>
          <div style={{ padding: '3rem 4rem' }} className="work-card-content">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="work-card-grid">
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--white)' }}>NIXTUDIO</h2>
                <em style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontStyle: 'italic', color: 'var(--cobalt2)', display: 'block', marginTop: '0.3rem' }}>by Nikita Liby</em>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.9, marginTop: '1.2rem' }}>
                  Complete digital transformation for Kerala&apos;s premier bridal studio. Custom Next.js website, full SEO, AI automation, and review system.
                </p>
                <Link href="/work/nixtudio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '2rem', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--cobalt2)', textDecoration: 'none', textTransform: 'uppercase' }}>
                  VIEW FULL CASE STUDY →
                </Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignContent: 'start' }}>
                {[
                  ['464+', 'GOOGLE REVIEWS'], ['4.9★', 'CLIENT RATING'],
                  ['#4', 'MAP PACK RANKING'], ['24/7', 'AI AGENT ACTIVE'],
                ].map(([num, label]) => (
                  <div key={label} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.2rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{num}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.25em', marginTop: '0.4rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coming soon cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }} className="work-row2">
          {[{ title: 'Holy Family Dental', tag: 'DENTAL CLINIC · KOTTAYAM' }, { title: 'Studio Anagram', tag: 'CREATIVE STUDIO · KOCHI' }].map((p) => (
            <div key={p.title} className="work-card" style={{ background: 'var(--ink3)' }}>
              <div style={{ height: '280px', background: 'var(--ink4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'rgba(255,255,255,0.06)' }}>{p.title.split(' ')[0].toUpperCase()}</span>
              </div>
              <div style={{ padding: '1.8rem' }}>
                <span className="label-tag">{p.tag}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.7rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--white)' }}>{p.title}</h3>
                  <span style={{ border: '1px solid var(--dim)', color: 'var(--dim)', fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.2em', padding: '0.2rem 0.7rem', textTransform: 'uppercase' }}>COMING SOON</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .page-inner { padding: 0 1.5rem 5rem !important; } .work-card-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } .work-card-content { padding: 2rem 1.5rem !important; } .work-row2 { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  )
}
