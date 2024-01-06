/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-orange': '#FF3811',
      },
    },
    screens: {
      'xsm': '380px',
      // => @media (min-width: 380px) { ... }
      'sm' : '600px',
      // => @media (min-width: 640px) { ... }
      'md' : '768px',
      // => @media (min-width: 768px) { ... }
      'lg' : '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl' : '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [require("daisyui")],
}
