context('benweier.dev', () => {
  before(() => {
    cy.visit('/')
  })

  it('renders a background image', () => {
    cy.get('#background-image').should('exist')
  })

  it('renders an avatar', () => {
    cy.get('#avatar').should('exist')
  })

  it('renders text content', () => {
    cy.get('main').findByText('Ben Weier').should('exist')
    cy.get('main').findByText('Developer').should('exist')
  })

  it('renders icon links', () => {
    cy.get('#links').should('exist')
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
