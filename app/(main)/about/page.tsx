"use client";

import { useEffect, useState } from "react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1
              className={title({
                size: "sm",
                color: "foreground",
                fullWidth: true,
              })}
              style={{ lineHeight: 1.2 }}
            >
              In here, social commerce with real connection
            </h1>
            <p className="text-medium text-foreground/70 mt-8 max-w-4xl mx-auto leading-relaxed">
              Ibrid is a next-generation social e-commerce platform bridging
              buyers, brands, and local riders into one vibrant marketplace. We
              make it easier to shop, sell, earn, and connect logistics — all
              through the power of social connection and community-driven
              commerce.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold mb-3">5,000+</div>
              <div className="text-sm">Projected Users in Year 1</div>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold mb-3">1,000+</div>
              <div className="text-sm">
                Resellers Promoting Products Monthly
              </div>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl font-bold mb-3">3,000+</div>
              <div className="text-sm">Verified Brand Posts in First Year</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
