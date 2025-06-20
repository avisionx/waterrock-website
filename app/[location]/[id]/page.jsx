import 'server-only'

import { STAY_DETAILS, STAY_OPTIONS } from '@/app/constants'

export async function generateStaticParams() {
    const paths = STAY_OPTIONS.flatMap(({ location, options }) =>
        options.map(({ id }) => ({ location, id }))
    )
    return paths
}

export async function generateMetadata({ params }) {
    const { id, location } = await params
    const STAY = STAY_DETAILS[location][id]
    return {
        title: `${STAY.name} | ${STAY.location.title}`,
    }
}

export default async function StayPage({ params }) {
    const { id, location } = await params
    const STAY = STAY_DETAILS[location][id]

    return (
        <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
            <h1>{JSON.stringify(STAY)}</h1>
        </section>
    )
}
