'use client'
import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="relative z-1 overflow-hidden rounded-lg bg-[#F5F5F7] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Apple iPhone 14 Plus
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              UP TO 30% OFF
            </h2>

            <p>
              iPhone 14 has the same superspeedy chip that’s in iPhone 13 Pro,
              A15 Bionic, with a 5‑core GPU, powers all the latest features.
            </p>

            <button
              aria-label="Buy Now"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="button"
              onClick={() => {
                // Add buy now logic here
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Add buy now logic here
                }
              }}
            >
              Buy Now
            </button>
          </div>

          <Image
            alt="promo img"
            className="absolute bottom-0 right-4 lg:right-26 -z-1"
            height={350}
            src="/images/promo/promo-01.png"
            width={274}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
              height={241}
              src="/images/promo/promo-02.png"
              width={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Foldable Motorised Treadmill
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Workout At Home
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                Flat 20% off
              </p>

              <button
                aria-label="Grab Now"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                type="button"
                onClick={() => {
                  // Add grab now logic here
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Add grab now logic here
                  }
                }}
              >
                Grab Now
              </button>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              height={200}
              src="/images/promo/promo-03.png"
              width={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Apple Watch Ultra
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Up to <span className="text-orange">40%</span> off
              </h2>

              <p className="max-w-[285px] text-custom-sm">
                The aerospace-grade titanium case strikes the perfect balance of
                everything.
              </p>

              <button
                aria-label="Shop Now"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                type="button"
                onClick={() => {
                  // Add shop now logic here
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Add shop now logic here
                  }
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
