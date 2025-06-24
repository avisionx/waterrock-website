import 'server-only'

import { ArrowRightIcon, MapPinIcon, MouseIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import CTA from '@/components/CTA'
import FAQs from '@/components/FAQs'
import FancyButton from '@/components/FancyButton'
import FancyHeading from '@/components/FancyHeading'

import {
    ACTIVITIES,
    AMENITIES,
    STAY_OPTIONS,
    TESTIMONIALS,
    WHY_CHOOSE_WATERROCK,
} from '@/app/constants'
import SHOWCASE_IMG_1 from '@/assets/landing/showcase-1.webp'
import SHOWCASE_IMG_2 from '@/assets/landing/showcase-2.webp'
import SHOWCASE_IMG_3 from '@/assets/landing/showcase-3.webp'
import SHOWCASE_IMG_4 from '@/assets/landing/showcase-4.webp'
import SHOWCASE_IMG_5 from '@/assets/landing/showcase-5.webp'
import SHOWCASE_IMG_6 from '@/assets/landing/showcase-6.webp'
import SHOWCASE_IMG_7 from '@/assets/landing/showcase-7.webp'

export default function HomePage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
                <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-3">
                    <div className="space-y-6">
                        <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl">
                            Escape, <br />
                            <span className="text-primary">Explore</span> &amp;
                            <span className="font-heading italic text-secondary">
                                Experience
                            </span>
                            <br />
                            WaterRock.
                        </h1>
                        <p className="text-black/80 md:text-lg">
                            Discover the magic of curated nature stays near Pune
                            & Mumbai.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link
                                href="/#our-stays"
                                className="inline-flex h-[44px] items-center justify-center rounded-full bg-secondary px-6 py-1 font-medium text-white transition-all hover:bg-secondary/90"
                            >
                                Explore Stays
                            </Link>
                            <FancyButton
                                href="https://api.whatsapp.com/message/QCBAHDST3WKQD1?autoload=1&app_absent=0"
                                target="_blank"
                                text="Book Now"
                            />
                        </div>
                        <div className="flex items-center gap-2 pt-6 text-sm text-black/30">
                            <MouseIcon className="animate animate-bounce" />
                            Scroll to explore your next soulful escape
                        </div>
                    </div>
                    <div className="grid h-full grid-cols-4 grid-rows-4 gap-3 lg:col-span-2">
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-accent">
                            <Image
                                src={SHOWCASE_IMG_6}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="col-span-2 row-span-2 overflow-hidden rounded-md bg-primary">
                            <video
                                src="/videos/waterrock-bhor-showcase.mp4"
                                poster="/images/waterrock-bhor-showcase-poster.webp"
                                autoPlay
                                loop
                                muted
                                controls={false}
                                playsInline
                                className="h-full w-full rounded-md object-cover"
                            />
                        </div>
                        <div className="col-span-1 row-span-3 overflow-hidden rounded-md bg-accent">
                            <Image
                                src={SHOWCASE_IMG_1}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="col-span-1 row-span-2 overflow-hidden rounded-md bg-white">
                            <Image
                                src={SHOWCASE_IMG_2}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                            <Image
                                src={SHOWCASE_IMG_5}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="col-span-1 row-span-2 overflow-hidden rounded-md bg-white">
                            <Image
                                src={SHOWCASE_IMG_3}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="col-span-2 row-span-1 max-h-44 overflow-hidden rounded-md bg-secondary">
                            <Image
                                src={SHOWCASE_IMG_7}
                                alt=""
                                className="h-full w-full object-cover object-top"
                            />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                            <Image
                                src={SHOWCASE_IMG_4}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-24" id="our-stays">
                <div className="mx-auto max-w-9xl px-4">
                    <FancyHeading text="Our Stays" />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                        From hilltops to lakesides, discover thoughtfully
                        crafted stays across India — each echoing
                        WaterRock&apos;s promise of peace, comfort, and nature.
                    </p>
                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {STAY_OPTIONS.map(({ location, title, options }) =>
                            options.length > 0 ? (
                                options.map(({ id, name }) => (
                                    <div
                                        className="group relative overflow-hidden rounded-2xl shadow-sm"
                                        key={id}
                                    >
                                        <Link href={`/${location}/${id}`}>
                                            <Image
                                                src={`/images/locations/${location}/${id}.webp`}
                                                width={512}
                                                height={512}
                                                className="h-full w-full object-cover transition-all group-hover:scale-110"
                                                alt=""
                                            />
                                            <div className="z-1 absolute top-0 flex h-full w-full flex-col bg-black/10 from-black/40 to-primary/30 px-6 py-6 text-white transition-all group-hover:bg-gradient-to-br group-hover:text-accent">
                                                <p className="mb-0.5 max-w-[300px] font-heading text-2xl font-extralight tracking-wide">
                                                    {name}
                                                </p>
                                                <div className="mt-auto flex items-end">
                                                    <p className="flex items-center gap-2 transition-all group-hover:scale-105">
                                                        <MapPinIcon className="size-6" />{' '}
                                                        {title}
                                                    </p>
                                                    <p className="ml-auto flex items-center gap-2 text-sm transition-all group-hover:scale-110">
                                                        Book Now{' '}
                                                        <ArrowRightIcon className="size-4" />
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div
                                    className="group relative overflow-hidden rounded-2xl shadow-sm"
                                    key={title}
                                >
                                    <Image
                                        src={`/images/locations/placeholder.webp`}
                                        width={512}
                                        height={512}
                                        className="h-full w-full object-cover transition-all group-hover:scale-110"
                                        alt=""
                                    />
                                    <div className="z-1 absolute top-0 flex h-full w-full cursor-not-allowed flex-col bg-gradient-to-br from-black/40 to-primary/30 px-6 py-6 text-white/90">
                                        <p className="mb-0.5 max-w-[300px] font-heading text-2xl font-extralight tracking-wide">
                                            Khopoli - Being Curated!
                                        </p>
                                        <div className="mt-auto flex items-end">
                                            <p className="flex items-center gap-2 transition-all group-hover:scale-105">
                                                <MapPinIcon className="size-6" />{' '}
                                                {title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
            <section className="pb-24" id="activities">
                <div className="mx-auto max-w-9xl px-4">
                    <FancyHeading text="Activities & Amenities" />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                        Dive into a world of adventure and leisure with
                        handpicked activities that spark joy, energy, and
                        connection for all.
                    </p>
                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {ACTIVITIES.map(({ name, icon: Icon, asterik }) => (
                            <div
                                key={name}
                                className="flex items-center gap-3 text-sm font-medium text-black/80"
                            >
                                <Icon className="text-primary" />{' '}
                                <p>
                                    {name}
                                    {asterik && (
                                        <span className="text-red-500">*</span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p
                        className="mt-5 text-sm font-medium text-black/70"
                        id="amenities"
                    >
                        <span className="text-red-500">*</span> Water activities
                        in Dam are seasonal. Please ask for the same.{' '}
                    </p>
                    <hr className="mx-auto mt-10 max-w-32" />
                    <p className="mx-auto mt-10 max-w-3xl text-center text-black/70 md:text-lg">
                        Experience comfort redefined with premium amenities
                        designed to elevate your stay—luxurious, thoughtful, and
                        crafted for ultimate relaxation.
                    </p>
                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                        {AMENITIES.map(({ name, icon: Icon }) => (
                            <div
                                key={name}
                                className="flex items-center gap-3 text-sm font-medium text-black/80"
                            >
                                <div>
                                    <Icon className="text-secondary" />
                                </div>{' '}
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="mx-auto max-w-9xl px-4">
                    <div className="grid gap-8 rounded-2xl bg-secondary/20 px-8 py-12 md:grid-cols-3 md:gap-16 md:px-16 md:py-16">
                        <div>
                            <p className="font-heading text-3xl">
                                Why Choose WaterRock?
                            </p>
                            <p className="mt-2 text-black/70 md:text-lg">
                                Break free from the ordinary — escape to
                                handpicked stays, soulful experiences, and
                                genuine hospitality — all wrapped in
                                nature&apos;s hug.
                            </p>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                            {WHY_CHOOSE_WATERROCK.map((text, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start space-x-4"
                                >
                                    <span className="font-heading text-5xl font-semibold text-black/20">
                                        {idx + 1}
                                    </span>
                                    <p className="text-black/80 md:text-lg">
                                        {text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="mx-auto max-w-9xl px-4">
                    <FancyHeading text="Testimonials" />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                        Hear it from the explorers — honest experiences that
                        reflect the magic, comfort, and charm of every WaterRock
                        stay.
                    </p>
                    <div className="no-scrollbar mt-12 overflow-x-auto xl:overflow-visible">
                        <div className="flex grid-cols-2 gap-4 xl:grid xl:grid-cols-4 xl:gap-6">
                            {TESTIMONIALS.map((t, idx) => (
                                <div
                                    key={idx}
                                    className="max-w-[300px] shrink-0 rounded-2xl bg-primary/5 p-6 xl:max-w-[500px]"
                                >
                                    <div className="mb-2 flex items-center">
                                        <div className="mr-4 size-12 rounded-full bg-secondary" />
                                        <div>
                                            <p className="font-heading font-medium text-black/80 md:text-lg">
                                                {t.name}
                                            </p>
                                            <p className="text-sm text-black/70">
                                                {t.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-3 text-primary">
                                        {'★'.repeat(t.rating)}
                                        {'☆'.repeat(5 - t.rating)}
                                    </div>
                                    <p className="text-black/80">
                                        &quot;{t.quote}&quot;
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="mx-auto max-w-9xl px-4">
                    <div className="grid gap-6 md:grid-cols-3 md:gap-32">
                        <div>
                            <p className="bg-gradient-to-br from-primary to-black/80 bg-clip-text font-heading text-4xl text-transparent">
                                FAQs
                            </p>
                            <p className="mt-2 text-black/70 md:text-lg">
                                Answers to some questions you might have.
                            </p>
                            <Link
                                href="/faqs"
                                className="mt-4 inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-accent px-6 py-1 font-medium text-black transition-all hover:bg-accent/50 hover:text-black/70"
                            >
                                View All <ArrowRightIcon className="size-4" />
                            </Link>
                        </div>
                        <div className="space-y-4 md:col-span-2">
                            <FAQs />
                        </div>
                    </div>
                </div>
            </section>
            <CTA />
        </>
    )
}
