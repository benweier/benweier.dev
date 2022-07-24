context('internal-server-error', () => {
  before(() => {
    cy.visit('/500', { failOnStatusCode: false })
  })

  it('renders a title', () => {
    cy.get('main').findByText('Internal Server Error').should('exist')
  })

  it('renders a background image', () => {
    cy.get('#background-image').should('exist')
  })

  it('renders a copyright notice', () => {
    cy.get('footer')
      .invoke('text')
      .should('match', /Ben Weier \d{4,}/)
  })

  it('renders a photo attribution', () => {
    cy.get('#photo-attribution').should('exist')
  })
})
