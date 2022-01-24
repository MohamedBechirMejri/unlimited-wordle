import React from "react";

const GameBoard = ({ attempts }: { attempts: object }) => {
  return (
    <div className="w-[85vw] bg-sky-500 border-2 border-sky-200  flex flex-col items-center justify-center rounded-sm text-white uppercase font-bold overflow-hidden">
      {Object.values(attempts).map((attempt, i) => (
        <div key={i} className="flex items-center justify-center w-full">
          {attempt.letters.map((letter: string, i: number) => {
            return (
              <p
                key={i}
                className={` ${attempt.statuses[i]} flex items-center justify-center bg-gradient-to-b from-sky-400  border-[.1px] border-sky-200 `}
                style={{
                  width: `${100 / attempt.letters.length}%`,
                }}
              >
                {letter}
              </p>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
