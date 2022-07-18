module.exports = {
  projectId: 'y8wbgt',
  screenshotOnRunFailure: false,
  video: false,

  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(_on, _config) {
      //
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
}
