/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: ['"Playfair Display"', 'serif'],
      body: ['"Inter"', 'sans-serif'],
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#fffffa",
        black: "#1a1a1a",
        'text': '#1a1a1a',
        'background': '#f4f1ee',
        'primary': '#3a5a40',
        'secondary': '#a98467',
        'accent': '#e9e5df',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
        '11xl': '120rem',
        '12xl': '130rem',
      },
      keyframes: {
        line: {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        line1: "line 3s linear infinite",
        line2: "line 6s linear infinite",
        line3: "line 9s linear infinite",
      },
    },
  },
  plugins: [],
};
