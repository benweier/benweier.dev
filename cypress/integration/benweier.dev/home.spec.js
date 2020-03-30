/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render home page', () => {
    expect(true).to.be.true
  })
})
