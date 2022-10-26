const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "fontSize": {
        "base": "1.15rem",
        "lg": "1.25rem",
        "xl": "1.5rem",
        "2xl": "2.5rem"
       },
       "fontFamily": {
        "arizonia": "Arizonia",
        "aubrey": "Aubrey",
        "belgrano": "Belgrano",
        "open-sans": "Open Sans"
       },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
