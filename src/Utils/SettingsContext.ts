import React from "react";

export const SettingsContext = React.createContext({
  language: "",
  darkTheme: false,
  sound: false,
  colorBlindMode: false,
  challengeMode: false,
});
