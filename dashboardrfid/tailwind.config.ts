import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "4xl": [
        "64px",
        {
          fontWeight: "700",
          letterSpacing: "-2%",
        },
      ],
      "3xl": [
        "40px",
        {
          fontWeight: "700",
          letterSpacing: "-2%",
        },
      ],
      "2xl": [
        "24px",
        {
          fontWeight: "700",
          letterSpacing: "-2%",
        },
      ],
      xl: [
        "24px",
        {
          fontWeight: "500",
        },
      ],
      body: [
        "16px",
        {
          fontWeight: "500",
          letterSpacing: "-2%",
          lineHeight: "140%"
        },
      ],
      bold: [
        "16px",
        {
          fontWeight: "700",
        
        },
      ],
      small: [
        "14px",
        {
          fontWeight: "500",
        },
      ],
      pretitle: [
        "10px",
        {
          fontWeight: "700",
          letterSpacing: "3%",
        },
      ],
      button: [
        "16px",
        {
          fontWeight: "700",
          letterSpacing: "3%",
        },
      ],
      link: [
        "16px",
        {
          fontWeight: "700",
          letterSpacing: "3%",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
export default config;