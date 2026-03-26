'use client'

import { useRouter } from 'next/navigation'
import GlassButton from '@/components/ui/GlassButton'

type Feature = { text: string; included: boolean }

interface Plan {
  id: string
  name: string
  price: string
  desc: string
  featured: boolean
  features: Feature[]
}

const plans: Plan[] = [
  {
    id: 'presence',
    name: 'PRESENCE',
    price: '₹38,000',
    desc: 'Professional website that establishes your digital presence',
    featured: false,
    features: [
      { text: 'Custom Next.js website (up to 5 pages)', included: true },
      { text: 'Mobile-first responsive design', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: 'Google Analytics integration', included: true },
      { text: 'Contact form setup', included: true },
      { text: '1 month post-launch support', included: true },
      { text: 'Custom animations', included: false },
      { text: 'Advanced SEO features', included: false },
      { text: 'Content creation', included: false },
    ],
  },
  {
    id: 'signal',
    name: 'SIGNAL',
    price: '₹55,000',
    desc: 'Complete digital system with SEO and automation',
    featured: true,
    features: [
      { text: 'Custom Next.js website (unlimited pages)', included: true },
      { text: 'Advanced SEO & schema markup', included: true },
      { text: 'Google Business Profile optimization', included: true },
      { text: 'WhatsApp AI agent setup', included: true },
      { text: 'Custom animations & interactions', included: true },
      { text: '3 months post-launch support', included: true },
      { text: 'Content strategy & copywriting', included: true },
      { text: 'Performance optimization', included: true },
      { text: 'Monthly reporting for 3 months', included: true },
    ],
  },
  {
    id: 'orbit',
    name: 'ORBIT',
    price: '₹1,20,000',
    desc: 'Premium digital ecosystem with ongoing management',
    featured: false,
    features: [
      { text: 'Everything in SIGNAL', included: true },
      { text: '6 months monthly retainer included', included: true },
      { text: 'Advanced automation workflows', included: true },
      { text: 'Custom brand identity development', included: true },
      { text: 'Professional photography coordination', included: true },
      { text: 'Video content creation', included: true },
      { text: 'Social media management', included: true },
      { text: 'Paid advertising strategy', included: true },
      { text: 'Conversion rate optimization', included: true },
    ],
  },
]

export default function PricingSection() {
  const router = useRouter()
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
                fontSize: '0.9rem',
                color: 'var(--fog)',
                marginTop: '1rem',
                lineHeight: 1.6,
                minHeight: '45px',
              }}
            >
              {plan.desc}
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

            <GlassButton
              variant={plan.featured ? "bold" : "subtle"}
              onClick={() => router.push('/contact')}
              className="w-full mt-8"
              textClassName={plan.featured ? "text-[0.65rem] tracking-[0.2em] font-medium" : "text-[0.65rem] tracking-[0.2em] font-medium text-white/70"}
              borderRadius={100}
              borderWidth={plan.featured ? 0.15 : 0.1}
              distortionScale={plan.featured ? -260 : -120}
              style={{ padding: '0.8rem 1.5rem', width: '100%', marginTop: '2rem' }}
            >
              GET STARTED
            </GlassButton>
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
          <GlassButton
            variant="bold"
            onClick={() => router.push('/contact')}
            textClassName="text-[0.62rem] tracking-[0.18em] font-medium"
            borderRadius={100}
            borderWidth={0.15}
            distortionScale={-300}
            style={{ padding: '0.8rem 1.8rem', whiteSpace: 'nowrap' }}
          >
            GET STARTED →
          </GlassButton>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .pricing-section { padding: 6rem 1.5rem !important; } }
      `}</style>
    </section>
  )
}
