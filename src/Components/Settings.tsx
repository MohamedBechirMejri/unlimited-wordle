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
    <div className="flex flex-col items-center justify-center h-screen w-scren">
      <h1>Settings</h1>
      <div className="flex items-center justify-start">
        <h2>Language</h2>
        <select
          name="lang"
          id="lang"
          value={settings.language}
          onChange={e => setSettings({ ...settings, language: e.target.value })}
        >
          <option value="ar">العربية </option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
      <div className="flex items-center justify-start">
        <h2>Dark Theme</h2>
        <button
          onClick={() =>
            setSettings({ ...settings, darkTheme: !settings.darkTheme })
          }
        >
          {settings.darkTheme ? "On" : "Off"}
        </button>
      </div>
      <div className="flex items-center justify-start">
        <h2>Sound</h2>
        <button
          onClick={() => setSettings({ ...settings, sound: !settings.sound })}
        >
          {settings.sound ? "On" : "Off"}
        </button>
      </div>
      <div className="flex items-center justify-start">
        <h2>Color Blind Mode</h2>
        <button
          onClick={() =>
            setSettings({
              ...settings,
              colorBlindMode: !settings.colorBlindMode,
            })
          }
        >
          {settings.colorBlindMode ? "On" : "Off"}
        </button>
      </div>
      <div className="flex items-center justify-start">
        <h2>Challenge Mode</h2>
        <button
          onClick={() =>
            setSettings({ ...settings, challengeMode: !settings.challengeMode })
          }
        >
          {settings.challengeMode ? "On" : "Off"}
        </button>
      </div>
      <a href="https://github.com/" target={"_blank"} rel="noreferrer">
        Feedback!
      </a>
    </div>
  );
};

export default Settings;
