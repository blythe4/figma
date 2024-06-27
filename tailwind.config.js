/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      font: {
    "fontTest1": "SUIT Variable",
    "fontTest2": "Bold"
      },
      gap: {
    "font_2": "SUIT Variable",
    "gap_1": "0.25rem",
    "gap_2": "0.5rem",
    "gap_3": "0.75rem",
    "gap_4": "1rem",
    "gap_5": "1.25rem",
    "gap_6": "1.5rem",
    "gap_7": "1.75rem",
    "gap_8": "2rem",
    "gap_9": "2.25rem",
    "gap_10": "2.5rem",
    "gap_11": "3.75rem",
    "gap_12": "5rem"
      },
      radius: {
        radiusL: "0.75rem",
        radiusM: "0.5rem",
        radiusS: "0.25rem"
      },
      stroke: {
        line: {
      "line_1": "0.063rem",
      "line_2": "0.125rem",
      "line_3": "0.188rem",
      "line_4": "0.25rem",
      "line_6": "0.375rem"
        },
        icon: {
          xs: "0.063rem",
          s: "0.075rem",
          m: "0.087rem",
          l: "0.1rem",
          xl: "0.125rem",
          xxl: "0.188rem"
        },
    "stroke_1": "0.063rem",
    "stroke_1_2": "0.075rem",
    "stroke_1_4": "0.087rem",
    "stroke_1_6": "0.1rem",
    "stroke_2": "0.125rem",
    "stroke_3": "0.188rem",
    "stroke_4": "0.25rem",
    "stroke_6": "0.375rem"
      },
      shadows: {
    "blue_12": "0.75rem",
    "blue_16": "1rem",
    "blue_20": "1.25rem",
        blue: {
          s: "0.75rem",
          m: "1.25rem",
          l: "1.75rem"
        },
    "blue_28": "1.75rem",
    "blue_24": "1.5rem",
    "blue_36": "2.25rem"
      },
      colors: {
        primary: {
          20: "#f3eff9",
          50: "#eee6f8",
          400: "#9348f1",
          500: "#6e27c8"
        },
        secondary: {
          20: "#f4f4f7",
          50: "#eae9ef",
          80: "#e0deea",
          100: "#cac8d8",
          200: "#a8a5bd",
          300: "#8783a2"
        },
        neutral: {
          0: "#ffffff",
          700: "#5c5c5f",
          900: "#1d1d1f"
        },
        opacity: {
          8: "#00000014",
          12: "#0000001f",
          20: "#00000033",
          30: "#0000004d",
          70: "#000000b3"
        },
        tertiary: {
          300: "#1fde8e",
          500: "#00ca5d",
          800: "#fb9f5d",
          900: "#391b1b",
      "r500": "#e92957"
        }
      },
      dropShadow: {
        sm: "0 0 0.75rem 0 #0000001f",
        md: "0 0 1.25rem 0 #00000033",
        lg: "0 0 1.75rem 0 #0000004d"
      },
      shadow: {
        sm: "inset 0 0 0.75rem 0 #0000001f",
        md: "inset 0 0 1.25rem 0 #00000033",
        lg: "inset 0 0 1.75rem 0 #0000004d"
      }
    },
  },
}