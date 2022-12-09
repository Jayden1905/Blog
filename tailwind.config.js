/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira Condensed"],
        saira_light: ["Saira Condensed Light"],
        ibmp: ["IBMP"],
      },
      colors: {
        primary: "#f5f5f7",
        secondary: "#e20437",
      },
    },
  },
  plugins: [],
};
