/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
    extend: {
      colors: {
        "dark-green": "#3A4E48",
        "light-green": "#6A7B76",
        "component-light": "#FFEFD3",
        "component-dark": "#263238",
        "light-text": "#E9F2FC",
        "dark-text": "#ADB6C4",
      },
      fontSize: {
        titleClamp: "clamp(1rem, 2.7vw, 3.5rem)",
        subtitleClamp: "clamp(10px, 1.5vw, 1.5rem)",
        profileTitleClamp: "clamp(1rem, 1.7vw, 3rem)",
      },
    },
  },
  plugins: [],
};
