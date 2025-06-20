'use client'

import Link from 'next/link'

import FancyButton from '@/components/FancyButton'

export default function CTA() {
    return (
        <section className="pb-24">
            <div className="mx-auto max-w-9xl px-4 py-4 text-center">
                <p className="font-heading text-5xl text-black">
                    Your <span className="text-primary">Journey</span>{' '}
                    Shouldn&apos;t End Here.
                </p>
                <p className="mt-4 text-black/80 md:text-lg">
                    Experience Nature with Comfort — Reserve Your Stay Today
                </p>
                <div className="mt-8 flex justify-center gap-4 pt-2">
                    <Link
                        href="/#our-stays"
                        className="inline-flex h-[44px] items-center justify-center rounded-full bg-secondary px-6 py-1 font-medium text-white transition-all hover:bg-secondary/90"
                    >
                        Explore Stays
                    </Link>
                    <FancyButton
                        href="https://booking.posease.com/hotel/booking/67b3ba149fd46d2f59fcccc1"
                        target="_blank"
                        text="Book Now"
                    />
                </div>
            </div>
        </section>
    )
}
