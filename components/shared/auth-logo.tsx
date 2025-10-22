import Image from "next/image";

export default function AuthLogo() {
  return (
    <div className="mx-auto w-full max-w-20 mb-5">
      <Image alt="logo-footer" height={60} src="/logo.png" width={60} />
    </div>
  );
}
