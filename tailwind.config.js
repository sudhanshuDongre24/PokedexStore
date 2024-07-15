/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headingTop: "Bebas Neue, sans-seri",
        headingMedium: "Roboto, sans-serif",
        textNormal: "Open Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
