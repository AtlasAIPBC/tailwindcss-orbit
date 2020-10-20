const plugin = require("tailwindcss/plugin");

module.exports = plugin(function () {}, {
  theme: {
    colors: {
      "orbit-blue": {
        200: "#8ACCFF",
        500: "#9cdbff",
        800: "#00338C",
      },
    },
  },
});
