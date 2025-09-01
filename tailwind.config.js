module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        "gradient-bg": {
          "0%": { "background-position": "0% 50%" },
          "25%": { "background-position": "50% 100%" },
          "50%": { "background-position": "100% 50%" },
          "75%": { "background-position": "50% 0%" },
          "100%": { "background-position": "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "gradient-bg": "gradient-bg 12s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [],
};
