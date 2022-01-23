import React from "react";

const GameBoard = ({ attempts }: { attempts: string[][] }) => {
  return (
    <div>
      {attempts.map((attempt, index) => (
        <div key={index}>
          {attempt.map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
