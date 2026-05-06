module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#111111',
          800: '#1a1a1a',
          700: '#2a2a2a',
          500: '#14605c',
          400: '#29a393',
          300: '#d4be8f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
