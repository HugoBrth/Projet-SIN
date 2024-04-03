import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
    extend: {
      colors: {
        primary: {
          200: "#4F4F4F",
          400: "#242424",
          600: "#161717",
          800: "#000",
        },
        secondary: {
          200: "#FCDF78",
          400: "#FAD85D"
        },
        tercery: "#383456",
        ongoing: "#6F82E8",
        success: "#73FFCC",
        error: "#F94144",
        accent1: "#0BF4C8",
        accent2: "#F2A0FF",
        grey: "#666262",
        white: "#fff"
      }
    },
  },
  plugins: [],
};
export default config;