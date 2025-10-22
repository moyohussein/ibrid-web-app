import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/connect.jpg')] bg-cover bg-no-repeat" />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]" />

      <div className="relative flex flex-col items-center justify-center px-6 py-12 text-white text-center">
        <div className="mb-6">
          <Image alt="logo-footer" height={40} src="/logo.png" width={40} />
        </div>

        <div className="max-w-md">
          <p className="mb-4">
            Ibrid is a business-oriented platform designed to seamlessly connect
            customers with brands, fostering deeper engagement and visibility.
          </p>

          <div className="h-px w-full bg-white/30 mb-4" />

          <p className="text-sm mb-4">
            &copy; {new Date().getFullYear()} - useibrid.com. All rights reserved.
          </p>

          <div className="h-px w-full bg-white/30 mb-4" />

          <div className="flex justify-center gap-6 mb-4">
            <Link className="hover:underline" href="/blog">
              AI
            </Link>
            <Link className="hover:underline" href="/about">
              Contact Us
            </Link>
            <Link className="hover:underline" href="/security">
              Security
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
