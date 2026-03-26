import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Autonomous Operations & AI Infrastructure',
  description: 'We build digital systems that work while you sleep. Autonomous agents that capture leads, process data, and close sales 24/7.',
}

const plans = [
  { name: 'BASIC', price: '₹499/month', items: ['1 AI bot', '20 bookings/month', 'Basic responses', 'No voice'] },
  { name: 'PRO',   price: '₹999/month', items: ['Unlimited bookings', 'Dashboard access', 'Loyalty automation', 'Review automation'], featured: true },
  { name: 'PREMIUM', price: '₹1,999/month', items: ['Voice bot (Vapi.ai)', 'Growth AI insights', 'Instagram automation', 'GST finance export'] },
]

const tech = ['GPT-4', 'n8n', 'WhatsApp Business API', 'Supabase', 'Razorpay', 'Google Calendar', 'Bolna.ai']

export default function AIAutomationPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem' }} className="page-inner">
        <span className="label-tag">02 — AUTONOMOUS OPERATIONS</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
          Your business,<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '2px var(--white)' }}>running at 3am.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '600px', marginTop: '2rem' }}>
          GPT-4 AI agents, n8n workflows, and WhatsApp automation systems that handle bookings, reminders, payments, and reviews — while you sleep.
        </p>

        {/* What we automate */}
        <div style={{ marginTop: '6rem' }}>
          <span className="label-tag">WHAT WE AUTOMATE</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', marginTop: '2rem', border: '1px solid var(--line)' }} className="auto-grid-page">
            {[
              ['WhatsApp AI Agent', 'Customer messages → GPT-4 reads intent in Malayalam, Hindi, or English → n8n books → Razorpay payment → Google Calendar sync → 24hr reminder → post-service review request.'],
              ['Live Dashboard', 'Business owner sees live bookings, revenue, staff, client history, reviews, and campaigns. Mobile-friendly. Real-time.'],
              ['Growth AI', 'Weekly GPT-4 insights. AI identifies revenue opportunities and auto-generates Instagram content.'],
              ['GST Finance Export', 'Monthly finance export for your CA. Zero manual entry. Fully automated.'],
            ].map(([title, desc]) => (
              <div key={title} style={{ background: 'var(--ink3)', padding: '2.5rem', borderBottom: '1px solid var(--line)', borderRight: '1px solid var(--line)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 300, color: 'var(--white)', marginBottom: '1rem' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fog)', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech */}
        <div style={{ marginTop: '4rem' }}>
          <span className="label-tag">TECH STACK</span>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
            {tech.map((t) => <span key={t} style={{ border: '1px solid var(--line2)', padding: '0.35rem 0.9rem', fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--fog)' }}>{t}</span>)}
          </div>
        </div>

        {/* Pricing */}
        <div style={{ marginTop: '5rem' }}>
          <span className="label-tag">PRICING</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'center', background: 'var(--ink3)', border: '1px solid var(--cobalt)', padding: '2rem 3rem', marginTop: '1.5rem' }} className="ai-pricing-top">
            <div>
              <div className="label-tag">SETUP</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginTop: '0.5rem' }}>₹20,000</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--fog)', marginTop: '0.3rem' }}>one time</div>
            </div>
            <div style={{ height: '1px', background: 'var(--line)' }} />
            <div>
              <div className="label-tag">MAINTENANCE</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginTop: '0.5rem' }}>₹3,000</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--fog)', marginTop: '0.3rem' }}>per month</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '1.5rem' }} className="ai-plan-grid">
            {plans.map((p) => (
              <div key={p.name} style={{ background: 'var(--ink3)', border: p.featured ? '1px solid rgba(26,26,255,0.5)' : '1px solid var(--line)', padding: '2rem' }}>
                <div className="label-tag">{p.name}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)', margin: '1rem 0 1.5rem' }}>{p.price}</div>
                {p.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', padding: '0.5rem 0', borderBottom: '1px solid var(--line)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--fog)' }}>
                    <span style={{ color: 'var(--cobalt2)', flexShrink: 0 }}>✓</span>{item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/contact" style={{ display: 'inline-block', background: 'var(--cobalt)', color: 'var(--white)', padding: '1.1rem 3rem', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
            BUILD MY AI SYSTEM →
          </Link>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .page-inner { padding: 0 1.5rem 5rem !important; } .auto-grid-page { grid-template-columns: 1fr !important; } .ai-pricing-top { grid-template-columns: 1fr !important; } .ai-plan-grid { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  )
}
