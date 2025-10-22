"use client";

import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  gradient: string;
}

export default function FeatureCard({
  title: cardTitle,
  description,
  icon,
  gradient,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Card
      className="group relative bg-default-50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardBody className="p-8">
        <div
          className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="relative mb-6">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center transform transition-transform duration-500 ${isHovered ? "scale-110 rotate-3" : ""}`}
          >
            <span className="text-white text-2xl">{icon}</span>
          </div>
        </div>

        <div className="relative space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-[#706FD3] transition-colors duration-300">
            {cardTitle}
          </h3>
          <p className="text-default-600 group-hover:text-default-700 transition-colors duration-300 text-[14px]">
            {description}
          </p>

          <Button
            isIconOnly
            className={`${isHovered ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
            size="sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
