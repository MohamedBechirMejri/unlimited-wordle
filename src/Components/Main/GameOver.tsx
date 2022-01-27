import React from "react";

const GameOver = ({ playAgain }: { playAgain: () => void }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={playAgain}>Play Again</button>
    </div>
  );
};

export default GameOver;
