import "server-only"

import Image from "next/image"

import CTA from "@/components/CTA"
import FancyHeading from "@/components/FancyHeading"
import PageTitle from "@/components/PageTitle"

import { CONTACT_EMAIL, CONTENT, STAY_OPTIONS } from "@/app/constants"

export const metadata = {
    title: CONTENT.about.hero.title,
}

export default function AboutPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-8 pt-36 lg:pt-44">
                <PageTitle
                    title={CONTENT.about.hero.title}
                    subtitle={CONTENT.about.hero.subtitle}
                />
                <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {CONTENT.about.hero.features.map(
                        ({ title, description, Icon }, index) => (
                            <div
                                key={title}
                                className={`${index % 2 == 0 ? "bg-secondary/15" : "bg-primary/5"} flex flex-col gap-2 rounded-2xl p-6 transition-all hover:scale-[1.02]`}
                            >
                                <div className="relative flex items-center gap-4 text-black/80">
                                    <p className="text-2xl font-medium">
                                        {title}
                                    </p>
                                    <Icon
                                        className={`${index % 2 == 0 ? "text-secondary" : "text-primary"} absolute right-0 size-10`}
                                    />
                                </div>
                                <p className="text-black/70">{description}</p>
                            </div>
                        )
                    )}
                </div>
                <FancyHeading text={CONTENT.about.journey.title} />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.journey.subtitle}
                </p>
                <div className="mx-auto mt-16 max-w-5xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.journey.para1}
                </div>
                <div className="mx-auto mb-16 mt-8 max-w-5xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.journey.para2}
                </div>
            </section>
            <CTA />
            <section className="mx-auto max-w-9xl px-4 pb-24">
                <FancyHeading text={CONTENT.about.location.title} />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.location.subtitle}
                </p>
                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:gap-12">
                    {STAY_OPTIONS.map(({ location, title, options }) => {
                        const imageSrc = options.length
                            ? `/images/locations/${location}/${options[0].id}.webp`
                            : `/images/locations/placeholder.webp`
                        return (
                            <div
                                key={title}
                                className="group relative overflow-hidden rounded-2xl shadow-sm"
                            >
                                <Image
                                    src={imageSrc}
                                    width={300}
                                    height={300}
                                    alt=""
                                    className="h-full w-full object-cover transition-all group-hover:scale-110"
                                />
                                <div className="absolute inset-0 z-10 flex flex-col bg-gradient-to-br from-black/40 to-primary/30 px-6 py-6 text-white/90">
                                    <p className="mb-1 max-w-[300px] font-heading text-2xl font-extralight tracking-wide">
                                        {title}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="mx-auto max-w-9xl px-4 pb-24" id="careers">
                <FancyHeading text={CONTENT.about.career.title} />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    {CONTENT.about.career.subtitle}
                </p>
                <div className="mx-auto mt-12 max-w-7xl rounded-2xl bg-secondary/10 p-6 text-center text-black/70">
                    <p className="text-lg">
                        {CONTENT.about.career.text}{" "}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-primary hover:underline"
                        >
                            {CONTENT.about.career.link}
                        </a>
                        .
                    </p>
                </div>
            </section>
        </>
    )
}
