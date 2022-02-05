import React from "react";

const Settings = ({
  settings,
  setSettings,
}: {
  settings: {
    language: string;
    darkTheme: boolean;
    sound: boolean;
    colorBlindMode: boolean;
    challengeMode: boolean;
  };
  setSettings: (arg0: {
    language: string;
    darkTheme: boolean;
    sound: boolean;
    colorBlindMode: boolean;
    challengeMode: boolean;
  }) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-xl font-medium w-screen max-w-[500px] animate-reveal m-auto">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="flex items-center justify-between w-full gap-4 p-8">
        <h2>Language</h2>
        <select
          name="lang"
          id="lang"
          value={settings.language}
          onChange={e => setSettings({ ...settings, language: e.target.value })}
        >
          {/* <option value="ar">العربية </option> */}
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
      {/* <div
        className="flex items-center justify-between w-full gap-4 p-8"
        onClick={() =>
          setSettings({ ...settings, darkTheme: !settings.darkTheme })
        }
      >
        <h2>Dark Theme</h2>
        <button
          className={`${
            settings.darkTheme ? "bg-green-500" : "bg-red-500 "
          } text-white p-4 rounded-lg transition-all active:scale-90`}
        />
      </div>
      <div
        className="flex items-center justify-between w-full gap-4 p-8"
        onClick={() => setSettings({ ...settings, sound: !settings.sound })}
      >
        <h2>Sound</h2>
        <button
          className={`${
            settings.sound ? "bg-green-500" : "bg-red-500"
          } text-white p-4 rounded-lg transition-all active:scale-90`}
        />
      </div>
      <div
        className="flex items-center justify-between w-full gap-4 p-8"
        onClick={() =>
          setSettings({
            ...settings,
            colorBlindMode: !settings.colorBlindMode,
          })
        }
      >
        <h2>Color Blind Mode</h2>
        <button
          className={`${
            settings.colorBlindMode ? "bg-green-500" : "bg-red-500"
          } text-white p-4 rounded-lg transition-all active:scale-90`}
        />
      </div>
      <div
        className="flex items-center justify-between w-full gap-4 p-8"
        onClick={() =>
          setSettings({ ...settings, challengeMode: !settings.challengeMode })
        }
      >
        <h2>Challenge Mode</h2>
        <button
          className={`${
            settings.challengeMode ? "bg-green-500" : "bg-red-500"
          } text-white p-4 rounded-lg transition-all active:scale-90`}
        />
      </div> */}
      <a
        href="https://github.com/MohamedBechirMejri/unlimited-wordle/issues"
        target={"_blank"}
        rel="noreferrer"
        className="px-4 py-2 transition-all rounded-lg ring ring-black hover:bg-black hover:text-white active:scale-90"
      >
        Feedback!
      </a>
    </div>
  );
};

export default Settings;
