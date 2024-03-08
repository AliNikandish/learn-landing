/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        // primary: "#02061a",
        primary: "#0d0e0f",
        secondary: "#aaa6c3",
        // tertiary: "#151030",
        tertiary: "#007474",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://4kwallpapers.com/images/walls/thumbs_3t/8324.png')",
      },
    },
    fontFamily:{
      "VazirMedium":"VazirMedium",
      "VazirBold":"VazirBold",
      "VazirLight":"VazirLight",
    },
  },
  plugins: [],
};
