/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                beva: {
                    green: {
                        50: "#E8F5EE",
                        100: "#D1EBDD",
                        500: "#1A5C35",
                        600: "#154A2A",
                        700: "#103820",
                        DEFAULT: "#1A5C35",
                    },
                    marine: {
                        50: "#E6E9EC",
                        500: "#001E3E",
                        600: "#001A35",
                        700: "#00162C",
                        900: "#000F1E",
                        DEFAULT: "#001E3E",
                    },
                    yellow: {
                        50: "#FEF9E7",
                        500: "#F0C22E",
                        600: "#D8AF29",
                        DEFAULT: "#F0C22E",
                    },
                    slate: {
                        50: "#F8FAFC",
                        100: "#F1F5F9",
                        200: "#E2E8F0",
                        500: "#64748B",
                        900: "#001E3E",
                    }
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                'vibrant': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }
        },
    },
    plugins: [],
}
