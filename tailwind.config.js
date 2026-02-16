/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-white': '#F9FAFB',
        'soft-black': '#111827',
        'soft-skin': '#FFF0F5', // Light Pink (Lavender Blush)
        'soft-pink': '#FFF5F7', // Secondary Pink
        'warm-grey': '#E8E4E1', // New secondary warm tone
        'glass-border': 'rgba(0, 0, 0, 0.05)',
        'glass-surface': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        heading: ['"Inter"', 'sans-serif'], // Fallback to Inter for now, user can add custom fonts
        sans: ['"Inter"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
