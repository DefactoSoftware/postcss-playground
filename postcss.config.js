const variables = require("./shared-variables");

module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 0
    },
    "postcss-discard-comments": {
      removeAll: true
    },
    "postcss-css-variables": {
      variables: variables,
      preserve: declaration => {
        // console.log(declaration);

        const { prop, value } = declaration;
        // return value.includes("var(--color-primary");
        return (
          value.includes("var(--color-primary") ||
          prop.startsWith("--color-primary")
        );
      }
    },
    "postcss-color-function": {}
  }
};
