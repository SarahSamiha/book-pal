/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        myTheme1: {

          "primary": "#FF5757",

          "secondary": "#4B6175",

          "accent": "#c149ad",

          "neutral": "#000000",

          "base-100": "#FFFFFF",

          "info": "#93e6fb",

          "success": "#80ced1",

          "warning": "#efd8bd",

          "error": "#e58b8b",
        },
      },
      {
        myTheme2: {

          "primary": "#FF5757",

          "secondary": "#4B6175",

          "accent": "#c149ad",

          "neutral": "#FFFFFF",

          "base-100": "#00000",

          "info": "#93e6fb",

          "success": "#80ced1",

          "warning": "#efd8bd",

          "error": "#e58b8b",
        },
      },
    ],
  },


}

