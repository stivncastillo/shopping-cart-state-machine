/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific row configuration
        'layout': '60% 1fr',
      }
    },
  },
  plugins: [],
}
