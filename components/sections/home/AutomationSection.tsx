import { Smartphone, Bot, Calendar, CheckCircle, User, BarChart2, Star } from 'lucide-react'

const nodes = [
  { Icon: Smartphone,  text: 'Customer sends WhatsApp message' },
  { Icon: Bot,         text: 'GPT-4 AI reads intent' },
  { Icon: Calendar,    text: 'n8n checks availability' },
  { Icon: CheckCircle, text: 'Booking confirmed + payment link' },
  { Icon: User,        text: 'Staff gets WhatsApp alert' },
  { Icon: BarChart2,   text: 'Dashboard updated + calendar sync' },
  { Icon: Star,        text: 'Auto review request sent' },
]

const stats = [
  { num: '24/7', label: 'AI AGENT ACTIVE' },
  { num: '3min', label: 'AVG RESPONSE TIME' },
  { num: '40%',  label: 'MORE REPEAT CLIENTS' },
]

export default function AutomationSection() {
  return (
    <section
      style={{
        padding: '10rem 4rem',
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
        position: 'relative',
        zIndex: 10,
      }}
      className="auto-section"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="auto-grid"
      >
        {/* Left — description */}
        <div>
          <span className="label-tag">AI AUTOMATION</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              fontWeight: 300,
              lineHeight: 0.95,
              marginTop: '1rem',
              color: 'var(--white)',
            }}
          >
            Your business
            <br />
            <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
              at 3am.
            </em>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 200,
              lineHeight: 2.0,
              color: 'var(--fog)',
              marginTop: '2rem',
              maxWidth: '380px',
            }}
          >
            Most businesses in Kerala lose bookings while they sleep. We build AI
            agents that never sleep — handling WhatsApp enquiries, booking clients,
            sending reminders, and generating Google reviews. 24 hours. 7 days.
            Zero human effort.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3rem' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    color: 'var(--dim)',
                    marginTop: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — CSS flow diagram */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {nodes.map((n, i) => (
            <div key={i}>
              <div className="flow-node">
                <n.Icon size={14} color="var(--cobalt2)" strokeWidth={1.5} />
                <span style={{ fontFamily: 'var(--font-body)' }}>{n.text}</span>
              </div>
              {i < nodes.length - 1 && (
                <div className="flow-connector">
                  <div className="flow-dot" style={{ animationDelay: `${i * 0.28}s` }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .auto-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        @media (max-width: 768px) { .auto-section { padding: 6rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
