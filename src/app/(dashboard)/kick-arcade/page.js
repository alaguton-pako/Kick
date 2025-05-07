import ActionsGame from "@/components/ActionsGame";
import AdventureGame from "@/components/Adventure";
import AllGames from "@/components/AllGames";
import { CarouselSection } from "@/components/CarouselSection";
import PuzzleGame from "@/components/PuzzleGame";
import RacingGame from "@/components/RacingGame";
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
        <ActionsGame />
        <PuzzleGame />
        <RacingGame />
        <AdventureGame />
      </ScrollArea>
    </>
  );
};

export default page;
