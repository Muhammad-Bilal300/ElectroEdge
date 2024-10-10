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
        // lightGray:"#f1f5f9",
        lightGray:"#e8edf3",
        
        // lightGray: "#e3e7ec",
        // bgcolor: "#f5f5f5",
        gray: "gray",
        tertiary: "black"
      },
      spacing: {
        'custom-padding': '2rem',   // Custom padding value (32px)
        'custom-margin': '4rem',    // Custom margin value (64px)
      },
    },
  },
  plugins: [],
}
