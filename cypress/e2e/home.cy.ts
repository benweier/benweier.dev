context('benweier.dev', () => {
  before(() => {
    cy.visit('/')
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
})
