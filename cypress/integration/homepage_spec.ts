describe('The homepage', () => {
  it('Renders successfully', () => {
    cy.visit('/')
    cy.get('main').should('have.text', 'Hello, World!')
  })
})
