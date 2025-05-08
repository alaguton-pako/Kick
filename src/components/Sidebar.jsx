"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";
import { ScrollArea } from "./ui/scroll-area";

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
    href: "/invite",
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
    href: "/profile",
    icon: <Icons.Profile />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <Icons.Settings />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden xl:flex xl:w-[320px] xl:flex-col xl:fixed xl:inset-y-0 border-r border-[#f8f8ff] px-6 h-screen relative">
      {/* Minimize Arrow Icon */}
      <div className="absolute top-6 right-[-15px] cursor-pointer">
      <Icons.ArrowIn />
      </div>
      {/* Logo at top */}
      <div className="flex items-center justify-center py-6 px-4">
        <Icons.Logo />
      </div>

      <ScrollArea className="p-3 bg-[#111829] flex flex-col gap-3 rounded-lg">
        {/* Bonus Card Section */}
        <div className="bg-[#171E2F] rounded-lg p-2">
          <div className="mx-4 rounded-lg bg-[#171E2F]">
            <div className="flex justify-between items-center">
              <Icons.Coin />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-md text-white">Bonus</span>
                <span className="text-[#616161] text-xs">
                  Get everyday extra points
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation */}
        <div className="bg-[#171E2F] rounded-lg p-2">
          <div className="flex-grow pb-2">
            <nav className="space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center pl-6 py-3 rounded-lg ${
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
          <div className="mt-auto pb-6">
            <nav className="space-y-2">
              {bottomNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg ${
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
      </ScrollArea>
    </div>
  );
}
