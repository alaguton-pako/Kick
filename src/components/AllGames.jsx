import React from "react";
import GamesCat from "./GamesCat";

const AllGames = () => {
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
      <div className="hidden md:block my-4">
        {Object.entries(gamesData).map(([category, games]) => (
          <div key={category}>
            <span className="text-sm text-white mb-2 block">{category}</span>
            <div className="grid grid-cols-12 gap-3">
              {games.map((game, index) => (
                <GamesCat
                  key={index}
                  imageSrc={game.imageSrc}
                  gameTitle={game.gameTitle}
                  isFirstCard={index === 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllGames;
