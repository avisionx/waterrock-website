"use client"

import { ChevronRightIcon, MenuIcon, XIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import FancyButton from "@/components/FancyButton"

import { MENU_DATA, WHATSAPP_URL } from "@/app/constants"
import LOGO from "@/assets/waterrock-logo.svg"

export default function Header() {
    const [stickyMenu, setStickyMenu] = useState(false)
    const [activeNavIndex, setActiveNavIndex] = useState(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleStickyMenu = () => setStickyMenu(window.scrollY >= 5)
        window.addEventListener("scroll", handleStickyMenu)
        handleStickyMenu()
        return () => window.removeEventListener("scroll", handleStickyMenu)
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileMenuOpen])

    return (
        <header
            className={`fixed z-50 w-full transition-colors duration-300 ${
                stickyMenu ? "top-0 bg-white/50 shadow-sm backdrop-blur-xl" : ""
            } ${mobileMenuOpen ? "h-full" : ""}`}
        >
            <div className="mx-auto flex max-w-9xl grid-cols-3 items-center p-4 lg:grid">
                <div className="flex items-center gap-6 lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        aria-label="Toggle Menu"
                        className="text-black/80"
                    >
                        {mobileMenuOpen ? (
                            <XIcon size={28} />
                        ) : (
                            <MenuIcon size={28} />
                        )}
                    </button>
                    <Link href="/">
                        <Image src={LOGO} width={84} height={40} alt="" />
                    </Link>
                </div>
                <nav className="hidden items-center lg:flex">
                    <ul className="flex space-x-6 xl:space-x-12">
                        {MENU_DATA.map((item, idx) => (
                            <li
                                key={idx}
                                className="group relative"
                                onMouseEnter={() => setActiveNavIndex(idx)}
                                onMouseLeave={() => setActiveNavIndex(null)}
                            >
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 py-2 text-xs font-semibold uppercase text-black/80"
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <div className="flex cursor-pointer items-center gap-1 py-2 text-xs font-semibold uppercase text-black/80">
                                        {item.title}
                                        {item.submenu && (
                                            <ChevronRightIcon
                                                size={16}
                                                className="transition-all group-hover:rotate-90"
                                            />
                                        )}
                                    </div>
                                )}
                                {item.submenu && activeNavIndex === idx && (
                                    <Dropdown items={item.submenu} />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="hidden items-center justify-center lg:flex">
                    <Link href="/">
                        <Image
                            src={LOGO}
                            width={stickyMenu ? 84 : 120}
                            height={40}
                            className="transition-all"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="ml-auto flex items-center justify-end gap-4 lg:gap-6">
                    <Link
                        href={WHATSAPP_URL}
                        target="_blank"
                        className="text-black transition-all hover:text-primary"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="100"
                            height="100"
                            viewBox="0 0 50 50"
                            className="size-10"
                            fill="currentColor"
                        >
                            <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                        </svg>
                    </Link>
                    <FancyButton
                        href={WHATSAPP_URL}
                        target="_blank"
                        text="Book Now"
                    />
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[999] overflow-y-auto bg-white p-6 lg:hidden">
                    <div className="mb-4 flex items-center justify-between">
                        <Image src={LOGO} width={84} height={40} alt="" />
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-black"
                            aria-label="Close Menu"
                        >
                            <XIcon size={24} />
                        </button>
                    </div>
                    <nav>
                        <ul className="flex flex-col space-y-4">
                            {MENU_DATA.map((item, idx) => (
                                <MobileMenuItem
                                    key={idx}
                                    item={item}
                                    closeMenu={() => setMobileMenuOpen(false)}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

function MobileMenuItem({ item, closeMenu }) {
    const [open, setOpen] = useState(false)

    if (item.submenu) {
        return (
            <li>
                <button
                    onClick={() => setOpen(!open)}
                    className="flex w-full items-center justify-between py-2 text-sm font-semibold uppercase text-black/90"
                    aria-expanded={open}
                >
                    {item.title}
                    <ChevronRightIcon
                        size={16}
                        className={`transform transition-transform ${open ? "rotate-90" : ""}`}
                    />
                </button>
                {open && (
                    <ul className="mt-2 border-l border-gray-300 pl-4">
                        {item.submenu.map((subItem, idx) => (
                            <MobileMenuItem
                                key={idx}
                                item={subItem}
                                closeMenu={closeMenu}
                            />
                        ))}
                    </ul>
                )}
            </li>
        )
    }

    return (
        <li>
            <Link
                href={item.href || "#"}
                onClick={closeMenu}
                className="block py-2 text-sm font-semibold uppercase text-black/90"
            >
                {item.title}
            </Link>
        </li>
    )
}

function Dropdown({ items, depth = 0 }) {
    const [openSubIndex, setOpenSubIndex] = useState(null)

    return (
        <ul
            className={`absolute ${
                depth === 0 ? "left-0 top-full" : "left-full top-0 -ml-2"
            } block rounded-xl bg-white py-2 shadow-xl transition-all z-[${50 + depth}] min-w-[150px] max-w-[256px]`}
            style={{ width: "max-content" }}
        >
            {items.map((item, idx) => (
                <li
                    key={idx}
                    className="relative my-1"
                    onMouseEnter={() => setOpenSubIndex(idx)}
                    onMouseLeave={() => setOpenSubIndex(null)}
                >
                    {item.submenu ? (
                        <div className="flex cursor-pointer items-center justify-between px-4 py-2 text-xs font-semibold uppercase text-black/80 hover:bg-accent/20">
                            <span>{item.title}</span>
                            <ChevronRightIcon size={16} />
                            {openSubIndex === idx && (
                                <Dropdown
                                    items={item.submenu}
                                    depth={depth + 1}
                                />
                            )}
                        </div>
                    ) : (
                        <Link
                            href={item.href}
                            className="block px-4 py-2 text-xs font-semibold uppercase text-black/80 hover:bg-accent/20"
                        >
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    )
}
