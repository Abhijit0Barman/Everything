import data from "../../submissionData.json"; // do not create this file
import mockdata from "../fixtures/dbjsonData.json";

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];



data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React-CP-With-Routing-And-ContextAPI-View-Delete", function () {
    let acc_score = 1;

    beforeEach(() => {
      cy.visit(url);
      // cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      // cy.writeFile("db.json", mockdata, (err) => {
      //   if (err) {
      //     console.error(err);
      //   }        
      // });
    });

    it(`Check the Initial structure of authProvider`, () => {
      cy.window()
        .its("store.authState")
        .should("deep.equal", {isAuth: false, userDetails: null});      
      cy.window().then((win) => {
        expect(win.store.loginUser).to.be.a("function");
        expect(win.store.logoutUser).to.be.a("function");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });
    //Homepage("/")
    it(`Check home page is having a basic structure with Navbar and ProductCard's components present`, () => {
      cy.visit(url);
      cy.wait(1000)
      cy.get(`[data-testid="navbar"]`).should("exist");     
      cy.get(`[data-testid="product-card"]`).should("exist").should("have.length",mockdata.products.length)
      cy.then(() => {
        acc_score += 1;
      });
    });
    it(`Home page is rendering all the products by using ProductCard component on page load`, () => {
      cy.intercept("GET", "**/products").as("getProducts");
      cy.visit(url);
      cy.wait("@getProducts").then(()=>{
        cy.get(`[data-testid="product-card"]`).should("have.length",mockdata.products.length)
        cy.get(`[data-testid="product-card"]`).each((ele,ind)=>{
          if(ind%3===0)
          {
            cy.wrap(ele).find("img").should("have.attr","src",mockdata.products[ind].images[0]);
            cy.wrap(ele).find("p").eq(0).should("contain",mockdata.products[ind].price);
            cy.wrap(ele).find("h3").should("contain",mockdata.products[ind].title);
            cy.wrap(ele).find("p").eq(1).should("contain",mockdata.products[ind].location);
          }         
        })
      })
      cy.then(() => {
        acc_score += 2;
      });
    });

    
    it(`Should be able to log in with correct credentials and email is getting updated on Navbar`, () => {
      cy.intercept("POST", "**/login").as("login");
      cy.visit(url + "login");
      cy.get('[data-cy="login-email"]').clear().type("wrongemail@gmail.com");
      cy.get('[data-cy="login-password"]')
        .clear()
        .type("wrongpassword");
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login").then(()=>{
        cy.get('[data-cy="login-form"]').should("exist");
      })
      cy.get('[data-cy="login-email"]').clear().type(`bruce@wayne.com`);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(`gotham123`);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login").then(()=>{       
        cy.window().its("store.authState.userDetails").should("deep.equal",{email:`bruce@wayne.com`,token:`r0bINJoKeRGoTham911`});
        cy.window()
          .its("store.authState.userDetails.email")
          .should("eq", `bruce@wayne.com`);
        cy.url().should("not.eq", url + "login");
        cy.get(`[data-testid="home-page-products"]`).should("exist")       
      })    
      cy.get(`[data-testid="navbar"] span`).should("contain",`bruce@wayne.com`)  
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Navbar is working as per the problem statement.(contain all the required HTML elements & login button is getting changed to new logout button after login",()=>{
      cy.visit(url);
      cy.get(`[data-testid="navbar"]`).should("exist");     
      cy.get(`[data-testid="login-logout"] a`).eq(0).should("have.text","Login");      
      cy.get(`[data-testid="navbar"] .name`).should("have.text",`React-OLX`)
      cy.intercept("POST", "**/login").as("login");
      cy.visit(url + "login");     
      cy.get('[data-cy="login-email"]').clear().type(`bruce@wayne.com`);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(`gotham123`);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login").then(()=>{
        cy.get(`[data-testid="home-page-products"]`).should("exist")  
        cy.get(`[data-testid="login-logout"] button`).last().should("have.text","Logout");  
      })    
      cy.then(() => {
        acc_score += 1;
      });      
    })
    it("Whether some of the routes are protected as mentioned in the problem statement",()=>{
      cy.visit(url)
      cy.wait(100)     
      cy.url().should("contain","/")
      cy.visit(url+"login")
      cy.url().should("contain","login")
      cy.visit(url+"product/2/view");
      cy.url().should("contain","login")
      cy.intercept("POST", "**/login").as("login");
      cy.get('[data-cy="login-email"]').clear().type(`bruce@wayne.com`);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(`gotham123`);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login")
      cy.url().should("contain","/");
      cy.then(() => {
        acc_score += 2;
      });
    })
    it("Check whether any clicking on any ProductCard on the home page is redirecting us to the ProductDetails page",()=>{
      cy.intercept("GET", "**/products").as("getProducts");
      cy.intercept("POST", "**/login").as("login");
      cy.visit(url + "login");
      cy.get('[data-cy="login-email"]').clear().type(`bruce@wayne.com`);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(`gotham123`);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login")
      cy.url().should("not.contain","login")
      cy.wait("@getProducts").then(()=>{
        cy.get(`[data-testid="product-card"]`).should("have.length",mockdata.products.length)
        cy.get(`[data-testid="product-card"]`).first().click({force:true});
        cy.url().should("contain","product/1/view")
        cy.get(".name").click();
        cy.wait(500)
        cy.get(`[data-testid="product-card"]`).last().click({force:true});
        cy.url().should("contain",`product/${mockdata.products.length}/view`)
      })
      cy.then(() => {
        acc_score += 2;
      });
    })
    it("Check product details page renders all the details as mentioned in the problem statement",()=>{
      cy.intercept("GET", "**/products").as("getProducts");
      cy.intercept("POST", "**/login").as("login");
      cy.intercept("GET","**products/11").as("getLastProduct")
      cy.visit(url + "login");
      cy.get('[data-cy="login-email"]').clear().type(`bruce@wayne.com`);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(`gotham123`);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login")
      cy.url().should("not.contain","login")
      cy.wait("@getProducts").then(()=>{
        cy.get(`[data-testid="product-card"]`).should("have.length",mockdata.products.length)    
        cy.get(`[data-testid="product-card"]`).last().click({force:true});
        cy.wait("@getLastProduct")
        cy.url().should("contain",`product/${mockdata.products.length}/view`)
        let productDetails=mockdata.products[mockdata.products.length-1];
        cy.get(`[data-testid="product-details-page"]`).should("exist")
        cy.get(`[data-testid="product-details-page"] h2`).should("contain",productDetails.title)
        cy.get(`[data-testid="product-details-page"] p`).eq(0).should("contain",productDetails.description)
        cy.get(`[data-testid="product-details-page"] p`).eq(1).should("contain",productDetails.category)
        cy.get(`[data-testid="product-details-page"] p`).eq(2).should("contain",productDetails.price)
        cy.get(`[data-testid="product-details-page"] p`).eq(3).should("contain",productDetails.location)

        cy.get(`[data-testid="product-details-page"] p`).eq(4).should("contain",productDetails.seller.name)
        cy.get(`[data-testid="product-details-page"] p`).eq(5).should("contain",productDetails.seller.email)
        cy.get(`[data-testid="product-details-page"] p`).eq(6).should("contain",productDetails.createdAt)
        cy.get(".images").children().should("have.length",productDetails.images.length)
        cy.get(".images").children().each((ele,ind)=>{
          cy.wrap(ele).should("have.attr","src",productDetails.images[ind])
        })
      })
      cy.then(() => {
        acc_score += 2;
      });
    })
   
    it(`Loader component should exist between the API req and res from the json server`, () => {
      cy.intercept("GET", "**/products", (req, res) => {
        req.reply({ delay: 2000, body: mockdata.products });
      }).as("getProducts");
      cy.visit(url);
      cy.get(`[data-testid="loading"]`).should("exist");
      cy.wait("@getProducts");     
      cy.get(`[data-testid="loading"]`).should("not.exist");
      cy.intercept("POST", "**/login", (req, res) => {
        req.reply({ delay: 2000, body: {
          "token": "r0bINJoKeRGoTham911"
      } });
      }).as("login");
      cy.visit(url + "login");
      cy.get('[data-cy="login-email"]').clear().type(`bruce@wayne.com`);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(`gotham123`);
      cy.get('[data-cy="login-form"]').submit();
      cy.get(`[data-testid="loading"]`).should("exist");
      cy.wait("@login");      
      cy.get(`[data-testid="loading"]`).should("not.exist");
      cy.url().should("not.contain","login");
      cy.intercept("GET","**/products/**",(req,res)=>{
        req.reply((res)=>{
          res.delay=2000
        })        
      }).as("getSingleproduct")
      cy.get(`[data-testid="product-card"]`).last().click();     
      cy.get(`[data-testid="loading"]`).should("exist");
      cy.wait("@getSingleproduct"); 
       cy.then(() => {
        acc_score += 2;
      });
    });
    it("Check navBar login link and logout button are working fine and context API has also Updated accordingly", () => {
      cy.visit(url);
      cy.wait(200);
      cy.get(`[data-testid="navbar"] a`)
        .eq(0)
        .should("contain", "Login")
        .click();
      cy.location("pathname").should("contain", "login");
      cy.intercept("POST", "**/login").as("login");
      cy.get('[data-cy="login-email"]').clear().type(`bruce@wayne.com`);
      cy.get('[data-cy="login-password"]')
        .clear()
        .type(`gotham123`);
      cy.get('[data-cy="login-form"]').submit();
      cy.wait("@login");
      cy.wait(100);
      cy.window().its("store.authState.isAuth").should("eq", true);
      cy.window()
        .its("store.authState.userDetails")
        .should("deep.eq", {email:`bruce@wayne.com`,token:"r0bINJoKeRGoTham911"});
      cy.get(`[data-testid="navbar"] span`).should(
        "contain",
        `bruce@wayne.com`
      );
      cy.get(`[data-testid="navbar"] button`).last().should("contain", "Logout").click();
      cy.wait(100);
      cy.window().its("store.authState.isAuth").should("eq", false);
      cy.window().its("store.authState.userDetails").should("eq", null);
      cy.then(() => {
        acc_score += 2;
      });
    });
    after(() => {
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});