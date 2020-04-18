/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render home page', () => {
    cy.get('header h1').should('have.text', 'Ben Weier')
    cy.get('header p').should('have.text', 'Developer')
  })
})
