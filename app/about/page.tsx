'use client'

import TeamSection from '@/components/sections/home/TeamSection'

const values = [
  {
    title: 'Precision',
    desc: 'We define the business goal, user journey, and technical constraints before design begins. Every decision has a reason.',
  },
  {
    title: 'Transparency',
    desc: 'You receive a written scope, timeline, price, and ownership terms before work starts. No surprises.',
  },
  {
    title: 'Systems',
    desc: 'We design the website, search presence, automation, and analytics to work together — not as separate deliverables.',
  },
]

export default function AboutPage() {
  return (
    <main style={{
      paddingTop: 'var(--header-height)',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 10,
      background: 'linear-gradient(140deg,#000000 0%,#000000 68%,#000019 86%,#00002E 100%)',
    }}>
      {/* Hero */}
      <div style={{ padding: '2rem 4rem 6rem', position: 'relative', overflow: 'hidden' }} className="page-inner">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            opacity: 0.4,
          }}
        >
          <source src="/hero video/about.mp4" type="video/mp4" />
        </video>
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag">ABOUT REVOLQ</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 8rem)',
            fontWeight: 300,
            lineHeight: 0.9,
            marginTop: '1.2rem',
            color: 'var(--text)',
          }}>
            Small team.{' '}
            <em style={{ fontStyle: 'italic' }}>Complete capability.</em>
          </h1>

          {/* Story */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginTop: '5rem' }} className="page-grid">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                REVOLQ started because we kept seeing strong Kerala businesses
                get overlooked online — not for lack of quality, but because
                nobody had built their digital presence properly.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '1.2rem' }}>
                We&apos;re based in Pala and we work directly with the businesses we
                take on. No layers, no account managers, no handoffs.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                We build websites that are fast and findable, search systems
                that compound over time, and automations that reduce the manual
                work your team shouldn&apos;t have to do.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, marginTop: '1.2rem', fontWeight: 400 }}>
                Every client we take on, we treat as a long-term partner.
              </p>
            </div>
          </div>

          {/* Values */}
          <div style={{ marginTop: '6rem' }}>
            <span className="label-tag">HOW WE WORK</span>
            <div style={{ borderTop: '1px solid var(--line)', marginTop: '2rem', position: 'relative', paddingLeft: '80px' }}>
              {/* Vertical blue data rail */}
              <div style={{
                position: 'absolute',
                left: '28px',
                top: '3rem',
                bottom: '3rem',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(70, 90, 255, 0.6) 10%, rgba(70, 90, 255, 0.6) 90%, transparent 100%)',
                zIndex: 1,
              }} />
              
              {/* Connection nodes */}
              {values.map((v, i) => (
                <div
                  key={`node-${i}`}
                  style={{
                    position: 'absolute',
                    left: '23px',
                    top: `${3.5 + i * 10}rem`,
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: '2px solid rgba(70, 90, 255, 0.5)',
                    background: '#000',
                    zIndex: 2,
                    transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className={`value-node value-node-${i}`}
                />
              ))}
              
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`val-row val-row-${i}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: '2rem',
                    padding: '3rem 2rem',
                    margin: i < values.length - 1 ? '0 0 48px' : '0',
                    borderBottom: i < values.length - 1 ? 'none' : '1px solid var(--line)',
                    alignItems: 'start',
                    position: 'relative',
                    transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                    e.currentTarget.style.transform = 'translateX(15px)'
                    const node = document.querySelector(`.value-node-${i}`) as HTMLElement
                    if (node) {
                      node.style.background = 'var(--cobalt2)'
                      node.style.borderColor = 'var(--cobalt2)'
                      node.style.transform = 'scale(1.3)'
                      node.style.boxShadow = '0 0 16px rgba(48, 75, 255, 0.6)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.transform = 'translateX(0)'
                    const node = document.querySelector(`.value-node-${i}`) as HTMLElement
                    if (node) {
                      node.style.background = '#000'
                      node.style.borderColor = 'rgba(70, 90, 255, 0.5)'
                      node.style.transform = 'scale(1)'
                      node.style.boxShadow = 'none'
                    }
                  }}
                >
                  {/* Technical divider above each row except first */}
                  {i > 0 && (
                    <div style={{
                      position: 'absolute',
                      top: '-24px',
                      left: '0',
                      right: '0',
                      height: '1px',
                      background: 'linear-gradient(to right, transparent 0%, rgba(70, 90, 255, 0.3) 15%, rgba(70, 90, 255, 0.3) 85%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        background: 'rgba(70, 90, 255, 0.4)',
                        transform: 'rotate(45deg)',
                        border: '1px solid rgba(70, 90, 255, 0.6)',
                      }} />
                    </div>
                  )}
                  
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    fontWeight: 300,
                    color: 'var(--text)',
                    lineHeight: 1.1,
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    maxWidth: '520px',
                  }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TeamSection />

      <style>{`
        @media (max-width: 768px) {
          .page-inner { padding: 2rem 1.5rem 4rem !important; }
          .page-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .val-row { 
            grid-template-columns: 1fr !important; 
            gap: 0.5rem !important;
            padding-left: 0 !important;
            transform: none !important;
          }
          .val-row > span:first-child { display: none; }
          .value-node { display: none !important; }
          div[style*="left: 28px"] { display: none !important; }
        }
      `}</style>
    </main>
  )
}
