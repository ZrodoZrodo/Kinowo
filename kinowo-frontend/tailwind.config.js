/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      red: "#CC1E1E",
      black: "#000000",
      "dark-red": "#621419",
      gray: "#C4C4C4",
      white: "#FFFFFF",
      pink: "#C66176",
      "dark-pink": "#A43B5C",
      "light-pink": "#C22642",
      "dark-purple":"#101017"
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e5f475",

          secondary: "#C66176",

          accent: "#fcc7f5",

          neutral: "#1E1825",

          "base-100": "#2B323B",

          info: "#8BC4F8",

          success: "#45E8D8",

          warning: "#EC8C0E",

          error: "#ED2644",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
