"use client"

import { ArrowUpIcon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <div className="fixed bottom-8 right-8 z-[99]">
            {isVisible && (
                <button
                    className="group relative inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-primary text-white"
                    onClick={scrollToTop}
                >
                    <div className="translate-y-0 transition group-hover:-translate-y-[300%]">
                        <ArrowUpIcon className="size-5" />
                    </div>
                    <div className="absolute translate-y-[300%] transition group-hover:translate-y-0">
                        <ArrowUpIcon className="size-5" />
                    </div>
                </button>
            )}
        </div>
    )
}
