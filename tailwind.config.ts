import type { Config } from "tailwindcss";

const shadow = require("./src/utils/tailwind/shadow.tailwind");
const screens = require("./src/utils/tailwind/screens.tailwind");
const fontFamily = require("./src/utils/tailwind/fontFamily.tailwind");
const colors = require("./src/utils/tailwind/colors.tailwind");
const borderRadius = require("./src/utils/tailwind/borderRadius.tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      shadow,
      screens,
      fontFamily,
      colors,
      borderRadius,
    },
  },
  plugins: [],
};
export default config;
