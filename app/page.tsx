import Preloader from '@/components/sections/home/Preloader'
import LiquidBg from '@/components/sections/home/LiquidBg'
import Hero from '@/components/sections/home/Hero'
import ServicesIndex from '@/components/sections/home/ServicesIndex'
import WorkPreview from '@/components/sections/home/WorkPreview'
import AutomationSection from '@/components/sections/home/AutomationSection'
import PricingSection from '@/components/sections/home/PricingSection'
import TeamSection from '@/components/sections/home/TeamSection'
import CTASection from '@/components/sections/home/CTASection'
import LiquidBoundary from '@/components/ui/LiquidBoundary'

export default function HomePage() {
  return (
    <>
      <Preloader />
      <LiquidBg />
      
      <LiquidBoundary className="bg-black">
        <Hero />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-zinc-950">
        <ServicesIndex />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-black">
        <WorkPreview />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-zinc-950">
        <AutomationSection />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-black">
        <PricingSection />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-zinc-950">
        <TeamSection />
      </LiquidBoundary>
      
      <LiquidBoundary className="bg-black">
        <CTASection />
      </LiquidBoundary>
    </>
  )
}


