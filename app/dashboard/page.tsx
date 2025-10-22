import ProductImageCarousel, {
  CarouselItem,
} from "@/components/shared/product-carousel";

// Complete carousel data for the MartPage
const martCarouselData: CarouselItem[] = [
  {
    image: "/carousel-1.jpg",
    name: "Premium Electronics",
    description: "Latest gadgets and technology for your modern lifestyle",
  },
  {
    image: "/carousel-2.jpg",
    name: "Fashion & Style",
    description: "Trendy clothing and accessories for every occasion",
  },
  {
    image: "/carousel-3.jpg",
    name: "Home & Garden",
    description: "Transform your living space with our home essentials",
  },
  {
    image: "/carousel-4.jpg",
    name: "Sports & Fitness",
    description: "Gear up for your active lifestyle and fitness goals",
  },
  {
    image: "/carousel-5.jpg",
    name: "Books & Education",
    description: "Expand your knowledge with our extensive book collection",
  },
  {
    image: "/carousel-6.jpg",
    name: "Automotive Parts",
    description: "Quality car parts and accessories for all vehicle types",
  },
  {
    image: "/carousel-7.jpg",
    name: "Beauty & Wellness",
    description: "Self-care products for your health and beauty routine",
  },
  {
    image: "/carousel-8.jpg",
    name: "Kitchen Essentials",
    description: "Cooking tools and appliances for culinary excellence",
  },
  {
    image: "/carousel-9.jpg",
    name: "Baby & Kids",
    description: "Safe and fun products for your little ones",
  },
  {
    image: "/carousel-10.jpg",
    name: "Pet Supplies",
    description: "Everything your furry friends need to stay happy",
  },
  {
    image: "/carousel-11.jpg",
    name: "Office Supplies",
    description: "Professional tools for productivity and organization",
  },
  {
    image: "/carousel-12.jpg",
    name: "Outdoor Adventure",
    description: "Gear for camping, hiking, and outdoor exploration",
  },
  {
    image: "/carousel-13.jpg",
    name: "Art & Crafts",
    description: "Creative supplies for artistic expression and DIY projects",
  },
  {
    image: "/carousel-14.jpg",
    name: "Musical Instruments",
    description: "Quality instruments for musicians of all skill levels",
  },
];

export default function MartPage() {
  const featuredProducts: CarouselItem[] = martCarouselData.slice(0, 7);
  const newArrivals: CarouselItem[] = martCarouselData.slice(7, 14);
  const bestSellers: CarouselItem[] = martCarouselData.slice(0, 8);
  const specialOffers: CarouselItem[] = martCarouselData.slice(6, 13);

  return (
    <div className="min-h-screen">
      <div className="space-y-12">
        <ProductImageCarousel data={featuredProducts} />
        <ProductImageCarousel data={newArrivals} />
        <ProductImageCarousel data={bestSellers} />
        <ProductImageCarousel data={specialOffers} />
      </div>
    </div>
  );
}
