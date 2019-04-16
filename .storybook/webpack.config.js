const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        loader: require.resolve("react-docgen-typescript-loader")
      },
      {
        loader: require.resolve("@storybook/addon-storysource/loader"),
        options: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: false
          }
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
