import {
    BathIcon,
    BatteryChargingIcon,
    BedDoubleIcon,
    BellIcon,
    BrainCircuitIcon,
    CircleIcon,
    CoffeeIcon,
    CreditCardIcon,
    CrossIcon,
    CrosshairIcon,
    Dice5Icon,
    DropletIcon,
    EyeIcon,
    FerrisWheelIcon,
    FlashlightIcon,
    Gamepad2Icon,
    GemIcon,
    Grid3x3Icon,
    JoystickIcon,
    LeafIcon,
    LifeBuoyIcon,
    MoonIcon,
    ParkingCircleIcon,
    ShieldCheckIcon,
    SnowflakeIcon,
    SparklesIcon,
    SpeakerIcon,
    SquareStackIcon,
    SunIcon,
    SwordIcon,
    TreesIcon,
    UtensilsIcon,
    VolleyballIcon,
    WavesIcon,
    WindIcon,
    ZapIcon,
} from "lucide-react"

import { getLocationSubmenu } from "@/app/utils"

export const CONTACT_EMAIL = "help@waterrock.in"
export const CONTACT_PHONE_NUMBER = "8745009633"
export const WHATSAPP_URL =
    "https://api.whatsapp.com/message/QCBAHDST3WKQD1?autoload=1&app_absent=0"

