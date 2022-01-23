import React, { useEffect, useState } from "react";
import Keyboard from "./Main/Keyboard";
import Messages from "./Main/Messages";
import Timer from "./Main/Timer";
import GameBoard from "./Main/GameBoard";
const Main = () => {
  const [word, setWord] = useState("hello".split(""));
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isAttemptFull, setIsAttemptFull] = useState(false);
  const [isAttemptEmpty, setIsAttemptEmpty] = useState(true);

  const [attempts, setAttempts] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
  ] as string[][]);

  useEffect(() => {
    const newAttempts: string[][] = [[], [], [], [], [], []];
    attempts.forEach((attempt: string[], i: number) => {
      for (let i = 0; i < word.length; i++) {
        attempt.push(".");
      }
      newAttempts[i] = attempt;
    });
    setAttempts(newAttempts);
  }, [word]);

  return (
    <div>
      <div>
        <Messages />
        <Timer />
      </div>

      <GameBoard attempts={attempts} />

      <Keyboard
        submitWord={(): void => {
          throw new Error("submit Function not implemented.");
        }}
        removeKey={(): void => {
          if (isAttemptEmpty) return;
          isAttemptFull && setIsAttemptFull(false);

          const newAttempts = [...attempts];
          newAttempts[currentAttempt][currentLetter] = ".";
          setAttempts(newAttempts);
          currentLetter > 0 && setCurrentLetter(currentLetter - 1);

          currentLetter === 0 && setIsAttemptEmpty(true);
        }}
        addKey={(key: string): void => {
          if (isAttemptFull) return;
          isAttemptEmpty && setIsAttemptEmpty(false);

          const newAttempts = [...attempts];
          newAttempts[currentAttempt][currentLetter] = key;
          setAttempts(newAttempts);

          currentLetter < word.length - 1 &&
            setCurrentLetter(currentLetter + 1);
          currentLetter === word.length - 1 && setIsAttemptFull(true);
        }}
      />
    </div>
  );
};

export default Main;
