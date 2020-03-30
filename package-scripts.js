const { series } = require('nps-utils')

module.exports = {
  scripts: {
    default: 'node index.js',
    lint: 'eslint .',
    test: {
      default: series.nps('lint', 'test.int'),
      unit: 'jest',
      int: series.nps('gatsby.build', 'cy.run'),
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
