// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   safelist: [
//     '!duration-[0ms]',
//     '!delay-[0ms]',
//     'html.js :where([class*="taos:"]:not(.taos-init))'
//   ],
  
//   theme: {
//     extend: {},
//     fontFamily: {
//       'helvetica': ['Helvetica Neue', 'sans-serif'],
//       'helvetica-bold':['Helvetica Neue Bold', 'sans-serif'],
//       'helvetica-italic':['Helvetica Neue Italic', 'sans-serif'],
//       'helvetica-light':['Helvetica Neue Light', 'sans-serif'],
//       'helvetica-medium':['Helvetica Neue Medium', 'sans-serif']
//     },
//     colors: {
//       'gradient-top': '#E3EEFF',
//       'gradient-bottom': "#F3E7E9",
//       'main-brown': "#655D5D",
//       'text-pink': "#F2E8EB",
//       'hover-resume': '#2F2B2B'
//     },
//     content: {
//       relative: true,
//       transform: (content) => content.replace(/taos:/g, ''),
//       files: ['./src/*.{html,js}'],
//     },  
//   },
//   plugins: [
//     require('tailwindcss-animated'),
//     require('taos/plugin')
//   ],
    
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Add a comma here
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./projmang/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  
  theme: {
    extend: {},
    fontFamily: {
      'helvetica': ['Helvetica Neue', 'sans-serif'],
      'helvetica-bold':['Helvetica Neue Bold', 'sans-serif'],
      'helvetica-italic':['Helvetica Neue Italic', 'sans-serif'],
      'helvetica-light':['Helvetica Neue Light', 'sans-serif'],
      'helvetica-medium':['Helvetica Neue Medium', 'sans-serif']
    },
    colors: {
      'gradient-top': '#E3EEFF',
      'gradient-bottom': "#F3E7E9",
      'main-brown': "#655D5D",
      'text-pink': "#F2E8EB",
      'hover-resume': '#2F2B2B'
    },
    content: {
      relative: true,
      transform: (content) => content.replace(/\btaos:\b/g, ''), // Update the regex here
      files: ['./src/*.{html,js}'],
    },  
  },
  plugins: [
    require('tailwindcss-animated'),
    require('taos/plugin')
  ],
};
