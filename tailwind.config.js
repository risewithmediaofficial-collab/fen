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
        sans: ['"Roboto Condensed"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Zilla Slab"', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        dark: {
          900: '#0A0A0A',
          800: '#111111',
          700: '#171717',
          600: '#222222',
          500: '#333333',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #12121e 50%, #1a0533 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.05))',
        'glow-primary': 'radial-gradient(ellipse at center, rgba(99,102,241,0.3) 0%, transparent 70%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(228,100%,74%,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.04) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,0.06) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(269,100%,77%,0.07) 0px, transparent 50%)',
        'mesh-light': 'radial-gradient(at 40% 20%, hsla(228,100%,74%,0.04) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.03) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'blur-in': 'blur-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'progress': 'progress 5s linear forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          'to': { boxShadow: '0 0 40px rgba(139,92,246,0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(8px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99,102,241,0.3)',
        'glow-md': '0 0 30px rgba(99,102,241,0.4)',
        'glow-lg': '0 0 60px rgba(99,102,241,0.5)',
        'glow-violet': '0 0 30px rgba(139,92,246,0.4)',
        'glow-white': '0 0 40px rgba(255,255,255,0.15)',
        'card': '0 8px 32px rgba(0,0,0,0.3)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5)',
        'premium': '0 20px 60px rgba(0,0,0,0.12)',
        'premium-dark': '0 20px 60px rgba(0,0,0,0.5)',
        'soft': '0 4px 24px rgba(0,0,0,0.06)',
        'soft-dark': '0 4px 24px rgba(0,0,0,0.3)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
