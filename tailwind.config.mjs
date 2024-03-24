/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        home: "#1E1D1D",
        "all-header": "#302C2C",
        tag: "#312F2F",
        "tag-2": "#272424",
        main: "#FFFF",
      },
      fontSize: {
        title: "4rem",
        "medium-title": "3rem",
        "sm-title": "2rem",
        "nav-items": "1.8rem",
        description: "0.813rem",
        small: "0.75rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
