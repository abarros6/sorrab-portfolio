/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#a7a4e0",
        "secondary": "#514689",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#b2b4b2",
        "base-200": "#707372",
        "base-300": "#54585a",
      },
    },"light", "dark", "pastel", "retro", "lemonade", "night", "nord"],
  },
}
