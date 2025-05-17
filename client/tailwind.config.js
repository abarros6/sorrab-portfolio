/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      height: {
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#5C7AEA",
          "secondary": "#A6B1E1",
          "accent": "#3EDBF0",
          "neutral": "#374151",
          "base-100": "#F3F4F6",
          "base-200": "#E5E7EB",
          "base-300": "#D1D5DB",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "light", 
      "dark", 
      "nord",
      "night",
      "lemonade",
      "forest",
      "business",
      "winter",
      "autumn"
    ],
  },
}