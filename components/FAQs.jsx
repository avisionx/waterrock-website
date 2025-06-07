'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import { useState } from 'react'

import { FAQS } from '@/app/constants'

export default function FAQs() {
    const [activeIdx, setActiveIdx] = useState(null)

    return (
        <div className="space-y-4">
            {FAQS.map((faq, idx) => {
                const isOpen = idx === activeIdx
                return (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-2xl bg-secondary/15 transition-all"
                    >
                        <button
                            onClick={() => setActiveIdx(isOpen ? null : idx)}
                            className="flex w-full cursor-pointer items-center justify-between px-6 py-4 hover:bg-secondary/5"
                        >
                            <span className="font-medium text-black/80 md:text-lg">
                                {faq.question}
                            </span>
                            {isOpen ? (
                                <MinusIcon className="text-black/20" />
                            ) : (
                                <PlusIcon className="text-black/20" />
                            )}
                        </button>
                        {isOpen && (
                            <div className="px-6 pb-4 pt-1 text-black/70 transition-all">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
