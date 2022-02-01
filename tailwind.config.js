// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        reveal: "reveal .45s forwards ",
        revealCorrect: "revealCorrect .45s forwards ",
        revealMisplaced: "revealMisplaced .45s forwards ",
      },
      keyframes: {
        reveal: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 10%)",
          },
          "50%": {
            transform: "translate(0, -1%)",
          },
          "100%": {
            opacity: 1,
          },
        },
        revealCorrect: {
          "100%": {
            background: "crimson",
          },
        },
        revealMisplaced: {
          "100%": {
            background: "yellow",
          },
        },
      },
    },
  },
  plugins: [],
};
