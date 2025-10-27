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
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '636736502725672');
              fbq('track', 'PageView');
            `,
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=636736502725672&ev=
            PageView&noscript=1"
                    />
                </noscript>
            </head>
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
