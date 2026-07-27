'use client'

import { useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import GlassButton from '@/components/ui/GlassButton'

const MOBILE_BREAKPOINT = 768

const VIDEOS = {
  desktop: {
    mp4: '/hero video/hero video.mp4',
    poster: '',
  },
  mobile: {
    mp4: '/hero video/hero video mobile.mp4',
    poster: '',
  },
}

export default function Hero() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Determine initial mobile state — runs before first paint on client
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // When the active video changes, swap source and replay
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const activeVideo = isMobile ? VIDEOS.mobile : VIDEOS.desktop
    setVideoLoaded(false)
    video.pause()
    video.src = activeVideo.mp4
    video.load()
    video.play().catch(() => {})
  }, [isMobile])

  // Lifecycle — canplay, visibility, viewport-based pause/resume
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => setVideoLoaded(true)

    const handleVisibilityChange = () => {
      const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (document.hidden) {
        video.pause()
      } else if (!rm) {
        video.play().catch(() => {})
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        entries.forEach((entry) => {
          if (entry.isIntersecting && !rm) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 }
    )

    const heroEl = video.closest('.hero-outer')
    if (heroEl) observer.observe(heroEl)

    video.addEventListener('canplay', handleCanPlay)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      observer.disconnect()
    }
  }, [])

  const activeVideo = isMobile ? VIDEOS.mobile : VIDEOS.desktop

  return (
    <main
      className="hero-outer"
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 4rem 4rem',
        overflow: 'hidden',
      }}
    >
      {/* SVG clip path — geometry locked, never change */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <clipPath id="hero-aperture-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0.35,0 C 0.5,0 0.65,0.05 0.8,0.15 C 0.92,0.25 1,0.4 1,0.55 L 1,1 L 0.2,1 C 0.15,0.85 0.12,0.65 0.15,0.45 C 0.18,0.25 0.25,0.1 0.35,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/*
        Liquid aperture — ONLY clipping layer.
        - No inner wrapper with overflow:hidden
        - object-fit: contain so full sculpture is visible
        - Black background merges with hero background (no border visible)
        - Size: large enough that no edge of the sculpture is cut
      */}
      <div
        className="hero-aperture"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          /* clamp keeps it off viewport edge; floor prevents tiny mobile crop */
          width: 'clamp(520px, 49vw, 980px)',
          height: 'clamp(500px, 72vh, 820px)',
          overflow: 'hidden',          /* sole rectangular clip — the mask handles shape */
          zIndex: 1,
          background: '#000000',
          clipPath: 'url(#hero-aperture-mask)',
          isolation: 'isolate',
        }}
      >
        <video
          key={isMobile ? 'mobile' : 'desktop'}
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          {...(activeVideo.poster ? { poster: activeVideo.poster } : {})}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            /*
              contain — shows the full frame instead of cropping.
              The black video background merges with #000000 aperture bg.
            */
            objectFit: isMobile ? 'cover' : 'contain',
            objectPosition: isMobile ? '50% 30%' : 'right 32%',
            background: '#000000',
            opacity: videoLoaded ? 1 : 0,
            filter: 'none',
            mixBlendMode: 'normal',
            transition: 'opacity 0.6s ease-in',
            pointerEvents: 'none',
            transform: 'none',
          }}
        >
          <source src={activeVideo.mp4} type="video/mp4" />
        </video>
      </div>

      {/* Top-right label */}
      <span
        className="hero-corner"
        style={{
          position: 'absolute',
          top: '2rem',
          right: '4rem',
          writingMode: 'vertical-lr',
          fontFamily: 'var(--font-body)',
          fontSize: '0.58rem',
          letterSpacing: '0.3em',
          color: 'var(--dim)',
          textTransform: 'uppercase',
          userSelect: 'none',
          zIndex: 4,
        }}
      >
        INDIA
      </span>

      {/*
        Hero copy — constrained to left ~58% so headline never
        floods into the sculpture zone. CTAs live beneath the paragraph,
        in the same left column, not split to the right.
      */}
      <div
        className="hero-copy"
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 'min(58vw, 860px)',
          pointerEvents: 'none',
        }}
      >
        {/* Eyebrow */}
        <div
          className="animate-reveal"
          style={{ overflow: 'hidden', animationDelay: '0.1s', marginBottom: '1.5rem', pointerEvents: 'auto' }}
        >
          <span className="label-tag">DIGITAL SYSTEMS STUDIO — INDIA — EST. 2025</span>
        </div>

        {/* Headline — two spans, single h1 */}
        <h1
          className="animate-reveal hero-headline"
          style={{
            margin: '0 0 2.8rem',
            padding: 0,
            animationDelay: '0.2s',
            pointerEvents: 'auto',
          }}
        >
          <span className="hero-title-primary">
            Building systems
          </span>
          <span className="hero-title-accent">
            that work.
          </span>
        </h1>

        {/* Supporting paragraph */}
        <div style={{ overflow: 'hidden', marginBottom: '2.4rem', pointerEvents: 'auto' }}>
          <p
            className="animate-reveal hero-sub"
            style={{ animationDelay: '0.45s' }}
          >
            Web, search, automation and brand systems designed to make businesses
            easier to find, choose and operate.
          </p>
        </div>

        {/* CTAs — beneath paragraph, left-aligned */}
        <div
          className="hero-ctas"
          style={{
            display: 'flex',
            gap: '1.2rem',
            flexWrap: 'wrap',
            pointerEvents: 'auto',
          }}
        >
          <GlassButton
            variant="bold"
            className="animate-reveal"
            style={{ animationDelay: '0.6s' }}
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
            className="animate-reveal"
            style={{ animationDelay: '0.7s' }}
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

      {/* Bottom-left phone */}
      <span
        className="hero-corner"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '4rem',
          writingMode: 'vertical-lr',
          fontFamily: 'var(--font-body)',
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          color: 'var(--dim)',
          zIndex: 3,
        }}
      >
        +91 79956 17374
      </span>

      {/* Scroll indicator */}
      <div
        className="hero-corner"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.5rem',
            letterSpacing: '0.4em',
            color: 'var(--dim)',
            textTransform: 'uppercase',
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(to bottom, var(--cobalt), transparent)',
            animation: 'scaleYPulse 2s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        /* ── Headline spans ── */
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
          /* Solid cobalt — no outline, fully readable */
          color: var(--cobalt2);
        }

        /* ── Supporting copy ── */
        .hero-sub {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.1vw, 1.15rem);
          font-weight: 300;
          line-height: 1.6;
          color: rgba(255,255,255,0.82);
          max-width: 500px;
          margin: 0;
        }

        /* ── Scroll pulse ── */
        @keyframes scaleYPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.8; }
          50%       { transform: scaleY(0.6); opacity: 0.3; }
        }

        /* ── 1024–1440px ── */
        @media (max-width: 1280px) {
          .hero-aperture {
            width: clamp(440px, 46vw, 780px) !important;
            height: clamp(440px, 68vh, 720px) !important;
          }
        }

        /* ── Tablet 768–1023px ── */
        @media (max-width: 1023px) and (min-width: 768px) {
          .hero-copy {
            max-width: 62vw !important;
          }
          .hero-aperture {
            width: clamp(380px, 42vw, 580px) !important;
            height: clamp(380px, 62vh, 620px) !important;
          }
        }

        /* ── Mobile < 768px ── */
        @media (max-width: 767px) {
          .hero-outer  { padding: 0 1.5rem 4rem !important; }
          .hero-copy   { max-width: 100% !important; }
          .hero-corner { display: none !important; }
          .hero-ctas   { gap: 1rem !important; }

          .hero-title-primary {
            font-size: clamp(2.8rem, 9.5vw, 4.8rem) !important;
          }
          .hero-title-accent {
            font-size: clamp(2.5rem, 8.5vw, 4.3rem) !important;
          }

          /* Portrait video — cover is correct here, sculpture fills frame */
          .hero-aperture {
            width: 86vw !important;
            height: 50vh !important;
            top: 5vh !important;
            right: -6vw !important;
          }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .hero-aperture video { display: none !important; }
        }
      `}</style>
    </main>
  )
}
