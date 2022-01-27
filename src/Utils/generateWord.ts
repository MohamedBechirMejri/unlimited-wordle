import englishWords from "an-array-of-english-words";

export const generateWord = (isChallengeMode = false): string => {
  let words = englishWords;
  if (!isChallengeMode) {
    words = words.filter(word => word.length <= 5);
  }
  return words[Math.floor(Math.random() * words.length)];
};
