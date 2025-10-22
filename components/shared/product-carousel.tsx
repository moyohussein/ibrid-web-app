"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type CarouselItem = {
  image: string;
  name: string;
  description: string;
};

interface ProductImageCarouselProps {
  title?: string;
  data: CarouselItem[];
}

// Default fallback data in case none is provided
const defaultCarouselData: CarouselItem[] = [
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
];

export default function ProductImageCarousel({
  title,
  data = defaultCarouselData,
}: ProductImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Create triple array for smoother infinite scroll
  const tripleImages: CarouselItem[] = [...data, ...data, ...data];

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    let animationFrame: number;
    const scrollSpeed = 2;
    const cardWidth = 304; // 288px width + 16px gap
    const singleSetWidth = data.length * cardWidth;

    const scroll = () => {
      if (!isHovered && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset when we've scrolled past the second set (into the third set)
        if (scrollContainer.scrollLeft >= singleSetWidth * 2) {
          scrollContainer.scrollLeft = singleSetWidth;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    // Set initial position to the middle set to allow smooth looping
    scrollContainer.scrollLeft = singleSetWidth;
    animationFrame = requestAnimationFrame(scroll);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isHovered, data.length]);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    setHoveredIndex(null);
  };

  const handleCardHover = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleCardLeave = (): void => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative w-full py-8">
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 px-4">
          {title}
        </h2>
      )}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden pb-4 -mx-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {tripleImages.map((item: CarouselItem, index: number) => {
            const isHoveredCard = hoveredIndex === index;

            return (
              <div
                key={`${item.image}-${index}`}
                className="group relative flex-shrink-0 w-72 h-80 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer mx-2"
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <Image
                    fill
                    alt={item.name}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 8}
                    sizes="288px"
                    src={item.image}
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text overlay */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 ease-out ${
                      isHoveredCard
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2 transform transition-transform duration-500 delay-100">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed transform transition-transform duration-500 delay-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