export const CONTENT = {
    seo: {
        title: "WaterRock - Luxe Nature Retreat",
        description:
            "Discover WaterRock - Luxury nature retreats featuring private villas, A-frame cabins, glamping tents, kayaking, bonfires, and much more.",
        keywords: [
            "WaterRock",
            "Bhor",
            "Khopoli",
            "Luxury Retreats",
            "Nature Retreats",
            "Glamping",
            "Kayaking",
            "Bonfire",
            "Private Villas",
            "A-frame Cabins",
        ],
    },
    homepage: {
        hero: {
            // title: can't abstract this please ask dev to update
            subtitle:
                "Discover the magic of curated nature stays near Pune & Mumbai.",
            scrollText: "Scroll to explore your next soulful escape",
        },
        stays: {
            title: "Our Stays",
            subtitle:
                "From hilltops to lakesides, discover thoughtfully crafted stays across India — each echoing WaterRock's promise of peace, comfort, and nature.",
            placeholderTitle: "Khopoli - Being Curated!",
        },
        activitiesAmenities: {
            title: "Activities & Amenities",
            subtitle1:
                "Dive into a world of adventure and leisure with handpicked activities that spark joy, energy, and connection for all.",
            activities: [
                { name: "Kayaking (Seasonal)", icon: WavesIcon, asterik: true },
                {
                    name: "Night Boating (Seasonal)",
                    icon: MoonIcon,
                    asterik: true,
                },
                {
                    name: "Sunrise Boating (Seasonal)",
                    icon: SunIcon,
                    asterik: true,
                },
                { name: "Jetty Jump", icon: ZapIcon },
                { name: "Floating & Swimming in Lake", icon: LifeBuoyIcon },
                { name: "TurnBall", icon: Gamepad2Icon },
                { name: "Cricket", icon: SwordIcon },
                { name: "Darts", icon: CrosshairIcon },
                { name: "Foosball", icon: JoystickIcon },
                { name: "Football", icon: VolleyballIcon },
                { name: "Pool Table", icon: FerrisWheelIcon },
                { name: "Air Hockey (Chargeable)", icon: WindIcon },
                { name: "Volleyball", icon: VolleyballIcon },
                { name: "Badminton", icon: FerrisWheelIcon },
                { name: "Board Games", icon: Grid3x3Icon },
                { name: "UNO", icon: SquareStackIcon },
                { name: "Cards", icon: CreditCardIcon },
                { name: "Chess", icon: BrainCircuitIcon },
                { name: "Carrom", icon: CircleIcon },
                { name: "Ludo", icon: Dice5Icon },
                { name: "Jenga", icon: Grid3x3Icon },
            ],
            subtitle2:
                "Experience comfort redefined with premium amenities designed to elevate your stay—luxurious, thoughtful, and crafted for ultimate relaxation.",
            amenities: [
                {
                    name: "Multi Cuisine Kitchen (8 AM to 11 PM)",
                    icon: UtensilsIcon,
                },
                {
                    name: "BoHo Themed Café with Wi-Fi",
                    icon: CoffeeIcon,
                },
                {
                    name: "DJ Audio System",
                    icon: SpeakerIcon,
                },
                {
                    name: "Gardens and Party Lawns",
                    icon: TreesIcon,
                },
                {
                    name: "Ice Maker Machine",
                    icon: SnowflakeIcon,
                },
                {
                    name: "Multiple Water Decks",
                    icon: WavesIcon,
                },
                {
                    name: "Ample Car Parking",
                    icon: ParkingCircleIcon,
                },
                {
                    name: "RO Drinking Water",
                    icon: DropletIcon,
                },
                {
                    name: "Clean Linen",
                    icon: SparklesIcon,
                },
                {
                    name: "Duvets and Hotel Grade Mattresses",
                    icon: BedDoubleIcon,
                },
                {
                    name: "Room Service for Villas",
                    icon: BellIcon,
                },
                {
                    name: "Towels and Toiletries",
                    icon: BathIcon,
                },
                {
                    name: "Power Back Up",
                    icon: BatteryChargingIcon,
                },
                {
                    name: "Torch",
                    icon: FlashlightIcon,
                },
                {
                    name: "Well Stocked Medical Kit with ASV",
                    icon: CrossIcon,
                },
                {
                    name: "Three Tier Security including External CCTV",
                    icon: ShieldCheckIcon,
                },
            ],
            note: "Please note water activities in Dam are seasonal and as per govt. norms and notifications. Please ask for the same",
        },
        whyChoose: {
            title: "Why Choose WaterRock?",
            subtitle:
                "Break free from the ordinary — escape to handpicked stays, soulful experiences, and genuine hospitality — all wrapped in nature's hug.",
            features: [
                "Wake up to birdsong and sleep in plush comfort — villas, tents, and lakeside chalets that bring nature to your doorstep.",
                "Bonfires, kayaking, and night boating — every WaterRock getaway is an experience crafted to connect you with what truly matters.",
                "From welcome drinks to seamless service, our team takes care of everything — so you just soak in the vibes and views.",
                "Whether Bhor, Lonavala, or Karjat — our signature charm follows you. Pick your vibe, not your standard.",
            ],
        },
        testimonials: {
            title: "Testimonials",
            subtitle:
                "Hear it from the explorers — honest experiences that reflect the magic, comfort, and charm of every WaterRock stay.",
            features: [
                {
                    name: "Aarav Mehta",
                    role: "Adventure Enthusiast",
                    rating: 5,
                    quote: "From kayaking at sunrise to cozy nights by the bonfire, WaterRock made our weekend escape truly unforgettable.",
                },
                {
                    name: "Nisha Verma",
                    role: "Family Traveller",
                    rating: 4,
                    quote: "Spacious villas, delicious food, and so many activities — my kids didn’t want to leave. Highly recommended!",
                },
                {
                    name: "Rahul Kapoor",
                    role: "Solo Explorer",
                    rating: 5,
                    quote: "Perfect blend of peace and play. The staff was warm, and the glamping setup was absolutely surreal.",
                },
                {
                    name: "Simran D’Souza",
                    role: "Couple Getaway Seeker",
                    rating: 5,
                    quote: "Loved the vibe, the service, and the lake views. WaterRock gave us the romantic break we were craving.",
                },
            ],
        },
        faqs: {
            title: "FAQs",
            subtitle: "Answers to some questions you might have.",
            features: [
                {
                    question: "How far is the place from Pune/Mumbai?",
                    answer: "The site is about 70+ km (2–2.5 hrs) from Pune and 200+ km (4–5 hrs) from Ghatkopar, Mumbai.",
                },
                {
                    question:
                        "Are mobile networks available? Will my Vodafone network work?",
                    answer: "Jio works in patches, BSNL works intermittently. A SIM-based Wi-Fi router is available at the Glamping Café, Mango Tree, and Commune areas.",
                },
                {
                    question: "Can I carry my own food or alcohol?",
                    answer: "Outside food and beverages are strictly prohibited. ✅ You can carry your own liquor, but it must be consumed in designated areas. Mixers, cold water, and ice are available for a charge.",
                },
                {
                    question: "What are the restroom facilities like?",
                    answer: "The campsite has common restrooms with unisex showers, WCs, and separate urinals. They're cleaned hourly between 4 PM – 11 PM and 8 AM – 12 PM.",
                },
                {
                    question: "Is it safe to enter the dam/backwaters?",
                    answer: "Yes! The dam water is clean and safe, with a jetty and stairs for easy access. 🚨 Life jackets are mandatory, and while there’s no lifeguard, safety measures and ample jackets are provided.",
                },
            ],
        },
    },
    about: {
        hero: {
            title: "About Us",
            subtitle:
                "Discover the essence of Waterrock, where nature meets luxury.",
            features: [
                {
                    title: "Mission",
                    description:
                        "To provide an unparalleled hospitality experience that connects guests with nature, culture, and luxury.",
                    Icon: LeafIcon,
                },
                {
                    title: "Vision",
                    description:
                        "To be a leading destination for eco-luxury retreats, inspiring sustainable tourism and enriching lives.",
                    Icon: EyeIcon,
                },
                {
                    title: "Values",
                    description:
                        "Sustainability, Excellence, Community, Innovation, and Authenticity.",
                    Icon: GemIcon,
                },
            ],
        },
        journey: {
            title: "Our Journey",
            subtitle:
                "Nestled amidst nature, Waterrock’s journey began with a vision to blend luxury and sustainability. Our story is one of passion, innovation, and a deep respect for the environment.",
            para1: "Waterrock was founded by a group of nature enthusiasts who dreamed of creating a sanctuary where luxury and sustainability coexist. Inspired by the tranquil beauty of untouched landscapes, we set out to design a retreat that honors the environment while offering exceptional comfort. Every detail, from our eco-friendly architecture to our locally sourced cuisine, reflects our commitment to responsible hospitality. Over the years, Waterrock has grown into a vibrant community, welcoming guests from around the world to experience the harmony of nature and refined living. Our journey continues, guided by passion, innovation, and respect for the earth.",
            para2: "At Waterrock, we believe in the power of connection—between people, nature, and culture. Our mission is to create unforgettable experiences that inspire guests to cherish and protect the natural world. We invite you to join us on this journey, where every moment is an opportunity to discover the beauty of life in harmony with nature.",
        },
        location: {
            title: "Our Locations",
            subtitle:
                "Waterrock currently has 1 location Bhor and Khopoli (Coming Soon). Each destination offers a unique blend of natural beauty, luxury accommodations, and immersive experiences that reflect the essence of Waterrock.",
        },
        career: {
            title: "Career @ WaterRock",
            subtitle:
                "Join the Waterrock family and be part of a team that values passion, innovation, and a commitment to excellence. Explore exciting career opportunities in hospitality, sustainability, and more. Together, we can create memorable experiences for our guests while making a positive impact on the environment.",
            text: "Interested in joining WaterRock family?",
            link: `Send us your resume at ${CONTACT_EMAIL}`,
        },
    },
    contact: {
        hero: {
            title: "Contact Us",
            subtitle: "Have questions or need assistance? We're here to help!",
        },
        reachUs: {
            title: "Reach Us",
            subtitle:
                "Feel free to visit our location or reach out through any of the contact methods above. We're always happy to connect and assist you!",
        },
    },
    faqs: {
        title: "Contact Us",
        subtitle: "Have questions or need assistance? We're here to help!",
        features: [
            {
                question: "How far is the place from Pune/Mumbai?",
                answer: "The site is about 70+ Kms or 2–2.5 hrs from Pune and 200+ Kms or 4–5 hours drive from Ghatkopar, Mumbai.",
            },
            {
                question:
                    "Which mobile networks are available? Will my Vodafone network work at the camp site?",
                answer: "Jio works in patches, BSNL is operational intermittently. We have a sim based Wi-Fi Router installed at three places across the park: Glamping Café, Mango Tree and at the Commune.",
            },
            {
                question:
                    "Do I need to carry any specific linen, blankets or towels?",
                answer: "No, you will be provided with clean and sanitized hotel grade linen, comforters, towels (on demand for glamps). Please do carry a light warm jacket or a hoodie as it can get a bit nippy in the evenings. There is always a cold breeze since you are adjacent to the water body and surrounded by thick jungles.",
            },
            {
                question:
                    "Should I carry a power bank for charging my phone and other devices/ gadgets?",
                answer: "Not really required! Charging points are available at the Café and in the glamps.",
            },
            {
                question: "Can I carry my own food?",
                answer: "Outside Food is strictly prohibited onsite. Outside Beverages are also Not Allowed at our Campsite.",
            },
            {
                question: "Can I carry my own Liquor/ Alcohol?",
                answer: "Yes, please do carry your own liquor; You may consume it at designated areas. Mixers, cold water and ice are available once you are onsite. Although, these are charged at an additional cost.",
            },
            {
                question: "Until what time is the Café open?",
                answer: "The Café is open 24 hrs for guests to sit and relax. Kitchen timings are 08:00 AM to 11:00 PM.",
            },
            {
                question:
                    "I forgot a few things back home, what can you cover me up with?",
                answer: "Other than a Torch, umbrella, Shower gel, soap and shampoo or a dental kit (Chargeable at ₹ 50) which you can ask at the café desk.",
            },
            {
                question: "Do you sell Tobacco?",
                answer: "Yes, we do sell cigarettes if you run out of them.",
            },
            {
                question: "Can I get into the back waters?",
                answer: "Yes of course! We have a pier/ jetty with ease of ingress and egress via stairs which provide a layer of safety. There is a water buoy just about 20 meters from the jetty also. You are always advised to wear the life jacket while indulging in water sports. The site has no Life guard hence the life jackets are mandatory to enter the water at all times. We do have ample life jackets to enhance your experience!",
            },
            {
                question: "Is water available in the backwaters?",
                answer: "Yes, the dam water is clean and very refreshing and is available from September till April mid every year.",
            },
            {
                question:
                    "What are the restroom facilities available for the campsite?",
                answer: "Since this is a camp site, we have common restrooms. They are available at the top level and the Café level. Each set of wash rooms has a gender neutral restroom with a shower, WC and a wash basin and an additional Men’s urinal to ensure the WC remains hygienic and usable for the ladies. The restrooms are cleaned and sanitized every hour from 4:00 pm until 11:00 pm and from 8:00 am to noon.",
            },
            {
                question:
                    "Can I shower in the restrooms after a dip in the water?",
                answer: "Yes you can as the unisex restroom has a shower facility and enough space to change as well! Just that you will be anyways bathing in the water from the backwaters anyways. Food for thought!",
            },
            {
                question: "Can I order some starters to go with my party?",
                answer: "Absolutely, we have bar nibbles and oriental starters at the moment. Tandoor will be operational from November 2022. All starters are at an additional cost.",
            },
            {
                question: "Since its near the jungles, is the place safe?",
                answer: "The Park is part of 30 acres gated community. The gates are closed and locked at 8 pm so one can assume the level of safety. However, since we are amidst nature; situations and encounters can’t be ruled out. The site is very well lit up and all precautions have been taken to avoid encounters with the wriggly kinds.",
            },
            {
                question: "Are the dam waters safe?",
                answer: "Yes, the dam water is absolutely safe from predatory water bread animals/ mammals. Snakes cant be ruled out but have not been sighted very often especially near human presence.",
            },
            {
                question: "How deep is the dam water?",
                answer: "From our Jetty which is the recommended entry point, its 12 feet deep and gets deeper as you move to the centre of the water body. The estimated depth at the centre is 70 feet hence its Mandatory to wear Life jackets while entering the water or boating/ kayaking.",
            },
            {
                question: "Do you have a Live band or a DJ for the evenings?",
                answer: "DJ/ Live band is only on Saturdays during Oct to March. The rest of the days, you can request for exciting Bollywood and Punjabi, Deep House and Hip-Hop playlists to be played on our Night Club Grade pro audio set up. You can also play your own curated music playlists directly through our Bluetooth interface!",
            },
            {
                question: "What are the Tents like?",
                answer: "All our tents are of the same scale and quality and rest on a solid Iron structure which is hammered into the concrete at 16 points. The tents have 3 layers. The outer layer is a 400 GSM PVC material to shield off water, dust and extreme sunlight. The triangular design makes these tents reduce drag and hence wind resistance. The second inner layer is made of water repellent material, it is porous so that air can pass through and does not make you feel suffocated while protecting it from insects, bugs and reptiles from creeping in. The third layer is meant to enhance the aesthetics for a cosy stay. They have been designed by the founder who is an alpine and Himalayan mountaineer himself!",
            },
            {
                question: "What food can I expect at WaterRock!",
                answer: "Our Chef’s have worked at some of the finest hotels, clubs and diners in Mumbai, Pune and Punjabi hinterland. The range of cuisines and the quality of food will be at par with any good restaurant/ club in the city. Our menu includes dishes from Indian, Oriental and Western Cuisines. So be it a butter chicken, chicken lollipops, Lucknow kebabs or simply eggs of your choice at breakfast; it’ll be made to perfection.",
            },
            {
                question: "Can I bring my Hookah?",
                answer: "No, outside Hookah is NOT allowed. Please ask the service staff for flavours available.",
            },
            {
                question: "Do you have a Barbeque?",
                answer: "No, We don’t offer Barbeque as we have tandoor available.",
            },
            {
                question: "Kitchen Timings",
                answer: "Our Kitchens open at 8:00 AM and Close at 11:00 PM.",
            },
        ],
    },
    cta: {
        titlePart1: "Your",
        titlePart2: "Journey",
        titlePart3: "Shouldn't End Here.",
        subtitle: "Experience Nature with Comfort — Reserve Your Stay Today",
    },
}

