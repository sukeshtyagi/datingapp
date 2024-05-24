/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#4299e1",
        },
        green: {
          500: "#48bb78",
        },
        darkSky: "#1b2a42",
        orange1: "#ED3C29",
        orange2: "#FA610A",
        divBcg: "#0F2944",
        divBcg1: "#323840",
        divBcgAvtar: "#1c3454",
        reddish: "#614452",
      },
      screens: {
        wideDesktop: "1400px",
      },
    },
  },
  plugins: [],
};
