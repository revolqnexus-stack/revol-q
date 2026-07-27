'use client'

const capabilities = [
  'Websites',
  'Search',
  'Automation',
  'Brand Strategy',
  'Internal Systems',
]

const industries = [
  'Jewellery',
  'Hospitality',
  'Education',
  'Retail',
  'Healthcare',
]

export default function CredibilityRail() {
  return (
    <section
      style={{
        padding: '1.5rem 4rem',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'var(--ink)',
        position: 'relative',
        zIndex: 10,
      }}
      className="credibility-rail"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          flexWrap: 'wrap',
        }}
        className="rail-content"
      >
        {/* Left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'var(--dim)',
              textTransform: 'uppercase',
            }}
          >
            Built across
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {industries.map((industry) => (
              <span
                key={industry}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: 'var(--fog)',
                  borderLeft: '1px solid var(--line2)',
                  paddingLeft: '0.75rem',
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          {capabilities.map((cap) => (
            <span
              key={cap}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: 'var(--fog)',
                border: '1px solid var(--line2)',
                padding: '0.35rem 0.8rem',
                textTransform: 'uppercase',
              }}
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .credibility-rail { padding: 1.2rem 1.5rem !important; }
          .rail-content { flex-direction: column; align-items: flex-start !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
