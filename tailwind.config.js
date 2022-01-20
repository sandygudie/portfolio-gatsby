module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      borderRadius: {
        "3xl": "100%",
      },
      translate: {
        "2/4": "-50%",
      },
      boxShadow: {
        "3xl": "inset 0 0 20px rgba(255, 255, 255, 0)",
      },
      fontFamily: {
        // sans: [ "Pinyon-Script", "Helvetica", "Arial", "Roboto", "sans-serif"],
        sans: [ "Axiforma","Segoe UI","Tahoma","Geneva","Verdana","sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      letterSpacing: {
      
        widest: '0.6em',
      }
    },
  },
  plugins: [],
}
