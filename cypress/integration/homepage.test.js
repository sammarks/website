describe('homepage', () => {
  before(() => {
    cy.visit('/')
  })
  it('displays the navigation properly', () => {
    const links = [
      ['Home', '/'],
      ['Posts', '/posts'],
      ['Contact', '/contact'],
    ]
    for (const link of links) {
      cy.findAllByRole('link', { name: link[0] })
        .first()
        .should('have.attr', 'href', link[1])
    }
  })
  it('displays my social links', () => {
    const socialLinks = [
      ['Github', /github\.com\/sammarks/i],
      ['Twitter', /twitter\.com\/therealsammarks/i],
      ['LinkedIn', /linkedin\.com\/in\/samuel-marks/i]
    ]
    for (const link of socialLinks) {
      cy.findAllByTitle(link[0])
        .first()
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'href').and('match', link[1])
    }
  })
  it('displays a few blog posts', () => {
    cy.get('a[href^="/posts/"]').should('have.length.gte', 3)
  })
  it('displays the github projects', () => {
    cy.get('a[href^="https://github.com/sammarks/"]').should('have.length.gte', 3)
  })
  it('links get in touch to the contact page', () => {
    cy.get('a[href="/contact"] > *')
      .should('have.length', 2)
      .each(element => {
        expect(element.text()).to.match(/get in touch/i)
      })
  })
})
