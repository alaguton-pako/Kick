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
import mask from "../../public/perfectBg.webp";
import monsterReal from "../../public/monsterReal.png";
import fortnite from "../../public/fortnite.png";
import runied from "../../public/ruinedBanner.png";

const items = [
  {
    title: "Ruined King",
    description:
      "There's a lot to learn about LoL, so we'll start with the essentials. Explore the guide below for an overview of the most popular game mode",
    ratingBg: "red",
    hero: monsterReal,
    rating: "9,2",
  },
  {
    title: "Fortnite",
    description:
      "There's a lot to learn about LoL, so we'll start with the essentials. Explore the guide below for an overview of the most popular game mode",
    ratingBg: "blue",
    hero: fortnite,
    rating: "9,4",
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
            <CarouselItem key={index} className="basis-[100%] lg:basis-[70%]">
              <div className="h-[400px] rounded-xl p-10 md:p-9 xl:py-14 2xl:p-9  shadow-lg text-white flex flex-col justify-between relative rounded-b-2xl ">
                <div className="absolute left-0 right-0 bottom-0 top-0 rounded-b-2xl overflow-hidden">
                  <Image src={mask} alt="Background 1" className="masked" />
                </div>

                {/* Rating in top-left corner */}
                <div className="absolute top-0 left-0 md:top-0 md:left-0 lg:top-[-10px] lg:left-[-10px] 2xl:top-0 2xl:left-[1px]">
                  <Rating rating={item.rating} />
                </div>
                <Image
                  src={item.hero}
                  alt="Background 1"
                  className="absolute left-5 xl:left-0 2xl:left-0 h-[100%] w-[400px] md:scale-110 xl:scale-90 2xl:scale-110 md:w-auto -translate-y-[11%]"
                />
                <Image
                  src={runied}
                  alt="Background 2"
                  className="absolute h-auto max-w-[400px] right-1 top-8"
                />

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
                    <div className="flex flex-col gap-2 z-50">
                      <h2 className="text-4xl font-semibold mb-2 drop-shadow-2xl">
                        {item.title}
                      </h2>
                      <p className="text-xs max-w-[50%] drop-shadow-2xl">
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
