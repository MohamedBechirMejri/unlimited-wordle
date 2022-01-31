// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        reveal: "reveal .45s forwards ",
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
      },
    },
  },
  plugins: [],
};
