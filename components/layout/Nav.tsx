'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import GlassButton from '@/components/ui/GlassButton'

const navLinks = [
  { href: '/work',     label: 'WORK' },
  { href: '/services', label: 'SERVICES' },
  { href: '/about',    label: 'ABOUT' },
]

const allLinks = [
  { href: '/',         label: 'Home',     num: '00' },
  { href: '/work',     label: 'Work',     num: '01' },
  { href: '/services', label: 'Services', num: '02' },
  { href: '/about',    label: 'About',    num: '03' },
  { href: '/contact',  label: 'Contact',  num: '04' },
]

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="ham-icon" aria-hidden="true">
      <span className={`ham-line ham-line--top${open ? ' ham-line--open' : ''}`} />
      <span className={`ham-line ham-line--mid${open ? ' ham-line--open' : ''}`} />
      <span className={`ham-line ham-line--bot${open ? ' ham-line--open' : ''}`} />
    </span>
  )
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted]       = useState(false)
  const [showNav, setShowNav]       = useState(false)
  const pathname = usePathname()
  const router   = useRouter()
  const btnRef     = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Block page scroll-through on the overlay without touching body
  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    const block = (e: TouchEvent) => { if (mobileOpen) e.preventDefault() }
    el.addEventListener('touchmove', block, { passive: false })
    return () => el.removeEventListener('touchmove', block)
  }, [mobileOpen])

  // Portal requires document — only render after mount
  useEffect(() => { setMounted(true) }, [])
  
  // Hide nav during preloader
  useEffect(() => {
    // Check if preloader has been shown
    const hasSeenPreloader = typeof window !== 'undefined' && sessionStorage.getItem('revolq_v')
    
    if (hasSeenPreloader) {
      setShowNav(true)
    } else {
      // Show nav after preloader animation (3.8s)
      const timer = setTimeout(() => setShowNav(true), 3800)
      return () => clearTimeout(timer)
    }
  }, [])

  // Close on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Escape + resize — no body manipulation whatsoever
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMobileOpen(false); btnRef.current?.focus() }
    }
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const menuOverlay = (
    <div
      ref={overlayRef}
      id="mobile-navigation"
      className="mob-overlay"
      data-open={mobileOpen ? 'true' : 'false'}
      aria-hidden={!mobileOpen}
      aria-label="Navigation menu"
      role="dialog"
      aria-modal="true"
    >
      <div className="mob-inner">
        <nav className="mob-links" aria-label="Site navigation">
          {allLinks.map((l, i) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`mob-link${active ? ' mob-link--active' : ''}`}
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
                onClick={() => setMobileOpen(false)}
              >
                <span className="mob-link__num">{l.num}</span>
                <span className="mob-link__label">{l.label}</span>
                <span className="mob-link__arrow">↗</span>
              </Link>
            )
          })}
        </nav>

        <footer className="mob-footer">
          <div className="mob-footer__left">
            <span className="mob-footer__meta">India · revolq.in</span>
            <a href="https://wa.me/917995617374" target="_blank" rel="noopener noreferrer" className="mob-footer__wa">
              WHATSAPP US →
            </a>
          </div>
          <GlassButton
            variant="bold"
            onClick={() => { router.push('/contact'); setMobileOpen(false) }}
            textClassName="text-[0.6rem] tracking-[0.18em] font-medium"
            borderRadius={100}
            borderWidth={0.15}
            distortionScale={-200}
          >
            START A PROJECT
          </GlassButton>
        </footer>
      </div>

      <style>{`
        .mob-overlay {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          background: #000000;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          touch-action: none;
          overscroll-behavior: contain;
          transition: opacity 280ms cubic-bezier(0.16,1,0.3,1),
                      visibility 0s linear 280ms;
        }
        .mob-overlay[data-open="true"] {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transition: opacity 280ms cubic-bezier(0.16,1,0.3,1),
                      visibility 0s linear 0ms;
        }
        .mob-inner {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 88px 24px 40px;
          box-sizing: border-box;
        }
        .mob-links {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
        }
        .mob-link {
          display: flex;
          align-items: baseline;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          text-decoration: none;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 300ms cubic-bezier(0.16,1,0.3,1),
                      transform 300ms cubic-bezier(0.16,1,0.3,1);
        }
        .mob-overlay[data-open="true"] .mob-link {
          opacity: 1;
          transform: translateY(0);
        }
        .mob-link__num {
          font-family: var(--font-body);
          font-size: 10px;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.28);
          min-width: 24px;
          flex-shrink: 0;
        }
        .mob-link__label {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 10.5vw, 4rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.02em;
          color: rgba(255,255,255,0.7);
          flex: 1;
          transition: color 180ms;
        }
        .mob-link:hover .mob-link__label,
        .mob-link--active .mob-link__label { color: #ffffff; }
        .mob-link--active .mob-link__label { color: var(--cobalt2); }
        .mob-link__arrow {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.15);
          flex-shrink: 0;
          transition: color 180ms, transform 200ms;
        }
        .mob-link:hover .mob-link__arrow {
          color: rgba(255,255,255,0.5);
          transform: translate(3px,-3px);
        }
        .mob-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.07);
          flex-wrap: wrap;
        }
        .mob-footer__left { display: flex; flex-direction: column; gap: 6px; }
        .mob-footer__meta {
          font-family: var(--font-body);
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.28);
          text-transform: uppercase;
        }
        .mob-footer__wa {
          font-family: var(--font-body);
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          color: var(--cobalt2);
          text-decoration: none;
          text-transform: uppercase;
        }
        @media (prefers-reduced-motion: reduce) {
          .mob-overlay, .mob-link { transition-duration: 0.01ms !important; }
        }
      `}</style>
    </div>
  )

  return (
    <>
      {/* ── Nav bar — always above the portal overlay ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 10000,
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: 'rgba(0,0,0,0.94)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxSizing: 'border-box',
          opacity: showNav ? 1 : 0,
          pointerEvents: showNav ? 'auto' : 'none',
          transition: 'opacity 400ms ease',
        }}
        className="site-header"
      >
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

        {/* Desktop center rail */}
        <div className="nav-center">
          <div className="nav-rail">
            {navLinks.map((l) => {
              const active = pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`nav-rail-link${active ? ' nav-rail-link--active' : ''}`}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Desktop CTA + hamburger */}
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

          <button
            ref={btnRef}
            type="button"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="mobile-menu-btn"
            style={{
              display: 'none',
              width: 44, height: 44,
              alignItems: 'center', justifyContent: 'center',
              padding: 0, border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              position: 'relative',
              zIndex: 10000,
              flexShrink: 0,
            }}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* Portal: renders directly under document.body, outside all wrappers */}
      {mounted && createPortal(menuOverlay, document.body)}

      <style>{`
        /* ── Desktop nav ── */
        .nav-center { display: flex !important; align-items: center; }
        .nav-cta    { display: inline-block !important; }

        .nav-rail {
          display: flex; align-items: center; gap: 0.25rem;
          padding: 0.45rem 0.6rem;
          background: linear-gradient(160deg,rgba(255,255,255,0.045) 0%,rgba(255,255,255,0.012) 50%,rgba(4,8,20,0.28) 100%);
          backdrop-filter: blur(14px) saturate(130%);
          -webkit-backdrop-filter: blur(14px) saturate(130%);
          border: 1px solid rgba(255,255,255,0.075);
          border-top: 1px solid rgba(255,255,255,0.11);
          box-shadow: 0 4px 16px rgba(0,0,0,0.22),inset 0 1px 0 rgba(255,255,255,0.065),inset 0 -1px 0 rgba(255,255,255,0.02);
          border-radius: 100px;
        }
        .nav-rail-link {
          font-family: var(--font-body); font-size: 0.7rem;
          letter-spacing: 0.25em; color: var(--fog);
          text-decoration: none; text-transform: uppercase;
          padding: 0.4rem 1.1rem; border-radius: 100px;
          position: relative; display: inline-block;
          transition: color 240ms cubic-bezier(0.16,1,0.3,1),
                      background 240ms cubic-bezier(0.16,1,0.3,1),
                      transform 240ms cubic-bezier(0.16,1,0.3,1),
                      box-shadow 240ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav-rail-link--active {
          color: var(--white) !important;
          background: linear-gradient(160deg,rgba(255,255,255,0.08) 0%,rgba(255,255,255,0.028) 60%,rgba(30,60,160,0.10) 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.10),0 1px 6px rgba(0,0,0,0.18);
        }
        .nav-rail-link--active::after {
          content: ''; position: absolute; bottom: 0.28rem;
          left: 50%; transform: translateX(-50%);
          width: 18px; height: 1px;
          background: rgba(80,130,255,0.45); border-radius: 1px;
        }
        .nav-rail-link:hover,.nav-rail-link:focus-visible {
          color: var(--white) !important; transform: translateY(-1px);
          background: linear-gradient(160deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.022) 60%,rgba(30,60,160,0.08) 100%) !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.09),0 2px 8px rgba(0,0,0,0.20) !important;
        }
        .nav-rail-link:active { transform: translateY(0) scale(0.985); transition-duration: 80ms !important; }
        .nav-rail-link:focus-visible {
          outline: none;
          box-shadow: 0 0 0 1.5px rgba(80,130,255,0.5),inset 0 1px 0 rgba(255,255,255,0.09) !important;
        }

        /* ── Hamburger icon ── */
        .ham-icon {
          display: flex; flex-direction: column;
          align-items: flex-end; width: 24px; height: 18px;
          position: relative;
        }
        .ham-line {
          display: block; height: 1.5px; background: #fff;
          border-radius: 2px; position: absolute;
          transition: width 260ms cubic-bezier(0.16,1,0.3,1),
                      transform 260ms cubic-bezier(0.16,1,0.3,1),
                      opacity 160ms ease;
          transform-origin: center;
        }
        .ham-line--top { width: 24px; top: 0; }
        .ham-line--mid { width: 17px; top: 50%; margin-top: -0.75px; }
        .ham-line--bot { width: 21px; bottom: 0; }
        .ham-line--top.ham-line--open { width:24px; top:50%; margin-top:-0.75px; transform:rotate(45deg); }
        .ham-line--mid.ham-line--open { opacity:0; transform:scaleX(0); }
        .ham-line--bot.ham-line--open { width:24px; bottom:auto; top:50%; margin-top:-0.75px; transform:rotate(-45deg); }

        /* ── Desktop padding ── */
        @media (min-width: 768px) {
          nav.site-header { 
            padding: 0 4rem !important; 
            height: 84px !important; 
          }
          .nav-cta { display: inline-block !important; }
          .nav-center { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          nav.site-header { 
            height: 68px !important;
            padding: 0 24px !important;
          }
          .nav-cta    { display: none !important; }
          .nav-center { display: none !important; }
          .mobile-menu-btn { 
            display: flex !important;
            margin: 0 0 0 auto;
          }
        }
        
        @media (max-width: 359px) {
          nav.site-header {
            padding: 0 20px !important;
          }
        }
        
        /* Prevent magnetic effects on touch devices */
        @media (hover: none), (pointer: coarse) {
          .mobile-menu-btn {
            transform: none !important;
            translate: none !important;
          }
        }
      `}</style>
    </>
  )
}
