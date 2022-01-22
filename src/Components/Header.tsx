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
    <div>
      <h1>UW</h1>
      <button
        onClick={() => {
          setPage(page === "info" ? "" : "info");
        }}
      >
        {page === "info" ? <MdClose /> : <MdHelpOutline />}
      </button>
      <button
        onClick={() => {
          setPage(page === "leaderboard" ? "" : "leaderboard");
        }}
      >
        {page === "leaderboard" ? <MdClose /> : <MdOutlineLeaderboard />}
      </button>
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
