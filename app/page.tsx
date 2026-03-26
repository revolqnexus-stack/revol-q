import Preloader from '@/components/sections/home/Preloader'
import LiquidBg from '@/components/sections/home/LiquidBg'
import Hero from '@/components/sections/home/Hero'
import ServicesIndex from '@/components/sections/home/ServicesIndex'
import WorkPreview from '@/components/sections/home/WorkPreview'
import AutomationSection from '@/components/sections/home/AutomationSection'
import PricingSection from '@/components/sections/home/PricingSection'
import TeamSection from '@/components/sections/home/TeamSection'
import CTASection from '@/components/sections/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Preloader />
      <LiquidBg />
      <Hero />
      <ServicesIndex />
      <WorkPreview />
      <AutomationSection />
      <PricingSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
