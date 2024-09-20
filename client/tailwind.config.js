/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B17',   // Primary color set to orange
        secondary: 'black',  // Secondary color set to black
      },
      spacing: {
        'custom-padding': '2rem',   // Custom padding value (32px)
        'custom-margin': '4rem',    // Custom margin value (64px)
      },
    },
  },
  plugins: [],
}
