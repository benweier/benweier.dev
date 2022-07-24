import { Links } from '@/components/Links'

context('Links', () => {
  it('should display a list of links', () => {
    cy.mount(<Links />)

    cy.get('[title="GitHub"]').should('have.attr', 'href', 'https://github.com/benweier')
    cy.get('[title="Twitter"]').should('have.attr', 'href', 'https://twitter.com/benweier')
    cy.get('[title="Email"]').should('have.attr', 'href', 'mailto:web@benweier.dev')
  })
})
