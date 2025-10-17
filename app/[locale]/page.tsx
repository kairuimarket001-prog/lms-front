import Footer from '@/components/Footer'
import CTASection from '@/components/home/CTASection'
import CoursesSection from '@/components/home/CoursesSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import Header from '@/components/home/Header'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import PricingSection from '@/components/home/PricingSection'
import StatsSection from '@/components/home/StatsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export const maxDuration = 30

export default async function Index() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col">
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <CoursesSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <PricingSection />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
