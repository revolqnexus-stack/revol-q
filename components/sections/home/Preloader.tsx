'use client'

import { useState, useEffect } from 'react'
import DecryptedText from '@/components/ui/DecryptedText'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [curtainActive, setCurtainActive] = useState(false)
  const [bootingComplete, setBootingComplete] = useState(false)

  useEffect(() => {
    // Skip on repeat visits in same session
    if (typeof window !== 'undefined' && sessionStorage.getItem('revolq_v')) {
      setVisible(false)
      return
    }
  }, [])

  // Trigger curtain slide ONLY after booting sequence is complete
  useEffect(() => {
    if (!bootingComplete) return

    // Tighter pause after decryption finishes
    const slideTimeout = setTimeout(() => {
      setCurtainActive(true)
    }, 300)

    // Remove from DOM after animation completes
    const removeTimeout = setTimeout(() => {
      setVisible(false)
      if (typeof window !== 'undefined') sessionStorage.setItem('revolq_v', '1')
    }, 1400)

    return () => {
      clearTimeout(slideTimeout)
      clearTimeout(removeTimeout)
    }
  }, [bootingComplete])

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
        gap: '0.8rem', // Tighter gap for the logo/label stack
        transform: curtainActive ? 'translateY(-100%)' : 'translateY(0)',
        transition: curtainActive ? 'transform 1.1s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
        willChange: 'transform',
      }}
    >
      <div style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 400,
            letterSpacing: '0.8em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            textAlign: 'center',
            paddingLeft: '0.8em', // Compensate for trailing letter spacing
          }}
        >
          <DecryptedText 
            text="REVOLQ" 
            speed={30} 
            maxIterations={8}
            onComplete={() => setBootingComplete(true)}
          />
        </h1>
      </div>

      <div
        style={{
          overflow: 'hidden',
          marginBottom: '1.2rem'
        }}
      >
        <span
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--dim)',
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
          }}
        >
          <DecryptedText 
            text="DIGITAL AGENCY — KERALA — INDIA" 
            speed={20} 
            maxIterations={10}
          />
        </span>
      </div>

      {/* Cobalt underline draw */}
      <div
        style={{
          height: '1px',
          background: 'var(--cobalt)',
          width: '6rem',
          transformOrigin: 'center',
          animation: 'drawIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          animationDelay: '0.3s',
          opacity: 0,
        }}
      />

      <style>{`
        @keyframes drawIn {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
