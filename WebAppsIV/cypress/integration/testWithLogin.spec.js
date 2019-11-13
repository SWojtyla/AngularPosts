describe('My First Test', function() {
    beforeEach(function() {
      cy.login();
    });
    it('StartPage', function() {
      cy.visit('/');
      cy.contains('sebastienwojtyla@gmail.com');
    });
    it('Get first users from db while logged in', function() {
        cy.visit('/');
        cy.get('[data-cy=userCard]').should('have.length', 3);
          });
     
    it('Add new post and check it',function(){
        cy.visit('/add-post');
        cy.get('[data-cy=title]').clear().type("Test Post");
        cy.get('[data-cy=text]').clear().type("Post for testing purposes");
        cy.get('[data-cy=add-post-button]').click();

        cy.visit('/')
        cy.contains('Test Post');
        cy.contains('Post for testing purposes');
    })
  
    it('Can not add an empty post',function(){
        cy.visit('/add-post');
        cy.get('[data-cy=title]').clear();
        cy.get('[data-cy=text]').clear();
        cy.get('[data-cy=add-post-button]').should('be.disabled');

        
    })
    
  });