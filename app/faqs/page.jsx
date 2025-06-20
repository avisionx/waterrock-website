import 'server-only'

import AllFAQs from '@/components/AllFAQs'
import PageTitle from '@/components/PageTitle'

export const metadata = {
    title: 'FAQs',
}

export default function FaqsPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title="FAQs"
                    subtitle="Find answers to the most common questions about Waterrock."
                />
                <AllFAQs />
            </section>
        </>
    )
}
