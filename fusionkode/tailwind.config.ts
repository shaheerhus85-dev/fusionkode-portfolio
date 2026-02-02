import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'sans-serif'],
                mono: ['monospace'],
            },
            colors: {
                background: '#0A0A0A',
                charcoal: '#0A0A0A',
                'electric-blue': '#007AFF',
                cyan: '#00F2FF',
                foreground: '#FFFFFF',
            },
            backgroundImage: {
                'gradient-premium': 'radial-gradient(circle at center, #0A0A0A 0%, #050505 100%)',
                'accent-gradient': 'linear-gradient(to right, #007AFF, #00F2FF)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
} satisfies Config;
