import { useState, useEffect } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [curtainActive, setCurtainActive] = useState(false)

  useEffect(() => {
    // Skip on repeat visits in same session
    if (typeof window !== 'undefined' && sessionStorage.getItem('revolq_v')) {
      setVisible(false)
      return
    }

    // Trigger curtain slide after 1.6s
    const t1 = setTimeout(() => setCurtainActive(true), 1600)
    // Remove from DOM after animation completes
    const t2 = setTimeout(() => {
      setVisible(false)
      if (typeof window !== 'undefined') sessionStorage.setItem('revolq_v', '1')
    }, 2700)

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
            color: 'var(--dim)',
            display: 'block',
            fontFamily: 'var(--font-body)',
          }}
        >
          DIGITAL AGENCY · KERALA · INDIA
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
  )
}
