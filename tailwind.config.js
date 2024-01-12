/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "orange-gradient":
          "linear-gradient(102deg, #F48D7E 8.63%, #D74C38 93.24%)",
      },
    },
  },
  plugins: [],
};
