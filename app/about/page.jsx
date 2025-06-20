import 'server-only'

import { EyeIcon, GemIcon, LeafIcon } from 'lucide-react'
import Image from 'next/image'

import CTA from '@/components/CTA'
import FancyHeading from '@/components/FancyHeading'
import PageTitle from '@/components/PageTitle'

import { STAY_OPTIONS } from '@/app/constants'

export const metadata = {
    title: 'About Us',
}

export default function AboutPage() {
    return (
        <>
            <section className="mx-auto max-w-9xl px-4 pb-8 pt-36 lg:pt-44">
                <PageTitle
                    title="About Us"
                    subtitle="Discover the essence of Waterrock, where nature meets luxury."
                />
                <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {MVV.map(({ title, description, Icon }, index) => (
                        <div
                            key={title}
                            className={`${index % 2 == 0 ? 'bg-secondary/15' : 'bg-primary/5'} flex flex-col gap-2 rounded-2xl p-6 transition-all hover:scale-[1.02]`}
                        >
                            <div className="relative flex items-center gap-4 text-black/80">
                                <p className="text-2xl font-medium">{title}</p>
                                <Icon
                                    className={`${index % 2 == 0 ? 'text-secondary' : 'text-primary'} absolute right-0 size-10`}
                                />
                            </div>
                            <p className="text-black/70">{description}</p>
                        </div>
                    ))}
                </div>
                <FancyHeading text="Our Journey" />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    Nestled amidst nature, Waterrock’s journey began with a
                    vision to blend luxury and sustainability. Our story is one
                    of passion, innovation, and a deep respect for the
                    environment.
                </p>
                <div className="mx-auto mt-16 max-w-5xl text-center text-black/70 md:text-lg">
                    Waterrock was founded by a group of nature enthusiasts who
                    dreamed of creating a sanctuary where luxury and
                    sustainability coexist. Inspired by the tranquil beauty of
                    untouched landscapes, we set out to design a retreat that
                    honors the environment while offering exceptional comfort.
                    Every detail, from our eco-friendly architecture to our
                    locally sourced cuisine, reflects our commitment to
                    responsible hospitality. Over the years, Waterrock has grown
                    into a vibrant community, welcoming guests from around the
                    world to experience the harmony of nature and refined
                    living. Our journey continues, guided by passion,
                    innovation, and respect for the earth.
                </div>
                <div className="mx-auto mb-16 mt-8 max-w-5xl text-center text-black/70 md:text-lg">
                    At Waterrock, we believe in the power of connection—between
                    people, nature, and culture. Our mission is to create
                    unforgettable experiences that inspire guests to cherish and
                    protect the natural world. We invite you to join us on this
                    journey, where every moment is an opportunity to discover
                    the beauty of life in harmony with nature.
                </div>
            </section>
            <CTA />
            <section className="mx-auto max-w-9xl px-4 pb-24">
                <FancyHeading text="Our Locations" />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    Waterrock currently has 1 location Bhor and Khopoli (Coming
                    Soon). Each destination offers a unique blend of natural
                    beauty, luxury accommodations, and immersive experiences
                    that reflect the essence of Waterrock.
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
                <FancyHeading text="Career @ WaterRock" />
                <p className="mx-auto mt-4 max-w-3xl text-center text-black/70 md:text-lg">
                    Join the Waterrock family and be part of a team that values
                    passion, innovation, and a commitment to excellence. Explore
                    exciting career opportunities in hospitality,
                    sustainability, and more. Together, we can create memorable
                    experiences for our guests while making a positive impact on
                    the environment.
                </p>
                <div className="mx-auto mt-12 max-w-7xl rounded-2xl bg-secondary/10 p-6 text-center text-black/70">
                    <p className="text-lg">
                        Interested in joining WaterRock family?{' '}
                        <a
                            href="mailto:help@waterrock.in"
                            className="text-primary hover:underline"
                        >
                            Send us your resume at help@waterrock.in
                        </a>
                        .
                    </p>
                </div>
            </section>
        </>
    )
}

const MVV = [
    {
        title: 'Mission',
        description:
            'To provide an unparalleled hospitality experience that connects guests with nature, culture, and luxury.',
        Icon: LeafIcon,
    },
    {
        title: 'Vision',
        description:
            'To be a leading destination for eco-luxury retreats, inspiring sustainable tourism and enriching lives.',
        Icon: EyeIcon,
    },
    {
        title: 'Values',
        description:
            'Sustainability, Excellence, Community, Innovation, and Authenticity.',
        Icon: GemIcon,
    },
]
