import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, XIcon } from "lucide-react";
import { Icons } from "./Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MobileSideBar() {
  const pathname = usePathname();
  const mainNavItems = [
    {
      name: "Kick Arcade",
      href: "/kick-arcade",
      icon: <Icons.Kickarcade />,
    },
    {
      name: "Kick Trivia",
      href: "/kick-trivia",
      icon: <Icons.Kicktrivia />,
    },
    {
      name: "Leaderboard",
      href: "/leaderboard",
      icon: <Icons.Leaderboard />,
    },
    {
      name: "Win & cash",
      href: "/win-cash",
      icon: <Icons.Wincash />,
    },
    {
      name: "Invite a freind",
      href: "/invite-freinds",
      icon: <Icons.Invitefreind />,
    },
    {
      name: "Support",
      href: "/support",
      icon: <Icons.Support />,
    },
  ];

  const bottomNavItems = [
    {
      name: "Profile",
      href: "/",
      icon: <Icons.Profile />,
    },
    {
      name: "Settings",
      href: "/",
      icon: <Icons.Settings />,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-2 bg-[#171E2F] rounded-lg">
          <MenuIcon size={18} color="white" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className="flex items-center justify-center mt-3 p-2">
          <Icons.Logo />
        </div>
        <div className="px-3 sm:px-8 bg-[#111829] flex flex-col gap-2 rounded-lg">
          {/* Bonus Card Section */}
          <div className="bg-[#171E2F] rounded-lg p-2 mb-2">
            <div className="mx-4 rounded-lg bg-[#171E2F]">
              <div className="flex items-center gap-3">
                <Icons.Coin />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-md text-white">
                    Bonus
                  </span>
                  <span className="text-[#616161] text-xs">
                    Get everyday extra points
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Main Navigation */}
          <div className="bg-[#171E2F] rounded-lg p-2 mb-2">
            <div className="flex-grow pb-1">
              <nav className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center pl-6 py-2 rounded-lg ${
                      pathname === item.href
                        ? "bg-[#FF197533] text-white"
                        : "text-gray-400 hover:bg-[#171E2F] hover:text-white"
                    }`}
                  >
                    <div className="mr-3">{item.icon}</div>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          {/* Bottom Navigation */}
          <div className="bg-[#171E2F] rounded-lg p-2">
            <div className="mt-auto pb-4">
              <nav className="space-y-1">
                {bottomNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      pathname === item.href
                        ? "bg-[#FF197533] text-white"
                        : "text-gray-400 hover:bg-[#171E2F] hover:text-white"
                    }`}
                  >
                    <div className="mr-3">{item.icon}</div>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
