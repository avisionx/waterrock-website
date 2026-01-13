import "server-only"

import { CheckIcon, XIcon } from "lucide-react"

import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.cancellation.title,
}

export default function CancellationPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.cancellation.title}
                    subtitle={CONTENT.cancellation.subtitle}
                />

                <div class="rounded-2xl bg-primary/5 px-6 py-6 md:text-lg">
                    <ul className="space-y-3 text-black/70">
                        <li className="flex items-start gap-2">
                            <span>
                                <CheckIcon className="mt-0.5 size-6 text-green-600" />
                            </span>
                            <p>
                                <b>100%</b> payment of total amount is necessary
                                for confirmation of booking
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>
                                <CheckIcon className="mt-0.5 size-6 text-green-600" />
                            </span>
                            <p>
                                <b>80%</b> amount is refundable <b>7 days</b>{" "}
                                prior to check-in time
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>
                                <CheckIcon className="mt-0.5 size-6 text-green-600" />
                            </span>
                            <p>
                                <b>50%</b> amount is refundable <b>5 days</b>{" "}
                                prior to check-in time
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>
                                <XIcon className="mt-0.5 size-6 text-red-600" />
                            </span>
                            <p>
                                No reschedules or refunds will be allowed less
                                than <b>5 days</b> of check-in time
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
