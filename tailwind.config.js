const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9747ff',
          50: '#f7f2ff',
          100: '#efe8ff',
          200: '#e1d4ff',
          300: '#ccb1ff',
          400: '#b485ff',
          500: '#9747ff',
          600: '#9330f7',
          700: '#851ee3',
          800: '#6f18bf',
          900: '#5b169c',
          950: '#390b6a',
        },
        secondary: {
          DEFAULT: '#E4E4E7',
          50: '#f7f7f7',
          100: '#ebebee',
          200: '#e4e4e7',
          300: '#c5c5cb',
          400: '#a8a9b2',
          500: '#94939e',
          600: '#83828e',
          700: '#777580',
          800: '#64626b',
          900: '#535157',
          950: '#353437',
        },
        success: {
          DEFAULT: '#4ADE80',
          50: '#f0fdf5',
          100: '#dcfce8',
          200: '#bbf7d1',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55d',
          600: '#16a349',
          700: '#15803c',
          800: '#166533',
          900: '#14532b',
          950: '#052e14',
        },
        warning: {
          DEFAULT: '#EF4444',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    // w-0 to w-96
    {
      pattern: /^w-((([1-9]|[1-8][0-9])(\/[1-9]|[1-8][0-9])?)|96)$/,
    },
    // h-0 to h-96
    {
      pattern: /^h-((([1-9]|[1-8][0-9])(\/[1-9]|[1-8][0-9])?)|96)$/,
    },
  ],
};
