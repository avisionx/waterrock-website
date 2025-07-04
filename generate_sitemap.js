const fs = require('fs');
const path = require('path');

// COPY THIS FROM THE CONSTANTS FILE BEFORE RUNNING THE SCRIPT
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
                note: "Please note water activities in Dam are seasonal and as per govt. norms and notifications. Please ask for the same",
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
                note: "Please note water activities in Dam are seasonal and as per govt. norms and notifications. Please ask for the same",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "2-4 Adults",
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
                note: "Please note water activities in Dam are seasonal and as per govt. norms and notifications. Please ask for the same",
                checkin: "2:00 PM",
                checkout: "11:00 AM",
                pax: "4-8 Adults",
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

const DOMAIN = 'https://waterrock.in';

const DAILY_08 = [
    '/about',
    '/contact',
    '/faqs',
    '/tnc',
    '/cancellation',
    '/privacy',
]

const WEEKLY_08 = STAY_OPTIONS.flatMap(({ location, options }) =>
    options.length > 0 ? options.map(({ id }) => `/${location}/${id}`) : []
);

const urls = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    ...DAILY_08.map(path => ({
        path,
        priority: 0.8,
        changefreq: 'daily'
    })),
    ...WEEKLY_08.map(path => ({
        path,
        priority: 0.8,
        changefreq: 'weekly'
    })),
];

const today = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ path, priority, changefreq }) => `
  <url>
    <loc>${DOMAIN}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('')}
</urlset>
`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemap.trim());

console.log(`✅ Sitemap generated at: ${outputPath}`);
