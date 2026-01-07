/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                luxury: {
                    pink: "#E1306C", // Vibrant Pink (Instagram brand color-like)
                    "pink-light": "#E8B4B8",
                    charcoal: "#1A1A1A", // Primary text
                    cream: "#F9F9F9", // Main background
                    white: "#FFFFFF", // Card background
                    border: "#E5E5E5",
                    soft: "#F5F5F5",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Outfit', 'serif'], // Using Outfit as requested
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
