import { dictionary } from "./generateWord";

export const verifyWord = (word: string) => {
  const words = dictionary();
  return words.includes(word);
};
