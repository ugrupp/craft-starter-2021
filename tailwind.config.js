module.exports = {
  mode: 'jit',
  purge: [
    './templates/**/*.twig',
    './assets/**/*.{js,ts,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
