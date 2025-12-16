// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        purple600custom: "hsl(292,16%,49%)",
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};