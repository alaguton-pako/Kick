import { Sidebar } from "@/components/Sidebar";
import { DashboardNav } from "@/components/DashboaordNav";
export const metadata = {
  title: "Kick",
  description: "kick application dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="px-6 flex-1 flex flex-col overflow-hidden xl:ml-[320px]">
        <DashboardNav />
        <main className="flex-1 overflow-y-auto mt-12">
          {children}
        </main>
      </div>
    </div>
  );
}

