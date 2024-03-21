import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        orange: {
          50: '#fffcea',
          100: '#fff5c5',
          200: '#ffeb85',
          300: '#ffda46',
          400: '#ffc71b',
          500: '#ffa500',
          600: '#e27c00',
          700: '#bb5502',
          800: '#984208',
          900: '#7c360b',
          950: '#481a00'
        },
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
        }
      }
    }
  }
};
