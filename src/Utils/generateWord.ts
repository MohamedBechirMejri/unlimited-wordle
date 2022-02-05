import englishWords from "an-array-of-english-words";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const frenchWords = require("an-array-of-french-words");

export const generateWord = (lang: string, isChallengeMode = false) => {
  let words = lang === "en" ? englishWords : frenchWords;

  if (!isChallengeMode) {
    words = words.filter((word: string) => {
      return (
        word.length <= 5 &&
        !word.split("").includes("é") &&
        !word.split("").includes("-") &&
        !word.split("").includes("ç") &&
        !word.split("").includes("ê") &&
        !word.split("").includes("î") &&
        !word.split("").includes("ô") &&
        !word.split("").includes("û") &&
        !word.split("").includes("à") &&
        !word.split("").includes("è") &&
        !word.split("").includes("ì") &&
        !word.split("").includes("ò") &&
        !word.split("").includes("ù") &&
        !word.split("").includes("ë") &&
        !word.split("").includes("ï") &&
        !word.split("").includes("ü") &&
        !word.split("").includes("â")
      );
    });
  }
  return words[Math.floor(Math.random() * words.length)];
};