export const STAY_OPTIONS = [
    {
        location: "bhor",
        title: "Bhor",
        options: [
            {
                id: "mango-tree-chalet",
                name: "The Mango Tree Chalet – 1 BH Luxury Villa",
                shortDescription:
                    "A romantic, private 1BHK villa with a pool, ideal for couples or small groups. Enjoy luxury, nature, and dedicated service in serene surroundings.",
                description: (
                    <p>
                        Cozy and romantic getaway especially designed for
                        couples with stunning views, privacy and luxury all at
                        our premium chalet. Ideal for small groups of up to 6
                        people, this unit comes with a large private swimming
                        pool, dedicated bell service and a lot more. Sit in the
                        silence of nature.
                    </p>
                ),
                note: "Please note water activities in Dam are seasonal. Please ask for the same.",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "2 Adults + 2 Children",
                inclusions: [
                    "Stay",
                    "Dinner",
                    "Breakfast",
                    "Kayaking",
                    "Bon-Fire",
                    "Indoor/ outdoor Activities",
                    "Parking",
                    "Floating in the Lake",
                    "Jump from Jetty",
                    "Clean Linen and Duvet",
                    "Towels & Toiletries",
                ],
                considerations: [
                    "King Size Bed",
                    "Airconditioning",
                    "Washroom with Rain Shower",
                    "Living Room with Sofa Cum Bed",
                    "Bose Audio System",
                    "Private Swimming Pool",
                    "Observation Deck",
                    "Private Garden",
                    "Fire pit",
                    "Party Deck",
                    "Mini Fridge",
                    "DG back-up (8 hrs)",
                    "Bell Service",
                    "Electric Kettle",
                    "Wi-Fi (Intermittent)",
                ],
            },
            {
                id: "a-frame-cabins",
                name: "A Frame Cabins",
                shortDescription:
                    "Modern alpine cabins with glass facades, private plunge pools, and scenic views. Perfect for longer stays and a complete urban detox.",
                description: (
                    <p>
                        Triangular alpine designed cabins are modern yet cozy.
                        These cabins face east and adorn a large glass façade to
                        provide the mesmerizing views of the backwaters in
                        winters and scintillating view mountains in summers.
                        Each room comes with private plunge pool and attached
                        washrooms and small deck area to offer complete luxury.
                        Enjoy your longer stays here and get a full urban detox!
                    </p>
                ),
                note: "Please note water activities in Dam are seasonal. Please ask for the same.",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "2 Adults + 2 Children",
                inclusions: [
                    "Stay",
                    "Lunch",
                    "Dinner",
                    "Breakfast",
                    "Kayaking",
                    "Bon-Fire",
                    "Indoor/ outdoor Activities",
                    "Parking",
                    "Floating in the Lake",
                    "Jump from Jetty",
                    "Clean Linen and Duvet",
                    "Towels & Toiletries",
                ],
                considerations: [
                    "Queen Size Bed",
                    "In Room Coffee Table",
                    "Attached Washrooms",
                    "Sofa Cum Bed",
                    "Private Pool",
                    "Outdoor Sitting Area",
                    "Electric Kettle",
                    "Fridge",
                    "Power Backup (upto 8 hrs)",
                    "Mountain or Lake View",
                    "Airconditioning",
                    "Wi-Fi (Intermittent)",
                ],
            },
            {
                id: "soulspree-bungalow",
                name: "SoulSpree – 2 BH Bungalow",
                shortDescription:
                    "Spacious 2-bedroom villa with private water deck, lawns, and mountain views. Ideal for families, groups, and private parties.",
                description: (
                    <p>
                        This 2 Bedroom villa is a treat to your soul.
                        Mesmerizing views, an amazing private water deck,
                        beautifully landscaped gardens and lawns around, a
                        dining table with a view and above all a very casual
                        living area which can host up to 12 guests. The lawns
                        can also double up as a private party space for up to 30
                        pax. Enjoy the mountain breeze, the sunrise and the
                        reflections of the moon over the waters and let your
                        soul on a rejuvenation spree; SoulSpree!
                    </p>
                ),
                note: "Please note water activities in Dam are seasonal. Please ask for the same.",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "2 Adults + 2 Children",
                inclusions: [
                    "Stay",
                    "Lunch",
                    "Dinner",
                    "Breakfast",
                    "Kayaking",
                    "Bon-Fire",
                    "Indoor/ outdoor Activities",
                    "Parking",
                    "Floating in the Lake",
                    "Jump from Jetty",
                    "Clean Linen and Duvet",
                    "Towels & Toiletries",
                ],
                considerations: [
                    "2 Queen Size Bed",
                    "JBL Party Speaker",
                    "2 Washrooms",
                    "Common Living Room with 4 extra mattresses",
                    "Private Water Deck",
                    "Swing in Lawn",
                    "Party lawns",
                    "Game zone",
                    "Microwave/ Electric Kettle",
                    "Private Jetty",
                    "Fridge",
                    "Inverter back-up (upto 8 hrs)",
                ],
            },
            {
                id: "tents-glamping",
                name: "Tents and Glamping",
                shortDescription:
                    "Lakeside glamping and tents with stunning views, 24-hour café, and rustic amenities. Perfect for groups seeking a unique camping experience.",
                description: (
                    <>
                        <p>
                            Experience the joys of camping with friends, family
                            and colleagues at our pristine glamping site by the
                            lake. All our tents and glamps offer some of the
                            most exhilarating views, an amazing 24 hrs café with
                            super amenities within a rustic and natural setting.
                            A great place to relax and enjoy the evening!
                        </p>
                        <p>
                            <b>Waterboard Glamps:</b> Our most famous and
                            hottest selling units. An experience of a lifetime
                            at a pocket friendly price! Just a foot above the
                            water level (in season) & the expansive lake ahead
                            there is nothing quite like this around Pune and
                            Mumbai. Enjoy the sunrise and the silver waters on a
                            moon night and the comfy beds to snooze.
                        </p>
                    </>
                ),
                note: "Please note Tents are operational only from Oct to March.",
                checkin: "4:00 PM",
                checkout: "11:00 AM",
                pax: "2 Adults + 2 Children",
                inclusions: [
                    "Stay",
                    "Dinner",
                    "Breakfast",
                    "Kayaking",
                    "Bon-Fire",
                    "Indoor/ outdoor Activities",
                    "Parking",
                    "Floating in the Lake",
                    "Jump from Jetty",
                    "Clean Linen and Duvet",
                    "Clean Towels",
                ],
                considerations: [
                    "Beds with 6” Hotel Grade Mattresses",
                    "Charging Points",
                    "Mosquito Repellent",
                    "Water Activities",
                    "Common and Clean Washrooms",
                    "Privacy Fabric",
                    "Fan (On Demand)",
                ],
            },
        ],
    },
    {
        location: "khopoli",
        title: "Khopoli (Coming Soon)",
        options: [],
    },
]

