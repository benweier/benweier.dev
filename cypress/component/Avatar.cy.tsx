import { Avatar } from '@/components/Avatar'

context('Avatar', () => {
  it('should render an avatar image', () => {
    cy.mount(<Avatar />)

    cy.get('#avatar').should('have.attr', 'src')
    cy.get('#avatar').should('have.attr', 'alt')
    cy.get('#avatar').should('have.attr', 'width')
    cy.get('#avatar').should('have.attr', 'height')
  })
})
