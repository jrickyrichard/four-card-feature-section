/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "red": "hsl(0, 78%, 62%)",
        "cyan": "hsl(180, 62%, 55%)",
        "orange": "hsl(34, 97%, 64%)",
        "blue": "hsl(212, 86%, 64%)",
        "very-dark-blue": "hsl(234, 12%, 34%)",
        "grayish-blue": "hsl(229, 6%, 66%)",
        "very-light-gray": "hsl(0, 0%, 98%)"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      fontWeight: {
        "200": "200",
        "400": "400",
        "600": "600"
      },
      fontSize: {
        "base": "15px"
      },
      screen: {
        "sm": "260px",
        "md": "768px",
        "lg": "820px"
      }
    },
  },
  plugins: [],
}