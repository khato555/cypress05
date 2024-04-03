Cypress.Commands.add("login",(Email, Password) => {
    cy.visit("https://www.cavea.ge/");
    cy.get(".col-xs-8 > .form-group > .btn-white").click();
    cy.wait(1000)
    cy.get("#username").type( Email);
    cy.get(".bs-login-form > .modal-dialog > .modal-content > .modal-body > form > :nth-child(5) > .form-control").type(Password);
    cy.get('form > :nth-child(6) > .btn').click()
    
    
  });
  Cypress.Commands.add("isloggetin",()=>{
    cy.get('label').should('exist')
  })
    
//მე-2 ტესტ ქეისი"რეგისტრაცია"
Cypress.Commands.add("Register",(first_name,last_name,mobile,user_email,password,confirm_password) => {
    cy.visit("https://www.cavea.ge/");
    cy.get('.col-xs-8 > .form-group > .btn-red').click()
    cy.wait(1000)
    cy.get('#first_name').type(first_name)
    cy.get('#last_name').type(last_name)
    cy.get('#user_email').type(user_email)
    cy.get('#mobile').type(mobile)
    cy.get('#password').type(password)
    cy.get('#confirm_password').type(confirm_password)
    cy.get('.register > .btn-default').click()
    cy.get('#privacy-policy > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    cy.get('#aggree-privacy').check()
    cy.get(':nth-child(16) > .btn').click()
    cy.get('.bs-register-form > .modal-dialog > .modal-content > .modal-footer > .text-primary').click()
    
});
//მე-3 ტესტ ქეისი "არასწორად დალოგინებისას"
Cypress.Commands.add("falslogin",(username, password) => {
    cy.visit("https://www.cavea.ge/");
    cy.get(".col-xs-8 > .form-group > .btn-white").click();
    cy.get("#username").type( username0);
    cy.get(".bs-login-form > .modal-dialog > .modal-content > .modal-body > form > :nth-child(5) > .form-control").type(Password);
    cy.get('form > :nth-child(6) > .btn').click()
    cy.get(".login > #username").type(username);
    cy.get(".login > #password").type(password);
    cy.get('.login > [type="submit"]').click();
})