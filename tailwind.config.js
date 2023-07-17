/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        finger: ["Finger Paint", "sans-serif"],

        primelt: ["Prime-Light", "sans-serif"],
        primerg: ["Prime-Regular", "sans-serif"],
        arkhip: ["Arkhip", "sans-serif"],
        happy: ["Happy", "sans-serif"],
        andromeda: ["Andromeda", "sans-serif"],
      },
      backgroundImage: {
        bg_image: "url('https://i.ibb.co/D5nHpmf/background-1.webp')",
      },
      boxShadow: {
        custom: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
    },
    screens: {
      xs: "0",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",

      "3xl": "1920px",
    },
  },
  plugins: [],
};
