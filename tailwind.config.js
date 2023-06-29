/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "search-bg": "#e0e1e1",
                "app-dark-blue": "#041c44",
                "app-light-blue": "#153b63",
            },
            keyframes: {
                marquee1: {
                    "0%": { transform: "translateX(0%)" },
                    "50%": { transform: "translateX(-100%)" },
                    "51%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(0%)" },
                    "50%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(-200%)" },
                },
            },
            animation: {
                marquee1: "marquee1 30s linear infinite",
                marquee2: "marquee2 30s linear infinite",
            },
        },
    },
    plugins: [],
};
