"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Store,
  Search,
  Crown,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import { Button } from "@heroui/button";

import { Logo } from "../icons";

const sideNavItems = [
  { icon: Store, label: "Mart", path: "/dashboard", id: "mart" },
  { icon: Search, label: "Search", path: "/dashboard/search", id: "search" },
  { icon: Crown, label: "Brand", path: "/dashboard/brand", id: "brand" },
  { icon: MessageCircle, label: "Chat", path: "/dashboard/chat", id: "chat" },
  {
    icon: MessageSquare,
    label: "Feedback",
    path: "/dashboard/feedback",
    id: "feedback",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed flex flex-col w-24 min-w-24 min-h-screen bg-black border-r border-gray-800 shadow-lg">
      <div className="p-3 border-b border-gray-800 flex justify-center">
        <Logo size={25} />
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {sideNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <li key={item.id}>
                <Link href={item.path}>
                  <Button
                    className={`w-12 h-14 flex flex-col items-center justify-center text-gray-300 hover:text-white ${
                      isActive ? "bg-blue-600/20 text-blue-400" : ""
                    }`}
                    color={isActive ? "primary" : "default"}
                    variant={isActive ? "flat" : "light"}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
