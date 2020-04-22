const { series } = require('nps-utils')

module.exports = {
  scripts: {
    default: 'node index.js',
    lint: 'eslint .',
    test: {
      default: series.nps('lint', 'test.ci'),
      unit: 'jest',
      ci: series.nps('gatsby.build', 'cy.run'),
      dev: series.nps('gatsby.build', 'cy.open'),
    },
    gatsby: {
      clean: 'rimraf .cache public',
      develop: 'gatsby develop',
      build: 'gatsby build',
      serve: 'gatsby serve',
    },
    cy: {
      open: 'cypress open',
      run: 'cypress run',
    },
    dev: {
      default: series.nps('gatsby.clean', 'gatsby.develop'),
    },
    build: {
      default: series.nps('gatsby.clean', 'gatsby.build'),
    },
    serve: {
      default: series.nps('build', 'gatsby.serve'),
    },
  },
}
