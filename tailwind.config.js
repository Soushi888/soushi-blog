/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2337ff",
          dark: "#000d8a",
          darker: "#5b6aff",
        },
        background: {
          DEFAULT: "rgb(var(--background) / <alpha-value>)",
          dark: "rgb(18, 18, 23)",
        },
        "text-main": "rgb(var(--text-main) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        gray: {
          DEFAULT: "rgb(96, 115, 159)",
          light: "rgb(229, 233, 240)",
          dark: "rgb(34, 41, 57)",
        },
      },
      fontFamily: {
        atkinson: ["Atkinson", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0 2px 6px rgb(96 115 159 / 0.25), 0 8px 24px rgb(96 115 159 / 0.33), 0 16px 32px rgb(96 115 159 / 0.33)",
        "custom-dark":
          "0 2px 6px rgb(0 0 0 / 0.35), 0 8px 24px rgb(0 0 0 / 0.4)",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to bottom, rgba(229, 233, 240, 0.5), rgb(255, 255, 255))",
        "gradient-custom-dark":
          "linear-gradient(to bottom, rgba(32, 32, 40, 0.95), rgb(18, 18, 23))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
