import NextLink from "next/link";
import { Button } from "@heroui/button";

import { BackIcon } from "../../icons";

import AuthCarousel from "./auth-carousel";

export default function AuthleftSide() {
  return (
    <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-[#706FD3]/30">
      <div className="absolute top-4 left-4 z-20">
        <Button
          isIconOnly
          aria-label="back-home"
          as={NextLink}
          href="/"
          variant="flat"
        >
          <BackIcon size={18} />
        </Button>
      </div>
      <AuthCarousel />
    </div>
  );
}
