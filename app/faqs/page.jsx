import "server-only"

import AllFAQs from "@/components/AllFAQs"
import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.faqs.title,
}

export default function FaqsPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.faqs.title}
                    subtitle={CONTENT.faqs.subtitle}
                />
                <AllFAQs />
            </section>
        </>
    )
}
