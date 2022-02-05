import React from "react";

import {
  MdHelpOutline,
  MdOutlineLeaderboard,
  MdOutlineSettings,
  MdClose,
} from "react-icons/md";
const Header = ({
  page,
  setPage,
}: {
  page: string;
  setPage: (arg0: string) => void;
}) => {
  return (
    <div className="fixed flex items-center justify-between w-screen max-w-[500px] top-0 left-1/2 -translate-x-1/2 z-50 text-4xl p-2 transition-all">
      <h1
        className="flex flex-col justify-center text-base text-transparent"
        style={{
          WebkitTextStroke: "1px black",
        }}
      >
        Unlimited <span>Wordle</span>{" "}
      </h1>
      <div className="flex items-center gap-2 ">
        {" "}
        <button
          onClick={() => {
            setPage(page === "info" ? "" : "info");
          }}
        >
          {page === "info" ? <MdClose /> : <MdHelpOutline />}
        </button>
        {/* <button
          onClick={() => {
            setPage(page === "leaderboard" ? "" : "leaderboard");
          }}
        >
          {page === "leaderboard" ? <MdClose /> : <MdOutlineLeaderboard />}
        </button> */}
        <button
          onClick={() => {
            setPage(page === "settings" ? "" : "settings");
          }}
        >
          {page === "settings" ? <MdClose /> : <MdOutlineSettings />}
        </button>
      </div>
    </div>
  );
};

export default Header;
