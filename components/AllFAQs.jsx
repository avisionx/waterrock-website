'use client'

import Link from 'next/link'
import { useState } from 'react'

import { ALL_FAQS } from '@/app/constants'

export default function AllFAQs() {
    const [search, setSearch] = useState('')

    const filteredFaqs = ALL_FAQS.filter(
        (faq) =>
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className="flex">
                <input
                    type="search"
                    name="faq-search"
                    autoComplete="off"
                    placeholder="Search FAQs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mx-auto mb-12 w-full max-w-3xl rounded-xl border border-secondary/30 px-6 py-4 text-lg focus:outline-none focus:ring-1 focus:ring-secondary/50"
                    aria-label="Search FAQs"
                />
            </div>
            <div className="space-y-6">
                {filteredFaqs.length === 0 ? (
                    <div className="py-8 text-center text-black/70">
                        No FAQs matched your search.
                        <br />
                        Still have questions?{' '}
                        <Link href="/contact" className="underline">
                            Contact us!
                        </Link>
                    </div>
                ) : (
                    filteredFaqs.map(({ question, answer }) => (
                        <div
                            key={question}
                            className="rounded-2xl bg-primary/5 px-6 py-6 md:text-lg"
                        >
                            <p className="pb-1 font-medium text-black/80">
                                {question}
                            </p>
                            <p className="text-black/70">{answer}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
