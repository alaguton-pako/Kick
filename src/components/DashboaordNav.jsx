"use client";

import { SearchIcon } from "lucide-react";
import CustomInput from "./ui/CustomInput";
import { Icons } from "./Icons";

export function DashboardNav() {
  return (
    <header className="mt-4 flex items-center justify-between">
      {/* Time and Date */}
      <div className="flex flex-col gap-3 text-sm">
        <p className="text-[#AFAFAF] ">GMT-02:48</p>
        <p className="text-[#AFAFAF] ">12/04/24</p>
      </div>

      {/* Right Side - Search, Notification, Avatar, Arrow */}
      <div className="flex items-center gap-6">
        {/* Search Box */}
        <div className="relative w-[300px] max-w-[500px]">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon size={18} />
          </span>
          <CustomInput
            placeholder="Search"
            className="bg-[#171E2F] border border-[#171E2F] text-white pl-10 pr-4 py-2 w-full rounded-lg"
          />
        </div>
        {/* Notification */}
        <div className="p-2 bg-[#171E2F] rounded-lg">
          <Icons.Notification />
        </div>
        {/* Avatar */}
        <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
          <Icons.Deadpool />
        </div>
        {/* Arrow */}
        <div>
          <Icons.ArrowDown />
        </div>
      </div>
    </header>
  );
}
