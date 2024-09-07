/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray__700: "#0D0D0D",
        gray_100: "#F2F2F2",
        gray_400: "#333333",
        gray_600: "#262626",
        gray_300: "#808080",

        blue: "#4EA8DE",
        blue_dark: "#1E6F9F",
        purple_dark: "#5E60CE",
        purple: "8284FA",
      },
    },
  },
  plugins: [],
};
