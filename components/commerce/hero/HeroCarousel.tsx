"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper types

const HeroCarousel = (): JSX.Element => {
  const handleShopNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Add navigation logic here
    // router.push('/shop');
  };

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      className="hero-carousel"
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      spaceBetween={30}
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-[#706FD3]">
                IBRID AI
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <Link className="hover:text-blue transition-colors duration-200" href="/products/true-wireless-headphone">
                True Wireless Noise Cancelling Headphone
              </Link>
            </h1>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in
            </p>

            <Link
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              href="/shop"
              role="button"
              tabIndex={0}
              onClick={handleShopNow}
              onKeyDown={(e) => e.key === 'Enter' && handleShopNow(e as any)}
            >
              Shop Now
            </Link>
          </div>

          <div>
            <Image
              alt="headphone"
              height={358}
              src="/images/hero/hero-01.png"
              width={351}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                IBRID AI
              </span>
                          </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <Link className="hover:text-blue transition-colors duration-200" href="/products/true-wireless-headphone">
                True Wireless Noise Cancelling Headphone
              </Link>
            </h1>

            <p>
              Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum
              nec suscipit.
            </p>

            <Link
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              href="/shop"
              role="button"
              tabIndex={0}
              onClick={handleShopNow}
              onKeyDown={(e) => e.key === 'Enter' && handleShopNow(e as any)}
            >
              Shop Now
            </Link>
          </div>

          <div>
            <Image
              alt="headphone"
              height={358}
              src="/images/hero/hero-01.png"
              width={351}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
