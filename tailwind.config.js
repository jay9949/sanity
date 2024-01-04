/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ms: "430px",
        s: "330px",
      },
    },
  },
  plugins: [],
};
