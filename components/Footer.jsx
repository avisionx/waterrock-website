"use client"

import Image from "next/image"
import Link from "next/link"

import { FOOTER_LINKS } from "@/app/constants"
import LOGO from "@/assets/waterrock-logo.svg"

export default function Footer() {
    return (
        <footer className="mx-auto max-w-9xl px-4 pb-8">
            <div className="rounded-2xl bg-primary/5 px-6 py-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div>
                        <Link href="/" className="inline-block">
                            <Image src={LOGO} className="w-32" alt="" />
                        </Link>
                    </div>
                    {FOOTER_LINKS.map((section) => (
                        <div key={section.title}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/70">
                                {section.title}
                            </p>
                            <ul className="space-y-2">
                                {section.links.map((link) => {
                                    const isExternal = link.label.includes("↗")
                                    return (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-black/80 hover:underline"
                                                target={
                                                    isExternal
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    isExternal
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 border-t border-black/5 pt-8 text-sm text-black/80">
                    <p>
                        Made with ❤ by{" "}
                        <Link
                            href="https://avisionx.net/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @avisionx ↗
                        </Link>
                    </p>
                    <p className="mt-1">
                        Copyright © {new Date().getFullYear()}{" "}
                        <Link href="/" className="underline">
                            WaterRock
                        </Link>
                        . All Rights Reserved.{" "}
                    </p>
                </div>
            </div>
        </footer>
    )
}
