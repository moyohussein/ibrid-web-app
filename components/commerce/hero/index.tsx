import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

                <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
                  <div className="max-w-[60%] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
                    <div className="flex items-center gap-4 mb-1">
                      <span className="block font-semibold text-heading-3 sm:text-heading-2 text-[#706FD3]">
                        IBRID AI
                      </span>
                    </div>
        
                    <h1 className="font-semibold text-dark text-xl sm:text-xl mb-3">
                      <a href="#">
                        Activate AI Mode and experience a smarter way to shop.
                        Let our intelligent assistant help you find, compare, and buy effortlessly.
                      </a>
                    </h1>
        
                    <p>
                      Activate AI Mode where your e-commerce journey feels human, not robotic.
                    </p>
        
                    <a
                      href="#"
                      className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10"
                    >
                      Activate AI Mode
                    </a>
                  </div>
        
                  <div>
                    <Image
                      src="/images/hero/hero-01.png"
                      alt="headphone"
                      width={351}
                      height={358}
                    />
                  </div>
                </div>
            </div>
          </div>

          {/* <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> iPhone 14 Plus & 14 Pro Max </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          $699
                        </span>
                        <span className="font-medium text-2xl text-dark-4 line-through">
                          $999
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/hero-02.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl mb-20">
                      <a href="#"> Wireless Headphone </a>
                    </h2>

                    <div>
                      <p className="font-medium text-dark-4 text-custom-sm mb-1.5">
                        limited time offer
                      </p>
                      <span className="flex items-center gap-3">
                        <span className="font-medium text-heading-5 text-red">
                          $699
                        </span>
                        <span className="font-medium text-2xl text-dark-4 line-through">
                          $999
                        </span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/hero/hero-01.png"
                      alt="mobile image"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>

              
            </div>
          </div> */}
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
