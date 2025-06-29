/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      primary:{
        400: '#159c64',
      },
      secondary: {
        200: '#f4efec',
      },

    }},
  },
  plugins: [],
}

