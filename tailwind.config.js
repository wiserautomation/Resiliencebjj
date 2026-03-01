/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                neon: '#FFFF00', // Bright neon yellow
                secondary: '#CCCCCC',
            },
        },
    },
    plugins: [],
}
