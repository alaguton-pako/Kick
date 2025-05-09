"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "./Icons";
import CustomButton from "./ui/CustomButton";

const GameCatMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gamesData = {
    "All Games": [
      {
        imageSrc: "/biomutantLarge.png",
        gameTitle: "BIOMUTANT",
      },
      {
        imageSrc: "/DyingLight3.png",
        gameTitle: "DYING LIGHT",
      },
      {
        imageSrc: "/arcadegeon.png",
        gameTitle: "ARCADEGEDDON",
      },
    ],
    Action: [
      {
        imageSrc: "/biomutantLarge.png",
        gameTitle: "BIOMUTANT",
      },
      {
        imageSrc: "/DyingLight3.png",
        gameTitle: "DYING LIGHT",
      },

      {
        imageSrc: "/arcadegeon.png",
        gameTitle: "ARCADEGEDDON",
      },
    ],
    Puzzle: [
      {
        imageSrc: "/biomutantLarge.png",
        gameTitle: "BIOMUTANT",
      },
      {
        imageSrc: "/DyingLight3.png",
        gameTitle: "DYING LIGHT",
      },

      {
        imageSrc: "/arcadegeon.png",
        gameTitle: "ARCADEGEDDON",
      },
    ],
    Racing: [
      {
        imageSrc: "/biomutantLarge.png",
        gameTitle: "BIOMUTANT",
      },
      {
        imageSrc: "/DyingLight3.png",
        gameTitle: "DYING LIGHT",
      },

      {
        imageSrc: "/arcadegeon.png",
        gameTitle: "ARCADEGEDDON",
      },
    ],
    Adventure: [
      {
        imageSrc: "/biomutantLarge.png",
        gameTitle: "BIOMUTANT",
      },
      {
        imageSrc: "/DyingLight3.png",
        gameTitle: "DYING LIGHT",
      },

      {
        imageSrc: "/arcadegeon.png",
        gameTitle: "ARCADEGEDDON",
      },
    ],
  };

  return (
    <>
      {Object.entries(gamesData).map(([category, games]) => (
        <div key={category}>
          <span className="text-sm text-white">{category}</span>
          <div className="flex flex-col gap-4 mt-4 mb-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="w-full h-[300px] flex flex-col cursor-pointer hover:transition-transform duration-200 md:hidden"
                onClick={() => setIsModalOpen(true)}
              >
                {/* Card image */}
                <div className="relative h-[80%] group">
                  <Image
                    src={game.imageSrc}
                    alt={game.gameTitle}
                    fill
                    className="rounded-t-lg object-cover group-hover:brightness-110 transition"
                  />
                  {index === 0 && (
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
                      {game.gameTitle}
                    </h1>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icons.StarIcon
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-400 hover:text-red-500 transition-colors">
                    <Icons.Heart className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="shadow-lg max-w-[80%] flex h-[80vh]">
            <div className="hidden md:block flex-1 relative h-full">
              <Image
                src="/monsterPrev.png"
                alt="Game preview"
                fill
                className="object-contain"
              />
            </div>
            <div className="h-full flex justify-center items-center md:flex-1">
              <div className="rounded-lg bg-white p-8 flex flex-col gap-4 md:rounded-none">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg text-[#060D1F] bungee">
                    🎮 BIOMUTANT
                  </h1>
                  <div
                    className="hover:cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <Icons.CloseIcon />
                  </div>
                </div>
                <div>
                  <Image
                    src={"/biomutantLarge.png"}
                    height={300}
                    width={300}
                    alt="image"
                  />
                </div>
                <p className="font-semibold text-[#060D1F] bungee">
                  Get ready to fight, mutate, and survive!
                </p>
                <p className="text-[#060D1F] text-sm">
                  Dive into the post-apocalyptic world of Biomutant — an
                  action-packed arcade game where your skills evolve with every
                  battle.
                </p>
                <div className="flex items-center justify-center md:justify-start">
                  <CustomButton text="PLAY NOW" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameCatMobile;
