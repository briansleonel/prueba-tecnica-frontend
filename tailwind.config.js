/** @type {import('tailwindcss').Config} */

const { withAnimations } = require("animated-tailwindcss");

export default withAnimations({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "back": "url('./src/assets/background.svg')",
            },
        },
    },
    plugins: [],
});
