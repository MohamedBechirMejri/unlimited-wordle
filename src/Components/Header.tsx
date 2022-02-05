import React from "react";

import {
  MdHelpOutline,
  // MdOutlineLeaderboard,
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
      <button
        onClick={() => {
          setPage(page === "info" ? "" : "info");
        }}
      >
        {page === "info" ? <MdClose /> : <MdHelpOutline />}
      </button>
      <h1
        className="flex flex-col justify-center text-3xl font-bold text-transparent uppercase"
        style={{
          WebkitTextStroke: "1px black",
        }}
      >
        Motus
      </h1>
      <button
        onClick={() => {
          setPage(page === "settings" ? "" : "settings");
        }}
      >
        {page === "settings" ? <MdClose /> : <MdOutlineSettings />}
      </button>
    </div>
  );
};

export default Header;
{
  /* <button
          onClick={() => {
            setPage(page === "leaderboard" ? "" : "leaderboard");
          }}
        >
          {page === "leaderboard" ? <MdClose /> : <MdOutlineLeaderboard />}
        </button> */
}
