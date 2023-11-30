/** @type {import('tailwindcss').Config} */
export default {
  content: [
            "./src/components/**/*.{html,js,jsx}",
            "./src/pages/**/*.{html,js,jsx}",
            "./src/*.{html,js,jsx}",
          ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6700',
        background: '#ebebeb',
        secondary: '#c0c0c0',
        tertiary: '#3a6ea5',
        displayText: '#004e98',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

