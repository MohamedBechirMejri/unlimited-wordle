import React from "react";

const Timer = ({ streak }: { streak: number }) => {
  return (
    <div>
      {/* <h2>Time Left: ♾️</h2> */}
      <h2>Win Streak: {streak}</h2>
    </div>
  );
};

export default Timer;
