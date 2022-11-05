describe('First E2E', () => {
    it('Admin login starting', () => {
      cy.visit('http://localhost:3000/admin-login')
      cy.contains('Log in').click()
      cy.contains('Log in')

      // Input email and password
      cy.get('[id="Email"]').type('adminone@fuelq.com').should('have.value', 'adminone@fuelq.com')
      cy.get('[id="Password"]').type('Admin@123').should('have.value', 'Admin@123')
      cy.contains(/Proceed/i).click()
    })
  }) 