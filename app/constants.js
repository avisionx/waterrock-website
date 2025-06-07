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
    FerrisWheelIcon,
    FlashlightIcon,
    Gamepad2Icon,
    Grid3x3Icon,
    JoystickIcon,
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
} from 'lucide-react'

import { getLocationSubmenu } from '@/app/utils'

export const STAY_OPTIONS = [
    {
        location: 'bhor',
        title: 'Bhor',
        options: [
            {
                id: 'mango-tree-chalet',
                name: 'The Mango Tree Chalet – 1 BH Luxury Villa',
            },
            {
                id: 'a-frame-cabins',
                name: 'A Frame Cabins',
            },
            {
                id: 'soulspree-bungalow',
                name: 'SoulSpree – 2 BH Bungalow',
            },
            {
                id: 'tents-glamping',
                name: 'Tents and Glamping',
            },
        ],
    },
    {
        location: 'khopoli',
        title: 'Khopoli (Coming Soon)',
        options: [],
    },
]

export const MENU_DATA = [
    {
        title: 'Locations',
        submenu: getLocationSubmenu(STAY_OPTIONS),
    },
    {
        title: 'Experiences',
        submenu: [
            { title: 'Activities', href: '/activities' },
            { title: 'Gallery', href: '/gallery' },
            { title: 'Amenities', href: '/amenities' },
            { title: 'Attractions', href: '/attractions' },
        ],
    },
    {
        title: 'Company',
        submenu: [
            { title: 'About', href: '/about' },
            { title: 'Careers', href: '/careers' },
            { title: 'FAQs', href: '/faqs' },
        ],
    },
    {
        title: 'Contact',
        href: '/contact',
    },
]

export const ACTIVITIES = [
    { name: 'Kayaking (Seasonal)', icon: WavesIcon },
    { name: 'Night Boating (Seasonal)', icon: MoonIcon },
    { name: 'Sunrise Boating (Seasonal)', icon: SunIcon },
    { name: 'Jetty Jump', icon: ZapIcon },
    { name: 'Floating & Swimming in Lake', icon: LifeBuoyIcon },
    { name: 'TurnBall', icon: Gamepad2Icon },
    { name: 'Cricket', icon: SwordIcon },
    { name: 'Darts', icon: CrosshairIcon },
    { name: 'Foosball', icon: JoystickIcon },
    { name: 'Football', icon: VolleyballIcon },
    { name: 'Pool Table', icon: FerrisWheelIcon },
    { name: 'Air Hockey (Chargeable)', icon: WindIcon },
    { name: 'Volleyball', icon: VolleyballIcon },
    { name: 'Badminton', icon: FerrisWheelIcon },
    { name: 'Board Games', icon: Grid3x3Icon },
    { name: 'UNO', icon: SquareStackIcon },
    { name: 'Cards', icon: CreditCardIcon },
    { name: 'Chess', icon: BrainCircuitIcon },
    { name: 'Carrom', icon: CircleIcon },
    { name: 'Ludo', icon: Dice5Icon },
    { name: 'Jenga', icon: Grid3x3Icon },
]

export const AMENITIES = [
    {
        name: 'Multi Cuisine Kitchen (8 AM to 11 PM)',
        icon: UtensilsIcon,
    },
    {
        name: 'BoHo Themed Café with Wi-Fi',
        icon: CoffeeIcon,
    },
    {
        name: 'DJ Audio System',
        icon: SpeakerIcon,
    },
    {
        name: 'Gardens and Party Lawns',
        icon: TreesIcon,
    },
    {
        name: 'Ice Maker Machine',
        icon: SnowflakeIcon,
    },
    {
        name: 'Multiple Water Decks',
        icon: WavesIcon,
    },
    {
        name: 'Ample Car Parking',
        icon: ParkingCircleIcon,
    },
    {
        name: 'RO Drinking Water',
        icon: DropletIcon,
    },
    {
        name: 'Clean Linen',
        icon: SparklesIcon,
    },
    {
        name: 'Duvets and Hotel Grade Mattresses',
        icon: BedDoubleIcon,
    },
    {
        name: 'Room Service for Villas',
        icon: BellIcon,
    },
    {
        name: 'Towels and Toiletries',
        icon: BathIcon,
    },
    {
        name: 'Power Back Up',
        icon: BatteryChargingIcon,
    },
    {
        name: 'Torch',
        icon: FlashlightIcon,
    },
    {
        name: 'Well Stocked Medical Kit with ASV',
        icon: CrossIcon,
    },
    {
        name: 'Three Tier Security including External CCTV',
        icon: ShieldCheckIcon,
    },
]

