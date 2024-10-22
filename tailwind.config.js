/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "#0D1C33",
                mediumBlue: "#102542",
                white: "#F2F7FC",
                blueViolet: "#3B3086",
                lightBlue:"#7291F9",
                purple:"#7B3C9F",
                pink:"#E66BBA"
            },
            fontFamily: {
                sora: "Sora"
            }
        },

    },
    plugins: [],
}

