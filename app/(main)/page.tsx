import Hero from "@/components/commerce/hero";
import Categories from "@/components/commerce/categories";
import NewArrival from "@/components/commerce/new-arrivals";
import PromoBanner from "@/components/commerce/promo-banner";
import Countdown from "@/components/commerce/countdown";
import Newsletter from "@/components/commerce/newsletter";
import Testimonials from "@/components/commerce/testimonials/index";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <Countdown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
