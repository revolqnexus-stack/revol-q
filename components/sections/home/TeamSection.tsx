const team = [
  {
    name: 'AJMAL MULLAPATI',
    role: 'AI EXPERT',
    overlay: 'CO-FOUNDER',
    bg: 'linear-gradient(135deg, #050520 0%, #0a0a40 100%)',
  },
  {
    name: 'EATHEN BABY',
    role: 'HEAD & COORDINATOR',
    overlay: 'CO-FOUNDER',
    bg: 'linear-gradient(135deg, #080808 0%, #141428 100%)',
  },
  {
    name: 'RICHARD SHYMON',
    role: 'MARKETING',
    overlay: 'CO-FOUNDER',
    bg: 'linear-gradient(135deg, #050510 0%, #0e0e30 100%)',
  },
  {
    name: 'MANUVEL',
    role: 'TECH & BACKEND',
    overlay: 'CO-FOUNDER',
    bg: 'linear-gradient(135deg, #080818 0%, #111138 100%)',
  },
]

export default function TeamSection() {
  return (
    <section
      style={{
        padding: '10rem 4rem',
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
        position: 'relative',
        zIndex: 10,
      }}
      className="team-section"
    >
      <div style={{ marginBottom: '4rem' }}>
        <span className="label-tag">THE TEAM</span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            marginTop: '1rem',
            color: 'var(--white)',
          }}
        >
          Four people.
          <br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
            One system.
          </em>
        </h2>
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}
        className="team-grid"
      >
        {team.map((p) => (
          <div key={p.name} className="team-card">
            {/* Image placeholder */}
            <div style={{ height: '280px', position: 'relative', overflow: 'hidden', background: 'var(--ink4)' }}>
              <div
                className="team-img"
                style={{
                  width: '100%',
                  height: '100%',
                  background: p.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '4rem',
                    fontWeight: 300,
                    color: 'rgba(26,26,255,0.15)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {p.name.split(' ')[0][0]}
                  {p.name.split(' ').slice(-1)[0][0]}
                </span>
              </div>
              {/* Role overlay */}
              <span
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                {p.overlay}
              </span>
            </div>
            {/* Content */}
            <div style={{ padding: '1.5rem 1.8rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  color: 'var(--white)',
                  lineHeight: 1.1,
                }}
              >
                {p.name}
              </div>
              <div className="label-tag" style={{ marginTop: '0.5rem', color: 'var(--cobalt2)' }}>
                {p.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team bio */}
      <div style={{ maxWidth: '600px', margin: '4rem auto 0', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 200,
            lineHeight: 1.9,
            color: 'var(--fog)',
          }}
        >
          REVOLQ is four people in Kerala who got tired of watching great local
          businesses go invisible online. We build the digital systems that change that.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) { .team-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .team-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .team-section { padding: 6rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
