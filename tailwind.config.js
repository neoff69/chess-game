/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                "1/8": "12.5%",
            },
            inset: {
                "1/8": "0%",
                "2/8": "12.5%",
                "3/8": "25%",
                "4/8": "37.5%",
                "5/8": "50%",
                "6/8": "62.5%",
                "7/8": "75%",
                "8/8": "87.5%",
            },
        },
    },
    safelist: [
        { pattern: /bottom-(1\/8|2\/8|3\/8|4\/8|5\/8|6\/8|7\/8|8\/8)/ },
        { pattern: /left-(1\/8|2\/8|3\/8|4\/8|5\/8|6\/8|7\/8|8\/8)/ },
        { pattern: /bg-blue-400/ },
        { pattern: /bg-red-400/ },
    ],
    plugins: [],
}; //  pattern:  /left-(1\/8|2\/8|3\/8|4\/8|5\/8|6\/8|7\/8|8\/8)/}],
