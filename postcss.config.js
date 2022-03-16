const variables = require("./shared-variables");

module.exports = {
  plugins: {
    "postcss-css-variables": {
      variables: variables,
      // preserveInjectedVariables: false,
      preserve: declaration => {
        // console.log(declaration);

        return declaration.value.includes("var(--color-primary)");

        // const { prop, value } = declaration;
        // // return value === "var(--color-primary)" || prop === "--color-primary";
        // return (
        //   value.includes("var(--color-primary)") || prop === "--color-primary"
        // );
      }
    },
    "postcss-color-function": {}
  }
};
