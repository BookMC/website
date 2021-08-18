module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    mode: "jit",
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#54ac54",
                secondary: "#448c44"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
