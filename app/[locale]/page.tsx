import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import CoursesSection from '@/components/home/CoursesSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import PricingSection from '@/components/home/PricingSection'
import CTASection from '@/components/home/CTASection'
import Header from '@/components/home/Header'

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
