'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const elRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = elRef.current
    const txt = textRef.current
    if (!el || !txt) return

    // Only run on pointer-fine devices
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    // Check for reduced motion preference
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionMq.matches) return

    let mouseX = -100
    let mouseY = -100

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Don't show cursor over text areas
      const target = e.target as Element
      if (target.tagName === 'P' || target.tagName === 'SPAN' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3') {
        el.style.opacity = '0'
        return
      }
      
      gsap.to(el, {
        x: mouseX - 6,
        y: mouseY - 6,
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto'
      })
      el.style.opacity = '0.7'
    }

    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element
      const target = t.closest('a, button, [data-cursor-text]')
      
      if (target) {
        const customText = target.getAttribute('data-cursor-text')
        
        if (customText) {
          txt.innerText = customText
          gsap.to(el, { scale: 2.5, duration: 0.25, ease: 'power3.out' })
          gsap.to(txt, { opacity: 1, scale: 0.35, duration: 0.2 })
        } else {
          gsap.to(el, { scale: 1.8, duration: 0.25, ease: 'power3.out' })
          gsap.to(txt, { opacity: 0, duration: 0.2 })
        }
      }
    }

    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-cursor-text]')) {
        gsap.to(el, { scale: 1, duration: 0.25, ease: 'power3.out' })
        gsap.to(txt, { opacity: 0, duration: 0.2 })
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <div 
      ref={elRef}
      id="revolq-cursor" 
      aria-hidden="true" 
      style={{ 
        opacity: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '12px',
        height: '12px',
        background: '#fff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        willChange: 'transform'
      }}
    >
      <span 
        ref={textRef}
        style={{ 
          color: '#000', 
          fontSize: '9px', 
          fontWeight: 'bold', 
          opacity: 0, 
          letterSpacing: '0.05em',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}
