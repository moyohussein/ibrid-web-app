"use client";

// import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between bg-black">
      {/* <div className="hidden lg:flex min-w-[90px] min-h-screen">
        <Sidebar />
      </div> */}
      <main className="grid w-full h-full">
        <Header />
        <div className="p-6 bg-black h-full overflow-y-auto max-h-[calc(100vh-73px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
