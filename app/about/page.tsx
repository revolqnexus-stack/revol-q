import type { Metadata } from 'next'
import TeamSection from '@/components/sections/home/TeamSection'

export const metadata: Metadata = {
  title: 'About',
  description: 'REVOLQ is a two-person digital studio in Kerala building websites, search systems, and automation for businesses that want more.',
}

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
      paddingTop: '8rem',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 10,
      background: 'linear-gradient(140deg,#000000 0%,#000000 68%,#000019 86%,#00002E 100%)',
    }}>
      {/* Hero */}
      <div style={{ padding: '2rem 4rem 6rem' }} className="page-inner">
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
          <div style={{ borderTop: '1px solid var(--line)', marginTop: '2rem' }}>
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 200px 1fr',
                  gap: '2rem',
                  padding: '2.2rem 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'start',
                }}
                className="val-row"
              >
                <span style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  color: 'var(--text-subtle)',
                  paddingTop: '0.4rem',
                }}>
                  0{i + 1}
                </span>
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

      <TeamSection />

      <style>{`
        @media (max-width: 768px) {
          .page-inner { padding: 2rem 1.5rem 4rem !important; }
          .page-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .val-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .val-row > span:first-child { display: none; }
        }
      `}</style>
    </main>
  )
}
