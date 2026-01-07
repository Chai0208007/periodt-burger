// BRAND & RESTAURANT INFO
export const restaurantInfo = {
    name: "Periodt Burger",
    tagline: "Your Cravings End Here — PERIODT.",
    phone: "+91 79844 76448",
    email: "info@periodtburger.com",
    address: "Kamrej Char Rasta, Surat",
    stats: {
        outlets: "5+",
        customers: "50K+",
        founded: "2023"
    }
};

// ABOUT PAGE CONTENT
export const aboutContent = {
    meaning: "Periodt is a popular expression meaning final, authoritative, or certain. It stands for our promise: the ultimate taste ends here.",
    story: "Since our journey began in 2023, Periodt Burger has become Surat's fastest-growing QSR brand, dedicated to delivering perfectly crafted flavors.",
    values: [
        { title: "Quality Promise", description: "Fresh ingredients and signature recipes in every bite." },
        { title: "Zero Royalty", description: "Our unique franchise model empowers entrepreneurs." },
        { title: "Innovation", description: "Constantly evolving our menu to satisfy modern cravings." }
    ]
};

// ASSETS
export const homeHeroImage = "home.jpg";
export const menuImages = [
    "https://customer-assets.emergentagent.com/job_0a6ea46e-3633-4d0b-9708-a790a73a92f8/artifacts/8fvyzrzv_644c2bf3-4f46-4047-a997-77dc2b74c08b.jpeg",
    "https://customer-assets.emergentagent.com/job_0a6ea46e-3633-4d0b-9708-a790a73a92f8/artifacts/vyxu5zsv_f9c85a0a-f10d-4e19-847b-0f37a6bf8b39.jpeg"
];

export const menuData = {
    burgers: [
        {
            id: 1,
            name: "Herb Chilli Burger",
            price: "₹119",
            desc: "Spiced with aromatic herbs and green chillies for a bold kick.",
            img: new URL('./assets/Herb Chilli Burger (2).png', import.meta.url).href
        },
        {
            id: 2,
            name: "Exotic Island Burger",
            price: "₹159",
            desc: "A tropical explosion of flavors with a signature gourmet crunch.",
            img: new URL('./assets/Exotic Island Burger (2).png', import.meta.url).href
        }
    ],
    wrap: [
        {
            id: 301,
            name: "Falafel Crunch Wrap",
            price: "₹139",
            desc: "Mediterranean falafel meet crunchy veggies in our signature wrap.",
            img: new URL('./assets/Falafel Crunch Wrap 1.png', import.meta.url).href
        }
        // Duplicate "Falafal wrap.png" removed to maintain menu authority.
    ],
    beverages: [
        {
            id: 601,
            name: "Garlic Froast",
            price: "₹99",
            desc: "Our unique signature cold blend—refreshment with an edge.",
            img: new URL('./assets/Garlic Froast.png', import.meta.url).href
        }
    ],
    deals: [
        {
            id: 701,
            name: "Dil Dosti Combo",
            price: "₹499",
            desc: "The ultimate meal deal designed for sharing with your inner circle.",
            img: new URL('./assets/DSC_9427k.jpg', import.meta.url).href
        },
        {
            id: 702,
            name: "Meal Deal Signature",
            price: "₹349",
            desc: "A curated gourmet experience for those who want it all.",
            img: new URL('./assets/DSC_9429k.jpg', import.meta.url).href
        }
    ],
    special_collections: [
        { id: 801, name: "Premium Selection A", price: "₹249", desc: "Chef's special curated item.", img: new URL('./assets/DOC-20250902-WA0021_.png', import.meta.url).href },
        { id: 802, name: "Premium Selection B", price: "₹249", desc: "Chef's special curated item.", img: new URL('./assets/DOC-20250902-WA0022_.png', import.meta.url).href },
        { id: 803, name: "Premium Selection C", price: "₹249", desc: "Chef's special curated item.", img: new URL('./assets/DOC-20250902-WA0023_.png', import.meta.url).href }
    ]
};