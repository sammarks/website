describe('posts', () => {
  before(() => {
    cy.visit('/posts')
  })
  it('lists at least a few posts', () => {
    cy.get('a[href^="/posts/"]').should('have.length.gte', 3)
  })
  describe('when searching for a post', () => {
    beforeEach(() => {
      cy.visit('/posts')
      cy.findAllByPlaceholderText('Find a post...')
        .first()
        .type('adding zenhub')
    })
    it('navigates on click', () => {
      cy.findAllByText(/adding zenhub estimates/i)
        .first()
        .click()
      cy.url().should('match', /posts\/adding-zenhub-estimates/i)
    })
    it('navigates to the first result on enter', () => {
      cy.findAllByPlaceholderText('Find a post...')
        .type('{downarrow}{enter}')
      cy.url().should('match', /posts\/adding-zenhub-estimates/i)
    })
  })
})
