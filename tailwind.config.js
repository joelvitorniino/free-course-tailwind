/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/img/hero-image-1.png')"
      },
      height: {
        bannerImg: '450px'
      }
    },
  },
  plugins: [],
}
