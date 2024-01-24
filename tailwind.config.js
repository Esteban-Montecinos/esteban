import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      "animation": {
        "background-shine": "background-shine 1.5s linear infinite",
        "border-width": "border-width 3s infinite alternate"
      },
      "keyframes": {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        },
        "border-width": {
          "from": {
            "width": "10px",
            "opacity": "0"
          },
          "to": {
            "width": "100px",
            "opacity": "1"
          }
        }
      }
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    nextui()
  ],
}
