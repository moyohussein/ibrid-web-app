import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const carouselImages = [
  "/carousel-1.jpg",
  "/carousel-2.jpg",
  "/carousel-3.jpg",
  "/carousel-4.jpg",
  "/carousel-5.jpg",
  "/carousel-6.jpg",
  "/carousel-7.jpg",
  "/carousel-8.jpg",
  "/carousel-9.jpg",
  "/carousel-10.jpg",
  "/carousel-11.jpg",
  "/carousel-12.jpg",
  "/carousel-13.jpg",
  "/carousel-14.jpg",
];

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Create triple array for smoother infinite scroll
  const tripleImages = [
    ...carouselImages,
    ...carouselImages,
    ...carouselImages,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    let animationFrame: number;
    const scrollSpeed = 2;
    const cardWidth = 304; // 288px width + 16px gap
    const singleSetWidth = carouselImages.length * cardWidth;

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
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full py-8">
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
          {tripleImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group relative flex-shrink-0 w-72 h-80 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer mx-2"
            >
              <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <Image
                  fill
                  alt={`Showcase image ${(index % carouselImages.length) + 1}`}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 8}
                  sizes="288px"
                  src={image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
