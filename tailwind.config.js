/** @type {import(tailwindcss).Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b21b6",
        primaryLight: "#8b5cf6",
      },
    },
    fontFamily: {
      raleway: ["raleway", "sans-serif"],
    },
  },
  plugins: [],
};
