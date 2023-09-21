const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      'mini': "260px",
      'mobile': "320px",
      'tablet': "400px",
      'xs': "640px",
      'sm': "768px",
      'md': "960px",
      'lg': "1080px",
      'xl': "1440px",
      '2xl': "1536px",
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-pattern':  "url('https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png')",
      },
      colors: {
        heroone: "hsl(var(--heroone))",
        herotwo: "hsl(var(--herotwo))",
        herothree: "hsl(var(--herothree))",
        newblue: "hsl(var(--newblue))",
        babyblue: "hsl(var(--babyblue))",
        newpurple: "hsl(var(--newpurple))",
        royalpurple: "hsl(var(--royalpurple))",
        neworange: "hsl(var(--neworange))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "wave":{
          from: { backgroundPositionX: "0px" },
          to: { backgroundPositionX: "1000px" },
        },
        "wave2": {
          from: { backgroundPositionX: "0px" },
          to: { backgroundPositionX: "-1000px" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wave": "wave 30s linear infinite animation-delay-0",
        "wave2": "wave2 15s linear infinite animation-delay-[-5s]",
        "wave3": "wave 30s linear infinite animation-delay-[-2s]",
        "wave4": "wave2 5s linear infinite animation-delay-[-5s]",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
