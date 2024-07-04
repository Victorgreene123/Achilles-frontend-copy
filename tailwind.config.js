/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-navy": "#080f24",
        "custom-gray": "#d4d4d4",
        "custom-orange": "#f18337",
        "custom-brown": "#2c1403",
      },
    },
  },
  plugins: [],
};
