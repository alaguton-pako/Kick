import { Sidebar } from "@/components/Sidebar";
import { DashboardNav } from "@/components/DashboaordNav";
export const metadata = {
  title: "Dashboard",
  description: "Your application dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardNav />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
