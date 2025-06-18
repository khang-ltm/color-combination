/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
      animation: {
        "pulse-slow": "pulse 3s infinite",
      },
    },
  },
  plugins: [],
};
