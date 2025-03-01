/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['var(--font-raleway)', 'Raleway', 'sans-serif'],
        'raleway': ['var(--font-raleway)', 'Raleway', 'sans-serif'],
      }
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      sky: colors.sky, // Updated from lightBlue
      stone: colors.stone, // Updated from warmGray
      neutral: colors.neutral, // Updated from trueGray
      gray: colors.gray, // Updated from coolGray
      slate: colors.slate, // Updated from blueGray
    },
  },
  plugins: [],
};
