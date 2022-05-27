module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        ektheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#334d4d",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
