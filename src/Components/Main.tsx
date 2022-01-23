import React, { useEffect, useState } from "react";
import Keyboard from "./Main/Keyboard";
import Messages from "./Main/Messages";
import Timer from "./Main/Timer";
import GameBoard from "./Main/GameBoard";
const Main = () => {
  const word = "hello".split("");

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
  });

  return (
    <div>
      <div>
        <Messages />
        <Timer />
      </div>

      <GameBoard />

      <Keyboard
        submitWord={(): void => {
          throw new Error("submit Function not implemented.");
        }}
        removeKey={(): void => {
          throw new Error("back Function not implemented.");
        }}
        addKey={(arg0: string): void => {
          throw new Error("add Function not implemented.");
        }}
      />
    </div>
  );
};

export default Main;
