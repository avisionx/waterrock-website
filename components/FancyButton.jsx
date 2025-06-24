"use client"

import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

export default function FancyButton({ text = "", href = "/", ...rest }) {
    return (
        <Link
            href={href}
            className="group relative inline-flex h-[calc(36px+8px)] items-center justify-center rounded-full bg-black py-1 pl-6 pr-14 font-medium text-white"
            {...rest}
        >
            <span className="z-10 text-white">{text}</span>
            <div className="absolute right-1 inline-flex h-9 w-9 items-center justify-end rounded-full bg-primary transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-2 flex items-center justify-center">
                    <ArrowRightIcon className="size-5 text-white" />
                </div>
            </div>
        </Link>
    )
}
