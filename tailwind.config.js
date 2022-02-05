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
          "0%": {
            transform: "skewY( -10%)",
            background: "transparent",
            margin: 0,
          },
          "100%": {
            background: "linear-gradient(0deg, crimson, #ff476a)",
            margin: 0,
          },
        },
        revealMisplaced: {
          "100%": {
            width: "2em",
            height: "2em",
            color: "orange",
            background: "linear-gradient(45deg, gold, yellow)",
          },
        },
      },
    },
  },
  plugins: [],
};
