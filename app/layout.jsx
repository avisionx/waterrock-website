import 'server-only'

import { Inter, Playfair_Display } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Lines from '@/components/Lines'
import ScrollToTop from '@/components/ScrollToTop'

import './globals.css'

const fontHeading = Playfair_Display({ subsets: ['latin'] })
const fontBody = Inter({ subsets: ['latin'] })

export const metadata = {
    title: {
        template: `%s | WaterRock - Luxe Nature Retreat`,
        default: 'WaterRock - Luxe Nature Retreats',
    },
    description:
        'Discover WaterRock - Luxury nature retreats featuring private villas, A-frame cabins, glamping tents, kayaking, bonfires, and much more.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`relative ${fontHeading.variable} ${fontBody.variable}`}
            >
                <Lines />
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    )
}
