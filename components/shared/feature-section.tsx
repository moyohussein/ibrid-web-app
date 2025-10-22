"use client";

import { Card, CardBody } from "@heroui/card";
import Image from "next/image";

import { PlaceholderImage } from "../icons";

import { title, subtitle } from "@/components/primitives";

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
  imageAlt: string;
  reversed?: boolean;
  qrCode?: boolean;
}

export default function FeatureSection({
  title: sectionTitle,
  subtitle: sectionSubtitle,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  return (
    <section
      className={`py-20 px-6 max-w-7xl mx-auto ${reversed ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row items-center gap-12`}
    >
      <div className="flex flex-col flex-1 gap-y-6">
        <h2 className={title({ size: "sm" })}>{sectionTitle}</h2>

        <p className="text-base text-default-600 leading-relaxed">
          {description}
        </p>

        {sectionSubtitle && (
          <p className={subtitle({ fullWidth: true })}>{sectionSubtitle}</p>
        )}
      </div>

      <div className="flex-1 flex justify-center">
        <Card className="relative shadow-2xl w-full max-w-md bg-transparent">
          <CardBody className="p-6">
            {imageSrc ? (
              <div className="relative w-full aspect-[4/3] max-w-[420px] mx-auto">
                <Image
                  fill
                  alt={imageAlt}
                  className="object-contain rounded-lg"
                  src={imageSrc}
                />
              </div>
            ) : (
              <div className="w-full aspect-[4/3] max-w-[320px] mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-8 h-8 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <PlaceholderImage className="scale-75" />
                  </div>
                  <p className="font-semibold text-lg">{imageAlt}</p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