export const STAY_DETAILS = STAY_OPTIONS.reduce((acc, locationGroup) => {
    const { location, options, ...locationRest } = locationGroup
    acc[location] = options.reduce((optionAcc, option) => {
        optionAcc[option.id] = { ...option, location: { ...locationRest } }
        return optionAcc
    }, {})
    return acc
}, {})

export const MENU_DATA = [
    {
        title: "Locations",
        submenu: getLocationSubmenu(STAY_OPTIONS),
    },
    {
        title: "Experiences",
        submenu: [
            { title: "Activities", href: "/#activities" },
            { title: "Amenities", href: "/#amenities" },
        ],
    },
    {
        title: "Company",
        submenu: [
            { title: "About", href: "/about" },
            { title: "Careers", href: "/about#careers" },
            { title: "FAQs", href: "/faqs" },
        ],
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

export const FOOTER_LINKS = [
    {
        title: "Quick Links",
        links: [
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
            { href: "/about#careers", label: "Careers" },
            { href: "/faqs", label: "FAQs" },
            { href: "/sitemap.xml", label: "Sitemap ↗" },
        ],
    },
    {
        title: "Contact",
        links: [
            { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
            {
                href: `tel:${CONTACT_PHONE_NUMBER}`,
                label: CONTACT_PHONE_NUMBER,
            },
            { href: WHATSAPP_URL, label: "WhatsApp ↗" },
        ],
    },
    {
        title: "Social",
        links: [
            { href: "https://youtube.com/yourchannel", label: "YouTube ↗" },
            { href: "https://twitter.com/yourhandle", label: "Twitter ↗" },
            {
                href: "https://linkedin.com/company/yourcompany",
                label: "LinkedIn ↗",
            },
            { href: "https://instagram.com/yourhandle", label: "Instagram ↗" },
        ],
    },
]
