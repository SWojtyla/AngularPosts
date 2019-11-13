it('Register correctly', () => {
    cy.visit('/register');
    cy.get('[data-cy=register-firstName]').type('testFirst');
    cy.get('[data-cy=register-lastName]').type('testLast');
    cy.get('[data-cy=register-email]').type('test@gmail.com');
    cy.get('[data-cy=register-password]').type('Azertyuiop1@');
    cy.get('[data-cy=register-password-confirm]').type('Azertyuiop1@');
    cy.get('[data-cy=register-button').click();
    
    // login name should be in the title balk
    cy.visit('/')
    cy.contains('test@gmail.com');
    // at last one recipe should be visible (i.e. we should have been forwarded to the recipe page)
    cy.get('[data-cy=userCard').should('be.visible');
  });

  it('User already exists', () => {
    cy.visit('/register');
    cy.get('[data-cy=register-firstName]').type('testFirst');
    cy.get('[data-cy=register-lastName]').type('testLast');
    cy.get('[data-cy=register-email]').type('test@gmail.com');
    cy.get('[data-cy=register-password]').type('Azertyuiop1@');
    cy.get('[data-cy=register-password-confirm]').type('Azertyuiop1@');
    cy.get('[data-cy=register-button').click();
    
    cy.server();
    cy.route({
    method: 'GET',
    url: '/account/register',
    status: 400,
    response: 'ERROR'
  });
  cy.get('[data-cy=emailError').should('be.visible');
  });