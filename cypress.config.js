const { defineConfig } = require('cypress')

module.exports = defineConfig({
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
    specPattern: 'src/**/*.cy.tsx',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
