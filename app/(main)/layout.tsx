import Footer from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      {/* container mx-auto max-w-7xl flex-grow */}
      <main className="px-6 bg-black">{children}</main>
      <Footer />
    </div>
  );
}
