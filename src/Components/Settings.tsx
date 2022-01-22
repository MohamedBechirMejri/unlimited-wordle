import React from "react";

const Settings = ({
  language,
  setLanguage,
}: {
  language: string;
  setLanguage: (arg0: string) => void;
}) => {
  return (
    <div>
      <h1>Settings</h1>
      <div>
        <h2>Language</h2>
        <select
          name="lang"
          id="lang"
          value={language}
          onChange={e => setLanguage(e.target.value)}
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
