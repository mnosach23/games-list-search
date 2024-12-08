/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {},
    screens: {
      xxl: '1920px',
      xl: '1400px',
      lg: '1280px',
      md: '992px',
      sm: '768px',
      xs: '575px',
      xxs: '320px',
    },
  },
  plugins: [],
}
