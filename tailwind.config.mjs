/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EEF6',
          100: '#C2D6E9',
          200: '#9BBDDC',
          300: '#74A4CF',
          400: '#4D8BC2',
          500: '#2672B4',
          600: '#1E5A91',
          700: '#164370',
          800: '#0F2C4A',
          900: '#071525',
          DEFAULT: '#0A3D7C',
        },
        secondary: {
          50: '#FFF0E0',
          100: '#FFDBB3',
          200: '#FFC580',
          300: '#FFAF4D',
          400: '#FF991A',
          500: '#FF8000',
          600: '#E67300',
          700: '#B35900',
          800: '#804000',
          900: '#4D2600',
          DEFAULT: '#FF8000',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};