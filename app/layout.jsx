import "server-only"

import { GoogleAnalytics } from "@next/third-parties/google"
import { Inter, Playfair_Display } from "next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import WhatsAppButton from "@/components/WhatsAppButton"

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
                {/* Google tag (gtag.js) */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17880455873"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17880455873');
            `,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KG28CSM6');
            `,
                    }}
                />
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
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vvj8znly5u");
            `,
                    }}
                />
            </head>
            <GoogleAnalytics gaId="G-YEZC0TZ3ZM" />
            <body
                className={`relative ${fontHeading.variable} ${fontBody.variable}`}
            >
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KG28CSM6"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                <Header />
                {children}
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    )
}
