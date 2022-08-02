const path = require("path");

module.exports = {
  "stories": [
    "../components/**/stories/*.stories.@(js|jsx|ts|tsx)",
    "../modules/**/stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@utils": path.resolve(__dirname, "../utils"),
      "@components": path.resolve(__dirname, "../components"),
      "@modules": path.resolve(__dirname, "../modules"),
    };

    return config;
  },
  "previewHead": (head) => (`
    ${head}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <style>
      html, body {
        font-family: Lato;
      }
      button {
        border: none;
        background: transparent;
      }
    </style>
  `),
}