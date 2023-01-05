/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "brand-color": " rgb(153, 93, 93)",
      }),
    },
  },
  plugins: [],
};
