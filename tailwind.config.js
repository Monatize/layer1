module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#2E598A',
                    purple: '#42047E',
                    green: '#07F49E',
                    font: '#F2F2F2',
                    black: '#090909',
                    'soft-white': '#FBFAF5',
                    'soft-black': '#0E1111',
                    gradients: {
                        ll1: '#7EF29D',
                        ll2: '#0F68A9',
                        darkb1: '#42047E',
                        darkb2: '#07F49E',
                    },
                },
                'sidebar-gray': '#f6f7f6',
            },
            fontFamily: {
                mt: ['Montserrat'],
            },
            width: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
            },
            height: {
                '1/8': '12.5%',
                '2/8': '25%',
                '3/8': '37.5%',
                '4/8': '50%',
                '5/8': '62.5%',
                '6/8': '75%',
                '7/8': '87.5%',
            },
            borderRadius: {
                '4xl': '2.5rem',
            },
            transitionDuration: {
                0.6: '600ms',
            },
            boxShadow: {
                btn: '5px 5px 0px #0E1111',
                'light-btn': '5px 5px 0px #FBFAF5',
                'sm-btn': '3px 3px 0px #0E1111',
                'sm-light-btn': '3px 3px 0px #FBFAF5',
            },
        },
    },
    plugins: [],
}
