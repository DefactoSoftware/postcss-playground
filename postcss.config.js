const variables = require("./shared-variables");

module.exports = {
  plugins: {
    "postcss-css-variables": {
      variables: variables,
      preserveInjectedVariables: false,
      preserve: declaration => {
        // console.log(declaration);

        // return declaration.value === "var(--color-primary)";
        return declaration.value.includes("var(--color-primary)");

        // const { prop, value } = declaration;
        // return prop === "--color-primary" || value === "var(--color-primary)";
      }
    },
    "postcss-color-function": {}
  }
};
