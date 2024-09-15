const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/ui-core/hlm-tailwind-preset')],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            1: '#28096A',
            2: '#3C009F',
            3: '#6428FB',
            4: '#B989F9',
            5: '#3D346A'
        },
        secondary: {
          1: '#39129A',
          2: '#281E5A',
          3: '#140232',
          4: '#F5F5F5'
        },
        greys: {
          1: '#C4C4C4',
          2: '#555555',
          3: '#262626',
          4: '#000000'
        },
        background: {
          DEFAULT: '#F7F7F7',
          outline: '#E3DEE8',
          icons: '#E8DFFA',
          hover: '#F7F4FF',
          card: '#FFFFFF'
        },
        outage: {
          success: '#B5EFDA',
          warning: '#FFEBB7',
          danger: '#FFC3C3'
        },
        device: {
          DEFAULT: '#9A9A9A',
          success: '#6CA652',
          warning: '#EDB846',
          danger: '#FE414D'
        }
      },
    }
  },
  plugins: [],
};
