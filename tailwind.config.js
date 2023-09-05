/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lock2': "url('../src/assets/images/lock2.jpg')",
        'lock3': "url('../src/assets/images/lock3.jpg')",
      }
    },
  },
  plugins: []
}

