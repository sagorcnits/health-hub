const { nextui } = require("@nextui-org/theme");
const { Poppins } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkGreen: "#07332F",
        darkWhite: "#F3F3F3",
        darkOrange: "#F7A582",
        paragraph: "#3B3A3A",
      },

      fontFamily: {
        Source_Sans: ["var(--Source_Sans_3)"],
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#F7A582",
          },
        },
      },
    }),
  ],
};
