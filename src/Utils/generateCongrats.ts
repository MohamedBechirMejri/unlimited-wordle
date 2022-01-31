export const generateCongrats = () => {
  const words = [
    "Congrats!",
    "You Got It!",
    "That's the one!",
    "Nailed It!",
    "Correct!",
    "Awesome!",
  ];
  return words[Math.floor(Math.random() * words.length)];
};
