const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "fontSize": {
        "base": "0.8125rem",
        "lg": "0.9375rem",
        "xl": "1.25rem",
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
