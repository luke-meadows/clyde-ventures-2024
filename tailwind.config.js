/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#F9C157',
        'primary-blue': '#032E61',
        'super-light-grey': '#ECECEC',
        'off-white': '#f8f8f8',
        'light-grey': '#484848',
        'medium-grey': '#464646',
        'dark-grey': '#404040',
        'linkedin-blue': '#0A66C2',
        'black-text': '#1B1B1B',
        'grey-text': '#464646',
        'card-bg': '#F8F8F8',
      },
      boxShadow: {
        'nav-bottom': '0 20px 20px -20px rgba(0, 0, 0, 0.3)',
        bottom: '0 20px 20px -20px rgba(0, 0, 0, 0.5)',
        // card: '0px 15px 15px -15px rgba(0, 0, 0, 0.5)',
        card: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        button: '0px 15px 15px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
