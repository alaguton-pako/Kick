"use client";
import { useState } from "react";
import Image from "next/image";
import { Icons } from "./Icons";

const GamesCat = ({ imageSrc, gameTitle, isFirstCard = false }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Game Card */}
      <div
        className="col-span-4 h-[300px] flex flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Card image */}
        <div className="relative h-[80%] group">
          <Image
            src={imageSrc || "/biomutantLarge.png"}
            alt={gameTitle || "game"}
            fill
            className="rounded-t-lg object-cover group-hover:brightness-110 transition"
          />
          {isFirstCard && (
            <div className="absolute top-2 right-2 bg-[#253253]/90 backdrop-blur-sm py-2 px-4 flex items-center gap-2 rounded-lg text-sm">
              <Icons.Users className="w-4 h-4 text-white" />
              <span className="text-white">2464</span>
            </div>
          )}
        </div>

        {/* Card content */}
        <div className="flex-1 flex justify-between items-center bg-[#151C2F] p-4 rounded-b-lg">
          <div>
            <span className="px-3 py-1 rounded-lg bg-[#EA3D17] text-xs font-medium text-white">
              NEW
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-md font-medium text-white">
              {gameTitle || "BIOMUTANT"}
            </h1>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Icons.StarIcon key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="text-gray-400 hover:text-red-500 transition-colors">
            <Icons.Heart className="w-5 h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesCat;
