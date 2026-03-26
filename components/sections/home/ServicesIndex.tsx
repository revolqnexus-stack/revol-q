'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const services = [
  {
    id: '01',
    title: 'Digital Ecosystem Architecture',
    translation: 'Custom Web Development & Platform Design',
    description: 'Templates bleed revenue. We abandon generic themes to engineer bespoke Next.js web applications from absolute zero. Built strictly for millisecond load times, algorithmic discoverability, and relentless conversion. Your website stops being a brochure and becomes a high-yielding asset.',
    deliverables: ['Custom Next.js App Router', 'React Server Components', 'Vercel Edge Deployment', 'Lighthouse 95+ Guarantee'],
    href: '/services/web-development'
  },
  {
    id: '02',
    title: 'Algorithmic Positioning',
    translation: 'Technical SEO & Local Search Dominance',
    description: 'Being on page two is mathematically identical to not existing. Securing the top position isn’t about stuffing keywords; it’s about dominating the search algorithm through technical precision, semantic markup, and aggressive local authority.',
    deliverables: ['JSON-LD Schema Engineering', 'GBP Optimization & Management', 'Technical Crawl Audits', 'Competitor Gap Analysis'],
    href: '/services/seo-gbp'
  },
  {
    id: '03',
    title: 'Autonomous Operations',
    translation: 'AI Agents & Workflow Automation',
    description: 'Human response times kill deals. We build digital systems that work while you sleep. By integrating LLMs (Claude/OpenAI) with custom n8n workflows, we engineer AI agents that capture leads, process data, and close sales 24/7.',
    deliverables: ['WhatsApp AI Voice Agents', 'n8n CRM Integrations', 'Automated Lead Routing', '24/7 Uptime Monitoring'],
    href: '/services/ai-automation'
  },
  {
    id: '04',
    title: 'Brand Brutalism',
    translation: 'Visual Identity & Market Positioning',
    description: 'Polite brands get ignored. We engineer visual and verbal identities that cut through the noise. From high-contrast visual systems to uncompromising market positioning, we ensure your business is perceived as the undisputed authority in your sector.',
    deliverables: ['Strategic Positioning Protocol', 'Typography & Color Systems', 'Digital Brand Guidelines', 'Competitor Contrast Analysis'],
    href: '/services/brand-strategy'
  },
  {
    id: '05',
    title: 'Conversion Telemetry',
    translation: 'UX Copywriting & Flow Optimization',
    description: 'Traffic is useless if it bounces. We map user psychology and eliminate structural friction. By combining aggressive, benefit-driven copywriting with behavioral tracking, we turn passive visitors into high-ticket clients.',
    deliverables: ['High-Intent UX Copywriting', 'Behavioral Flow Mapping', 'Friction Reduction Audits', 'Conversion Rate Optimization'],
    href: '/contact'
  },
  {
    id: '06',
    title: 'Continuous Iteration',
    translation: 'Monthly Retainer & Ecosystem Management',
    description: 'Digital dominance is not a one-time event; it requires relentless iteration. We act as your off-site engineering team, continuously monitoring, updating, and scaling your digital ecosystem to outpace the market month over month.',
    deliverables: ['Proactive Technical Maintenance', 'Monthly Algorithmic Adjustments', 'Ongoing AI Agent Training', 'Priority Engineering Support'],
    href: '/services/retainer'
  }
];

