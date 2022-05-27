module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'blue': '#2E598A',
          'purple': '#42047E',
          'green' :'#07F49E',
          'font': '#F2F2F2',
          'black': '#090909',
          'soft-white': '#FBFAF5',
          'soft-black': '#0E1111',
          gradients: {
            'll1': '#7EF29D',
            'll2': '#0F68A9',
            'darkb1': '#42047E',
            'darkb2': '#07F49E',
          }
        },
        'sidebar-gray': '#f6f7f6',
      },
      width: {
        '1/10': '10%',
        '9/10': '90%',
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
