/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0f172a",
        lightGray: "#e7e7e9",
        primary: "#c6dad6",
        indigo: "#38bdf8",
        royalBlue: "#2563eb",
        charcoal: "#374151",
      },
      textColor: {
        transparent: "transparent",
        current: "currentColor",
        DEFAULT: "#c6dad6", // default text color
        sagaGreen: "#c6dad6",
        mint: {
          100: "#dce8e6",
          200: "#d7e5e2",
          300: "#d1e1de",
          400: "#cbddda",
          500: "#c6dad6",
          600: "#b2c4c0",
          700: "#9eaeab",
          800: "#8a9895",
          900: "#768280",
        },
        gray: {
          100: "#e7e7e9",
          200: "#cfd0d4",
          300: "#b7b9bf",
          400: "#9fa2a9",
          500: "#878b94",
          600: "#6f737f",
          700: "#575c69",
          800: "#3e4554",
          900: "#262e3f",
        },
      },
    },
  },
  plugins: [],
};
