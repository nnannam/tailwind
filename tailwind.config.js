/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      'purpleBg': '#F4EBF9',
      'purpleText': '#B479D9',
    }
  },
  plugins: [require('flowbite/plugin')],
}

