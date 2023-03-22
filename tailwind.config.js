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
        poppins: ['Poppins', 'sans-serif'],
        finger: ['Finger Paint', 'sans-serif'],
    },
  },
  // screens:{
  //  'xs':'0',
  //  'sm':'200',
  //  'md':'690',
  //  'lg':'1024',
  //  'xl':'1280',
  // },
  },
  plugins: [],
}