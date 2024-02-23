/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./battery.html",
  ],
  theme: {
    extend: {
      animation: {
        "battery-animation": "battery 5s linear infinite alternate",
      },
      keyframes: {
        battery: {
          "0%": { width: "5%", background: "red" },
          "25%": { width: "25%", background: "orange" },
          "50%": { width: "50%", background: "yellow" },
          "75%": { width: "75%", background: "#d8f40c" },
          "100%": { width: "100%", background: "green" },
        },
      },
    },
  },
  // ...
};
