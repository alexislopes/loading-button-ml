/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3483f4"
      },
      fontFamily: {
        sans: "Proxima Nova"
      }
    },
  },
  plugins: [],
}
