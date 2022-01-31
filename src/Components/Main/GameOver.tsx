import React from "react";

const GameOver = ({
  playAgain,
  isGameWon,
}: {
  playAgain: () => void;
  isGameWon: boolean;
}) => {
  return (
    <div>
      <h1>{isGameWon ? "Good Job!" : "Game Over"}</h1>
      <button onClick={playAgain}>
        {isGameWon ? "Next Word" : "Play Again"}
      </button>
    </div>
  );
};

export default GameOver;
