/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#04060A',
        surface: {
          DEFAULT: '#0A0D18',
          elevated: '#0B0F1B',
          card: '#0D1122',
        },
        brand: {
          violet: '#7C3AED',
          purple: '#8B5CF6',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          blue: '#3B82F6',
        },
        status: {
          lost: '#EF4444',
          found: '#3B82F6',
          matched: '#8B5CF6',
          verified: '#10B981',
          returned: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
      },
      maxWidth: {
        'content': '1440px',
      },
      boxShadow: {
        'glow-violet': '0 0 40px -10px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 40px -10px rgba(6, 182, 212, 0.3)',
        'card-glow': '0 0 30px -5px rgba(124, 58, 237, 0.15), 0 0 15px -3px rgba(6, 182, 212, 0.1)',
      }
    },
  },
  plugins: [],
};
