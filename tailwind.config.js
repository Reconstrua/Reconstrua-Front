/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        titleClamp: "clamp(1rem, 4vw, 3rem)",
        subtitleClamp: "clamp(12px, 1.34vw, 1rem)",
        buttonClamp: "clamp(10px, 1.34vw, 1rem)"
      },
    },
  },
  plugins: [],
};

