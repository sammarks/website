import '@testing-library/cypress/add-commands'

const resizeObserverLoopErrRe = /^ResizeObserver loop limit exceeded/

// eslint-disable-next-line consistent-return
Cypress.on('uncaught:exception', err => {
  if (resizeObserverLoopErrRe.test(err.message)) {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }
})
