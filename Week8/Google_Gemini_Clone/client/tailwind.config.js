/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'green': '#4CAF50',
        'blue':'#1976D2'
      }
    },
  },
  plugins: [],
}

