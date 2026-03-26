'use client'

import { useEffect } from 'react'

export default function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById('progress-bar')
    if (!bar) return

    const onScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const pct = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0
      bar.style.width = `${pct}%`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div id="progress-bar" aria-hidden="true" />
}
