import "server-only"

import { CarIcon, ClockIcon, MapPinIcon } from "lucide-react"
import Image from "next/image"

import CTA from "@/components/CTA"
import FancyHeading from "@/components/FancyHeading"
import PageTitle from "@/components/PageTitle"

import { CONTENT } from "@/app/constants"

export const metadata = {
    title: CONTENT.expNearBhor.hero.title,
}

export default function ExperiencesNearBhor() {
    return (
        <main className="mx-auto max-w-9xl px-4 pb-24 pt-36 lg:pt-44">
            <PageTitle
                title={CONTENT.expNearBhor.hero.title}
                subtitle={CONTENT.expNearBhor.hero.subtitle}
            />
            <FancyHeading text={CONTENT.expNearBhor.hero.intro} />
            <p className="mx-auto mb-12 mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                {CONTENT.expNearBhor.hero.introDesc}
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {CONTENT.expNearBhor.experiences.map((experience, index) => (
                    <div
                        key={experience.id}
                        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/20"
                    >
                        {" "}
                        <div className="group relative">
                            <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/30 transition-opacity group-hover:opacity-0"></div>
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-3xl font-medium tracking-wide text-white transition-opacity duration-150 group-hover:opacity-0">
                                {experience.name}
                            </span>
                            <Image
                                src={`/images/exp-near-bhor/${experience.id}.webp`}
                                width={600}
                                height={400}
                                alt=""
                                className="h-[400px] w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-4 flex items-start gap-4">
                                <div className="rounded-lg bg-primary p-3">
                                    <experience.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-2 text-xl font-semibold text-black/80">
                                        {index + 1}. {experience.name}
                                    </h3>
                                    <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 font-heading text-sm text-secondary">
                                        {experience.type}
                                    </span>
                                </div>
                            </div>
                            <p className="mb-2 text-black/70">
                                {experience.description}
                            </p>
                            <p className="mb-4 text-black/70">
                                {experience.details}
                            </p>
                            <div className="mb-4 flex flex-wrap gap-4 text-sm text-black/80">
                                <div className="flex items-center gap-1">
                                    <MapPinIcon className="h-4 w-4" />
                                    <span>{experience.distance}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ClockIcon className="h-4 w-4" />
                                    <span>{experience.duration}</span>
                                </div>
                            </div>
                            <div>
                                <p className="mb-2 font-medium text-primary">
                                    Highlights
                                </p>
                                <ul className="space-y-1">
                                    {experience.highlights.map(
                                        (highlight, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center gap-2 text-sm text-black/70"
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                                                {highlight}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div
                            className={`absolute -bottom-24 -right-12 size-64 rounded-full bg-primary/5`}
                        />
                    </div>
                ))}
            </div>
            <div className="mb-16 mt-12 rounded-2xl bg-secondary/20 p-6">
                <div className="mb-1 flex items-center gap-2">
                    <CarIcon className="h-8 w-8 text-secondary" />
                    <h3 className="text-xl font-medium text-secondary">
                        {CONTENT.expNearBhor.gettingAround.title}
                    </h3>
                </div>
                <p className="text-sm text-black/80">
                    {CONTENT.expNearBhor.gettingAround.subtitle}
                </p>
            </div>
            <CTA />
        </main>
    )
}
