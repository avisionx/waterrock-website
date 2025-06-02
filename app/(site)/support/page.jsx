import Contact from '@/components/Contact'
import React from 'react'

export const metadata = {
    title: 'Support Page - Solid SaaS Boilerplate',

    // other metadata
    description: 'This is Support page for Solid Pro',
}

const SupportPage = () => {
    return (
        <div className="pb-20 pt-40">
            <Contact />
        </div>
    )
}

export default SupportPage
