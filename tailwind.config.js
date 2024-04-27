/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      "dark-green": "#3A4E48",
      "light-green": "#6A7B76",
      "component-dark": "#FFEFD3",
      "component-light": "#263238",
      "dark-text": "#E9F2FC",
      "light-text": "#ADB6C4",
    },
    extend: {
      fontSize: {
        titleClamp: "clamp(1rem, 3.5vw, 4rem)",
        subtitleClamp: "clamp(10px, 1.5vw, 1.7rem)",
        buttonClamp: "clamp(10px, 1.34vw, 1rem)"
      },
    },
  },
  plugins: [],
};

