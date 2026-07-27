import { useEffect, useRef, useState } from 'react'

interface UseMobileRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  enabled?: boolean
}

export function useMobileReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseMobileRevealOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = '0px',
    once = true,
    enabled = true,
  } = options

  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    // Check for reduced motion — show immediately, no animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(element)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, once, enabled])

  return { ref, isVisible }
}
