module.exports = {
  addons: ['@storybook/addon-a11y', 'storybook-dark-mode'],
  features: {
    modernInlineRender: true,
    buildStoriesJson: true
  }
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  ,

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};