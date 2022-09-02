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
      },
      dropShadow: {
        'top': [
          '0 -1px 5px rgba(0, 0, 0, 0.25)',
          '0 -2px 10px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
