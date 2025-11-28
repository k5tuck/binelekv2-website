import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
      },
      colors: {
        // Emerald Green Primary (matches platform accent)
        primary: {
          50: '#f0fdf6',
          100: '#dcfce8',
          200: '#bbf7d1',
          300: '#86efad',
          400: '#4ade80',
          500: '#284139',
          600: '#1F332C',
          700: '#192a24',
          800: '#14231d',
          900: '#0f1a15',
          950: '#0a120f',
        },
        // Gold accent for highlights
        gold: {
          50: '#FDF8E8',
          100: '#FAEFC5',
          200: '#F5DF8A',
          300: '#EFD05A',
          400: '#E5B84A',
          500: '#D4A438',
          600: '#B8902F',
          700: '#9A7827',
          800: '#7D611F',
          900: '#604A18',
        },
      },
    },
  },
  plugins: [],
};

export default config;
