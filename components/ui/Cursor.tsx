'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const el = document.getElementById('revolq-cursor')
    if (!el) return

    // Only run on pointer-fine devices
    const mq = window.matchMedia('(pointer: fine)')
    if (!mq.matches) return

    let mouseX = -100
    let mouseY = -100
    let scale = 1

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      el.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px) scale(${scale})`
      el.style.opacity = '1'
    }

    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-magnetic]')) {
        scale = 3
        el.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px) scale(3)`
      }
    }

    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [data-magnetic]')) {
        scale = 1
        el.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px) scale(1)`
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <div id="revolq-cursor" aria-hidden="true" style={{ opacity: 0 }} />
}
