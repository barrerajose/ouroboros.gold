/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        old: ["YanoneTagesschrift", "sans-serif"],
        symbols: ["AureWestraKB", "sans-serif"],
        inconsolata: ["Inconsolata", "sans-serif"],
      },
      colors: {
        ...colors,
        old: {
          100: "#F2E3C3",
          200: "#D7C9AC",
          300: "#C9B5A3",
          400: "#B19B8B",
          500: "#9A8173",
          600: "#82665A",
          700: "#6A4C42",
          800: "#533229",
          900: "#3B1811",
        },
      },
    },
  },
  plugins: [],
}
