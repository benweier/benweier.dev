context('not-found', () => {
  before(() => {
    cy.visit('/404', { failOnStatusCode: false })
  })

  it('renders a background image', () => {
    cy.get('.full-page-background').should('have.attr', 'src')
    cy.get('.full-page-background').should('have.attr', 'alt')
    cy.get('.full-page-background').should('have.attr', 'width')
    cy.get('.full-page-background').should('have.attr', 'height')
  })

  it('renders a title', () => {
    cy.get('main').findByText('Not Found').should('exist')
  })

  it('renders a copyright notice', () => {
    cy.get('footer')
      .invoke('text')
      .should('match', /Ben Weier \d{4,}/)
  })

  it('renders a photo attribution', () => {
    cy.get('.photo-attribution')
      .invoke('text')
      .should('match', /^Photo by .+ on Unsplash$/)

    cy.get('.photo-attribution a').should('have.attr', 'href')
  })
})
