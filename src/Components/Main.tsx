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
  } as {
    correct: string[];
    misplaced: string[];
    incorrect: string[];
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
    const attemptz = attempts as {
      [key: number]: {
        letters: string[];
        statuses: string[];
      };
    };

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
    setAttempts(attemptz);
    setCurrentAttempt(currentAttempt + 1);
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
