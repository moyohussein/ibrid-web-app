import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Connect with any logistics provider",
    description: "Bargain delivery prices effortlessly",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Refer & Share",
    description: "Recommend products you trust to friends and family.",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Safe & Secure",
    description: "Ibrid ensures that every product you buy is genuine and trusted.",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Dedicated Support",
    description: "Connect with us for quick and reliable assistance.",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="grid grid-cols-4 gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex gap-4" key={key}>
            <Image src={item.img} alt="icons" width={36} height={36} className="max-w-9 max-h-9" />

            <div>
              <h3 className="font-medium text-dark">{item.title}</h3>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
