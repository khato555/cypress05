import credentials from "../fixtures/example.json"



/*დარეგისტრირდით https://www.cavea.ge-ზე ( ან რომელიმე თქვენთვის სასურველ საიტზე)

დაწერეთ login - ის ტესტი,
 გამოიყენეთ :
fixtures -  შექმენით json ფაილი სადაც დაწერთ თქვენ credentials(email/username და password - რითიც შეძლებთ დალოგინებას
შექმენით მინ 1 custom command და გამოიყენეთ თქვენ ტესტში
დამატებითი დავალება მსურველებისთვის : ამავე საიტზე მოიფიქრეთ კიდევ 2 test case , კომენტარებად დაწერეთ თითოეული 
სტეპი და მათი შესაბამისი კოდი ავტომატიზავიისთვის.*/


//describe("cavea test cases",() =>{
  //emailit("my first case", () => {
    //cy.login(credentials.user_email,credentials.Password)  
    //cy.isloggetin()
    //cy.get('.caret').click()


    //cy.get('.dropdown-menu > :nth-child(3) > a').click()
    

    /*it ('my second case',()=>{
        cy.registarion(credentials.first_name,credentials.last_name,credentials.mobile,credentials.user_email,credentials.Password,credentials.confirm_password)

    })*/
//})
//})
describe("cavea test cases",() =>{
    it("my first case", () =>{
      cy.login(credentials.email,credentials.Password)  
      cy.isloggetin()
      cy.get('.caret').click()
      cy.get('.dropdown-menu > :nth-child(3) > a').click()
    }); 
  //});
  //მე-2 ტესტ ქეისი"რეგისტრაცია
  /*it ('my second case',()=>{
    cy.Register(credentials.first_name,credentials.last_name,credentials.mobile,
        credentials.user_email,credentials.Password,credentials.confirm_password)
  });*/

     
});

