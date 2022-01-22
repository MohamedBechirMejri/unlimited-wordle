import React from "react";
import { layouts } from "../../Utils/layouts";

const Keyboard = ({
  submitWord,
  removeKey,
  addKey,
}: {
  submitWord: () => void;
  removeKey: () => void;
  addKey: (arg0: string) => void;
}) => {
  return (
    <div>
      {layouts.en.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
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
