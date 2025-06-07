'use client'

import { DiamondIcon } from 'lucide-react'

export default function FancyHeading({ text }) {
    return (
        <div className="mx-auto mb-4 flex max-w-5xl items-center">
            <div className="relative min-w-4 flex-grow border-b-2 border-black/10">
                <DiamondIcon className="absolute -right-[22.8px] top-[1px] -translate-y-1/2 text-black/10" />
            </div>
            <span className="mx-8 bg-gradient-to-br from-primary to-black/80 bg-clip-text px-4 pb-2 text-center font-heading text-3xl font-medium text-transparent sm:text-4xl">
                {text}
            </span>
            <div className="relative min-w-4 flex-grow border-b-2 border-black/10">
                <DiamondIcon className="absolute -left-[22.8px] top-[1px] -translate-y-1/2 text-black/10" />
            </div>
        </div>
    )
}
