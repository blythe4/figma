import type { Config } from "tailwindcss";

import colors from "./token/colors.tailwind";
import fontFamily from "./token/fontFamily.tailwind";
import shadow from "./token/shadow.tailwind";
import strokeWidth from "./token/strokeWidth.tailwind";
import borderRadius from "./token/borderRadius.tailwind";
import screens from "./token/screens.tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors,
      fontFamily,
      shadow,
      screens,
      borderRadius,
      strokeWidth,
    },
  },
  plugins: [],
};
export default config;
