context('internal-server-error', () => {
  beforeEach(() => {
    cy.visit('/500', { failOnStatusCode: false })
  })

  it('renders a title', () => {
    cy.get('main').findByText('Internal Server Error').should('exist')
  })
})
