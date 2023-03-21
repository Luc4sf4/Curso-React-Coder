/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist:[
    /^bg-/,
    /^to-/,
    /^from-/,


  ],

  theme: {
    extend: {},
  },
  plugins: [ ],
}
