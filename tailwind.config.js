/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  "editor.quickSuggestions": {
    strings: "on",
  },
  "tailwindCSS.includeLanguages": {
    plaintext: "html",
    plaintext: "javascript",
  },
};
