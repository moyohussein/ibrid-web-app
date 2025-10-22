"use client";

import NextLink from "next/link";
import { Search, Tag } from "lucide-react";
import { FaOpencart } from "react-icons/fa6";
import { RiMessage3Line, RiNotification3Line } from "react-icons/ri";
import { Button } from "@heroui/button";
import { Select, SelectItem, SelectSection } from "@heroui/select";
import { Input } from "@heroui/input";

import { Logo } from "../icons";

import { categories } from "@/data";

const navigationItems = [
  {
    icon: FaOpencart,
    label: "Mart",
    hasNotification: false,
  },
  {
    icon: Tag,
    label: "Brand",
    hasNotification: false,
  },
  {
    icon: RiMessage3Line,
    label: "Message",
    hasNotification: true,
  },
  {
    icon: RiNotification3Line,
    label: "Feedback",
    hasNotification: false,
  },
];

export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800 px-14 py-3 flex items-center">
      <div className="flex items-center justify-between w-full">
        {/* Logo + Text */}
        <div className="flex items-center space-x-2">
          <NextLink className="flex justify-center items-center gap-2" href="/">
            <Logo size={25} />
            <p className="font-bold text-xl">Ibrid</p>
          </NextLink>
        </div>

        {/* Middle Section: Category Select + Search */}
        <div className="flex items-center space-x-3 flex-1 max-w-2xl mx-8">
          <Select
            className="w-52"
            classNames={{
              trigger: "bg-black text-white",
              value: "text-white",
              popoverContent: "bg-gray-950 border-gray-300",
            }}
            placeholder="All Category"
            variant="bordered"
          >
            {categories.map((category) => (
              <SelectSection
                key={category.key}
                aria-label={category.key}
                title={category.title}
              >
                {category.items.map((item) => (
                  <SelectItem key={item.key}>{item.label}</SelectItem>
                ))}
              </SelectSection>
            ))}
          </Select>

          <Input
            className="flex-1"
            classNames={{
              input: "text-gray-800 placeholder:text-gray-400",
              inputWrapper:
                "bg-white border-gray-600 hover:border-gray-500 rounded-xl",
            }}
            placeholder="What do you want to buy today..."
            startContent={<Search className="w-4 h-4 text-gray-400" />}
            variant="bordered"
          />
        </div>

        {/* Right Section: Navigation Items */}
        <div className="flex items-center">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <Button
                key={item.label}
                className={`flex items-center text-gray-300 hover:text-white ${
                  item.hasNotification && "relative"
                }`}
                variant="light"
              >
                <IconComponent className="w-5 h-5" />
                <span>{item.label}</span>
                {item.hasNotification && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
