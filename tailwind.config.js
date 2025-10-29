/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlack: "#0a0a0a",
        brandWhite: "#f9f9f9",
        brandYellow: "#facc15",
      },
    },
  },
  plugins: [],
};
