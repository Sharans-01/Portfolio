/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: ['"Roboto Slab"', 'serif'],
      },
      animation: {
        wiggle: 'wiggle 12s ease-in-out infinite',
        
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
          
        },
      },
    },
  },
  plugins: [],
};
