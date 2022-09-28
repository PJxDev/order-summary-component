/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: "'Red Hat Display', sans-serif",
    },
    colors: {
      paleBlue: "#e0e8ff",
      brightBlue: "#3829e0",
      veryPaleBlue: "#f5f7ff",
      desaturatedBlue: "#7280a7",
      darkBlue: "#1f2f56",
    },
    extend: {},
  },
  plugins: [],
};
