import "server-only"

import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.privacy.title,
}

export default function PrivacyPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.privacy.title}
                    subtitle={CONTENT.privacy.subtitle}
                />
                <div className="rounded-2xl bg-primary/5 px-6 py-6 md:text-lg">
                    <ul className="list-disc space-y-3 pl-5 text-black/70">
                        <li>
                            WaterRock values your privacy and is committed to
                            safeguarding your personal information.
                        </li>
                        <li>
                            Personal data such as your name, contact number,
                            email ID, and government-issued ID is collected for
                            booking and verification purposes only.
                        </li>
                        <li>
                            We do not sell or share your personal information
                            with third-party advertisers or marketers.
                        </li>
                        <li>
                            Your information may be shared internally only with
                            staff responsible for check-in, stay experience, or
                            emergency support.
                        </li>
                        <li>
                            Communication related to bookings, feedback, or
                            essential updates may be sent to your registered
                            email or phone number.
                        </li>
                        <li>
                            Any payment data is processed securely via
                            third-party payment gateways. We do not store card
                            or UPI details on our servers.
                        </li>
                        <li>
                            Photos or videos captured at the property may be
                            used in promotional content only with explicit guest
                            consent.
                        </li>
                        <li>
                            Guests may request access to or deletion of their
                            personal data by contacting WaterRock’s support
                            team.
                        </li>
                        <li>
                            This privacy policy may be updated from time to
                            time. All changes will be reflected on this page.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
