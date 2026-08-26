/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                cornorange: "#ff8f2c",
                cornpurple: "#b500f0",
            },
            fontFamily: {
                alba: ["alba_matter", "Impact", "sans-serif"],
                teko: ["tekoregular", "Trebuchet MS", "sans-serif"],
            },
            screens: {
                "3xl": "1920px",
                "4xl": "2560px",
            },
            maxWidth: {
                frame: "110rem",
            },
        },
    },
    plugins: [],
};
