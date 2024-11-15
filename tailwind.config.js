/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        "fira-sans": ["Fira Sans"],
        "pp-supply-mono": ['"PP Supply Mono"', "monospace"],
        "pp-neuebit": ['"PP NeueBit"', "sans-serif"],
      },
      fontSize: {
        sm: "12px",
        md: "16px",
        lg: "22px",
        xl: "31px",
      },
      textColor: {
        dullColor: "#d4d4d4",
        greenColor: "#b8fd8e",
        footerTextColor: "#e4e4e4",
        grey: "#fcfcfc",
      },
      boxShadow: {
        custom: "0px 6px 16px -6px #00000029",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-left": "marquee-left 30s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "::-webkit-scrollbar-track": {
          background: "#000",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#6142ff",
          borderRadius: "10px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#000",
        },
      });
    },
  ],
};
