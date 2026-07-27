'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import GlassButton from '@/components/ui/GlassButton'

const navLinks = [
  { href: '/work',     label: 'WORK' },
  { href: '/services', label: 'SERVICES' },
  { href: '/about',    label: 'ABOUT' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
    // Lock scroll when mobile menu is open
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // Close on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [pathname, mobileOpen])

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

        {/* Center links — desktop, shared liquid-glass rail */}
        <div
          className="nav-center"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div
            className="nav-rail"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.45rem 0.6rem',
              background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.012) 50%, rgba(4,8,20,0.28) 100%)',
              backdropFilter: 'blur(14px) saturate(130%)',
              WebkitBackdropFilter: 'blur(14px) saturate(130%)',
              border: '1px solid rgba(255,255,255,0.075)',
              borderTop: '1px solid rgba(255,255,255,0.11)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.065), inset 0 -1px 0 rgba(255,255,255,0.02)',
              borderRadius: '100px',
            }}
          >
            {navLinks.map((l) => {
              const active = pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`nav-rail-link${active ? ' nav-rail-link--active' : ''}`}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.25em',
                    color: active ? 'var(--white)' : 'var(--fog)',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    padding: '0.4rem 1.1rem',
                    borderRadius: '100px',
                    position: 'relative',
                    transition: 'color 240ms cubic-bezier(0.16, 1, 0.3, 1), background 240ms cubic-bezier(0.16, 1, 0.3, 1), transform 240ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 240ms cubic-bezier(0.16, 1, 0.3, 1)',
                    background: active
                      ? 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.028) 60%, rgba(30,60,160,0.10) 100%)'
                      : 'transparent',
                    boxShadow: active
                      ? 'inset 0 1px 0 rgba(255,255,255,0.10), 0 1px 6px rgba(0,0,0,0.18)'
                      : 'none',
                    display: 'inline-block',
                  }}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Right CTA — desktop only */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <GlassButton
            variant="subtle"
            size="sm"
            onClick={() => router.push('/contact')}
            className="nav-cta"
            textClassName="text-[0.58rem] tracking-[0.2em] font-medium text-white/80"
            borderRadius={100}
            borderWidth={0.08}
            backgroundOpacity={0.12}
            distortionScale={-100}
          >
            LET&apos;S TALK
          </GlassButton>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--white)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              padding: '0.5rem',
              minWidth: '44px',
              minHeight: '44px',
              justifyContent: 'center',
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
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--cobalt2)')}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)')}
          >
            {l.label}
          </Link>
        ))}

        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--dim)' }}>
            India · revolq.in
          </p>
        </div>
      </div>

      {/* Responsive nav CSS */}
      <style>{`
        .nav-cta { display: inline-block !important; }
        .nav-center { display: flex !important; }
        .mobile-menu-btn { display: none !important; }

        /* Rail link push interaction */
        .nav-rail-link:hover,
        .nav-rail-link:focus-visible {
          color: var(--white) !important;
          transform: translateY(-1px);
          background: linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.022) 60%, rgba(30,60,160,0.08) 100%) !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.09), 0 2px 8px rgba(0,0,0,0.20) !important;
        }
        .nav-rail-link:active {
          transform: translateY(0px) scale(0.985);
          transition-duration: 80ms !important;
        }
        .nav-rail-link--active {
          color: var(--white) !important;
        }
        .nav-rail-link--active::after {
          content: '';
          position: absolute;
          bottom: 0.28rem;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 1px;
          background: rgba(80, 130, 255, 0.45);
          border-radius: 1px;
        }
        .nav-rail-link:focus-visible {
          outline: none;
          box-shadow: 0 0 0 1.5px rgba(80,130,255,0.5), inset 0 1px 0 rgba(255,255,255,0.09) !important;
        }

        @supports not (backdrop-filter: blur(1px)) {
          .nav-rail { background: rgba(8, 12, 28, 0.92) !important; }
        }

        @media (max-width: 768px) {
          .nav-cta { display: none !important; }
          .nav-center { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          nav { padding: 1.4rem 1.5rem !important; }
        }
      `}</style>
    </>
  )
}
