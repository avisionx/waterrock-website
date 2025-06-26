import "server-only"

import { CalendarDays, CheckCircle2, Clock, Info, Users } from "lucide-react"
import Image from "next/image"

import CTA from "@/components/CTA"
import FancyButton from "@/components/FancyButton"
import PageTitle from "@/components/PageTitle"

import { STAY_DETAILS, STAY_OPTIONS, WHATSAPP_URL } from "@/app/constants"

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
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle title={STAY.name} subtitle={STAY.shortDescription} />
                <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
                    <Image
                        src={`/images/locations/${location}/${id}.webp`}
                        width={400}
                        height={400}
                        alt=""
                        className="w-full rounded-2xl"
                        priority
                    />
                    <div>
                        <div className="mb-12 space-y-8 text-black/70">
                            {STAY.description}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-4">
                                    <Clock className="size-6 text-secondary" />
                                    <span>
                                        <b>Check-in:</b> {STAY.checkin}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CalendarDays className="size-6 text-secondary" />
                                    <span>
                                        <b>Check-out:</b> {STAY.checkout}
                                    </span>
                                </div>
                                <div className="col-span-2 flex items-center gap-4">
                                    <Users className="size-6 text-primary" />
                                    <span>
                                        <b>Capacity:</b> {STAY.pax}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <FancyButton
                            href={WHATSAPP_URL}
                            target="_blank"
                            text="Book Now"
                        />
                        <p className="mt-3 text-sm font-medium text-black/70">
                            <span className="text-red-500">*</span> {STAY.note}
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
                    {STAY.inclusions.length && (
                        <div>
                            <div className="flex items-center gap-4">
                                <CheckCircle2 className="size-6 text-green-500" />
                                <b>Inclusions</b>
                            </div>
                            <ul className="mt-4 grid list-inside list-disc grid-cols-1 gap-2 text-black/60 sm:grid-cols-2">
                                {STAY.inclusions.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {STAY.considerations.length && (
                        <div>
                            <div className="flex items-center gap-4">
                                <Info className="size-6 text-blue-500" />
                                <b>Things to Consider</b>
                            </div>
                            <ul className="mt-4 grid list-inside list-disc grid-cols-1 gap-2 text-black/60 sm:grid-cols-2">
                                {STAY.considerations.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>
            <CTA />
        </>
    )
}
