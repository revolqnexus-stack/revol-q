'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollProvider() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) {
      // Inner pages: keep at-hero so the liquid blob (homepage-only) stays hidden
      document.body.classList.add('at-hero')
      return
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        document.body.classList.remove('at-hero')
      } else {
        document.body.classList.add('at-hero')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.add('at-hero')
    }
  }, [isHome])

  return null
}
