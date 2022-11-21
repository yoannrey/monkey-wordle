/** @type {import('tailwindcss').Config } */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      sm: '2rem',
    },
    // spacing: {
    //   '32': '32rem',
    // },
    extend: {},
  },
  plugins: [],
}
