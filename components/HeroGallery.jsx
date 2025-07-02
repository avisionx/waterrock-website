import "server-only"

import { FullscreenIcon } from "lucide-react"
import Image from "next/image"

import VideoPlayer from "@/components/VideoPlayer"

import SHOWCASE_IMG_1 from "@/assets/landing/showcase-1.webp"
import SHOWCASE_IMG_2 from "@/assets/landing/showcase-2.webp"
import SHOWCASE_IMG_3 from "@/assets/landing/showcase-3.webp"
import SHOWCASE_IMG_4 from "@/assets/landing/showcase-4.webp"
import SHOWCASE_IMG_5 from "@/assets/landing/showcase-5.webp"
import SHOWCASE_IMG_6 from "@/assets/landing/showcase-6.webp"
import SHOWCASE_IMG_7 from "@/assets/landing/showcase-7.webp"

const SHOWCASE_IMAGES = [
    SHOWCASE_IMG_6,
    SHOWCASE_IMG_3,
    SHOWCASE_IMG_2,
    SHOWCASE_IMG_1,
    SHOWCASE_IMG_5,
    SHOWCASE_IMG_7,
    SHOWCASE_IMG_4,
]

export default function HeroGallery() {
    return (
        <div className="h-full lg:col-span-2">
            {/* Desktop View */}
            <div className="hidden h-full grid-cols-4 grid-rows-3 gap-3 lg:grid">
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
                        <span className="text-xs transition-all">Immerse</span>
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
            {/* Mobile View */}
            <div className="lg:hidden">
                <div className="group relative mb-4 aspect-video overflow-hidden rounded-md bg-primary">
                    <VideoPlayer
                        src="/videos/waterrock-bhor-showcase.mp4"
                        highres="/videos/waterrock-bhor-showcase-highres.mp4"
                        poster="/images/waterrock-bhor-showcase-poster.webp"
                        className="h-full w-full cursor-pointer rounded-md object-cover"
                    />
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-center px-4 py-2 text-white transition-all group-hover:bg-black/50">
                        <span className="text-xs transition-all">Immerse</span>
                        <FullscreenIcon className="ml-auto size-3.5" />
                    </div>
                </div>
                <div className="no-scrollbar overflow-x-auto">
                    <div className="flex gap-3 pb-2">
                        {SHOWCASE_IMAGES.map((image, index) => (
                            <div
                                key={index}
                                className="h-24 w-32 flex-shrink-0 overflow-hidden rounded-md bg-accent"
                            >
                                <Image
                                    src={image}
                                    alt=""
                                    className="h-full w-full object-cover"
                                    priority={index < 3}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
