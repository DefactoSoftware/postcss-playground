const variables = require("./shared-variables");

module.exports = {
  plugins: {
    "postcss-css-variables": {
      variables: variables,
      preserve: true
    },
    "postcss-color-function": {}
  }
};
