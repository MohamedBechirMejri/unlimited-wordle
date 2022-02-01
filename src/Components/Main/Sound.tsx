import React, { useEffect } from "react";
import correctSound from "../../Assets/Sounds/correct.mp3";
import incorrectSound from "../../Assets/Sounds/correct.mp3";
import misplacedSound from "../../Assets/Sounds/correct.mp3";

const Sound = ({ status, timeout }: { status: string; timeout: number }) => {
  useEffect(() => {
    const audio = new Audio(
      status === "correct"
        ? correctSound
        : status === "incorrect"
        ? incorrectSound
        : misplacedSound
    );
    setTimeout(() => {
      audio.play();
    }, (timeout + 1) * 300);
  }, [status]);
  return <span></span>;
};

export default Sound;
