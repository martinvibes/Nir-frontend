import Sidebar from "@/components/layout/Sidebar";
import type { ReactNode } from "react";
import Header from "@/components/Header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#050607] text-[#E3F6F7]">
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-h-screen flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
