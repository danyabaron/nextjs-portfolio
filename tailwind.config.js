/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gradient-top': '#E3EEFF',
      'gradient-bottom': "#F3E7E9",
      'main-brown': "#655D5D",
      'text-pink': "#F2E8EB",
    }
  },
  plugins: [],
}