/*დარეგისტრირდით https://www.cavea.ge-ზე ( ან რომელიმე თქვენთვის სასურველ საიტზე)

დაწერეთ login - ის ტესტი,
 გამოიყენეთ :
fixtures -  შექმენით json ფაილი სადაც დაწერთ თქვენ credentials(email/username და password - რითიც შეძლებთ დალოგინებას
შექმენით მინ 1 custom command და გამოიყენეთ თქვენ ტესტში
დამატებითი დავალება მსურველებისთვის : ამავე საიტზე მოიფიქრეთ კიდევ 2 test case , კომენტარებად დაწერეთ თითოეული 
სტეპი და მათი შესაბამისი კოდი ავტომატიზავიისთვის.*/

const { getMaxListeners } = require("process");

describe("cavea test cases", () => {
  it("Login isregister person", () =>{
   cy.visit("https://www.cavea.ge/");
   cy.get('.col-xs-8 > .form-group > .btn-white').click()
   cy.get('#username').type('x.dzidzaria85@gmail.com')
   
  });
});
