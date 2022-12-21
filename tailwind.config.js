const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            screens:{
                sm: '640px',	//max-width: 640px;
                md: '768px',	//max-width: 768px;
                lg: '1024px',	//max-width: 1024px;
                xl: '1280px',	//max-width: 1280px;
            },
            container:{
                center:true,
                padding:'1rem',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                poppins: "'Poppins', sans-serif",
                roboto: "'Roboto', sans-serif"

            },
            colors:{
                'danger': '#FD3D57',
                // 'success':'',
                // 'primary':'',
                'dark': '#2D394B',
                'light':'#F2F0F0',
                'warning': '#F6BC3E'
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
