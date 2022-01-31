import React, { useEffect, useState } from "react";
import Keyboard from "./Main/Keyboard";
import Messages from "./Main/Messages";
import Timer from "./Main/Timer";
import GameBoard from "./Main/GameBoard";
import { generateWord } from "../Utils/generateWord";
import GameOver from "./Main/GameOver";

const Main = () => {
  const [word, setWord] = useState(generateWord().split(""));
  const [attempts, setAttempts] = useState({});
  const [keysStatus, setKeysStatus] = useState({
    correct: [],
    misplaced: [],
    incorrect: [],
  } as {
    correct: string[];
    misplaced: string[];
    incorrect: string[];
  });
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [isAttemptFull, setIsAttemptFull] = useState(false);
  const [isAttemptEmpty, setIsAttemptEmpty] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  useEffect(() => {
    console.log("word", word);

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
    setKeysStatus({
      correct: [],
      misplaced: [],
      incorrect: [],
    });
  }, [word]);

  const playAgain = () => {
    setWord(generateWord().split(""));
    setCurrentAttempt(1);
    setCurrentLetter(0);
    setIsAttemptFull(false);
    setIsAttemptEmpty(true);
    setIsGameOver(false);
    setIsGameWon(false);
  };
  const submitWord = (): void => {
    const attemptz = attempts as {
      [key: number]: {
        letters: string[];
        statuses: string[];
      };
    };
    if (attemptz[currentAttempt].letters.includes(".")) return;
    attemptz[currentAttempt].letters.forEach((letter, i) => {
      const keys = keysStatus as {
        correct: string[];
        misplaced: string[];
        incorrect: string[];
      };
      if (letter === word[i]) {
        attemptz[currentAttempt].statuses[i] = "correct";
        keys.correct.push(word[i]);
      } else if (word.includes(letter) && letter !== word[i]) {
        attemptz[currentAttempt].statuses[i] = "misplaced";
        keys.misplaced.push(letter);
      } else {
        attemptz[currentAttempt].statuses[i] = "incorrect";
        keys.incorrect.push(letter);
      }
      setKeysStatus(keys);
    });
    if (
      attemptz[currentAttempt].letters.join("") === word.join("") ||
      currentAttempt === 6
    ) {
      setCurrentAttempt(1);
      setIsGameOver(true);
      if (attemptz[currentAttempt].letters.join("") === word.join(""))
        setIsGameWon(true);
    } else {
      setCurrentAttempt(currentAttempt + 1);
    }
    setAttempts(attemptz);
    setCurrentLetter(0);
    setIsAttemptFull(false);
    setIsAttemptEmpty(true);
  };
  const removeKey = (): void => {
    if (isAttemptEmpty) return;
    isAttemptFull && setIsAttemptFull(false);
    const newAttempts = { ...attempts } as {
      [key: number]: {
        letters: string[];
        statuses: string[];
      };
    };
    newAttempts[currentAttempt].letters[currentLetter] = ".";
    setAttempts(newAttempts);
    currentLetter > 0 && setCurrentLetter(currentLetter - 1);
    currentLetter === 0 && setIsAttemptEmpty(true);
  };
  const addKey = (key: string): void => {
    if (isAttemptFull) return;
    isAttemptEmpty && setIsAttemptEmpty(false);
    const newAttempts = { ...attempts } as {
      [key: number]: {
        letters: string[];
        statuses: string[];
      };
    };
    newAttempts[currentAttempt].letters[currentLetter] = key;
    setAttempts(newAttempts);
    currentLetter < word.length - 1 && setCurrentLetter(currentLetter + 1);
    currentLetter === word.length - 1 && setIsAttemptFull(true);
  };

  return (
    <div
      className={` " flex flex-col items-center ${
        isGameOver ? "justify-center gap-8" : "justify-between"
      } w-screen h-screen max-h-screen " `}
    >
      <div>
        <Messages />
        <Timer />
      </div>
      <GameBoard attempts={attempts} currentAttempt={currentAttempt} />
      {!isGameOver ? (
        <Keyboard
          submitWord={submitWord}
          removeKey={removeKey}
          addKey={addKey}
          keysStatus={keysStatus}
        />
      ) : (
        <GameOver playAgain={playAgain} isGameWon={isGameWon} />
      )}
    </div>
  );
};

export default Main;
