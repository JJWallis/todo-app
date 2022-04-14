/// <reference types="cypress" />

const URL = 'http://localhost:3000'

beforeEach(() => {
   cy.visit(URL)
})

describe('My First Test', () => {
   it('visits correct page', () => {
      const activeBtn = cy.contains(/active/gi).click()
      cy.url().should('include', URL)
   })
})
