import {
    BathIcon,
    BatteryChargingIcon,
    BedDoubleIcon,
    BellIcon,
    BrainCircuitIcon,
    CameraIcon,
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
    MountainIcon,
    ParkingCircleIcon,
    ShieldCheckIcon,
    SnowflakeIcon,
    SparklesIcon,
    SpeakerIcon,
    SquareStackIcon,
    StarIcon,
    SunIcon,
    SwordIcon,
    TreesIcon,
    UtensilsIcon,
    VolleyballIcon,
    WavesIcon,
    WindIcon,
    ZapIcon,
} from "lucide-react"
import Link from "next/link"

import { getLocationSubmenu } from "@/app/utils"

export const CONTACT_EMAIL = "support@waterrock.in"
export const CONTACT_PHONE_NUMBER = "9021679953"
export const BOOKING_URL =
    "https://booking.posease.com/hotel/booking/67b3ba149fd46d2f59fcccc1"
export const WHATSAPP_URL = "https://wa.me/message/QCBAHDST3WKQD1"
export const INSTAGRAM_URL = "https://www.instagram.com/waterrock_official"
export const GENERAL_STAY_POLICY_NOTE = (
    <>
        Please go through our{" "}
        <Link className="underline" href="/tnc">
            TnC
        </Link>{" "}
        &{" "}
        <Link className="underline" href="/cancellation">
            Cancellation Policy
        </Link>{" "}
        or{" "}
        <Link href="/contact" className="underline">
            Contact Us
        </Link>{" "}
        for any queries before booking.
    </>
)

