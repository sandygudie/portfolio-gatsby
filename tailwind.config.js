module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(171deg 47% 63%)",
        secondary: "hsl(220deg 26% 14%)",
        red_light: "hsl(0deg 84% 60%)",
        dark: "hsl(0deg 0% 0%)",
        white: "hsl(0deg 0% 100%)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      translate: {
        "2/4": "-50%",
      },

      fontFamily: {
        cursive: "cursive, sans-serif",
      },
    },
  },
  plugins: [],
}
