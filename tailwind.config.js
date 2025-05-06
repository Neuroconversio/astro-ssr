/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  safelist: [
    'transition-all',
    'duration-300',
    'ease-in-out',
    'hover:scale-105',
    'hover:shadow-xl',
    'shadow-card',
    'font-heading',
    'font-subheading',
    'font-paragraph',
    'font-cta',
    'text-4_5xl',
    'xs:text-4_5xl',
    'xsplus:text-5xl',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Libre Baskerville"', 'serif'],
        subheading: ['Inter', 'sans-serif'],
        paragraph: ['Poppins', 'sans-serif'],
        cta: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        '4_5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 5px 30px rgba(0, 0, 0, 0.2)',
      },
      screens: {
        xs: '375px',
        xsplus: '390px',
      },
      backgroundImage: {
        'design-image': "url('https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?ixlib=rb-4.0.3&q=85&fm=jpg&fit=max')",
        'design-image-large': "url('https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?ixlib=rb-4.0.3&q=85&fm=jpg&fit=max&h=2000')",
      },
    },
  },
  plugins: [],
}