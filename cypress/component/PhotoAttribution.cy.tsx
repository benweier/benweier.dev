import { PhotoAttribution } from '@/components/PhotoAttribution'
import { UnsplashImage } from '@/config/unsplash'

context('PhotoAttribution', () => {
  it('should display photographer name with link', () => {
    cy.fixture('background-image.json').then((image: UnsplashImage) => {
      cy.mount(<PhotoAttribution image={image} />)

      cy.get('a').contains(image.name).should('have.attr', 'href', image.href)
      cy.get('a[href="https://unsplash.com"]').contains('Unsplash')
    })
  })
})
