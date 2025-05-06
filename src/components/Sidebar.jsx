"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./Icons";

const mainNavItems = [
  {
    name: "Kick Arcade",
    href: "/kick",
    icon: <Icons.Kickarcade />,
  },
  {
    name: "Kick Trivia",
    href: "/kicktrivia",
    icon: <Icons.Kicktrivia />,
  },
  {
    name: "Leaderboard",
    href: "/leaderboard",
    icon: <Icons.Leaderboard />,
  },
  {
    name: "Win & cash",
    href: "/wincash",
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
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-[#111829]">
      {/* Logo at top */}
      <div className="flex items-center justify-center py-6 px-4">
        <Icons.Logo />
      </div>

      {/* Bonus Card Section */}
      <div className="mx-4 mb-6 p-4 rounded-lg bg-[#171E2F]">
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">Bonus</span>
          <div className="flex items-center">
            <span className="text-yellow-400 font-bold mr-2">500</span>
            <Icons.Wincash />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-grow px-4 pb-4">
        <nav className="space-y-2">
          {mainNavItems.map((item) => (
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

      {/* Bottom Navigation */}
      <div className="mt-auto px-4 pb-6">
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
  );
}