function ServiceRow({ s }: { s: typeof services[0] }) {
  const container = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLSpanElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  useGSAP(() => {
    if (!container.current) return

    if (isHovered) {
      gsap.to(container.current, {
        backgroundColor: '#1A1AFF',
        duration: 0.3,
        ease: 'power4.out'
      })
      gsap.to(titleRef.current, {
        x: 15,
        duration: 0.3,
        ease: 'power4.out'
      })
    } else {
      gsap.to(container.current, {
        backgroundColor: 'transparent',
        duration: 0.3,
        ease: 'power4.out'
      })
      gsap.to(titleRef.current, {
        x: 0,
        duration: 0.3,
        ease: 'power4.out'
      })
    }
  }, { dependencies: [isHovered], scope: container })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Create transition mask
    const rect = container.current?.getBoundingClientRect()
    if (!rect) return

    const mask = document.createElement('div')
    mask.style.position = 'fixed'
    mask.style.top = `${rect.top}px`
    mask.style.left = `${rect.left}px`
    mask.style.width = `${rect.width}px`
    mask.style.height = `${rect.height}px`
    mask.style.backgroundColor = '#1A1AFF'
    mask.style.zIndex = '9999'
    mask.style.pointerEvents = 'none'
    document.body.appendChild(mask)

    gsap.to(mask, {
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      duration: 0.6,
      ease: 'power4.inOut',
      onComplete: () => {
        router.push(s.href)
        gsap.to(mask, {
          opacity: 0,
          duration: 0.4,
          delay: 0.2,
          onComplete: () => mask.remove()
        })
      }
    })
  }

  return (
    <div
      ref={container}
      className="service-row-v2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      data-cursor-text="VIEW"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid var(--line)',
        padding: '2rem 0',
        cursor: 'pointer',
        transition: 'border-color 300ms ease',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'center', width: '100%' }}>
        <span className="srv-num" style={{ opacity: isHovered ? 1 : 0.5, color: isHovered ? '#fff' : 'var(--dim)' }}>{s.id}</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span 
            ref={titleRef}
            className="srv-title" 
            style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', 
              fontWeight: 300, 
              color: '#fff',
              textTransform: 'uppercase'
            }}
          >
            {s.title}
          </span>
          <span style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '0.65rem', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase', 
            color: isHovered ? 'rgba(255,255,255,0.8)' : 'var(--dim)',
            marginTop: '0.4rem',
            marginLeft: isHovered ? '15px' : '0',
            transition: 'margin-left 0.3s power4.out'
          }}>
            {s.translation}
          </span>
        </div>
        <span className="srv-arrow" style={{ transform: isHovered ? 'translateX(10px)' : 'none', color: isHovered ? '#fff' : 'var(--dim)' }}>→</span>
      </div>

      {/* Accordion Detail Reveal (Option A style logic if brief, but using it as hidden context) */}
      <div style={{ 
        maxHeight: isHovered ? '200px' : '0', 
        overflow: 'hidden', 
        transition: 'max-height 0.4s ease-in-out',
        paddingLeft: '80px',
        marginTop: isHovered ? '1.5rem' : '0'
      }}>
        <p style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '0.85rem', 
          lineHeight: 1.6, 
          color: 'rgba(255,255,255,0.9)', 
          maxWidth: '600px',
          marginBottom: '1rem' 
        }}>
          {s.description}
        </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {s.deliverables.map(d => (
            <span key={d} style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', padding: '0.3rem 0.6rem' }}>
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ServicesIndex() {
  return (
    <section
      style={{
        padding: '10rem 4rem',
        position: 'relative',
        zIndex: 10,
      }}
      className="services-section"
    >
      <div style={{ marginBottom: '4rem' }}>
        <span className="label-tag">WHAT WE DO</span>
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
          Diagnosis &<br />
          <em style={{ fontStyle: 'italic', color: 'transparent', WebkitTextStroke: '1.5px var(--white)' }}>
            Unrivaled Cure.
          </em>
        </h2>
      </div>

      <div style={{ borderTop: '1px solid var(--line)' }}>
        {services.map((s) => (
          <ServiceRow key={s.id} s={s} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4rem' }}>
        <Link
          href="/services"
          className="magnetic-text"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            color: 'var(--cobalt2)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Full Engineering Catalog →
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) { .services-section { padding: 6rem 1.5rem !important; } .service-row-v2 { padding: 1.5rem 0 !important; } }
        @media (hover: none) {
          .service-row-v2:hover { background-color: transparent !important; }
          .srv-title:hover { transform: none !important; }
        }
      `}</style>
    </section>
  )
}

