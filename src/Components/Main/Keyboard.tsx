import React from "react";
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
  return (
    <div>
      {layouts.en.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={`"
                ${
                  correct.includes(key)
                    ? "correct"
                    : misplaced.includes(key)
                    ? "misplaced"
                    : incorrect.includes(key)
                    ? "incorrect"
                    : null
                }
              "`}
              onClick={() => {
                key === "enter"
                  ? submitWord()
                  : key === "bksp"
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
