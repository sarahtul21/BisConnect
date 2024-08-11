

/** @type {import('tailwindcss').Config & {daisyui: import('daisyui').Config}} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        
        'dark-text': "rgba(0, 0, 0, 1)",
        'light-text': "#b89867",
        'main-color-gradient': "var(--main-color-gradient)",
        'second-color-gradient': "var(--second-color-gradient)"
      },
      
      height: {
        'd-screen': 'var(--vh100)'
      },
      
      backgroundColor: {
        'dark-bg': "rgba(0, 0, 0, 1)",
        'gray-bg': '#0f0f0f',
        'light-bg': "#b89867",
      },
      
    },
  },
  plugins: [require('daisyui')],
}
// #717171  #030303   #030303     font #af997f
