import { useEffect, useState } from "react";
import Image from "next/image";

const carouselImages = [
  "/showcase-1.jpg",
  "/showcase-2.jpg",
  "/showcase-3.jpeg",
  "/showcase-4.jpeg",
  "/showcase-5.jpeg",
  "/showcase-6.jpg",
  "/showcase-7.jpg",
  "/showcase-8.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-80" : "opacity-0"
          } z-10`}
        >
          <div className="relative w-[30rem] h-[45rem] rounded-xl overflow-hidden shadow-2xl">
            <Image
              fill
              alt={`Business image ${index + 1}`}
              className="object-cover"
              priority={index === 0}
              sizes="400px"
              src={image}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
