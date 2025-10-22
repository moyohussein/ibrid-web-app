interface FeatureItem {
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
  reversed?: boolean;
  subtitle?: string;
}

export const userType = [
  { key: "myself", label: "MySelf" },
  { key: "individual", label: "Individual" },
];

export const aboutFeatures: FeatureItem[] = [
  {
    description:
      "Let your customers explore and connect with your products through detailed showcases and interactive features. Build meaningful relationships between your business and potential customers with engaging presentations that drive conversions.",
    imageAlt: "Social Shopping Discovery",
    imageSrc: "/sell.svg",
    title: "Sell what you have, buy what you need",
  },
  {
    description:
      "Enjoy intentional savings on most items you buy. Ibrid connects you with trusted sellers offering fair prices, real-time feedback, and secure delivery, all designed to ease the effects of inflation and put more value in your hands.",
    imageAlt: "Social Shopping Discovery",
    imageSrc: "/discount.svg",
    reversed: true,
    title: "Get 0.5–2.5% Discount on Products on Ibrid",
  },
  {
    description:
      "Strengthen your market position by connecting directly with your customers. Track engagement patterns, understand your audience better, and create personalized experiences that maximize your competitive advantage.",
    imageAlt: "Community Commerce Platform",
    imageSrc: "/track.svg",
    title: "Keep Track of Your Customers",
  },
  {
    description:
      "Experience advanced rating systems that go beyond simple stars. Our platform provides comprehensive reviews, verified testimonials, and intelligent recommendations to build trust and help customers make confident decisions.",
    imageAlt: "Social Sharing Platform",
    imageSrc: "/rating-2.svg",
    reversed: true,
    subtitle: "RATE, REFER, AND ENDORSE",
    title: "Rating Just Got Better!",
  },
  {
    description:
      "Integrate seamlessly with any logistics provider through our flexible delivery network. Reach multiple delivery patterns by chosing your preferred dispatch to experience hassle-free service.",
    imageAlt: "Connect any Logistics",
    imageSrc: "/logistics.svg",
    title: "Connect Any Logistics",
  },
  {
    description:
      "Protect your brand and customer data with enterprise-grade security infrastructure. Advanced encryption, secure payments, and comprehensive data protection ensure your business operations remain safe and trustworthy.",
    imageAlt: "Future of Social Commerce",
    imageSrc: "/security.svg",
    reversed: true,
    title: "Safe and Secure",
  },
];

export const categories = [
  {
    key: "vehicles",
    title: "🚗 Vehicles",
    items: [
      { key: "cars", label: "Cars" },
      { key: "motorcycles", label: "Motorcycles & Scooters" },
      { key: "trucks", label: "Trucks & Buses" },
      { key: "vehicle-parts", label: "Vehicle Parts & Accessories" },
      { key: "boats", label: "Boats & Watercraft" },
    ],
  },
  {
    key: "property",
    title: "🏠 Property",
    items: [
      { key: "houses-sale", label: "Houses for Sale" },
      { key: "houses-rent", label: "Houses for Rent" },
      { key: "land", label: "Land & Plots" },
      { key: "commercial", label: "Commercial Property" },
      { key: "short-let", label: "Short Let & Vacation Homes" },
    ],
  },
  {
    key: "mobile",
    title: "📱 Mobile Phones & Tablets",
    items: [
      { key: "smartphones", label: "Smartphones" },
      { key: "tablets", label: "Tablets" },
      {
        key: "mobile-accessories",
        label: "Accessories (Chargers, Cables, Power Banks)",
      },
      { key: "smartwatches", label: "Smart watches & Wearables" },
    ],
  },
  {
    key: "electronics",
    title: "💻 Electronics",
    items: [
      { key: "laptops", label: "Laptops & Computers" },
      { key: "tvs", label: "TVs & Audio Systems" },
      { key: "cameras", label: "Cameras & Drones" },
      { key: "gaming", label: "Gaming Consoles" },
      { key: "home-appliances", label: "Home Appliance" },
    ],
  },
  {
    key: "furniture",
    title: "🛋 Home, Furniture & Appliances",
    items: [
      { key: "sofas", label: "Sofas & Chairs" },
      { key: "beds", label: "Beds & Mattresses" },
      { key: "tables", label: "Tables & Cabinets" },
      { key: "kitchen", label: "Kitchen Appliances" },
      { key: "decor", label: "Decor & Lighting" },
    ],
  },
  {
    key: "leisure",
    title: "🛍️ Leisure, Hobbies & Activities",
    items: [
      { key: "gym", label: "Gym & Fitness Equipment" },
      { key: "books", label: "Books & Stationery" },
      { key: "outdoor", label: "Outdoor Gear" },
    ],
  },
  {
    key: "services",
    title: "👥 Services",
    items: [
      { key: "home-services", label: "Home Services (Plumbing, Cleaning)" },
      { key: "events", label: "Events & Catering" },
      { key: "business", label: "Business Support" },
      { key: "health", label: "Health & Wellness" },
      { key: "it-support", label: "IT & Tech Support" },
    ],
  },
  {
    key: "babies",
    title: "🧮 Babies & Kids",
    items: [
      { key: "kids-clothing", label: "Clothing & Shoes" },
      { key: "toys", label: "Toys & Games" },
      { key: "baby-gear", label: "Baby Gear (Strollers, Car Seats)" },
      { key: "baby-food", label: "Baby Food & Care" },
      { key: "school", label: "School Essentials" },
    ],
  },
  {
    key: "food",
    title: "🥕 Food, Agriculture & Natural Products",
    items: [
      { key: "produce", label: "Fresh Produce" },
      { key: "packaged-foods", label: "Packaged Foods" },
      { key: "livestock", label: "Livestock" },
      { key: "agricultural-tools", label: "Agricultural Tools" },
      { key: "organic", label: "Organic & Herbal Products" },
    ],
  },
  {
    key: "commercial",
    title: "🧰 Commercial Equipment & Tools",
    items: [
      { key: "manufacturing", label: "Manufacturing Tools" },
      { key: "restaurant", label: "Restaurant Equipment" },
      { key: "industrial", label: "Industrial Machines" },
    ],
  },
  {
    key: "construction",
    title: "🛠️ Repair & Construction",
    items: [
      { key: "building-materials", label: "Building Materials" },
      { key: "tools", label: "Tools & Equipment" },
      { key: "construction-services", label: "Construction Services" },
      { key: "electrical", label: "Electrical & Plumbing Supplies" },
      { key: "safety", label: "Safety Gear" },
    ],
  },
];
