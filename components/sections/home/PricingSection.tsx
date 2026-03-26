'use client'

import Link from 'next/link'

type Feature = { text: string; included: boolean }

interface Plan {
  id: string
  name: string
  price: string
  sub: string
  featured: boolean
  features: Feature[]
}

const plans: Plan[] = [
  {
    id: 'presence',
    name: 'PRESENCE',
    price: '₹25,000',
    sub: 'one time',
    featured: false,
    features: [
      { text: 'Custom Next.js website',    included: true },
      { text: 'Mobile-first design',       included: true },
      { text: '5 pages',                   included: true },
      { text: 'Basic SEO setup',           included: true },
      { text: 'Vercel deployment',         included: true },
      { text: '30 days support',           included: true },
      { text: 'AI automation',             included: false },
      { text: 'GBP management',            included: false },
      { text: 'Monthly retainer',          included: false },
    ],
  },
  {
    id: 'signal',
    name: 'SIGNAL',
    price: '₹45,000',
    sub: 'one time',
    featured: true,
    features: [
      { text: 'Everything in Presence',       included: true },
      { text: 'Up to 10 pages',               included: true },
      { text: 'Google Business Profile',      included: true },
      { text: 'Google Search Console',        included: true },
      { text: 'Full SEO infrastructure',      included: true },
      { text: 'Schema markup',                included: true },
      { text: 'Analytics setup',              included: true },
      { text: '60 days support',              included: true },
      { text: 'AI automation',                included: false },
    ],
  },
  {
    id: 'orbit',
    name: 'ORBIT',
    price: '₹8,000',
    sub: 'per month',
    featured: false,
    features: [
      { text: 'GBP management (8 posts)',     included: true },
      { text: 'Review monitoring + responses',included: true },
      { text: 'Monthly SEO report',           included: true },
      { text: 'Content updates',              included: true },
      { text: 'Competitor tracking',          included: true },
      { text: 'Priority support (4hr)',        included: true },
      { text: 'Included w/ web package',      included: false },
    ],
  },
]

export default function PricingSection() {
  return (
    <section
      style={{ padding: '10rem 4rem', position: 'relative', zIndex: 10 }}
      className="pricing-section"
    >
      <div style={{ marginBottom: '4rem' }}>
        <span className="label-tag">INVESTMENT</span>
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
          Transparent pricing.
          <br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
            No surprises.
          </em>
        </h2>
      </div>

      {/* Cards */}
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}
        className="pricing-grid"
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            style={{
              background: plan.featured ? 'var(--ink4)' : 'var(--ink3)',
              border: plan.featured ? '1px solid rgba(26,26,255,0.5)' : '1px solid var(--line)',
              padding: '3rem 2.5rem',
              position: 'relative',
              transform: plan.featured ? 'translateY(-10px)' : 'none',
            }}
          >
            {plan.featured && (
              <span
                style={{
                  position: 'absolute',
                  top: '-1px',
                  right: '1.5rem',
                  background: 'var(--cobalt)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  padding: '0.25rem 0.8rem',
                  textTransform: 'uppercase',
                }}
              >
                POPULAR
              </span>
            )}

            <div className="label-tag">{plan.name}</div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1,
                marginTop: '1.5rem',
              }}
            >
              {plan.price}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--fog)',
                marginTop: '0.4rem',
              }}
            >
              {plan.sub}
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--line)', margin: '2rem 0' }} />

            <div>
              {plan.features.map((f) => (
                <div key={f.text} className={`pricing-feature${f.included ? '' : ' excluded'}`}>
                  <span style={{ color: f.included ? 'var(--cobalt2)' : 'var(--dim)', flexShrink: 0 }}>
                    {f.included ? '✓' : '×'}
                  </span>
                  {f.text}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: '2rem',
                padding: '0.9rem 1.5rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background 250ms, color 250ms, border-color 250ms',
                ...(plan.featured
                  ? {
                      background: 'var(--cobalt)',
                      color: 'var(--white)',
                      border: 'none',
                    }
                  : {
                      background: 'transparent',
                      color: 'var(--fog)',
                      border: '1px solid var(--line2)',
                    }),
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                if (plan.featured) {
                  el.style.background = 'var(--cobalt2)'
                } else {
                  el.style.borderColor = 'var(--cobalt)'
                  el.style.color = 'var(--cobalt2)'
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                if (plan.featured) {
                  el.style.background = 'var(--cobalt)'
                } else {
                  el.style.borderColor = 'var(--line2)'
                  el.style.color = 'var(--fog)'
                }
              }}
            >
              GET STARTED
            </Link>
          </div>
        ))}
      </div>

      {/* AI Automation add-on */}
      <div
        style={{
          marginTop: '1.5rem',
          background: 'var(--ink2)',
          border: '1px solid var(--line)',
          padding: '2rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div className="label-tag">AI AUTOMATION SYSTEM</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fog)', marginTop: '0.5rem' }}>
            WhatsApp AI agent + n8n workflows + dashboard + full setup
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 300,
              color: 'var(--white)',
            }}
          >
            ₹20,000 setup + ₹3,000/month
          </span>
          <Link
            href="/contact"
            style={{
              background: 'var(--cobalt)',
              color: 'var(--white)',
              padding: '0.8rem 1.8rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 250ms',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--cobalt2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--cobalt)')}
          >
            GET STARTED →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .pricing-section { padding: 6rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
