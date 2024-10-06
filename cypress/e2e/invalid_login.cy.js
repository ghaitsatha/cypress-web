describe('Invalid Login Sauce Demo', () => {
  it('INVALID', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type("visual_user")
    cy.get('#password').type("secret")
    cy.contains("LOGIN").click()
  })
})