import Preloader from '@/components/sections/home/Preloader'
import Hero from '@/components/sections/home/Hero'
import CredibilityRail from '@/components/sections/home/CredibilityRail'
import WorkPreview from '@/components/sections/home/WorkPreview'
import ServicesIndex from '@/components/sections/home/ServicesIndex'
import AutomationSection from '@/components/sections/home/AutomationSection'

import PricingSection from '@/components/sections/home/PricingSection'
import TeamSection from '@/components/sections/home/TeamSection'
import CTASection from '@/components/sections/home/CTASection'
import LiquidBoundary from '@/components/ui/LiquidBoundary'

export default function HomePage() {
  return (
    <>
      <Preloader />
      
      <LiquidBoundary className="bg-black">
        <Hero />
      </LiquidBoundary>
      
      {/* Credibility rail after hero */}
      <CredibilityRail />
      
      {/* Proof before features: Work before Systems */}
      <LiquidBoundary className="bg-zinc-950">
        <WorkPreview />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-black">
        <ServicesIndex />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-zinc-950">
        <AutomationSection />
      </LiquidBoundary>
      
      
      
      <LiquidBoundary className="bg-zinc-950">
        <PricingSection />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-black">
        <TeamSection />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-zinc-950">
        <CTASection />
      </LiquidBoundary>
    </>
  )
}

