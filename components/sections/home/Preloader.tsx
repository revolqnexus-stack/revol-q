'use client'

import { useState, useEffect } from 'react'
import ColorBends from '@/components/ui/ColorBends'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [curtainActive, setCurtainActive] = useState(false)

  useEffect(() => {
    // Skip on repeat visits in same session
    if (typeof window !== 'undefined' && sessionStorage.getItem('revolq_v')) {
      setVisible(false)
      return
    }

    // Trigger curtain slide after 2.5s
    const t1 = setTimeout(() => setCurtainActive(true), 2500)
    // Remove from DOM after animation completes
    const t2 = setTimeout(() => {
      setVisible(false)
      if (typeof window !== 'undefined') sessionStorage.setItem('revolq_v', '1')
    }, 3800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        transform: curtainActive ? 'translateY(-100%)' : 'translateY(0)',
        transition: curtainActive ? 'transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
        willChange: 'transform',
      }}
    >
      {/* ColorBends background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}>
        <ColorBends
          colors={["#3e0eeb", "#2b07ac", "#1a38eb"]}
          rotation={45}
          speed={0.23}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent={false}
          autoRotate={-1}
        />
      </div>

      {/* Content on top */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="animate-reveal"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              animationDelay: '0.2s',
            }}
          >
            REVOLQ
          </h1>
        </div>

        <div
          className="animate-reveal"
          style={{
            overflow: 'hidden',
            animationDelay: '0.5s',
          }}
        >
          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              color: '#ffffff',
              display: 'block',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
            }}
          >
            DIGITAL SYSTEMS STUDIO · INDIA
          </span>
        </div>

        {/* Cobalt underline draw */}
        <div
          className="animate-reveal"
          style={{
            height: '1px',
            background: 'var(--cobalt)',
            width: '8rem',
            animationDelay: '0.7s',
          }}
        />
      </div>
    </div>
  )
}
