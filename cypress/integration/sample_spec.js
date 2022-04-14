/// <reference types="cypress" />

beforeEach(() => {
   cy.visit('http://localhost:3000')
})

describe('My First Test', () => {
   it('visits correct page', () => {
      const title = cy.contains('TODO')
   })
})
