/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        latte: "#F9FBE7",
        eggshell: "#F0EDD4",
        "desert-sand": "#ECCDB4",
        "salmon-pink": "#FEA1A1",
      },
    },
  },
  plugins: [],
};
