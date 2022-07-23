context('benweier.dev', () => {
  before(() => {
    cy.visit('/')
  })

  it('renders a background image', () => {
    cy.get('.full-page-background').should('have.attr', 'src')
    cy.get('.full-page-background').should('have.attr', 'alt')
    cy.get('.full-page-background').should('have.attr', 'width')
    cy.get('.full-page-background').should('have.attr', 'height')
  })

  it('renders an avatar', () => {
    cy.get('main').findByAltText('Stylised avatar of Ben Weier').should('exist')
  })

  it('renders text content', () => {
    cy.get('main').findByText('Ben Weier').should('exist')
    cy.get('main').findByText('Developer').should('exist')
  })

  it('renders icon links', () => {
    cy.get('main').findByTitle('GitHub').should('exist').should('have.attr', 'href', 'https://github.com/benweier')
    cy.get('main').findByTitle('Twitter').should('exist').should('have.attr', 'href', 'https://twitter.com/benweier')
    cy.get('main').findByTitle('Email').should('exist').should('have.attr', 'href', 'mailto:web@benweier.dev')
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
