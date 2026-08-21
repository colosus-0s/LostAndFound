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
        background: '#F8F9FA', // Clean light neutral background
        surface: {
          DEFAULT: '#FFFFFF',
          neutral: '#F1F3F5',
          dark: '#111318',
        },
        primary: {
          DEFAULT: '#111318',
          muted: '#525866',
        },
        brand: {
          DEFAULT: '#2563EB', // Restrained Indigo/Blue
          blue: '#1D4ED8',
          indigo: '#4F46E5',
          light: '#EFF6FF',
        },
        status: {
          lost: '#DC2626',      // Warm Red/Rose
          lostBg: '#FEF2F2',
          found: '#0D9488',     // Teal / Blue-Green
          foundBg: '#F0FDFA',
          matched: '#4F46E5',   // Indigo
          matchedBg: '#EEF2FF',
          verified: '#10B981',  // Emerald Green
          verifiedBg: '#ECFDF5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
      },
      maxWidth: {
        'content': '1440px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'float': '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
