import Image from "next/image"

import { WHATSAPP_URL } from "@/app/constants"
import WP_ICON from "@/assets/wp_icon.webp"

export default function WhatsAppButton() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-8 right-8 z-[99] block transition-transform duration-300 hover:scale-110"
        >
            <Image
                src={WP_ICON}
                alt="Chat with us on WhatsApp"
                width={56}
                height={56}
                className="size-14 rounded-full object-contain drop-shadow-lg"
            />
        </a>
    )
}
