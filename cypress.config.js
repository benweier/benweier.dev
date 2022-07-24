const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'y8wbgt',
  screenshotOnRunFailure: false,
  video: false,

  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
  },

  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
