import React from "react";

import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-8 text-xl text-center select-none animate-reveal max-w-[500px] m-auto">
      <h1 className="font-extrabold uppercase">Info</h1>
      <h2 className="font-light uppercase ">How To Play:</h2>
      <ul className="flex flex-col justify-start font-medium ">
        <li> Guess the WORDLE in 6 tries.</li>
        <li> Each guess must be a valid word.</li>
        <li> Hit the enter button to submit.</li>
        <li>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </li>
      </ul>
      <h2 className="font-extrabold uppercase">Credits</h2>
      <div className="flex gap-2 font-medium">
        Project by
        <a
          href="https://github.com/MohamedBechirMejri"
          className="text-[#43c294] hover:underline"
          target={"_blank"}
          rel="noreferrer"
        >
          MohamedBechirMejri
        </a>{" "}
        for Dad.
      </div>

      <div className="">
        {" "}
        <h2 className="font-extrabold uppercase">Tech Used</h2>
        <p className="flex flex-col gap-2 text-3xl font-medium text-center">
          <br />
          <span className="text-[#61DBFB] flex w-full justify-between items-center gap-8">
            React <SiReact />
          </span>
          {/* <span className="text-[#FFA611] flex w-full justify-between items-center gap-8">
            Firebase <SiFirebase />
          </span> */}
          <span className="text-[#39bdf7] flex w-full justify-between items-center gap-8">
            TailwindCSS <SiTailwindcss />
          </span>
          <span className="text-[#2f74c1] flex w-full justify-between items-center gap-8">
            Typescript <SiTypescript />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Info;
