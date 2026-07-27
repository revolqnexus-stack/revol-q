'use client'

import { useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
      setVideoLoaded(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Playback lifecycle
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (rm) return

    const handleCanPlay = () => setVideoLoaded(true)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause()
      } else {
        video.play().catch(() => {})
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    const heroEl = video.closest('.hero')
    if (heroEl) observer.observe(heroEl)

    video.addEventListener('canplay', handleCanPlay)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    video.play().catch(() => {})

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="hero">
      {/* ── Full-bleed video ── */}
      <video
        ref={videoRef}
        className={isMobile ? "mobile-hero-video" : "hero-video"}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        style={{
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 0.6s ease-in',
        }}
      >
        <source 
          src={isMobile ? '/hero%20video/hero%20video%20mobile.mp4' : '/hero%20video/hero%20video.mp4'} 
          type="video/mp4" 
        />
      </video>

      {/* ── Content layer ── */}
      <div className="hero-content">
        <div className="hero-copy">
          {/* Eyebrow */}
          <div className="animate-reveal hero-eyebrow-wrapper" style={{ animationDelay: '0.1s' }}>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-left">REVOLQ / SYSTEMS STUDIO</span>
              <span className="hero-eyebrow-right">INDIA — 2025</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-reveal hero-headline" style={{ animationDelay: '0.2s' }}>
            <span className="hero-title-primary">BUILDING</span>
            <span className="hero-title-primary">SYSTEMS</span>
            <span className="hero-title-accent">THAT WORK.</span>
          </h1>

          {/* Technical metadata */}
          <div className="hero-meta animate-reveal" style={{ animationDelay: '0.25s' }}>
            <span className="hero-meta-item">WEB</span>
            <span className="hero-meta-divider">—</span>
            <span className="hero-meta-item">SEARCH</span>
            <span className="hero-meta-divider">—</span>
            <span className="hero-meta-item">AUTOMATION</span>
          </div>

          {/* Description */}
          <p className="animate-reveal hero-sub" style={{ animationDelay: '0.35s' }}>
            Digital systems designed to make businesses easier to find, choose and operate.
          </p>

          {/* CTAs */}
          <div className="hero-ctas animate-reveal" style={{ animationDelay: '0.5s' }}>
            <button
              className="hero-cta hero-cta--primary"
              onClick={() => router.push('/contact')}
            >
              <span className="hero-cta-index">01</span>
              <span className="hero-cta-label">START A PROJECT</span>
              <span className="hero-cta-arrow">↗</span>
            </button>

            <button
              className="hero-cta hero-cta--secondary"
              onClick={() => router.push('/work')}
            >
              <span className="hero-cta-index">02</span>
              <span className="hero-cta-label">VIEW OUR WORK</span>
              <span className="hero-cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop corner labels */}
      <span className="hero-corner hero-corner--tr">INDIA</span>
      <span className="hero-corner hero-corner--bl">+91 79956 17374</span>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span className="hero-scroll__label">SCROLL</span>
        <div className="hero-scroll__line" />
      </div>

      <style>{`
        /* ================================================== */
        /* ── TECHNICAL POSTER HERO SYSTEM ── */
        /* ================================================== */

        .hero {
          position: relative;
          width: 100%;
          min-height: clamp(620px, 92svh, 920px);
          overflow: hidden;
          background: #000;
          display: flex;
          flex-direction: column;
        }

        /* ── Full-bleed video ── */
        .hero-video,
        .mobile-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 1;
          pointer-events: none;
          background: #000;
        }

        /* ── Content layer ── */
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: calc(var(--header-height, 72px) + 24px) 4rem 48px;
        }

        .hero-copy {
          max-width: 760px;
        }

        /* ── Eyebrow: Technical header ── */
        .hero-eyebrow-wrapper {
          margin-bottom: 2.2rem;
        }

        .hero-eyebrow {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          font-family: var(--font-utility);
          font-size: 9px;
          line-height: 1.6;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--cobalt2);
        }

        .hero-eyebrow-left,
        .hero-eyebrow-right {
          white-space: nowrap;
        }

        /* ── Headline: Condensed display ── */
        .hero-headline {
          margin: 0 0 1.5rem;
          padding: 0;
        }

        .hero-title-primary {
          display: block;
          font-family: var(--font-condensed);
          font-size: clamp(6rem, 8.8vw, 10.5rem);
          font-weight: 900;
          line-height: 0.78;
          letter-spacing: -0.035em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        .hero-title-accent {
          display: block;
          font-family: var(--font-condensed);
          font-size: clamp(5rem, 7.4vw, 8.8rem);
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -0.025em;
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 1.8px var(--cobalt2);
          text-stroke: 1.8px var(--cobalt2);
          transform: skewX(-6deg);
          transform-origin: left center;
        }
        
        @supports not (-webkit-text-stroke: 1.8px var(--cobalt2)) {
          .hero-title-accent {
            color: var(--cobalt2);
          }
        }

        /* ── Technical metadata ── */
        .hero-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.8rem;
          font-family: var(--font-utility);
          font-size: 9px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
        }

        .hero-meta-item {
          color: rgba(255,255,255,0.54);
        }

        .hero-meta-divider {
          color: rgba(255,255,255,0.22);
        }

        /* ── Description: Clean sans ── */
        .hero-sub {
          font-family: var(--font-body);
          font-size: clamp(1.15rem, 1.3vw, 1.45rem);
          font-weight: 450;
          line-height: 1.5;
          letter-spacing: -0.015em;
          color: rgba(255,255,255,0.86);
          max-width: 34ch;
          margin: 0 0 2rem 0;
        }

        /* ── CTAs: Utility controls ── */
        .hero-ctas {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
        }

        .hero-cta {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0 1.4rem;
          height: 52px;
          font-family: var(--font-utility);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: 1px solid;
          border-radius: 0;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .hero-cta--primary {
          background: #FFFFFF;
          color: #000000;
          border-color: #FFFFFF;
        }

        .hero-cta--primary:hover {
          background: rgba(255,255,255,0.92);
          transform: translateY(-1px);
        }

        .hero-cta--secondary {
          background: transparent;
          color: #FFFFFF;
          border-color: rgba(255,255,255,0.32);
        }

        .hero-cta--secondary:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.48);
          transform: translateY(-1px);
        }

        .hero-cta-index {
          opacity: 0.4;
        }

        .hero-cta-label {
          flex: 1;
        }

        .hero-cta-arrow {
          opacity: 0.6;
          font-size: 13px;
          transition: transform 180ms ease;
        }

        .hero-cta:hover .hero-cta-arrow {
          transform: translate(2px, -2px);
        }

        /* ── Corner labels ── */
        .hero-corner {
          position: absolute;
          z-index: 3;
          font-family: var(--font-utility);
          font-size: 9px;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.28);
          text-transform: uppercase;
          user-select: none;
          writing-mode: vertical-lr;
        }

        .hero-corner--tr {
          top: 2rem;
          right: 4rem;
        }

        .hero-corner--bl {
          bottom: 2.5rem;
          left: 4rem;
        }

        /* ── Scroll indicator ── */
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 3;
        }

        .hero-scroll__label {
          font-family: var(--font-utility);
          font-size: 8px;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.28);
          text-transform: uppercase;
        }

        .hero-scroll__line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, var(--cobalt), transparent);
          animation: scaleYPulse 2s ease-in-out infinite;
        }

        @keyframes scaleYPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.8; }
          50%       { transform: scaleY(0.6); opacity: 0.3; }
        }

        /* ================================================== */
        /* ── MOBILE: TECHNICAL POSTER ── */
        /* ================================================== */
        @media (max-width: 767px) {
          .hero {
            min-height: clamp(580px, 88svh, 680px);
          }

          .mobile-hero-video {
            object-position: center center;
          }

          .hero-content {
            padding: clamp(110px, 18svh, 160px) 24px 44px;
            justify-content: flex-start;
          }

          .hero-copy {
            max-width: 100%;
          }

          .hero-eyebrow-wrapper {
            margin-bottom: 3.2rem;
          }

          .hero-eyebrow {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.3rem;
            font-size: 9px;
            letter-spacing: 0.16em;
          }

          .hero-headline {
            margin: 0 0 1.4rem 0;
          }

          .hero-title-primary {
            font-size: clamp(5.1rem, 24vw, 7.2rem);
            font-weight: 900;
            line-height: 0.72;
            letter-spacing: -0.035em;
          }
          
          .hero-title-accent {
            font-size: clamp(4rem, 19vw, 6rem);
            font-weight: 900;
            line-height: 0.76;
            letter-spacing: -0.025em;
            -webkit-text-stroke-width: 1.25px;
            transform: skewX(-6deg);
          }

          .hero-meta {
            margin-bottom: 1.6rem;
            font-size: 8px;
          }

          .hero-sub {
            font-size: 16px;
            font-weight: 450;
            line-height: 1.5;
            letter-spacing: -0.015em;
            max-width: 29ch;
            margin: 0 0 2rem 0;
          }

          .hero-ctas {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }

          .hero-cta {
            width: 100%;
            height: 54px;
            padding: 0 1.2rem;
            gap: 0.8rem;
            font-size: 9px;
            border-radius: 0;
          }

          .hero-corner,
          .hero-scroll {
            display: none;
          }
        }

        @media (max-width: 359px) {
          .hero-content {
            padding-inline: 20px;
          }

          .hero-title-primary {
            font-size: clamp(4.8rem, 22vw, 6.8rem);
          }

          .hero-title-accent {
            font-size: clamp(3.8rem, 18vw, 5.6rem);
          }
        }

        /* ── Hide custom cursor on mobile ── */
        @media (hover: none), (pointer: coarse) {
          #revolq-cursor,
          .custom-cursor,
          .cursor-dot,
          .cursor-follower {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-video,
          .mobile-hero-video { 
            display: none !important; 
          }
        }
      `}</style>
    </main>
  )
}
