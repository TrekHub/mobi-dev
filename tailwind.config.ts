import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#070607",
        "footer-bg": "#1d1d1c",
        "yellow-accent": "#ffe047",
        "green-accent": "#00ab8d",
        "purple-accent": "#4b3eb6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
