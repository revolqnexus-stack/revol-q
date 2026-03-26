'use client'

import React from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 'nixtudio',
    title: 'NIXTUDIO',
    subtitle: 'by Nikita Liby',
    tag: 'BRIDAL STUDIO · PALA, KERALA · 2025',
    desc: 'Complete digital transformation for Kerala\'s premier bridal studio. Custom Next.js website, full SEO, AI automation, and review system.',
    img: '/work/nixtudio.png',
    liveUrl: 'https://nixtudio.in',
    metrics: [
      { num: '464+', label: 'GOOGLE REVIEWS' },
      { num: '4.9★', label: 'CLIENT RATING' },
      { num: '#4', label: 'MAP PACK RANKING' },
      { num: '24/7', label: 'AI AGENT ACTIVE' },
    ],
    featured: true
  },
  {
    id: 'holy-family',
    title: 'Holy Family Dental',
    tag: 'DENTAL CLINIC · KOTTAYAM',
    img: '/work/holy-family.png',
    liveUrl: 'https://holy-family-dental-clinic.vercel.app/',
    featured: false
  },
  {
    id: 'honeys',
    title: 'Honeys Bridal Studio',
    tag: 'BRIDAL STUDIO · KERALA',
    img: '/work/honeys.png',
    liveUrl: 'https://honeysbridal.vercel.app/',
    featured: false
  }
]

export default function WorkPage() {
  const featured = projects.find(p => p.featured)
  const secondary = projects.filter(p => !p.featured)

  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        <span className="label-tag">CASE STUDIES</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          The work.<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>Real results.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '450px', marginTop: '2rem' }}>
          A collection of digital systems crafted with precision for businesses that demand excellence.
        </p>

        {/* Featured Project */}
        {featured && (
          <div className="work-card featured" style={{ background: 'var(--ink3)', marginTop: '5rem' }}>
            <div style={{ height: '55vh', overflow: 'hidden', position: 'relative', background: 'var(--ink4)' }}>
              <div className="work-card-img-container" style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
                <img 
                  src={featured.img} 
                  alt={featured.title}
                  className="project-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.6)', transition: 'transform 1.2s cubic-bezier(0.2, 1, 0.3, 1), filter 0.8s ease' }}
                />
              </div>
              <span style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', border: '1px solid var(--line2)', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '0.4rem 1rem', fontFamily: 'var(--font-body)', fontSize: '0.56rem', letterSpacing: '0.3em', color: 'var(--fog)', textTransform: 'uppercase' }}>
                {featured.tag}
              </span>
            </div>
            
            <div style={{ padding: '3rem 4rem' }} className="work-card-content">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="work-card-grid">
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--white)' }}>{featured.title}</h2>
                  <em style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontStyle: 'italic', color: 'var(--cobalt2)', display: 'block', marginTop: '0.3rem' }}>{featured.subtitle}</em>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--fog)', lineHeight: 1.9, marginTop: '1.2rem', maxWidth: '400px' }}>
                    {featured.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}>
                    <Link href={`/work/${featured.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--white)', textDecoration: 'none', textTransform: 'uppercase', borderBottom: '1px solid var(--white)' }}>
                      CASE STUDY →
                    </Link>
                    <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--cobalt2)', textDecoration: 'none', textTransform: 'uppercase' }}>
                      LIVE PROJECT ↗
                    </a>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignContent: 'start' }}>
                  {featured.metrics?.map((m) => (
                    <div key={m.label} style={{ borderTop: '1px solid var(--line)', paddingTop: '1.2rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>{m.num}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.25em', marginTop: '0.4rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }} className="work-row2">
          {secondary.map((p) => (
            <div key={p.id} className="work-card" style={{ background: 'var(--ink3)' }}>
              <div style={{ height: '350px', overflow: 'hidden', position: 'relative', background: 'var(--ink4)' }}>
                <div className="work-card-img-container" style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
                  <img 
                    src={p.img} 
                    alt={p.title}
                    className="project-img"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.6)', transition: 'transform 1.2s cubic-bezier(0.2, 1, 0.3, 1), filter 0.8s ease' }}
                  />
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <span className="label-tag">{p.tag}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)' }}>{p.title}</h3>
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" style={{ border: '1px solid var(--cobalt2)', color: 'var(--cobalt2)', fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.2em', padding: '0.25rem 0.8rem', textTransform: 'uppercase', textDecoration: 'none' }}>
                    VIEW LIVE ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .work-card:hover .project-img {
          transform: scale(1.08);
          filter: grayscale(0) brightness(0.9);
        }
        @media (max-width: 900px) { 
          .work-card-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } 
        }
        @media (max-width: 768px) { 
          .page-inner { padding: 0 1.5rem 5rem !important; } 
          .work-card-content { padding: 2.5rem 1.5rem !important; } 
          .work-row2 { grid-template-columns: 1fr !important; } 
          .work-card.featured { margin-top: 3rem !important; }
        }
      `}</style>
    </main>
  )
}
