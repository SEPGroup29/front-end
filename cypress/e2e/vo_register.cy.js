it('Vehicle owner registration starting from home', () => {
    cy.visit('http://localhost:3000/')
    cy.contains(/Register Vehicle Owner/i).click()
    cy.contains('Register Vehicle Owner')

    // Input email and password
    cy.get('[id="Email"]').type('testvo@gmail.com').should('have.value', 'testvo@gmail.com')
    cy.get('[id="NIC"]').type('111111111V').should('have.value', '111111111V')
    cy.contains(/Send OTP/i).click()

    const otp = Cypress.env('otp')
    // cy.get('[id=":r7:"]').type(otp[0])
    // cy.get('[id="lastname"]').type(otp[1])
    // cy.get('[id="lastname"]').type(otp[2])
    // cy.get('[id="lastname"]').type(otp[3])
    // cy.get('[id="lastname"]').type(otp[4])
    // cy.get('[id="lastname"]').type(otp[5])
    cy.contains('First Name')
    cy.get('[id="firstname"]').type('Test').should('have.value', 'Test')
    cy.get('[id="lastname"]').type('Vo').should('have.value', 'Vo')

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})