context('benweier.dev', () => {
  context('en-US', () => {
    before(() => {
      cy.visit('/', { headers: { 'Accept-Language': 'en-US' } })
    })

    it('uses a localized description string', () => {
      cy.get('head meta[name="description"]').should(
        'have.attr',
        'content',
        'Brisbane-based Developer specializing in React, Redux, and Next.js',
      )
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

  context('en-GB', () => {
    before(() => {
      cy.visit('/', { headers: { 'Accept-Language': 'en-GB' } })
    })

    it('uses a localised description string', () => {
      cy.get('head meta[name="description"]').should(
        'have.attr',
        'content',
        'Brisbane-based Developer specialising in React, Redux, and Next.js',
      )
    })
  })

  context('en-AU', () => {
    before(() => {
      cy.visit('/', { headers: { 'Accept-Language': 'en-AU' } })
    })

    it('uses a localised description string', () => {
      cy.get('head meta[name="description"]').should(
        'have.attr',
        'content',
        'Brisbane-based Developer specialising in React, Redux, and Next.js',
      )
    })
  })
})
