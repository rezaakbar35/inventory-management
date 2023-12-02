/** @type {import('tailwindcss').Config} */
export default {
  content: [
            "./src/components/**/*.{html,js,jsx}",
            "./src/pages/**/*.{html,js,jsx}",
            "./src/*.{html,js,jsx}",
            'node_modules/flowbite-react/lib/esm/**/*.js',
          ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6700',
        background: '#ebebeb',
        secondary: '#c0c0c0',
        tertiary: '#3a6ea5',
        displayText: '#004e98',
      },
      gridRow: {
        'span-8': 'span 8 / span 8',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
}

