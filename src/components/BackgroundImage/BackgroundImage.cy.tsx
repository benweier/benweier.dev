import { UnsplashImage } from '@/config/unsplash'
import { BackgroundImage } from './BackgroundImage'

describe('BackgroundImage', () => {
  it('should render a background image', () => {
    cy.fixture('background-image.json').then((image: UnsplashImage) => {
      cy.mount(<BackgroundImage image={image} />)

      cy.get('#background-image').should('have.attr', 'src')
      cy.get('#background-image').should('have.attr', 'alt')
      cy.get('#background-image').should('have.attr', 'width')
      cy.get('#background-image').should('have.attr', 'height')
    })
  })
})
