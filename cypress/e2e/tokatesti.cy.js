/* eslint-disable no-undef */
describe('Pokedex', function () {
  it('pokemon page can be navigated to', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
