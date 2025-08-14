
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'body': ['Lato', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				hero: {
					DEFAULT: 'hsl(var(--hero))',
					foreground: 'hsl(var(--hero-foreground))'
				},
				luxury: {
					DEFAULT: 'hsl(var(--luxury))',
					foreground: 'hsl(var(--luxury-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Brand Colors
				'tuscan-red': 'hsl(var(--tuscan-red))',
				'chianti-wine': 'hsl(var(--chianti-wine))',
				'warm-gold': 'hsl(var(--warm-gold))',
				'antique-champagne': 'hsl(var(--antique-champagne))',
				'cream': 'hsl(var(--cream))',
				'charcoal': 'hsl(var(--charcoal))',
				'olive-green': 'hsl(var(--olive-green))',
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--hero)) 0%, hsl(var(--primary)) 100%)',
				'luxury-gradient': 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--luxury)) 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
