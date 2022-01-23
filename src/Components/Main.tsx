import React, { useEffect, useState } from "react";
import Keyboard from "./Main/Keyboard";
import Messages from "./Main/Messages";
import Timer from "./Main/Timer";
import GameBoard from "./Main/GameBoard";
const Main = () => {
  const [word, setWord] = useState("hello".split(""));
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [currentLetter, setCurrentLetter] = useState(0);

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
          throw new Error("back Function not implemented.");
        }}
        addKey={(key: string): void => {
          if (currentLetter > word.length - 1) return;
          const newAttempts = [...attempts];
          newAttempts[currentAttempt][currentLetter] = key;
          setAttempts(newAttempts);
          setCurrentLetter(currentLetter + 1);
        }}
      />
    </div>
  );
};

export default Main;
