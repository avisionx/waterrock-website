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

export default function HeroGallery() {
    return (
        <div className="grid h-full grid-cols-4 grid-rows-3 gap-3 lg:col-span-2">
            <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-accent">
                <Image
                    src={SHOWCASE_IMG_6} // food
                    alt="Showcase food"
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
                    alt="Showcase night house"
                    className="h-full w-full object-cover"
                    priority
                />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-white">
                <Image
                    src={SHOWCASE_IMG_2} // charm
                    alt="Showcase charm"
                    className="h-full w-full object-cover"
                    priority
                />
            </div>
            <div className="col-span-1 row-span-2 overflow-hidden rounded-md bg-accent">
                <Image
                    src={SHOWCASE_IMG_1} // a frame
                    alt="Showcase a frame"
                    className="h-full w-full object-cover"
                    priority
                />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                <Image
                    src={SHOWCASE_IMG_5} // boating
                    alt="Showcase boating"
                    className="h-full w-full object-cover"
                    priority
                />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-white">
                <Image
                    src={SHOWCASE_IMG_7} // night cafe
                    alt="Showcase night cafe"
                    className="h-full w-full object-cover"
                    priority
                />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden rounded-md bg-black">
                <Image
                    src={SHOWCASE_IMG_4} // sun house
                    alt="Showcase sun house"
                    className="h-full w-full object-cover"
                    priority
                />
            </div>
        </div>
    )
}
