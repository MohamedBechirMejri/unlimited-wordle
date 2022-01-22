import React from "react";

import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const Info = () => {
  return (
    <div>
      <h1>Info</h1>
      <h2>How To Play:</h2>{" "}
      <p>
        Guess the WORDLE in 6 tries. Each guess must be a valid word. Hit the
        enter button to submit. After each guess, the color of the tiles will
        change to show how close your guess was to the word. Examples The letter
        W is in the word and in the correct spot. The letter I is in the word
        but in the wrong spot. The letter U is not in the word in any spot.
      </p>
      <h2>Credits</h2>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen gap-8 py-20 text-4xl text-center text-white select-none animate-revealScores">
        <p className="text-3xl font-medium">
          <br />
          <span className="text-[#61DBFB]">
            React <SiReact />{" "}
          </span>
          +
          <span className="text-[#FFA611]">
            {" "}
            Firebase <SiFirebase />
          </span>
          +{" "}
          <span className="text-[#39bdf7]">
            TailwindCSS <SiTailwindcss />
          </span>
          +{" "}
          <span className="text-[#2f74c1]">
            Typescript <SiTypescript />
          </span>
          Project by{" "}
          <a
            href="https://github.com/MohamedBechirMejri"
            className="text-[#43c294] hover:underline"
            target={"_blank"}
            rel="noreferrer"
          >
            MohamedBechirMejri{" "}
          </a>
          for <p className="text-[#e3b260]  hover:underline">My Dad</p>.
        </p>
      </div>
    </div>
  );
};

export default Info;
