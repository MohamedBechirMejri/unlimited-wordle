import React from "react";

const Messages = ({ message }: { message: string }) => {
  return (
    <div className="px-16 py-8 text-white transition-all rounded bg-slate-700">
      {message}
    </div>
  );
};

export default Messages;
