/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'fit': 'fit-content',
        'max': 'max-content'
      }
    },
  },
  plugins: [],
}

