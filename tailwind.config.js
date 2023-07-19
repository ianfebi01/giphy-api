/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ...
        primary: '#55BDB3',
        secondary: '#F0F8F8',
        darken: '#0F2435',
        hover: 'rgba(242, 242, 242, 0.60)',
        // ...
      },
      // Shadow
      boxShadow: {
        gg: '0px 10px 30px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
