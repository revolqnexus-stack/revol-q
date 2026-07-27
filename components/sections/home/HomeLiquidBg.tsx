'use client'

import { usePathname } from 'next/navigation'
import LiquidBg from './LiquidBg'

export default function HomeLiquidBg() {
  const pathname = usePathname()
  if (pathname !== '/') return null
  return <LiquidBg />
}
