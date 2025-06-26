"use client"

import { XIcon } from "lucide-react"
import { useState } from "react"

export default function VideoPlayer({ src, poster, highres, className = "" }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <video
                src={src}
                poster={poster}
                autoPlay
                loop
                muted
                controls={false}
                playsInline
                className={className}
                onClick={() => setIsOpen(true)}
            />
            {isOpen && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-16"
                    onClick={() => setIsOpen(false)}
                >
                    <video
                        src={highres || src}
                        poster={poster}
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                        className="w-full max-w-[1200px] rounded-xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-8 top-8 cursor-pointer border-none bg-transparent text-white"
                        type="button"
                    >
                        <XIcon className="size-8" />
                    </button>
                </div>
            )}
        </>
    )
}
