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

    let mouseX = -100
    let mouseY = -100

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      gsap.to(el, {
        x: mouseX - 8,
        y: mouseY - 8,
        duration: 0.1,
        ease: 'power2.out',
        overwrite: 'auto'
      })
      el.style.opacity = '1'
    }

    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element
      const target = t.closest('a, button, [data-cursor-text]')
      
      if (target) {
        const customText = target.getAttribute('data-cursor-text')
        
        if (customText) {
          txt.innerText = customText
          gsap.to(el, { scale: 4.5, duration: 0.3, ease: 'power3.out' })
          gsap.to(txt, { opacity: 1, scale: 0.25, duration: 0.2 })
        } else {
          gsap.to(el, { scale: 3, duration: 0.3, ease: 'power3.out' })
          gsap.to(txt, { opacity: 0, duration: 0.2 })
        }
      }
    }

    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-cursor-text]')) {
        gsap.to(el, { scale: 1, duration: 0.3, ease: 'power3.out' })
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
        width: '16px',
        height: '16px',
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
          fontSize: '10px', 
          fontWeight: 'bold', 
          opacity: 0, 
          letterSpacing: '0.05em',
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

