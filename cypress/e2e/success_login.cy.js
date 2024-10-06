describe('Success Login Sauce Demo', () => {
  it('Success', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type("visual_user")
    cy.get('#password').type("secret_sauce")
    cy.contains("LOGIN").click()
  })
})