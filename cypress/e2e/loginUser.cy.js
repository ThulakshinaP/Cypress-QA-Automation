describe('Login Test Scenarios', () => {
	it('Test01 - Login with valid username and password', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
		cy.get("input[placeholder='Username']").type('Admin').should('have.value', 'Admin')
        cy.get("input[placeholder='Password']").type('admin123').should('have.value', 'admin123')
		cy.get("button[type='submit']").click()
	})
	it('Test02 - Login with valid username and invalid password', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin').should('have.value', 'Admin')
		cy.get("input[placeholder='Password']").type('admin12345678').should('have.value', 'admin12345678')
		cy.get("button[type='submit']").click()
		cy.get("p[class= 'oxd-text oxd-text--p oxd-alert-content-text']").should('contain.text', 'Invalid credentials')
	}) 
			
	it('Test03 - Login with invalid username and valid password', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
		cy.get("input[placeholder='Username']").type('AdminInvalid123').should('have.value', 'AdminInvalid123')
		cy.get("input[placeholder='Password']").type('admin123').should('have.value', 'admin123')
		cy.get("button[type='submit']").click()
		cy.get("p[class= 'oxd-text oxd-text--p oxd-alert-content-text']").should('contain.text', 'Invalid credentials')
	})
	it('Test04 - Login with invalid username and invalid password', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
		cy.get("input[placeholder='Username']").type('AdminInvalid123').should('have.value', 'AdminInvalid123')
		cy.get("input[placeholder='Password']").type('admin12345678').should('have.value', 'admin12345678')
		cy.get("button[type='submit']").click()
		cy.get("p[class= 'oxd-text oxd-text--p oxd-alert-content-text']").should('contain.text', 'Invalid credentials')
	})
	it('Test05 - Login with empty username and empty password', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
		cy.get("input[placeholder='Username']").type(' ').should('have.value', ' ')
		cy.get("input[placeholder='Password']").type(' ').should('have.value', ' ')
		cy.get("button[type='submit']").click()
		cy.get('span.oxd-input-field-error-message').should('contain.text', 'Required')

	})
})

