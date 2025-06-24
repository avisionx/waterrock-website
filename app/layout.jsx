import "server-only"

import { Inter, Playfair_Display } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"

import { WEBSITE_SEO_DESCRIPTION, WEBSITE_SEO_TITLE } from "@/app/constants"

import "./globals.css"

const fontHeading = Playfair_Display({ subsets: ["latin"] })
const fontBody = Inter({ subsets: ["latin"] })

export const metadata = {
    title: {
        template: `%s | ${WEBSITE_SEO_TITLE}`,
        default: WEBSITE_SEO_TITLE,
    },
    description: WEBSITE_SEO_DESCRIPTION,
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`relative ${fontHeading.variable} ${fontBody.variable}`}
            >
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </body>
        </html>
    )
}
