import credentials from "../fixtures/example.json"



/*დარეგისტრირდით https://www.cavea.ge-ზე ( ან რომელიმე თქვენთვის სასურველ საიტზე)

დაწერეთ login - ის ტესტი,
 გამოიყენეთ :
fixtures -  შექმენით json ფაილი სადაც დაწერთ თქვენ credentials(email/username და password - რითიც შეძლებთ დალოგინებას
შექმენით მინ 1 custom command და გამოიყენეთ თქვენ ტესტში
დამატებითი დავალება მსურველებისთვის : ამავე საიტზე მოიფიქრეთ კიდევ 2 test case , კომენტარებად დაწერეთ თითოეული 
სტეპი და მათი შესაბამისი კოდი ავტომატიზავიისთვის.*/


describe("cavea test cases",() =>{
    it("my first case", () =>{
      cy.login(credentials.email,credentials.Password)  
      cy.isloggetin()
      cy.get('.caret').click()
      cy.get('.dropdown-menu > :nth-child(3) > a').click()
    }); 


  //მე-2 ტესტ ქეისი"რეგისტრაცია"
  /*it ('my second case',()=>{
    cy.Register(credentials.first_name,credentials.last_name,credentials.mobile,
        credentials.user_email,credentials.Password,credentials.confirm_password)
  })*/
  it ('my second case',()=>{
      cy.visit("https://www.cavea.ge/");
      cy.get('.col-xs-8 > .form-group > .btn-red').click()
      cy.wait(1000)
      cy.get('#first_name').type(credentials.first_name)
      cy.get('#last_name').type(credentials.last_name)
      cy.get('#user_email').type(credentials.user_email)
      cy.get('#mobile').type(credentials.mobile)
      cy.get('#password').type(credentials.password)
      cy.get('#confirm_password').type(credentials.password)
      cy.get('.register > .btn-default').click()
      cy.get('#privacy-policy > .modal-dialog > .modal-content > .modal-footer > .btn').click()
      cy.get('#aggree-privacy').check()
      cy.get(':nth-child(16) > .btn').click()
      cy.get('.bs-register-form > .modal-dialog > .modal-content > .modal-footer > .text-primary').click()
  })

  //მე-3 ტესტ ქეისი "არასწორი დალოგინებისას უკვე რეგისტრირებული მომხმარებლის"
  it("my third case", () =>{
    cy.visit("https://www.cavea.ge/");
    cy.get(".col-xs-8 > .form-group > .btn-white").click();
    cy.get("#username").type( credentials.username0);
    cy.get(".bs-login-form > .modal-dialog > .modal-content > .modal-body > form > :nth-child(5) > .form-control")
    .type(credentials.Password);
    cy.get('form > :nth-child(6) > .btn').click()
    cy.get(".login > #username").type(credentials.username);
    cy.get(".login > #password").type(credentials.password);
    cy.get('.login > [type="submit"]').click();
  });     
});

