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
    <div>
      <h1>Settings</h1>
      <div>
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
      <div>
        <h2>Dark Theme</h2>
        <button>Off</button>
      </div>
      <div>
        <h2>Sound</h2>
        <button>On</button>
      </div>
      <div>
        <h2>Color Blind Mode</h2>
        <button>On</button>
      </div>
      <div>
        <h2>Challenge Mode</h2>
        <button>Off</button>
      </div>
      <a href="https://github.com/" target={"_blank"} rel="noreferrer">
        Feedback!
      </a>
    </div>
  );
};

export default Settings;
