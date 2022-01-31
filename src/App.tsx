import React, { useState } from "react";
import PickLanguage from "./Components/PickLanguage";
import { LanguageContext } from "./Utils/LanguageContext";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Leaderboard from "./Components/Leaderboard";
import Settings from "./Components/Settings";
import Main from "./Components/Main";
const App = () => {
  const [language, setLanguage] = useState("");
  const [page, setPage] = useState("");

  return (
    <LanguageContext.Provider value={language}>
      <div className="">
        {!language && <PickLanguage setLanguage={setLanguage} />}
        {language && <Header page={page} setPage={setPage} />}
        {page === "info" ? (
          <Info />
        ) : page === "leaderboard" ? (
          <Leaderboard />
        ) : page === "settings" ? (
          <Settings language={language} setLanguage={setLanguage} />
        ) : (
          language && <Main />
        )}
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
