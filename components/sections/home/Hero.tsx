'use client'

import { useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import GlassButton from '@/components/ui/GlassButton'

export default function Hero() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile once on client
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
      setVideoLoaded(false) // reset fade so new source fades in
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
      {/* ── Full-bleed video layer ── */}
      {/* Key forces a remount when the source switches so the correct file loads */}
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        ref={videoRef}
        className="hero-video"
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
          src={isMobile ? '/hero video/hero video mobile.mp4' : '/hero video/hero video.mp4'}
          type="video/mp4"
        />
      </video>

      {/* ── Content layer ── */}
      <div className="hero-content">
        <div className="hero-copy">
          {/* Eyebrow */}
          <div className="animate-reveal" style={{ overflow: 'hidden', animationDelay: '0.1s', marginBottom: '1.25rem' }}>
            <span className="hero-eyebrow">
              DIGITAL SYSTEMS STUDIO&nbsp;— INDIA&nbsp;— EST.&nbsp;2025
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-reveal hero-headline" style={{ animationDelay: '0.2s' }}>
            <span className="hero-title-primary">Building systems</span>
            <span className="hero-title-accent">that work.</span>
          </h1>

          {/* Description */}
          <p className="animate-reveal hero-sub" style={{ animationDelay: '0.35s' }}>
            Web, search, automation and brand systems designed to make businesses
            easier to find, choose and operate.
          </p>

          {/* CTAs */}
          <div className="hero-ctas animate-reveal" style={{ animationDelay: '0.5s' }}>
            <GlassButton
              variant="bold"
              onClick={() => router.push('/contact')}
              textClassName="text-[0.62rem] tracking-[0.2em] font-medium"
              borderRadius={100}
              borderWidth={0.15}
              distortionScale={-300}
            >
              START A PROJECT →
            </GlassButton>

            <GlassButton
              variant="subtle"
              onClick={() => router.push('/work')}
              textClassName="text-[0.62rem] tracking-[0.2em] font-medium text-white/70"
              borderRadius={100}
              borderWidth={0.1}
              distortionScale={-120}
            >
              VIEW OUR WORK
            </GlassButton>
          </div>
        </div>
      </div>

      {/* Desktop corner labels — hidden on mobile */}
      <span className="hero-corner hero-corner--tr">INDIA</span>
      <span className="hero-corner hero-corner--bl">+91 79956 17374</span>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span className="hero-scroll__label">SCROLL</span>
        <div className="hero-scroll__line" />
      </div>

      <style>{`
        /* ── Hero shell ── */
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
        .hero-video {
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

        /* ── Copy block ── */
        .hero-copy {
          max-width: 760px;
        }

        /* ── Eyebrow ── */
        .hero-eyebrow {
          display: block;
          font-family: var(--font-body);
          font-size: 10px;
          line-height: 1.75;
          letter-spacing: 0.30em;
          text-transform: uppercase;
          color: var(--cobalt2);
        }

        /* ── Headline ── */
        .hero-headline {
          margin: 0 0 2rem;
          padding: 0;
        }
        .hero-title-primary {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(3.8rem, 7.2vw, 9.2rem);
          font-weight: 300;
          line-height: 0.87;
          letter-spacing: -0.055em;
          color: var(--white);
        }
        .hero-title-accent {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(3.4rem, 6.5vw, 8.4rem);
          font-weight: 300;
          font-style: italic;
          line-height: 0.87;
          letter-spacing: -0.05em;
          color: var(--cobalt2);
        }

        /* ── Description ── */
        .hero-sub {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.1vw, 1.15rem);
          font-weight: 300;
          line-height: 1.6;
          color: rgba(255,255,255,0.82);
          max-width: 500px;
          margin: 0 0 2.2rem;
        }

        /* ── CTAs ── */
        .hero-ctas {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        /* ── Corner labels ── */
        .hero-corner {
          position: absolute;
          z-index: 3;
          font-family: var(--font-body);
          font-size: 0.58rem;
          letter-spacing: 0.3em;
          color: var(--dim);
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
          letter-spacing: 0.2em;
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
          font-family: var(--font-body);
          font-size: 0.5rem;
          letter-spacing: 0.4em;
          color: var(--dim);
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

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .hero {
            min-height: clamp(680px, 100svh, 860px);
          }

          .hero-video {
            object-position: center 35%;
          }

          .hero-content {
            justify-content: flex-end;
            padding-top: 96px;
            padding-bottom: 28px;
            padding-left: 24px;
            padding-right: 24px;
          }

          .hero-copy {
            max-width: 100%;
          }

          .hero-title-primary {
            font-size: clamp(2.9rem, 12.5vw, 4.1rem);
            white-space: nowrap;
          }
          .hero-title-accent {
            font-size: clamp(2.7rem, 11.8vw, 3.9rem);
            white-space: nowrap;
          }

          .hero-sub {
            font-size: clamp(1rem, 4.4vw, 1.125rem);
            font-weight: 400;
            letter-spacing: -0.015em;
            color: rgba(255,255,255,0.78);
            max-width: 33ch;
          }

          .hero-ctas {
            flex-direction: column;
            gap: 12px;
          }

          .hero-corner,
          .hero-scroll {
            display: none;
          }
        }

        @media (min-width: 430px) and (max-width: 767px) {
          .hero-ctas {
            flex-direction: row;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-video { display: none !important; }
        }
      `}</style>
    </main>
  )
}
