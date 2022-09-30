const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./fragments/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-from) 30%, var(--tw-gradient-to) 70%)`,
          }),
        },
        {
          values: Object.assign(theme("", {}), {
            130: "130deg", // bg-gradient-130
            160: "160deg", // bg-gradient-160
          }),
        }
      );
    }),
  ],
};
