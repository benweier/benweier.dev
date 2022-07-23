context('not-found', () => {
  beforeEach(() => {
    cy.visit('/404', { failOnStatusCode: false })
  })

  it('renders a title', () => {
    cy.get('main').findByText('Not Found').should('exist')
  })
})
