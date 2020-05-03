const fillOutForm = () => {
  const opts = { delay: 1 }
  cy.findAllByLabelText('Name')
    .first()
    .type('Test User', opts)
  cy.findAllByLabelText('Email')
    .first()
    .type('test@test.com', opts)
  cy.findAllByLabelText('Company')
    .first()
    .type('Test Company', opts)
  cy.findAllByLabelText('Subject')
    .first()
    .type('Subject', opts)
  cy.findAllByLabelText('Message')
    .first()
    .type('Test Message', opts)
  cy.findAllByRole('button', { name: /send message/i })
    .first()
    .click()
}

describe('contact', () => {
  beforeEach(() => {
    cy.visit('/contact')
    cy.server({
      method: 'POST',
      delay: 50
    })
  })
  describe('when entering invalid data', () => {
    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: /getform/i,
        status: 200,
        response: {
          boo: 'response'
        }
      }).as('getform')
      cy.findAllByRole('button', { name: /send message/i })
        .first()
        .click()
    })
    it('does not submit the form', () => {
      cy.wait(200)
      expect(cy.state('requests').filter(req => req.alias === 'getform')).to.have.length(0)
    })
    it('shows validation errors', () => {
      cy.findAllByText(/your name is required/i).should('have.length', 1)
    })
  })
  describe('when entering valid data', () => {
    describe('and the submission is successful', () => {
      beforeEach(() => {
        cy.route({
          method: 'POST',
          url: /getform/i,
          status: 200,
          response: {
            boo: 'response'
          }
        }).as('getform')
        fillOutForm()
        cy.wait('@getform')
      })
      it('shows the success message', () => {
        cy.findAllByText(/thanks for reaching out/i).should('have.length', 1)
      })
    })
    describe('and there was an error', () => {
      beforeEach(() => {
        cy.route({
          method: 'POST',
          url: /getform/i,
          status: 500,
          response: {
            boo: 'error'
          }
        }).as('getform')
        fillOutForm()
        cy.wait('@getform')
      })
      it('shows the error message', () => {
        cy.findAllByText(/there was an error submitting your message/i).should('have.length', 1)
      })
      it('does not clear the form', () => {
        cy.findAllByLabelText('Name')
          .first()
          .should('have.value', 'Test User')
      })
      it('does not navigate to another page', () => {
        cy.url().should('match', /contact/i)
      })
    })
  })
})
