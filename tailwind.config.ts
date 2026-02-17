import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1B365D",
                    light: "#274B80",
                    dark: "#0F2340",
                },
                secondary: {
                    DEFAULT: "#2A7B88",
                    light: "#3A9BAA",
                    dark: "#1D5A64",
                },
                accent: {
                    DEFAULT: "#D4A843",
                    light: "#E0BE6A",
                    dark: "#B8902E",
                },
                neutral: {
                    50: "#F8F9FA",
                    100: "#F1F3F5",
                    200: "#E9ECEF",
                    300: "#DEE2E6",
                    400: "#ADB5BD",
                    500: "#6C757D",
                    600: "#495057",
                    700: "#343A40",
                    800: "#212529",
                    900: "#1A1A1A",
                },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
                heading: ["Outfit", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
