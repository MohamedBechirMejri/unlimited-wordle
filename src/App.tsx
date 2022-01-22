import React, { useState } from "react";
import PickLanguage from "./Components/PickLanguage";
const App = () => {
  const [language, setLanguage] = useState("");
  const LanguageContext = React.createContext(language);

  return (
    <LanguageContext.Provider value={language}>
      <div className="">
        {language && <PickLanguage setLanguage={setLanguage} />}
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
