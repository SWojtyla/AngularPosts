
describe('Login Page', () => {
    beforeEach(() => {});
  
    it('logintest', () => {
      cy.login();
    });
  
    it('login page', () => {
      cy.visit('/login');
      cy.get('[data-cy=login-email]').type('test@gmail.com');
      cy.get('[data-cy=login-password]').type('Azertyuiop1@');
      cy.get('[data-cy=login-button').click();
      // login name should be in the title balk
      cy.contains('test@gmail.com');
      // at last one recipe should be visible (i.e. we should have been forwarded to the recipe page)
      cy.get('[data-cy=userCard').should('be.visible');
      
    });
  });