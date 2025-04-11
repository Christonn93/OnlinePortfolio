import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   extend: {
      fontFamily: {
        signature: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
