it('Vehicle owner login starting from home', () => {
    cy.visit('http://localhost:3000/')
    cy.contains(/vehicle owner login/i).click()
    cy.contains('Log in')

    // Input email and password
    cy.get('[id="Email"]').type(Cypress.env('vo_email')).should('have.value', Cypress.env('vo_email'))
    cy.contains(/Proceed/i).click()

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})