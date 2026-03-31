import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current:     "currentColor",
      white: "#FDFCFA",
      black: "#0D0C0B",
      page: {
        DEFAULT: "#FDFCFA",
        subtle:  "#F8F5F0",
        canvas:  "#F2EEE8",
      },
      stone: {
        100: "#EAE6DF",
        200: "#D8D2C9",
        300: "#B8B1A6",
        400: "#968F84",
        500: "#6E6760",
        600: "#4C4740",
        700: "#332F2A",
        800: "#231F1A",
        900: "#161310",
      },
      forest: {
        DEFAULT: "#2B4739",
        light:   "#365A49",
        dark:    "#1D3027",
      },
    },

    fontFamily: {
      serif: ["var(--font-serif)", "Georgia", "serif"],
      sans:  ["var(--font-sans)",  "system-ui", "sans-serif"],
    },

    fontSize: {
      "2xs":  ["0.6875rem",  { lineHeight: "1.4",  letterSpacing: "0.2em" }],
      "xs":   ["0.75rem",    { lineHeight: "1.5",  letterSpacing: "0.14em" }],
      "sm":   ["0.875rem",   { lineHeight: "1.65", letterSpacing: "0" }],
      "base": ["0.9375rem",  { lineHeight: "1.72", letterSpacing: "0" }],
      "lg":   ["1.0625rem",  { lineHeight: "1.72", letterSpacing: "0" }],
      "display-sm":  ["clamp(1.5rem, 2.5vw, 2rem)",      { lineHeight: "1.12", letterSpacing: "-0.01em" }],
      "display-md":  ["clamp(1.875rem, 3.2vw, 2.875rem)",{ lineHeight: "1.07", letterSpacing: "-0.012em" }],
      "display-lg":  ["clamp(2.25rem, 4vw, 3.5rem)",     { lineHeight: "1.04", letterSpacing: "-0.015em" }],
      "display-xl":  ["clamp(2.75rem, 5.5vw, 5rem)",     { lineHeight: "1.0",  letterSpacing: "-0.018em" }],
      "display-2xl": ["clamp(3.25rem, 7vw, 6.5rem)",     { lineHeight: "0.97", letterSpacing: "-0.02em" }],
      "display-3xl": ["clamp(3.75rem, 9vw, 8rem)",       { lineHeight: "0.94", letterSpacing: "-0.022em" }],
    },

    fontWeight: {
      light:  "300",
      normal: "400",
    },

    spacing: {
      px: "1px", 0: "0", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem",
      4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem", 8: "2rem",
      10: "2.5rem", 12: "3rem", 14: "3.5rem", 16: "4rem", 20: "5rem",
      24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem",
      48: "12rem", 56: "14rem", 64: "16rem",
    },

    maxWidth: {
      site:   "1360px",
      prose:  "68ch",
      narrow: "52ch",
    },

    borderRadius: {
      none: "0",
      DEFAULT: "0",
    },

    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
      out:     "cubic-bezier(0.16, 1, 0.3, 1)",
      linear:  "linear",
    },

    transitionDuration: {
      DEFAULT: "220ms",
      fast:    "150ms",
      slow:    "500ms",
    },

    extend: {
      letterSpacing: {
        widest:  "0.2em",
        wide:    "0.14em",
        tracked: "0.1em",
        tight:   "-0.015em",
        tighter: "-0.02em",
      },
      keyframes: {
        heroZoom: {
          from: { transform: "scale(1.04)" },
          to:   { transform: "scale(1)" },
        },
        fadeRise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        revealUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-zoom": "heroZoom 20s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-rise": "fadeRise 0.88s cubic-bezier(0.16,1,0.3,1) forwards",
        "reveal-up": "revealUp 0.75s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
