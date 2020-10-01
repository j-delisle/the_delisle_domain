module.exports = {
  purge: {
    content: ["./**/*.js", "./**/*.eleventy.js", "./**/*.html", "./**/*.njk"],
  },
  theme: {
    extend: {
      fontFamily: {
        display: ["Staatliches"],
        body: ["Lato"],
      },
      colors: {
        primary: "#3aafa9",
        secondary: "#1f2226",
        prime_text: "#feffff",
        secondary_text: "#bacfc1",
        light: "#646464",
      },
      fontSize: {
        tiny: "0.6rem",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.7)",
        hover: "0 25px 50px -12px rgba(100, 100, 100, 0.3)",
      },
    },
  },
  variants: {},
  plugins: [],
};
