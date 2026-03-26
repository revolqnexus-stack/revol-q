'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/work',     label: 'WORK' },
  { href: '/services', label: 'SERVICES' },
  { href: '/about',    label: 'ABOUT' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: '1.6rem 4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 300ms ease, border-color 300ms ease',
          background: scrolled ? 'rgba(0,0,0,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: 'var(--white)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          REVOLQ
        </Link>

        {/* Center links — desktop */}
        <div
          className="nav-center"
          style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}
        >
          {navLinks.map((l) => {
            const active = pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  color: active ? 'var(--white)' : 'var(--fog)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  transition: 'color 200ms',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)')}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = active ? 'var(--white)' : 'var(--fog)')
                }
              >
                {l.label}
              </Link>
            )
          })}
        </div>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link
            href="/contact"
            style={{
              border: '1px solid var(--line2)',
              color: 'var(--fog)',
              padding: '0.55rem 1.3rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.62rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'border-color 200ms, color 200ms',
              display: 'none',
            }}
            className="nav-cta"
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'var(--cobalt)'
              el.style.color = 'var(--cobalt2)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'var(--line2)'
              el.style.color = 'var(--fog)'
            }}
          >
            LET&apos;S TALK
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              cursor: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 190,
          background: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 4rem',
          gap: '2rem',
          transition: 'opacity 400ms ease, transform 400ms ease',
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {[...navLinks, { href: '/contact', label: 'CONTACT' }].map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 300,
              color: 'var(--white)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'color 200ms',
              transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'none' : 'translateY(20px)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--cobalt2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)')}
          >
            {l.label}
          </Link>
        ))}

        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--dim)' }}>
            Kerala, India · revolq.in
          </p>
        </div>
      </div>

      {/* Responsive nav CSS */}
      <style>{`
        .nav-cta { display: inline-block !important; }
        .nav-center { display: flex !important; }
        @media (max-width: 768px) {
          .nav-cta { display: none !important; }
          .nav-center { display: none !important; }
          nav { padding: 1.4rem 1.5rem !important; }
        }
      `}</style>
    </>
  )
}
