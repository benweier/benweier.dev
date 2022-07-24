import { UnsplashImage } from '@/config/unsplash'
import { PhotoAttribution } from './PhotoAttribution'

describe('PhotoAttribution', () => {
  it('should display photographer name with link', () => {
    cy.fixture('background-image.json').then((image: UnsplashImage) => {
      cy.mount(<PhotoAttribution image={image} />)

      cy.get('a').contains(image.name).should('have.attr', 'href', image.href)
      cy.get('a[href="https://unsplash.com"]').contains('Unsplash')
    })
  })
})
