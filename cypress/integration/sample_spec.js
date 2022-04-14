/// <reference types="cypress" />

beforeEach(() => {
   cy.visit()
})

describe('input field', () => {
   it('updates correctly on user input', () => {
      cy.contains('TODO')
      cy.get('.bmEWna').type('Hello').should('have.value', 'Hello')
   })
   // commented added
})
