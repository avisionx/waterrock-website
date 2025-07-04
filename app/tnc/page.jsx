import "server-only"

import { CheckIcon, XIcon } from "lucide-react"

import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.tnc.title,
}

export default function TncPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.tnc.title}
                    subtitle={CONTENT.tnc.subtitle}
                />
                <div class="rounded-2xl bg-primary/5 px-6 py-6 md:text-lg">
                    <ul className="list-disc space-y-3 pl-5 text-black/70">
                        <li>
                            <b>Check-in time:</b> 2:00 PM
                        </li>
                        <li>
                            <b>Check-out time:</b> 11:00 AM
                        </li>
                        <li>
                            Check-in and check-out time refers to villa access.
                            Guests may stay an additional 1–2 hours in the café
                            or property vicinity.
                        </li>
                        <li>
                            Valid government-issued photo ID is mandatory at
                            check-in. Accepted IDs: Driving License, Aadhar
                            Card, Passport, Voter ID.{" "}
                            <b>PAN card is not accepted.</b>
                        </li>
                        <li>
                            Please inform in advance if pets are accompanying
                            you.
                        </li>
                        <li>
                            Kitchen and service are unavailable between 11:30 PM
                            and 7:00 AM.
                        </li>
                        <li>
                            Jio and BSNL networks work in patches. The property
                            is an internet-free zone with limited Wi-Fi
                            available in the café.
                        </li>
                        <li>
                            Each guest receives 1L packaged drinking water.
                            Extra water can be purchased if needed.
                        </li>
                        <li>
                            Rooms are sanitized before check-in. Linen change
                            and room cleaning is done once every three nights.
                            Trash is removed daily.
                        </li>
                        <li>
                            WaterRock does not allow or promote alcohol or drug
                            use. Guests are solely responsible for any illegal
                            substances in their possession.
                        </li>
                        <li>
                            Inappropriate guest behavior may result in action by
                            WaterRock management after investigation.
                        </li>
                        <li>
                            Guests are liable for any property damage. Vomiting
                            inside rooms: ₹2000, outside (lawns/café): ₹1000.
                        </li>
                        <li>
                            Guests must maintain cleanliness—no spitting,
                            cigarette butts, or litter. Spills on sofas/carpets
                            incur a ₹3500 cleaning charge.
                        </li>
                        <li>
                            Being in a remote location, minor plumbing or
                            electrical issues may occur. Repairs may take time.
                        </li>
                        <li>
                            The area is surrounded by nature. Encounters with
                            insects, rodents, or reptiles, though rare, are
                            possible.
                        </li>
                        <li>
                            Backup power is available via inverter in villas and
                            a limited generator in the café. Heavy appliances
                            won&apos;t work during outages.
                        </li>
                        <li>
                            WaterRock activities are for entertainment. Guests
                            are responsible for their own safety.
                        </li>
                        <li>
                            WaterRock may contact guests for feedback to improve
                            service.
                        </li>
                        <li>
                            Loud music is prohibited after 11:00 PM. Guests may
                            play music inside their villas.
                        </li>
                        <li>
                            First aid kit includes essential medicines and ASVs.
                            Contact staff in case of emergencies.
                        </li>
                        <li>
                            All meals are served at our café (100–350 meters
                            from villas).
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                                <li>
                                    <b>Dinner (veg/non-veg):</b> 9:30 PM – 11:30
                                    PM
                                </li>
                                <li>
                                    <b>Breakfast:</b> 9:00 AM – 10:30 AM
                                </li>
                            </ul>
                        </li>
                        <li>
                            Buffet meals are served at fixed times. Adjustments
                            for medical or age-related needs are at management’s
                            discretion.
                        </li>
                        <li>
                            Dam water levels reduce during summer, but guests
                            can still enjoy mountain views, river streams,
                            sunrises, and starry nights.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
