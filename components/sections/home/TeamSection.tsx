const team = [
  {
    name: 'EATHEN BABY',
    role: 'CO-FOUNDER',
    overlay: 'FOUNDER',
    img: '/team/eathen.png',
    position: 'center',
  },
  {
    name: 'AJMAL MULLAPATI',
    role: 'CO-FOUNDER',
    overlay: 'FOUNDER',
    img: '/team/ajmal.png',
    position: 'center 5%', // Perfected for the new full-body leaning pose
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
          Two people.
          <br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
            One system.
          </em>
        </h2>
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '900px' }}
        className="team-grid"
      >
        {team.map((p) => (
          <div key={p.name} className="team-card">
            {/* Image placeholder */}
            <div style={{ height: '280px', position: 'relative', overflow: 'hidden', background: 'var(--ink4)' }}>
              <div
                className="team-img-wrapper"
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  background: '#000',
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: p.position || 'center',
                    filter: 'grayscale(1) contrast(1.2) brightness(0.9) !important',
                    transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), filter 0.5s ease',
                  }}
                  className="profile-img"
                />
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
          REVOLQ is two people in Kerala who got tired of watching great local
          businesses go invisible online. We build the digital systems that change that.
        </p>
      </div>

      <style>{`
        .team-card:hover .profile-img {
          transform: scale(1.05);
          filter: grayscale(0) brightness(1) contrast(1);
        }
        .profile-img {
          filter: grayscale(1) contrast(1.2) brightness(0.9) !important;
        }
        @media (max-width: 768px) { .team-grid { grid-template-columns: 1fr !important; } .team-section { padding: 6rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
