import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        curiousBlue: {
          50: '#f3f7fc',
          100: '#e5f0f9',
          200: '#c5dff2',
          300: '#93c6e6',
          400: '#59a8d7',
          500: '#338dc2',
          600: '#2471a5',
          700: '#1e5b86',
          800: '#1d4e6f',
          900: '#1d425d',
          950: '#132a3e'
        },
        eggBlue: {
          50: '#f0fdfb',
          100: '#cbfcf6',
          200: '#97f8ec',
          300: '#5bede1',
          400: '#29d8cf',
          500: '#11c7c1',
          600: '#0a9796',
          700: '#0d7878',
          800: '#0f5f60',
          900: '#124e4f',
          950: '#032e30'
        }
      }
    }
  }
};
