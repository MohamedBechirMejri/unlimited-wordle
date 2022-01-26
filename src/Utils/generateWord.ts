import englishWords from "an-array-of-english-words";

export const generateWord = (): string => {
  return englishWords[Math.floor(Math.random() * englishWords.length)];
};
