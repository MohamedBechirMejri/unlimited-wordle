import React, { useEffect } from "react";
import wordFoundSound from "../../Assets/Sounds/wordfound.mp3";
import wordNotFound from "../../Assets/Sounds/wordnotfound.mp3";
const AttemptSound = ({ attempt }: { attempt: [string] }) => {
  useEffect(() => {
    const audio = new Audio(
      !attempt.includes("incorrect") &&
      !attempt.includes("misplaced") &&
      !attempt.includes("empty")
        ? wordFoundSound
        : wordNotFound
    );
    setTimeout(() => {
      audio.play();
    }, attempt.length * 250);
  }, [attempt]);
  return <></>;
};

export default AttemptSound;
