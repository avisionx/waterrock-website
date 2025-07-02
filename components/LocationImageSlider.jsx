"use client"

import { useEffect, useRef, useState } from "react"
import SimpleImageSlider from "react-simple-image-slider"

export default function LocationImageSlider({ location, id, imageCount }) {
    const containerRef = useRef(null)
    const [width, setWidth] = useState(null)

    const images = [
        `/images/locations/${location}/${id}.webp`,
        ...Array.from(
            { length: imageCount },
            (_, i) => `/images/locations/${location}/${id}/${i + 1}.webp`
        ),
    ]

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { clientWidth } = containerRef.current
                setWidth(clientWidth)
            }
        }
        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        return () => window.removeEventListener("resize", updateDimensions)
    }, [])

    return (
        <div
            ref={containerRef}
            className="w-full rounded-2xl bg-accent"
            style={{ aspectRatio: "16/9" }}
        >
            {width && (
                <SimpleImageSlider
                    width={width}
                    height={(width * 9) / 16}
                    images={images}
                    slideDuration={0.3}
                    showBullets={true}
                    showNavs={true}
                    navSize={32}
                    navMargin={12}
                    navStyle={2}
                    bgColor="#f4f1ee"
                    autoPlay
                />
            )}
        </div>
    )
}
