module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    // more options here
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar'),
    ],
    theme: {
        fontFamily: {
            'sans': ['Inter'],
            'display': ['Inter'],
            'body': ['Inter']
        },
        extend: {
            lineHeight: {
                '11': '2.75rem',
                '12': '3rem',
                '13': '3.25rem',
                '14': '3.5rem',
                '15': '3.75rem',
                '16': '4rem',
                '17': '4.25rem',
                '18': '4.5rem',
                '19': '4.75rem',
                '20': '5rem',
                '21': '5.25rem',
                '22': '5.5rem',
                '23': '5.75rem',
                '24': '6rem',
                'index-custom': '8rem'
            }
        },
        minWidth: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        }
    },
    variants: {
        scrollbar: ["rounded"],
        extend: {
            textColor: ['active'],
        }
    }
};