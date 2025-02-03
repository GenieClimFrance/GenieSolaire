/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EBCA4E",
        secondary: "#1E1E1E",
        tertiary: "#F9F9F9",
        hover: "#3EAB3D",
      },
      fontFamily: {
        emOne: ["var(--font-em-one)", "sans-serif"],
        kollektif: ["var(--font-kollektif)", "sans-serif"],
      },
      screens: {
        xl: "1400px",
        "3xl": "2240px",
      },
      keyframes: {
        fill93: {
          "0%": { width: "0%" },
          "100%": { width: "93%" },
        },
        fill100: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fill95: {
          "0%": { width: "0%" },
          "100%": { width: "95%" },
        },
        fill85: {
          "0%": { width: "0%" },
          "100%": { width: "85%" },
        },
        fill90: {
          "0%": { width: "0%" },
          "100%": { width: "90%" },
        },
      },
      animation: {
        "fill-93": "fill93 2s ease-in-out forwards",
        "fill-100": "fill100 2s ease-in-out forwards",
        "fill-95": "fill95 2s ease-in-out forwards",
        "fill-85": "fill85 2s ease-in-out forwards",
        "fill-90": "fill90 2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
} satisfies Config;
