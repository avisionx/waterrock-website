import "server-only"

import {
    ArrowRightIcon,
    FullscreenIcon,
    MapPinIcon,
    MouseIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import CTA from "@/components/CTA"
import FAQs from "@/components/FAQs"
import FancyButton from "@/components/FancyButton"
import FancyHeading from "@/components/FancyHeading"
import VideoPlayer from "@/components/VideoPlayer"

import { CONTENT, STAY_OPTIONS, WHATSAPP_URL } from "@/app/constants"
import SHOWCASE_IMG_1 from "@/assets/landing/showcase-1.webp"
import SHOWCASE_IMG_2 from "@/assets/landing/showcase-2.webp"
import SHOWCASE_IMG_3 from "@/assets/landing/showcase-3.webp"
import SHOWCASE_IMG_4 from "@/assets/landing/showcase-4.webp"
import SHOWCASE_IMG_5 from "@/assets/landing/showcase-5.webp"
import SHOWCASE_IMG_6 from "@/assets/landing/showcase-6.webp"
import SHOWCASE_IMG_7 from "@/assets/landing/showcase-7.webp"

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
                            {CONTENT.homepage.hero.subtitle}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link
                                href="/#our-stays"
                                className="inline-flex h-[44px] items-center justify-center rounded-full bg-secondary px-6 py-1 font-medium text-white transition-all hover:bg-secondary/90"
                            >
                                Explore Stays
                            </Link>
                            <FancyButton
                                href={WHATSAPP_URL}
                                target="_blank"
                                text="Book Now"
                            />
                        </div>
                        <div className="flex items-center gap-2 pt-6 text-sm text-black/30">
                            <MouseIcon className="animate animate-bounce" />
                            {CONTENT.homepage.hero.scrollText}
                        </div>
                    </div>
                    <div className="grid h-full grid-cols-4 grid-rows-3 gap-3 lg:col-span-2">
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-accent">
                            <Image
                                src={SHOWCASE_IMG_6} // food
                                alt=""
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-md bg-primary">
                            <VideoPlayer
                                src="/videos/waterrock-bhor-showcase.mp4"
                                highres="/videos/waterrock-bhor-showcase-highres.mp4"
                                poster="/images/waterrock-bhor-showcase-poster.webp"
                                className="h-full w-full cursor-pointer rounded-md object-cover"
                            />
                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center px-4 py-2 text-white transition-all group-hover:bg-black/50">
                                <span className="text-xs transition-all">
                                    Immerse
                                </span>
                                <FullscreenIcon className="ml-auto size-3.5" />
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-accent">
                            <Image
                                src={SHOWCASE_IMG_3} // night house
                                alt=""
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-white">
                            <Image
                                src={SHOWCASE_IMG_2} // charm
                                alt=""
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="col-span-1 row-span-2 overflow-hidden rounded-md bg-accent">
                            <Image
                                src={SHOWCASE_IMG_1} // a frame
                                alt=""
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                            <Image
                                src={SHOWCASE_IMG_5} // boating
                                alt=""
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-white">
                            <Image
                                src={SHOWCASE_IMG_7} // night cafe
                                alt=""
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                        <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                            <Image
                                src={SHOWCASE_IMG_4} // sun house
                                alt=""
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-24" id="our-stays">
                <div className="mx-auto max-w-9xl px-4">
                    <FancyHeading text={CONTENT.homepage.stays.title} />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                        {CONTENT.homepage.stays.subtitle}
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
                                                priority
                                            />
                                            <div className="z-1 absolute top-0 flex h-full w-full flex-col bg-black/10 from-black/40 to-primary/30 px-6 py-6 text-white transition-all group-hover:bg-gradient-to-br group-hover:text-accent">
                                                <p className="mb-0.5 max-w-[300px] font-heading text-2xl font-extralight tracking-wide">
                                                    {name}
                                                </p>
                                                <div className="mt-auto flex items-end">
                                                    <p className="flex items-center gap-2 transition-all group-hover:scale-105">
                                                        <MapPinIcon className="size-6" />{" "}
                                                        {title}
                                                    </p>
                                                    <p className="ml-auto flex items-center gap-2 text-sm transition-all group-hover:scale-110">
                                                        Book Now{" "}
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
                                        priority
                                    />
                                    <div className="z-1 absolute top-0 flex h-full w-full cursor-not-allowed flex-col bg-gradient-to-br from-black/40 to-primary/30 px-6 py-6 text-white/90">
                                        <p className="mb-0.5 max-w-[300px] font-heading text-2xl font-extralight tracking-wide">
                                            {
                                                CONTENT.homepage.stays
                                                    .placeholderTitle
                                            }
                                        </p>
                                        <div className="mt-auto flex items-end">
                                            <p className="flex items-center gap-2 transition-all group-hover:scale-105">
                                                <MapPinIcon className="size-6" />{" "}
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
                    <FancyHeading
                        text={CONTENT.homepage.activitiesAmenities.title}
                    />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                        {CONTENT.homepage.activitiesAmenities.subtitle1}
                    </p>
                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {CONTENT.homepage.activitiesAmenities.activities.map(
                            ({ name, icon: Icon, asterik }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-3 text-sm font-medium text-black/80"
                                >
                                    <Icon className="text-primary" />{" "}
                                    <p>
                                        {name}
                                        {asterik && (
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        )}
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                    <p
                        className="mt-5 text-sm font-medium text-black/70"
                        id="amenities"
                    >
                        <span className="text-red-500">*</span>{" "}
                        {CONTENT.homepage.activitiesAmenities.note}
                    </p>
                    <hr className="mx-auto mt-10 max-w-32" />
                    <p className="mx-auto mt-10 max-w-3xl text-center text-black/70 md:text-lg">
                        {CONTENT.homepage.activitiesAmenities.subtitle2}
                    </p>
                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                        {CONTENT.homepage.activitiesAmenities.amenities.map(
                            ({ name, icon: Icon }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-3 text-sm font-medium text-black/80"
                                >
                                    <div>
                                        <Icon className="text-secondary" />
                                    </div>{" "}
                                    {name}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="mx-auto max-w-9xl px-4">
                    <div className="grid gap-8 rounded-2xl bg-secondary/20 px-8 py-12 md:grid-cols-3 md:gap-16 md:px-16 md:py-16">
                        <div>
                            <p className="font-heading text-3xl">
                                {CONTENT.homepage.whyChoose.title}
                            </p>
                            <p className="mt-2 text-black/70 md:text-lg">
                                {CONTENT.homepage.whyChoose.subtitle}
                            </p>
                        </div>
                        <div className="col-span-2 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
                            {CONTENT.homepage.whyChoose.features.map(
                                (text, idx) => (
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
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="mx-auto max-w-9xl px-4">
                    <FancyHeading text={CONTENT.homepage.testimonials.title} />
                    <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                        {CONTENT.homepage.testimonials.subtitle}
                    </p>
                    <div className="no-scrollbar mt-12 overflow-x-auto xl:overflow-visible">
                        <div className="flex grid-cols-2 gap-4 xl:grid xl:grid-cols-4 xl:gap-6">
                            {CONTENT.homepage.testimonials.features.map(
                                (t, idx) => (
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
                                            {"★".repeat(t.rating)}
                                            {"☆".repeat(5 - t.rating)}
                                        </div>
                                        <p className="text-black/80">
                                            &quot;{t.quote}&quot;
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="mx-auto max-w-9xl px-4">
                    <div className="grid gap-6 md:grid-cols-3 md:gap-32">
                        <div>
                            <p className="bg-gradient-to-br from-primary to-black/80 bg-clip-text font-heading text-4xl text-transparent">
                                {CONTENT.homepage.faqs.title}
                            </p>
                            <p className="mt-2 text-black/70 md:text-lg">
                                {CONTENT.homepage.faqs.subtitle}
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
