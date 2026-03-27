import Link from 'next/link'

const navLinks = ['Work', 'Services', 'About', 'Contact']
const services = [
  { name: 'Digital Ecosystem Architecture', href: '/services/web-development' },
  { name: 'Algorithmic Positioning', href: '/services/seo-gbp' },
  { name: 'Autonomous Operations', href: '/services/ai-automation' },
  { name: 'Brand Brutalism', href: '/services/brand-strategy' },
  { name: 'Conversion Telemetry', href: '/contact' },
  { name: 'Continuous Iteration', href: '/services/retainer' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--ink2)',
        borderTop: '1px solid var(--line)',
        padding: '5rem 4rem 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost text */}
      <span
        className="ghost-text"
        style={{ top: '-1.5rem', left: '50%', transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        REVOLQ
      </span>

      {/* 4-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '3rem',
          position: 'relative',
          zIndex: 1,
        }}
        className="footer-grid"
      >
        {/* Col 1 — Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 300,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--white)',
            }}
          >
            REVOLQ
          </span>
          <p style={{ fontSize: '0.85rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '220px' }}>
            We build digital systems that work while you sleep.
          </p>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--dim)' }}>
            Kerala, India · 2025
          </p>
        </div>

        {/* Col 2 — Navigate */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="label-tag">Navigate</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {navLinks.map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase()}`}
                className="footer-link"
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--fog)',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 — Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="label-tag">Services</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="footer-link"
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--fog)',
                  textDecoration: 'none',
                  transition: 'color 200ms',
                }}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4 — Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span className="label-tag">Contact</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <a
              href="tel:+917995617374"
              style={{ fontSize: '0.85rem', color: 'var(--fog)', textDecoration: 'none' }}
            >
              +91 79956 17374
            </a>
            <a
              href="tel:+917306085895"
              style={{ fontSize: '0.85rem', color: 'var(--fog)', textDecoration: 'none' }}
            >
              +91 73060 85895
            </a>
            <span style={{ fontSize: '0.85rem', color: 'var(--fog)' }}>Kerala, India</span>
            <a
              href="https://wa.me/917995617374"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                color: 'var(--cobalt2)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 200ms',
              }}
            >
              WHATSAPP US →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid var(--line)',
          paddingTop: '1.5rem',
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="footer-bottom"
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--dim)' }}>
          © 2026 REVOL-Q. All rights reserved.
        </span>
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--dim)' }}>
          Designed &amp; built by REVOLQ
        </span>
      </div>

      <style>{`
        .footer-link:hover { color: var(--white) !important; }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; row-gap: 2.5rem; } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr !important; } footer { padding: 3rem 1.5rem 2rem !important; } .footer-bottom { flex-direction: column; gap: 0.5rem; align-items: flex-start; } }
      `}</style>
    </footer>
  )
}
