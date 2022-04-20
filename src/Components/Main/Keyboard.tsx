import React, { useEffect } from "react";
import { SiWindicss } from "react-icons/si";
import { layouts } from "../../Utils/layouts";

const Keyboard = ({
  submitWord,
  removeKey,
  addKey,
  keysStatus,
}: {
  submitWord: () => void;
  removeKey: () => void;
  addKey: (key: string) => void;
  keysStatus: {
    correct: string[];
    misplaced: string[];
    incorrect: string[];
  };
}) => {
  const { correct, incorrect, misplaced } = keysStatus;

  const keydownHandler = (e: KeyboardEvent) => {
    let key = e.key.toLowerCase();
    if (key === "backspace") key = "<-";
    document.getElementById(key)?.click();
  };

  useEffect(() => {
    addEventListener("keydown", keydownHandler);
    return () => removeEventListener("keydown", keydownHandler);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen ">
      {layouts.en.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-center justify-center w-full">
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              id={key}
              className={`"
               text-2xl font-bold text-center border rounded p-[2.55%] sm:p-4 active:scale-125 bg-white shadow transition-all select-none
                ${
                  correct.includes(key)
                    ? "bg-[crimson] text-white"
                    : misplaced.includes(key)
                    ? "bg-[#ffe000]"
                    : incorrect.includes(key)
                    ? "bg-[#6b6b6b] text-white"
                    : null
                }
                ${
                  key === "enter"
                    ? "bg-[#03ca77] text-white"
                    : key === "<-"
                    ? "bg-[#0084ff] text-white"
                    : null
                }  transition-all uppercase
              "`}
              onClick={() => {
                key === "enter"
                  ? submitWord()
                  : key === "<-"
                  ? removeKey()
                  : addKey(key);
              }}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Keyboard;
