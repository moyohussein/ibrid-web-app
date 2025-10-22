"use client";

import { title } from "./primitives";

export default function HeroSection() {

  return (
    <div className="text-center max-w-4xl mx-auto animate-fade-in">
      <h1
        className={title({
          size: "md",
          color: "foreground",
          fullWidth: true,
        })}
        style={{ lineHeight: 1.2 }}
      >
        We believe e-commerce shouldn’t feel robotic. That’s why we’re giving it life through {" "}
        <span
          className="inline-block text-transparent bg-[#706FD3] bg-clip-text"
        >
          AI
        </span> {" "}
      </h1>
    </div>
  );
}
