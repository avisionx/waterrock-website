"use client"

export default function PageTitle({ title, subtitle }) {
    return (
        <div className="mb-12 flex flex-col gap-2 text-center">
            <h1 className="bg-gradient-to-br from-primary to-black/80 bg-clip-text pb-2 font-heading text-3xl leading-tight text-transparent sm:text-4xl md:text-5xl">
                {title}
            </h1>
            {subtitle && (
                <p className="mx-auto max-w-3xl text-black/70 md:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
