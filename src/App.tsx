import React, { useState } from "react";
import PickLanguage from "./Components/PickLanguage";
import { SettingsContext } from "./Utils/SettingsContext";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Leaderboard from "./Components/Leaderboard";
import Settings from "./Components/Settings";
import Main from "./Components/Main";
const App = () => {
  const [page, setPage] = useState("");
  const [settings, setSettings] = useState({
    language: "",
    darkTheme: false,
    sound: false,
    colorBlindMode: false,
    challengeMode: false,
  });

  return (
    <SettingsContext.Provider value={settings}>
      <div className="">
        {!settings.language && (
          <PickLanguage settings={settings} setSettings={setSettings} />
        )}
        {settings.language && <Header page={page} setPage={setPage} />}
        {page === "info" ? (
          <Info />
        ) : page === "leaderboard" ? (
          <Leaderboard />
        ) : page === "settings" ? (
          <Settings settings={settings} setSettings={setSettings} />
        ) : (
          settings.language && <Main />
        )}
      </div>
    </SettingsContext.Provider>
  );
};

export default App;
