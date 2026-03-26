'use client'

import Link from 'next/link'

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '10rem', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
      <div style={{ padding: '0 4rem 8rem', display: 'grid', gridTemplateColumns: '55% 45%', gap: '6rem' }} className="contact-grid">
        {/* Left */}
        <div>
          <span className="label-tag">GET IN TOUCH</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 8rem)', fontWeight: 300, lineHeight: 0.9, marginTop: '1.2rem', color: 'var(--white)' }}>
            Let&apos;s talk.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--fog)', lineHeight: 1.9, maxWidth: '400px', marginTop: '2rem' }}>
            Tell us about your project. We reply within 24 hours. Usually much faster.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '4rem', marginBottom: '4rem' }}>
            <a href="tel:+917995617374" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--white)', textDecoration: 'none' }}>+91 79956 17374</a>
            <a href="tel:+917306085895" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--white)', textDecoration: 'none' }}>+91 73060 85895</a>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--fog)', marginTop: '0.5rem' }}>Kerala, India<br />revolq.in</span>
          </div>

          <a href="https://wa.me/917995617374" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--cobalt)', color: 'var(--white)', padding: '1.2rem 3.5rem', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 300ms' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--cobalt2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = 'var(--cobalt)')}>
            WHATSAPP US NOW →
          </a>
        </div>

        {/* Right — HTML Form Interface (No actual <form> per requirements, just visual) */}
        <div style={{ background: 'var(--ink3)', padding: '4rem', border: '1px solid var(--line)' }} className="contact-form-box">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {['Full Name', 'Business Name'].map((p) => (
              <input key={p} type="text" placeholder={p} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '1rem 0', width: '100%', outline: 'none', transition: 'border-color 200ms' }}
                onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = 'var(--cobalt)')}
                onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderBottomColor = 'var(--line)')}
              />
            ))}

            <select style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', color: 'var(--fog)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '1rem 0', width: '100%', outline: 'none', appearance: 'none', cursor: 'pointer' }}
              onFocus={(e) => ((e.currentTarget as HTMLSelectElement).style.borderBottomColor = 'var(--cobalt)')}
              onBlur={(e) => ((e.currentTarget as HTMLSelectElement).style.borderBottomColor = 'var(--line)')}
            >
              <option value="" disabled selected>Service Needed</option>
              <option value="web">Web Development</option>
              <option value="ai">AI Automation</option>
              <option value="seo">SEO & GBP</option>
              <option value="brand">Brand Strategy</option>
              <option value="retainer">Monthly Retainer</option>
              <option value="full">Full Package</option>
              <option value="unsure">Not sure yet</option>
            </select>

            <select style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', color: 'var(--fog)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '1rem 0', width: '100%', outline: 'none', appearance: 'none', cursor: 'pointer' }}
              onFocus={(e) => ((e.currentTarget as HTMLSelectElement).style.borderBottomColor = 'var(--cobalt)')}
              onBlur={(e) => ((e.currentTarget as HTMLSelectElement).style.borderBottomColor = 'var(--line)')}
            >
              <option value="" disabled selected>Budget</option>
              <option value="25">Under ₹25,000</option>
              <option value="50">₹25k–₹50k</option>
              <option value="120">₹50k–₹1,20,000</option>
              <option value="max">₹1,20,000+</option>
              <option value="discuss">Let&apos;s discuss</option>
            </select>

            <textarea placeholder="Message" rows={4} style={{ background: 'transparent', border: 'none', borderBottom: '1px solid var(--line)', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', padding: '1rem 0', width: '100%', outline: 'none', resize: 'none', transition: 'border-color 200ms' }}
              onFocus={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderBottomColor = 'var(--cobalt)')}
              onBlur={(e) => ((e.currentTarget as HTMLTextAreaElement).style.borderBottomColor = 'var(--line)')}
            />

            <div>
              <button style={{ width: '100%', background: 'var(--cobalt)', color: 'var(--white)', border: 'none', padding: '1.2rem', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'background 300ms', cursor: 'none' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--cobalt2)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--cobalt)')}>
                SEND MESSAGE
              </button>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', color: 'var(--dim)', marginTop: '0.8rem', textAlign: 'center' }}>
                We reply within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 4rem !important; } .contact-form-box { padding: 3rem 2rem !important; } } @media (max-width: 768px) { .contact-grid { padding: 0 1.5rem 5rem !important; } .contact-form-box { padding: 2rem 1.5rem !important; } }`}</style>
    </main>
  )
}
