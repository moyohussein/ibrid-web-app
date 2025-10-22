"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl font-bold text-dark mb-2">
      {value.toString().padStart(2, '0')}
    </div>
    <span className="text-sm text-dark">{label}</span>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const deadline = new Date("December 31, 2024 23:59:59").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
          hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
          minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
          seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    calculateTimeLeft(); // Initial calculation

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-1 rounded-lg bg-[#D0E9F3] p-4 sm:p-7.5 lg:p-10 xl:p-15">
          <div className="max-w-[422px] w-full">
            <span className="block font-medium text-custom-1 text-blue mb-2.5">
              Don&apos;t Miss!!
            </span>

            <h2 className="font-bold text-dark text-xl lg:text-heading-4 xl:text-heading-3 mb-3">
              Enhance Your Music Experience
            </h2>

            <p className="text-dark mb-6">The Havit H206d is a wired PC headphone.</p>

            {/* Countdown timer */}
            <div className="flex flex-wrap gap-6 mt-6">
              <CountdownTimer label="Days" value={timeLeft.days} />
              <CountdownTimer label="Hours" value={timeLeft.hours} />
              <CountdownTimer label="Mins" value={timeLeft.minutes} />
              <CountdownTimer label="Secs" value={timeLeft.seconds} />
            </div>

            <Link
              className="inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-md border border-blue bg-blue text-white ease-out duration-200 hover:bg-blue-dark hover:border-blue-dark mt-8"
              href="/shop-with-sidebar"
            >
              Shop Now
            </Link>
          </div>

          <div className="absolute right-0 bottom-0 z-[-1] w-1/2 max-w-[500px]">
            <Image
              priority
              alt="Headphone product image"
              className="w-full"
              height={500}
              src="/images/products/product-1-bg-1.png"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