export const WHY_CHOOSE_WATERROCK = [
    'Wake up to birdsong and sleep in plush comfort — villas, tents, and lakeside chalets that bring nature to your doorstep.',
    'Bonfires, kayaking, and night boating — every WaterRock getaway is an experience crafted to connect you with what truly matters.',
    'From welcome drinks to seamless service, our team takes care of everything — so you just soak in the vibes and views.',
    'Whether Bhor, Lonavala, or Karjat — our signature charm follows you. Pick your vibe, not your standard.',
]

export const TESTIMONIALS = [
    {
        name: 'Aarav Mehta',
        role: 'Adventure Enthusiast',
        rating: 5,
        quote: 'From kayaking at sunrise to cozy nights by the bonfire, WaterRock made our weekend escape truly unforgettable.',
    },
    {
        name: 'Nisha Verma',
        role: 'Family Traveller',
        rating: 4,
        quote: 'Spacious villas, delicious food, and so many activities — my kids didn’t want to leave. Highly recommended!',
    },
    {
        name: 'Rahul Kapoor',
        role: 'Solo Explorer',
        rating: 5,
        quote: 'Perfect blend of peace and play. The staff was warm, and the glamping setup was absolutely surreal.',
    },
    {
        name: 'Simran D’Souza',
        role: 'Couple Getaway Seeker',
        rating: 5,
        quote: 'Loved the vibe, the service, and the lake views. WaterRock gave us the romantic break we were craving.',
    },
]

export const FAQS = [
    {
        question: 'How far is the place from Pune/Mumbai?',
        answer: 'The site is about 70+ km (2–2.5 hrs) from Pune and 200+ km (4–5 hrs) from Ghatkopar, Mumbai.',
    },
    {
        question:
            'Are mobile networks available? Will my Vodafone network work?',
        answer: 'Jio works in patches, BSNL works intermittently. A SIM-based Wi-Fi router is available at the Glamping Café, Mango Tree, and Commune areas.',
    },
    {
        question: 'Can I carry my own food or alcohol?',
        answer: 'Outside food and beverages are strictly prohibited. ✅ You can carry your own liquor, but it must be consumed in designated areas. Mixers, cold water, and ice are available for a charge.',
    },
    {
        question: 'What are the restroom facilities like?',
        answer: "The campsite has common restrooms with unisex showers, WCs, and separate urinals. They're cleaned hourly between 4 PM – 11 PM and 8 AM – 12 PM.",
    },
    {
        question: 'Is it safe to enter the dam/backwaters?',
        answer: 'Yes! The dam water is clean and safe, with a jetty and stairs for easy access. 🚨 Life jackets are mandatory, and while there’s no lifeguard, safety measures and ample jackets are provided.',
    },
]

export const FOOTER_LINKS = [
    {
        title: 'Quick Links',
        links: [
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
            { href: '/faq', label: 'FAQ' },
        ],
    },
    {
        title: 'Contact',
        links: [
            { href: 'mailto:support@example.com', label: 'help@waterrock.in' },
            { href: 'tel:support@example.com', label: '+91 87248294024' },
            {
                href: 'https://maps.google.com/?q=Your+Company+Address',
                label: 'Reach Us ↗',
            },
        ],
    },
    {
        title: 'Social',
        links: [
            { href: 'https://youtube.com/yourchannel', label: 'YouTube ↗' },
            { href: 'https://twitter.com/yourhandle', label: 'Twitter ↗' },
            {
                href: 'https://linkedin.com/company/yourcompany',
                label: 'LinkedIn ↗',
            },
            { href: 'https://instagram.com/yourhandle', label: 'Instagram ↗' },
        ],
    },
]
