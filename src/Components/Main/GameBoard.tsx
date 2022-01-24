import React from "react";

const GameBoard = ({ attempts }: { attempts: object }) => {
  return (
    <div>
      {Object.values(attempts).map((attempt, i) => (
        <div key={i}>
          {attempt.letters.map((letter: string, i: number) => (
            <span key={i} className={attempt.statuses[i]}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
