/** @type {import(tailwindcss).Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#5b21b6",
        // primaryLight: "#c4b5fd",
        primary: "#075985",
        primaryLight: "#7dd3fc",
      },
    },
  },
  plugins: [],
};
