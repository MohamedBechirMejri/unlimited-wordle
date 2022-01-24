import React from "react";

const PickLanguage = (props: { setLanguage: (arg0: string) => void }) => (
  <div className="flex flex-col items-center justify-center w-screen h-screen gap-2">
    <h1 className="font-bold ">Welcome To Unlimited Wordle!</h1>
    <p className="text-sm">Please select your language:</p>
    <div className="flex flex-col gap-2">
      <button
        className="px-2 py-1 text-white transition-all rounded bg-slate-800 active:scale-95"
        onClick={() => props.setLanguage("ar")}
      >
        العربية
      </button>
      <button
        className="px-2 py-1 text-white transition-all rounded bg-slate-800 active:scale-95"
        onClick={() => props.setLanguage("en")}
      >
        English
      </button>
      <button
        className="px-2 py-1 text-white transition-all rounded bg-slate-800 active:scale-95"
        onClick={() => props.setLanguage("fr")}
      >
        Français
      </button>
    </div>
  </div>
);

export default PickLanguage;
