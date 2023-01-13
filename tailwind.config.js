/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,html,js}",
    "./components/**/*.{js,ts,jsx,tsx,html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
				info: 'linear-gradient(to right, hsla(205, 100%, 97%, 1), transparent 100%)',

      },
      fontFamily: {
        'sans' : ['Helvetica']
      }
    },
  },
  plugins: [],
}
