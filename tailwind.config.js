/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/collections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-red-500',
    'text-white',
    'text-2xl',
    'font-black',
    'font-semibold',
    'tracking-tight',
    'tracking-wide',
    'hover:text-gray-200',
    'hover:bg-red-600'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}
