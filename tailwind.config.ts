import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef8f3',
          100: '#d9efe4',
          500: '#228b64',
          600: '#176b4d',
          700: '#105b41',
          900: '#123d2f',
        },
        secondary: {
          50: '#fbf7ee',
          500: '#c6a15b',
          600: '#a98443',
          900: '#5f4925',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
