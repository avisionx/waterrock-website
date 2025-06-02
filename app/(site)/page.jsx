import About from '@/components/About'
import Blog from '@/components/Blog'
import Brands from '@/components/Brands'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Feature from '@/components/Features'
import FeaturesTab from '@/components/FeaturesTab'
import FunFact from '@/components/FunFact'
import Hero from '@/components/Hero'
import Integration from '@/components/Integration'
import Pricing from '@/components/Pricing'
import Testimonial from '@/components/Testimonial'

export const metadata = {
    title: 'Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate',

    // other metadata
    description: 'This is Home for Solid Pro',
}

export default function Home() {
    return (
        <main>
            <Hero />
            <Brands />
            <Feature />
            <About />
            <FeaturesTab />
            <FunFact />
            <Integration />
            <CTA />
            <FAQ />
            <Testimonial />
            <Pricing />
            <Contact />
            <Blog />
        </main>
    )
}
