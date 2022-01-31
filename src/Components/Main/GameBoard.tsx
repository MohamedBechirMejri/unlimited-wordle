import React from "react";

const GameBoard = ({
  attempts,
  currentAttempt,
}: {
  attempts: object;
  currentAttempt: number;
}) => {
  return (
    <div className="w-[80vw] h-[80vw] bg-sky-500 border-2 border-sky-200  flex flex-col items-center justify-center rounded-sm text-white uppercase font-bold overflow-hidden shadow text-3xl max-w-[500px] max-h-[500px] select-none">
      {Object.values(attempts).map((attempt, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full h-1/6"
        >
          {attempt.letters.map((letter: string, i: number) => {
            return (
              <div
                key={i}
                className="flex items-center justify-center bg-gradient-to-b from-sky-400  h-full border-[.1px] border-sky-200 shadow "
                style={{
                  width: `${100 / attempt.letters.length}%`,
                  // background:
                  //   attempt.statuses[i] === "correct" ? "crimson" : "",
                }}
              >
                <p
                  className="flex items-center justify-center w-full h-full bg-gradient-to-b from-sky-400 "
                  style={{
                    borderRadius:
                      attempt.statuses[i] === "misplaced" ? "100%" : "",
                    background:
                      attempt.statuses[i] === "correct"
                        ? "crimson"
                        : attempt.statuses[i] === "misplaced"
                        ? "#ffe000"
                        : "",
                    // if index === currentAttempt => animate with delay * i
                  }}
                >
                  {letter}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
