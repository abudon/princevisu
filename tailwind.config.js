/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#EAEDED",
        primary: "#00193D",
        secondary: "#f0f0f0",
        dark: "#0000",
        DEFAULT: "#131921",
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
