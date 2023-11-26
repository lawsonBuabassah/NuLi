/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      colors: {
        primaryColor: "hsl(185, 100%, 83%)",
        lighterColor: "hsl(184, 100%, 85%)",
        deeperColor: "hsl(208, 25%, 10%)"
      }
    },
  },
  plugins: [],
};
