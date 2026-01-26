/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: '#2D5016',
        leaf: '#4A7C23',
        lime: '#7CB342',
        earth: '#5D4037',
        sand: '#F5F0E8',
        cream: '#FAFAF5',
        saffron: '#E65100',
        gold: '#F9A825',
        plum: '#6A1B6A',
        'text-primary': '#2C2C2C',
        'text-muted': '#5F6368',
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
