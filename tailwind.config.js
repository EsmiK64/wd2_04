/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: [
      './index.html',
      './src/**/*.{vue,js,ts}',
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}