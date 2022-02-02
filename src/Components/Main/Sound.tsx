import React, { useEffect } from "react";
import correctSound from "../../Assets/Sounds/correct.mp3";
import incorrectSound from "../../Assets/Sounds/incorrect.mp3";
import misplacedSound from "../../Assets/Sounds/misplaced.mp3";
import empty from "../../Assets/Sounds/empty.mp3";

const Sound = ({ status, timeout }: { status: string; timeout: number }) => {
  useEffect(() => {
    const audio = new Audio(
      status === "correct"
        ? correctSound
        : status === "incorrect"
        ? incorrectSound
        : status === "misplaced"
        ? misplacedSound
        : empty
    );
    setTimeout(() => {
      audio.play();
    }, timeout);
  }, [status]);
  return <></>;
};

export default Sound;
