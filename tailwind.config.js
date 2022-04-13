module.exports = {
  content: ["./templates/**/*.twig", "./assets/**/*.{js,ts,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
