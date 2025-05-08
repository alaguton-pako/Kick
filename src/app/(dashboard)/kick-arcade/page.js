import AllGames from "@/components/AllGames";
import { CarouselSection } from "@/components/CarouselSection";
import GameCatMobile from "@/components/GameCatMobile";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export const metadata = {
  title: "Kick | Kick Arcade",
  description: "Kick arcade dashboard",
};

const page = () => {
  return (
    <>
      <ScrollArea className="h-full w-full">
        <CarouselSection />
        <AllGames />
      </ScrollArea>
      <div className="block md:hidden">
        <GameCatMobile />
      </div>
    </>
  );
};

export default page;
