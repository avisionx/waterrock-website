import "server-only"

import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import IMG_404 from "@/assets/404.svg"

export const metadata = {
    title: "404",
}

export default function NotFoundPage() {
    return (
        <section className="mx-auto flex min-h-[60vh] max-w-9xl flex-col items-center justify-center gap-6 px-4 pb-32 pt-56">
            <Image src={IMG_404} alt="" className="max-w-md" priority />
            <div className="flex flex-col items-center justify-center">
                <p className="text-black/70 md:text-lg">
                    Oops! The page you are looking for does not exist.
                </p>
                <div>
                    <Link
                        href="/"
                        className="mt-12 flex h-[44px] items-center justify-center gap-3 rounded-full bg-primary px-6 py-1 font-medium text-white transition-all hover:bg-primary/90"
                    >
                        Go Back Home <ArrowRightIcon className="size-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
