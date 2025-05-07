"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Icons } from "./Icons";
import CustomButton from "./ui/CustomButton";
import AddFavButton from "./AddFavButton";
import Rating from "./Rating";
import Image from "next/image";

const items = [
  {
    title: "Ruined King",
    description:
      "There's a lot to learn about LoL, so we'll start with the essentials. Explore the guide below for an overview of the most popular game mode",
  },
  {
    title: "Battle for Runeterra",
    description:
      "Choose your champions and lead the charge in a legendary conflict spanning the continent.",
  },
  {
    title: "The Spirit Realm",
    description:
      "Enter a mystical world where the balance between light and dark hangs by a thread.",
  },
];

export const CarouselSection = () => {
  return (
    <div className="w-full my-2">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        className="w-full relative"
      >
        <CarouselContent className="">
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-[100%] sm:basis-[70%]">
              <div className="h-[400px] rounded-xl p-9 bg-gradient-to-br from-[#0d3b3f] via-[#113a60] to-[#0b0c2a] shadow-lg text-white flex flex-col justify-between relative">
                {/* Rating in top-left corner */}
                <div className="absolute top-0 left-0 -translate-x-2 -translate-y-2 z-10">
                  <Rating />
                </div>

                {/* Side-by-side background images */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <div className="flex items-center">
                    <div className="">
                      <Image
                        src="/monsterReal.png"
                        alt="Background 1"
                        height={3500}
                        width={1500}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/ruinedBanner.png"
                        alt="Background 2"
                        height={1000}
                        width={1000}
                      />
                    </div>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Free to play tag */}
                  <div className="flex justify-end items-center">
                    <span className="bg-[#428194] py-2 px-5 rounded-full text-xs italic">
                      Free to play
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="h-full flex flex-col justify-end">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-3xl font-semibold mb-2">
                        {item.title}
                      </h2>
                      <p className="text-xs text-white/80 max-w-[50%]">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs">Reviews 3,4k</span>
                          <div className="flex items-center gap-1">
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                            <Icons.StarIcon />
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <CustomButton text="PLAY NOW" />
                          <AddFavButton />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
