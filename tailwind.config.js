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
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotateX(0.0deg)' },
          '15%': { transform: 'rotateX(90deg)' },
          '30%': { transform: 'rotateX(0.0deg)' },
        },
      },
      animation: {
        'flip-card': 'wave 2s linear 1',
      },
    },
  },
  plugins: [],
}
