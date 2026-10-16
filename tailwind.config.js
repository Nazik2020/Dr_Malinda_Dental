/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // High-end Clinical Canvas & Surface Tokens (Slate-based Clean Titanium)
        surface: {
          DEFAULT: '#F1F5F9', // Slate 100: provides tangible physical contrast against pure white cards
          dim: '#E2E8F0',
          bright: '#FFFFFF',
          'container-lowest': '#FFFFFF',
          'container-low': '#F8FAFC',
          container: '#F1F5F9', // Slate 100
          'container-high': '#E2E8F0', // Slate 200
          'container-highest': '#CBD5E1',
          variant: '#F1F5F9',
          tint: '#047857',
        },
        'on-surface': {
          DEFAULT: '#0F172A', // Slate 900
          variant: '#475569', // Slate 600
        },
        'inverse-surface': '#0F172A',
        'inverse-on-surface': '#F8FAFC',

        outline: {
          DEFAULT: '#94A3B8',
          variant: '#E2E8F0',
        },

        // Primary Clinical Green Scale (Emerald)
        primary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857', // Authoritative clinical primary
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
          DEFAULT: '#047857',
          container: '#059669',
          'on-container': '#ECFDF5',
          inverse: '#34D399',
        },
        'on-primary': '#FFFFFF',

        secondary: {
          DEFAULT: '#0F172A', // Deep slate secondary
          container: '#1E293B',
          'on-container': '#F8FAFC',
        },
        'on-secondary': '#FFFFFF',

        // Trust Gold / Warm Amber (WCAG Compliant 4.5:1 on light)
        tertiary: {
          DEFAULT: '#D97706', // Amber 600
          container: '#FEF3C7',
          'on-container': '#92400E',
        },
        'on-tertiary': '#FFFFFF',

        error: {
          DEFAULT: '#DC2626',
          container: '#FEE2E2',
          'on-container': '#991B1B',
        },
        'on-error': '#FFFFFF',

        // Production-Ready Semantic Clinical Brand Tokens
        charcoal: '#0F172A',        // Slate 900: High-contrast headings and dark surfaces
        'mint-tint': '#ECFDF5',     // Emerald 50: Soothing clinical mint background
        'body-neutral': '#475569',  // Slate 600: WCAG AAA body text
        'border-crisp': '#E2E8F0',  // Slate 200: Hairline precision card & input borders
        'border-dark': 'rgba(255, 255, 255, 0.12)',
        'action-green': '#047857',  // Emerald 700: Authoritative primary action
        'action-hover': '#065F46',  // Emerald 800: Hover state
        'brand-accent': '#059669',  // Emerald 600: Precision indicator
        'accent-yellow': '#D97706', // Amber 600: Replaces low-contrast neon yellow with rich gold
        'validation-gold': '#D97706',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        ambient: '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'ambient-hover': '0 12px 28px -4px rgba(15, 23, 42, 0.09), 0 4px 10px -2px rgba(15, 23, 42, 0.04)',
        'dark-ambient': '0 12px 36px 0 rgba(0, 0, 0, 0.45)',
        'glow-emerald': '0 0 25px -5px rgba(5, 150, 105, 0.25)',
      },
    },
  },
  plugins: [],
}
