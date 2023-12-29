import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "black-1": "#111",
        "black-2": "#222",
        "black-3": "#333",
        "black-4": "#444",
        "black-6": "#666",
        "grey-1": "#F4F4F6",
        "grey-2": "#ddd",
        "grey-3": "#ccc",
        "grey-4": "#888",
        "blue-transparent": "rgba(1, 82, 207, 0.50)",
        red: "#EE1439",
        blue: "#0059E3",
        orange: "#E67100",
        white: "#fff",
        brown: "#3D1200",
        green: "#03C75B",
        pink: "#FF3D73",
        yellow: "#FFD600",
      },
      borderRadius: {
        lg: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
