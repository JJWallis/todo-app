/// <reference types="cypress" />

const URL = 'http://localhost:3000'

beforeEach(() => {
   cy.visit(URL)
})

describe('input field', () => {
   it('updates correctly on user input', () => {
      cy.contains('TODO')
      cy.get('.bmEWna').type('Hello').should('have.value', 'Hello')
      //   this is a test commit
   })
})
