import React, { useEffect, useState } from "react";
import Keyboard from "./Main/Keyboard";
import Messages from "./Main/Messages";
import Timer from "./Main/Timer";
import GameBoard from "./Main/GameBoard";
const Main = () => {
  const [word, setWord] = useState("hello".split(""));
  const [attempts, setAttempts] = useState({});
  const [keysStatus, setKeysStatus] = useState({
    correct: [],
    misplaced: [],
    incorrect: [],
  });
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isAttemptFull, setIsAttemptFull] = useState(false);
  const [isAttemptEmpty, setIsAttemptEmpty] = useState(true);

  useEffect(() => {
    const dots = [];
    const statuses = [];
    for (let i = 0; i < word.length; i++) {
      dots.push(".");
      statuses.push("empty");
    }
    setAttempts({
      1: {
        letters: [...dots],
        statuses: [...statuses],
      },
      2: {
        letters: [...dots],
        statuses: [...statuses],
      },
      3: {
        letters: [...dots],
        statuses: [...statuses],
      },
      4: {
        letters: [...dots],
        statuses: [...statuses],
      },
      5: {
        letters: [...dots],
        statuses: [...statuses],
      },
      6: {
        letters: [...dots],
        statuses: [...statuses],
      },
    });
  }, [word]);

  const submitWord = (): void => {
    // ("");
  };
  const removeKey = (): void => {
    if (isAttemptEmpty) return;
    isAttemptFull && setIsAttemptFull(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newAttempts = { ...attempts } as any; // todo: fix any type
    newAttempts[currentAttempt].letters[currentLetter] = ".";
    setAttempts(newAttempts);
    currentLetter > 0 && setCurrentLetter(currentLetter - 1);
    currentLetter === 0 && setIsAttemptEmpty(true);
  };
  const addKey = (key: string): void => {
    if (isAttemptFull) return;
    isAttemptEmpty && setIsAttemptEmpty(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newAttempts = { ...attempts } as any; // todo: fix this type
    newAttempts[currentAttempt].letters[currentLetter] = key;
    setAttempts(newAttempts);
    currentLetter < word.length - 1 && setCurrentLetter(currentLetter + 1);
    currentLetter === word.length - 1 && setIsAttemptFull(true);
  };

  return (
    <div>
      <div>
        <Messages />
        <Timer />
      </div>
      <GameBoard attempts={attempts} />
      <Keyboard
        submitWord={submitWord}
        removeKey={removeKey}
        addKey={addKey}
        keysStatus={keysStatus}
      />
    </div>
  );
};

export default Main;
