import type { Config } from "tailwindcss"

import { scrollbarGutter, scrollbarWidth, scrollbarColor } from 'tailwind-scrollbar-utilities'

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  // theme: {
  //   extend: {}
  // },

  plugins: [
    scrollbarGutter(), // no options to configure
    scrollbarWidth(), // no options to configure
    scrollbarColor(), // no options to configure
  ]


} as Config
