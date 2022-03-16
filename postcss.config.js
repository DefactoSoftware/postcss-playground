const variables = require("./shared-variables");

module.exports = {
  plugins: {
    "postcss-css-variables": {
      variables: variables,
      preserve: declaration => {
        // console.log(declaration);
        return declaration.value === "var(--color-primary)";
      }
    },
    "postcss-color-function": {}
  }
};
