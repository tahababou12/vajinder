/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        math: ['Fira Math', 'serif'],
      },
      colors: {
        chalk: {
          white: 'var(--chalk-white)',
          dark: 'var(--slate-dark)',
        },
        accent: {
          blue: 'var(--accent-blue)',
          purple: 'var(--accent-purple)',
        }
      },
      spacing: {
        golden: '161.8%',
      },
      backgroundImage: {
        'math-grid': 'radial-gradient(circle at 2px 2px, var(--accent-blue) 2px, transparent 0)',
      }
    },
  },
  plugins: [],
}
