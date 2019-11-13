describe('My First Test', function() {
  
  it('Available app', function() {
    cy.visit('/user-list');
    });

  

  it('Get first users from db', function() {
    cy.visit('/');
    cy.get('[data-cy=userCard]').should('have.length', 3);
      });
      
  it('Wanting to add a post redirects to login',function(){
    cy.visit('/add-post')
    cy.get('[data-cy=login-button]').should('be.visible');
  })
});