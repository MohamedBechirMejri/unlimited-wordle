import React from "react";

const GameOver = ({
  playAgain,
  isGameWon,
}: {
  playAgain: () => void;
  isGameWon: boolean;
}) => {
  return (
    <button
      onClick={playAgain}
      className="px-4 py-2 text-2xl font-bold text-white bg-green-400 rounded active:scale-95"
    >
      {isGameWon ? "Next Word" : "Play Again"}
    </button>
  );
};

export default GameOver;
