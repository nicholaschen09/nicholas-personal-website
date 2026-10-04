import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.796875rem', { lineHeight: '1rem' }],
        sm: ['0.9296875rem', { lineHeight: '1.25rem' }],
        base: ['1.0625rem', { lineHeight: '1.5rem' }],
        lg: ['1.1953125rem', { lineHeight: '1.75rem' }],
        xl: ['1.328125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.59375rem', { lineHeight: '2rem' }],
        '3xl': ['1.9921875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.390625rem', { lineHeight: '2.5rem' }],
        '5xl': ['3.1875rem', { lineHeight: '1' }],
        '6xl': ['3.984375rem', { lineHeight: '1' }],
        '7xl': ['4.78125rem', { lineHeight: '1' }],
        '8xl': ['6.375rem', { lineHeight: '1' }],
        '9xl': ['8.5rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['var(--font-jetbrains-mono)'],
        mono: ['var(--font-jetbrains-mono)'],
        minecraft: ['var(--font-minecraft)'],
        'instrument-serif': ['var(--font-instrument-serif)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};

export default config;
