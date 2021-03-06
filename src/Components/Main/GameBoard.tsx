import React from "react";
import Sound from "./Sound";
const GameBoard = ({
  attempts,
}: {
  attempts: object;
  currentAttempt: number;
}) => {
  return (
    <div className="xl:w-[22vw] xl:h-[22vw] bg-sky-500 border-2 border-sky-200  flex flex-col items-center justify-center rounded-sm text-white uppercase font-bold overflow-hidden shadow text-3xl max-w-[500px] max-h-[500px] select-none w-[300px] h-[300px] shrink-0">
      {Object.values(attempts).map((attempt, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full h-1/6"
        >
          {attempt.letters.map((letter: string, i: number) => {
            const status = attempt.statuses[i];
            return (
              <div
                key={i}
                className={` "flex items-center justify-center bg-gradient-to-b from-sky-400 w-full h-full border-[.1px] border-sky-200 shadow " `}
              >
                <Sound status={status} timeout={(i + 1) * 250} />
                <p
                  className={`flex items-center justify-center w-full h-full bg-gradient-to-b from-sky-400 m-auto mt-[3px] ${
                    status === "correct"
                      ? "animate-revealCorrect"
                      : status === "misplaced"
                      ? "animate-revealMisplaced rounded-full  "
                      : ""
                  } transition-all text-[70%]`}
                  style={{
                    animationName:
                      status === "correct"
                        ? "revealCorrect"
                        : status === "misplaced"
                        ? "revealMisplaced"
                        : "",
                    animationDelay: `${(i + 1) * 0.25}s`,
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
