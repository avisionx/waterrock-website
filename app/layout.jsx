import "server-only"

import { GoogleAnalytics } from "@next/third-parties/google"
import { Inter, Playfair_Display } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"

import { CONTENT } from "@/app/constants"

import "./globals.css"

const fontHeading = Playfair_Display({ subsets: ["latin"] })
const fontBody = Inter({ subsets: ["latin"] })

export const metadata = {
    title: {
        template: `%s | ${CONTENT.seo.title}`,
        default: CONTENT.seo.title,
    },
    description: CONTENT.seo.description,
    keywords: CONTENT.seo.keywords,
    openGraph: {
        title: CONTENT.seo.title,
        description: CONTENT.seo.description,
        url: "https://waterrock.in",
        siteName: "WaterRock.in",
        images: [
            {
                url: "https://waterrock.in/waterrock-og.png",
                width: 1200,
                height: 630,
                alt: "WaterRock.in",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: CONTENT.seo.title,
        description: CONTENT.seo.description,
        images: ["https://waterrock.in/waterrock-og.png"],
        creator: "@waterrock",
    },
    metadataBase: new URL("https://waterrock.in"),
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleAnalytics gaId="G-YEZC0TZ3ZM" />
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
