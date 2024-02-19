/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            white: 'hsl(0, 0%, 100%)',
            orange: 'hsl(25, 97%, 53%)',
            grey: {
                light: 'hsl(217, 12%, 63%)',
                medium: 'hsl(216, 12%, 54%)',

            },
            blue: {
                dark: 'hsl(213, 19%, 18%)',
                veryDark: 'hsl(216, 12%, 8%)',
                radial: 'hsl(215,20%,17%)'
            }

        },
        fontFamily:{
            overpass:['Overpass', 'sans-serif']
        }
    },
    plugins: [],
}