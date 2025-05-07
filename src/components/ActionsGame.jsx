import React from "react";
import GamesCat from "./GamesCat";

const ActionsGame = () => {
  const gamesData = [
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
  ];
  return (
    <div className="my-4 flex flex-col gap-4">
      <span className="text-sm text-white">Action</span>
      <div className="grid grid-cols-12 gap-3">
        {gamesData.map((game, index) => (
          <GamesCat
            key={index}
            imageSrc={game.imageSrc}
            gameTitle={game.gameTitle}
            isFirstCard={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionsGame;
