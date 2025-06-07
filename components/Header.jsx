'use client'

import { ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import FancyButton from '@/components/FancyButton'

import { MENU_DATA } from '@/app/constants'
import LOGO from '@/assets/waterrock-logo.svg'

export default function Header() {
    const [stickyMenu, setStickyMenu] = useState(false)
    const [activeNavIndex, setActiveNavIndex] = useState(null)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleStickyMenu = () => setStickyMenu(window.scrollY >= 4)
        window.addEventListener('scroll', handleStickyMenu)
        return () => window.removeEventListener('scroll', handleStickyMenu)
    }, [])

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobileMenuOpen])

    return (
        <header
            className={`fixed z-50 w-full transition-colors duration-300 ${
                stickyMenu ? 'top-0 bg-white/50 shadow-sm backdrop-blur-xl' : ''
            } ${mobileMenuOpen ? 'h-full' : ''}`}
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
                <div className="ml-auto flex items-center justify-end">
                    <FancyButton href="/" text="Book Now" />
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
                        className={`transform transition-transform ${open ? 'rotate-90' : ''}`}
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
                href={item.href || '#'}
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
                depth === 0 ? 'left-0 top-full' : 'left-full top-0 -ml-2'
            } block rounded-xl bg-white py-2 shadow-xl transition-all z-[${50 + depth}] min-w-[150px] max-w-[256px]`}
            style={{ width: 'max-content' }}
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
