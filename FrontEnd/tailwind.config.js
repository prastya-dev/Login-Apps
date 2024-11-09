/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 10px 0 rgba(0, 0, 0, 0.3)',
      },
      colors: {
      'navyBlue' : '#00004d',
      'Beige' : '#EDE8D0',
    },
    
    keyframes: {
      'zoom-in': {
'0%': { transform: 'translateY(-40%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      fall: {
          '0%': { transform: 'translateY(-40%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
    },
    animation: {
      fall: 'fall 0.5s ease-out forwards',
      'zoom-in': 'zoom-in 0.3s ease-out forwards',
    },
    }
    
  },
  plugins: [],
}

