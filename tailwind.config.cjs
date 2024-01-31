/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#02885F',
          600: '#02885F',
          700: '#014C3F',
          300: '#014C3F',
          800: '#FFFFFF',
          100: '#093957',
          200: '#02885F',
          400: '#02885F',
          500: '#02885F',
          900: '#02885F',
        },
        blue: {
          DEFAULT: '#083957',
          300: '#083957',
          600: '#014C3F',
          200: '#0080B4',
          700: '#ffffff',
          800: '#014C3F',
          900: '#083957',
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Montserrat', 'serif'],
        'mono': ['Montserrat', 'monospace'],
        'display': ['Montserrat', 'display'],
        'body': ['Montserrat', 'body'],
      },
      gradientColorStopPositions: {
        33: '33%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animated'),
    require('tailwindcss-intersect'),
  ],
}
