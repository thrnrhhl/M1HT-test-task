/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'grey-1': 'var(--grey-type-1)',
        'grey-2': 'var(--grey-type-2)',
        'grey-3': 'var(--grey-type-3)',
        'grey-4': 'var(--grey-type-4)',
        'purple': 'var(--purple)',
        'black': 'var(--black)',
        'white': 'var(--white)',
      }
    },
  },
  plugins: [],
}

