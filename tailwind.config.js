/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        darkish: "#111",
        primary: "#202054",
        secondary: "#f0b73f",
        clear: "#fffcf9",
        grey: "#141a29",
        light_grey: "#636a7d",
        lighestgrey: "#ebebeb",
        axiagrey: "#bdbdbd",
        brown: "#faf5ee",
        darkgrey: "#3f3f3f",
      },
    },
  },
  plugins: [],
}
