/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        ivory: '#f5efe0',
        charcoal: '#1a1510',
        moss: '#3d5a2e',
        terracotta: '#b84c2e',
        gold: '#c9a458',
        sage: '#7a8c6e',
        linen: '#e8dfc8',
      },
    },
  },
  plugins: [],
}
