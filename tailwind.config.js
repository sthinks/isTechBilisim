/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            sans: ["myfont", "Kumbh Sans"],
        },
        extend: {
            boxShadow: {
                isTech: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                isTech2: "0px 4px 4px rgba(0, 0, 0, 0.15)",
            },
        },
    },
    plugins: [],
};