export const CONTENT = {
    seo: {
        title: "WaterRock - Nature Retreat",
        description:
            "Discover WaterRock - Nature retreats featuring private villas, A-frame cabins, glamping tents, kayaking, bonfires, and much more.",
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
                    name: "BoHo Themed Café",
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
                    name: "Ice(Chargeable)",
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
            note: "Please note water activities in Dam are seasonal and as per government norms and notifications. Please ask for the same.",
        },
        whyChoose: {
            title: "Why Choose WaterRock?",
            subtitle:
                "Break free from the ordinary — escape to handpicked stays, soulful experiences, and genuine hospitality — all wrapped in nature's hug.",
            features: [
                "Wake up to birdsong and sleep in plush comfort — villas, tents, and lakeside chalets that bring nature to your doorstep.",
                "Bonfires, kayaking, and night boating — every WaterRock getaway is an experience crafted to connect you with what truly matters.",
                "From warm welcome to seamless service, our team takes care of everything — so you just soak in the vibes and views.",
                "Whether Pune or Mumbai — our signature charm follows you. Pick your vibe, not your standard.",
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
                    answer: "Jio works in patches, BSNL is operational intermittently. we have sim based wifi router in cafe which only works for payment and SOS messages. We are internet- free zone.",
                },
                {
                    question: "Can I carry my own food or alcohol?",
                    answer: "Outside food and beverages are strictly prohibited. You can carry your own liquor, but it must be consumed in designated areas. Mixers, cold water, and ice are available for a charge.",
                },
                {
                    question: "What are the restroom facilities like?",
                    answer: " Rooms have private attached washrooms. The campsite has common restrooms with unisex showers, WCs, and separate urinals. They're cleaned hourly between 4 PM – 11 PM and 8 AM – 12 PM.",
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
                        "To provide an unparalleled hospitality experience that connects guests with nature.",
                    Icon: LeafIcon,
                },
                {
                    title: "Vision",
                    description:
                        "To be a leading destination for off beat retreats, inspiring people to connect with nature and their loved ones.",
                    Icon: EyeIcon,
                },
                {
                    title: "Values",
                    description:
                        "Excellence, Community, Innovation, and Authenticity.",
                    Icon: GemIcon,
                },
            ],
        },
        journey: {
            title: "Our Journey",
            subtitle:
                "Nestled amidst nature, Waterrock’s journey began with a vision to blend our busy lives with nature. Our story is one of passion, innovation, and a deep respect for the environment.",
            para1: "Waterrock was founded by couple with passion to travel and discover offbeat stays. Waterrock is your escape into nature’s lap where comfort meets adventure and every meal feels like home.Tucked away from the noise of the city, our offbeat resort is designed for those who crave something different — a place where you can wake up to birdsong, sip chai by the lake, and end the day under a sky full of stars. We believe in simple joys: the smell of fresh earth after rain, the warmth of a cozy room, and the magic of a well-cooked meal. Our menu brings soul-satisfying dishes, made with love and fresh ingredients.Whether you're here to unwind, explore, or just breathe a little deeper, we’re here to make you feel at home — naturally.Over the years, Waterrock has grown into a vibrant community, welcoming 4000+ guests from around the world to experience the harmony of nature and refined living. Our journey continues, guided by passion, innovation, and respect for the earth.",
            para2: "At Waterrock, we believe in the power of connection—between people and nature. Our mission is to create unforgettable experiences that inspire guests to cherish the natural world. We invite you to join us on this journey, where every moment is an opportunity to discover the beauty of life in harmony with nature.",
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
        corporateBookings: {
            title: "Corporate Bookings",
            subtitle:
                "For corporate bookings, team outings, or special events, please reach out to us at the contact details above. We offer tailored packages to suit your needs and ensure a memorable experience for your team.",
        },
        reachUs: {
            title: "Reach Us",
            subtitle:
                "Feel free to visit our location or reach out through any of the contact methods above. We're always happy to connect and assist you!",
        },
    },
    faqs: {
        title: "FAQs",
        subtitle: "Have questions or need assistance? We're here to help!",
        features: [
            {
                question: "How far is the place from Pune/Mumbai?",
                answer: "The site is about 70+ Kms or 2–2.5 hrs from Pune and 200+ Kms or 4–5 hours drive from Ghatkopar, Mumbai.",
            },
            {
                question:
                    "Which mobile networks are available? Will my Vodafone network work at the camp site?",
                answer: "Jio works in patches, BSNL is operational intermittently. we have sim based wifi router in cafe which only works for payment and SOS messages. We are internet- free zone.",
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
                answer: "Other than a Torch, umbrella, Shower gel, soap and shampoo or a dental kit which you can ask at the café desk.",
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
                answer: "Yes, the dam water is clean and very refreshing and is available from August till April mid every year.",
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
    expNearBhor: {
        hero: {
            title: "Experiences Near Bhor",
            subtitle:
                "Discover the perfect blend of history, nature, and adventure around our WaterRock retreat.From ancient forts to serene temples, explore the rich heritage and natural beauty that makes Bhor a unique destination.",
            intro: "10 Places to Visit Near Bhor",
            introDesc:
                "Places to visit in Bhor offer numerous experiences for every type of traveller. Each spot in the region offers its own appeal, whether you're interested in exploring ancient architecture, enjoying scenic beauty, or experiencing local cultural traditions. From historic forts to temples and riverside views, Bhor has something to captivate any traveller.",
        },
        experiences: [
            {
                id: "bhatghar-dam",
                name: "Bhatghar Dam",
                description:
                    "A massive water reservoir built on the Yelwanti River, Bhatghar Dam is one of the most significant tourist attractions in Bhor. The dam's expansive reservoir makes it a favourite destination for those who enjoy natural environments and outdoor activities.",
                details:
                    "Also known as Lloyd Dam, this gravity dam is one of the oldest dams in Maharashtra, constructed during the British Raj. Standing 58 meters high and 1625 meters long, it offers water sports and scenic views.",
                distance: "38 km from WaterRock",
                duration: "1-2 hours",
                type: "Dam & Water Activities",
                icon: TreesIcon,
                highlights: [
                    "One of Maharashtra's oldest dams",
                    "Water sports and boating",
                    "Scenic reservoir views",
                    "Photography opportunities",
                ],
            },
            {
                id: "baneshwar-temple",
                name: "Baneshwar Temple",
                description:
                    "Situated within a wooded area, Baneshwar Temple offers visitors a peaceful setting for prayer and reflection. The temple's rich history and serene atmosphere draw pilgrims and tourists alike.",
                details:
                    "Apart from its spiritual importance, the site also boasts a small waterfall and garden, adding to its appeal for families looking for a place to spend a calm day in nature.",
                distance: "25 km from WaterRock",
                duration: "1-2 hours",
                type: "Temple & Spirituality",
                icon: StarIcon,
                highlights: [
                    "Peaceful wooded setting",
                    "Small waterfall nearby",
                    "Garden area for families",
                    "Spiritual significance",
                ],
            },
            {
                id: "rajgad-fort",
                name: "Rajgad Fort",
                description:
                    "An iconic site from the Maratha Empire's era, Rajgad Fort attracts both history buffs and trekkers. Its historical role as the former capital of the Maratha Kingdom under Chhatrapati Shivaji Maharaj offers visitors a glimpse into the region's past.",
                details:
                    "The fort's location atop a hill makes it a challenging but rewarding trek, with sweeping views from the top. Explorers can wander through ancient ruins and visualise the fort's grandeur.",
                distance: "15 km from WaterRock",
                duration: "4 hours (including trek)",
                type: "Historical Fort & Trekking",
                icon: MountainIcon,
                highlights: [
                    "Former Maratha capital",
                    "Challenging trek with rewards",
                    "Ancient ruins to explore",
                    "Sweeping hilltop views",
                ],
            },
            {
                id: "rohida-fort",
                name: "Rohida Fort (Vichitragad)",
                description:
                    "Rising over 1,100 metres above sea level, Rohida Fort offers a blend of historical discovery and adventure. This fort provides a rewarding trek through natural and historical landmarks.",
                details:
                    "As you explore the fort's ancient walls, you can imagine its role in the region's past, while the stunning views from its heights provide excellent viewpoints for adventurers and history lovers.",
                distance: "50 km from WaterRock",
                duration: "5-7 hours (including trek)",
                type: "High Altitude Fort & Adventure",
                icon: MountainIcon,
                highlights: [
                    "1,100+ meters above sea level",
                    "Ancient walls and ruins",
                    "Excellent viewpoints",
                    "Adventure trekking",
                ],
            },
            {
                id: "madheghat-waterfall",
                name: "Madheghat Waterfall",
                description:
                    "Madheghat Waterfall is a stunning natural wonder nestled in the Western Ghats, offering a refreshing escape into pristine nature. This beautiful cascade attracts nature lovers and adventure enthusiasts alike.",
                details:
                    "A perfect spot for nature photography, relaxation, and enjoying the monsoon beauty. The waterfall is surrounded by lush greenery and offers excellent trekking opportunities through scenic trails.",
                distance: "25 km from WaterRock",
                duration: "1-2 hours",
                type: "Waterfall & Nature Trek",
                icon: WavesIcon,
                highlights: [
                    "Spectacular waterfall views",
                    "Nature photography spot",
                    "Trekking trails",
                    "Monsoon season beauty",
                ],
            },
            {
                id: "prati-balaji-temple",
                name: "Prati Balaji Temple",
                description:
                    "The Prati Balaji Temple offers visitors a spiritual experience with its striking architecture and religious significance. Modelled after the popular Tirupati Balaji Temple.",
                details:
                    "It allows devotees to experience the essence of the famous shrine without traveling far. The peaceful environment and detailed craftsmanship make this temple popular with pilgrims and travelers.",
                distance: "30 km from WaterRock",
                duration: "1-2 hours",
                type: "Temple & Architecture",
                icon: StarIcon,
                highlights: [
                    "Modelled after Tirupati Balaji",
                    "Striking architecture",
                    "Detailed craftsmanship",
                    "Peaceful environment",
                ],
            },
            {
                id: "nana-phadnavis-wada",
                name: "Nana Phadnavis Wada",
                description:
                    "Nana Phadnavis Wada offers a deep dive into the architectural heritage of the Maratha Empire. Once the residence of Nana Phadnavis, a key statesman in Maratha history.",
                details:
                    "This mansion preserves the grandeur of Maratha craftsmanship and is now a museum where visitors can explore various artefacts and learn about the rich cultural past of the region.",
                distance: "45 km from WaterRock",
                duration: "2-3 hours",
                type: "Heritage & Museum",
                icon: StarIcon,
                highlights: [
                    "Maratha architectural heritage",
                    "Museum with artifacts",
                    "Historical significance",
                    "Cultural learning experience",
                ],
            },
            {
                id: "necklace-point",
                name: "Necklace Point",
                description:
                    "One of the most beautiful places for a Bhor trip, Necklace Point offers stunning views of the valley. Its name derives from the winding road that resembles a necklace.",
                details:
                    "This location is ideal for tourists who enjoy scenic drives and photography. Perfect for capturing views at dawn or dusk, making it a beautiful stop on any journey through the region.",
                distance: "32 km from WaterRock",
                duration: "1-2 hours",
                type: "Scenic Viewpoint",
                icon: CameraIcon,
                highlights: [
                    "Stunning valley views",
                    "Scenic winding roads",
                    "Photography opportunities",
                    "Dawn and dusk views",
                ],
            },
            {
                id: "purandar-fort",
                name: "Purandar Fort",
                description:
                    "Purandar Fort holds historical significance as the birthplace of Sambhaji Maharaj, the son of Chhatrapati Shivaji Maharaj. It's a well-known spot for trekking with moderate trails.",
                details:
                    "Visitors can explore the trail leading to the summit, rewarded with historical insights and views. Its long history, combined with beautiful surroundings, makes it an important cultural destination.",
                distance: "55 km from WaterRock",
                duration: "4-5 hours (including trek)",
                type: "Historical Fort & Trekking",
                icon: MountainIcon,
                highlights: [
                    "Birthplace of Sambhaji Maharaj",
                    "Moderate trekking trail",
                    "Historical insights",
                    "Cultural significance",
                ],
            },
            {
                id: "dholya-ganapati-temple",
                name: "Dholya Ganapati Temple",
                description:
                    "Located in Wai, Dholya Ganapati Temple is dedicated to Lord Ganesha and is a revered pilgrimage site. The temple is known for its massive Ganapati idol.",
                details:
                    "Visitors are drawn not only for religious purposes but also to admire its architectural details and peaceful atmosphere. The temple is essential for exploring Maharashtra's religious culture.",
                distance: "60 km from WaterRock",
                duration: "2-3 hours",
                type: "Temple & Pilgrimage",
                icon: StarIcon,
                highlights: [
                    "Massive Ganapati idol",
                    "Architectural details",
                    "Peaceful atmosphere",
                    "Religious significance",
                ],
            },
        ],
        gettingAround: {
            title: "Getting Around",
            subtitle:
                "Most attractions are within 60 km of WaterRock Bhor. We recommend hiring a local taxi or using your own vehicle for the best experience. Our team can help arrange transportation and provide detailed directions.",
        },
    },
    tnc: {
        title: "Terms & Conditions",
        subtitle:
            "Please read our terms and conditions carefully before booking your stay.",
    },
    privacy: {
        title: "Privacy Policy",
        subtitle:
            "Your privacy is important to us. Please review our privacy policy to understand how we collect, use, and protect your information.",
    },
    cancellation: {
        title: "Cancellation Policy",
        subtitle:
            "Please review our cancellation policy before booking your stay.",
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
                note: "Please note water activities in Dam are seasonal and as per govt. norms and notifications. Please ask for the same.",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "2-4 Adults",
                inclusions: [
                    "Stay",
                    "Dinner",
                    "Breakfast",
                    "Kayaking",
                    "Private Bon-Fire(Chargeable)",
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
                    "DG back-up",
                    "Electric Kettle",
                    "Wi-Fi (Intermittent)",
                ],
                imageCount: 5,
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
                note: "Please note water activities in Dam are seasonal and as per govt. norms and notifications. Please ask for the same.",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "2-4 Adults",
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
                    "Queen Size Bed",
                    "In Room Coffee Table",
                    "Attached Washrooms",
                    "Sofa Cum Bed",
                    "Private Pool",
                    "Outdoor Sitting Area",
                    "Electric Kettle",
                    "Fridge",
                    "Power Backup",
                    "Mountain or Lake View",
                    "Airconditioning",
                    "Wi-Fi (Intermittent)",
                ],
                imageCount: 3,
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
                note: "Please note water activities in Dam are seasonal and as per govt. norms and notifications. Please ask for the same.",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "4-8 Adults",
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
                imageCount: 5,
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
                pax: "2 Adults",
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
                imageCount: 4,
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
            { title: "Experiences near Bhor", href: "/experiences-near-bhor" },
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
                label: `+91 ${CONTACT_PHONE_NUMBER}`,
            },
            { href: WHATSAPP_URL, label: "WhatsApp ↗" },
        ],
    },
    {
        title: "Social",
        links: [
            {
                href: INSTAGRAM_URL,
                label: "Instagram ↗",
            },
            {
                href: "https://www.facebook.com/waterrock.official",
                label: "Facebook ↗",
            },
            {
                href: "https://www.youtube.com/@waterrock7067",
                label: "YouTube ↗",
            },
            { href: "https://g.co/kgs/Vjxz5PG", label: "Google ↗" },
        ],
    },
    {
        title: "Legal",
        links: [
            { href: "/tnc", label: "Terms & Conditions" },
            { href: "/cancellation", label: "Cancellation Policy" },
            { href: "/privacy", label: "Privacy Policy" },
        ],
    },
]
