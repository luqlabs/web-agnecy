/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1f1f1f',
        'brand-orange': '#ed5724',
        'brand-cream': '#fffdeb'
      }
    },
  },
  plugins: [],
}
