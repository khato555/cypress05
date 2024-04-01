Cypress.Commands.add("login",(Email, Password) => {
    cy.visit("https://www.cavea.ge/");
    cy.get(".col-xs-8 > .form-group > .btn-white").click();
    cy.get("#username").type( Email);
    cy.get(".bs-login-form > .modal-dialog > .modal-content > .modal-body > form > :nth-child(5) > .form-control").type(Password);
    cy.get('form > :nth-child(6) > .btn').click()
    cy.get(".login > #username").type("x.dzidzaria85@gmail.com");
    cy.get(".login > #password").type("zarikuna555");
    cy.get('.login > [type="submit"]').click();
    
  });
  Cypress.Commands.add("isloggetin",()=>{
    cy.get('label').should('exist')
});