import React from "react";

const Messages = ({ message }: { message: string }) => {
  return (
    <div className="px-16 py-8 text-white rounded bg-slate-500">{message}</div>
  );
};

export default Messages;
