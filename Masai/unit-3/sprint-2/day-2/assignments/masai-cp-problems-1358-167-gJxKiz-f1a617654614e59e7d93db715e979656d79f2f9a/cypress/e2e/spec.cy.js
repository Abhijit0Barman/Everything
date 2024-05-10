import {Listing,addListing} from "../../src/amazon"; 
import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://127.0.0.1:8080/", id: 67890 }];
import "cypress-localstorage-commands";


describe("Test", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }    
    it(`html elements are present in the html file`, () => {
      cy.visit(url);
      cy.get("#name").should("exist");
      cy.get("#category").should("exist");
      cy.get("#image").should("exist");
      cy.get("#price").should("exist");
      cy.clearLocalStorage();
      cy.then(() => {
        acc_score += 1;
      });
    });

    it('should submit the form and add the product to the cart', () => {
      cy.visit(url);
      cy.get('#name').type('Product 1');
      cy.get('#category').type('Category 1');
      cy.get('#image').type('https://example.com/product1.jpg');
      cy.get('#price').type('10.00');     
      cy.get('#form').submit();   
     
      cy.getLocalStorage("Products").then((localStorage) => {       
        const addedProduct = JSON.parse(localStorage)
        expect(addedProduct[0].name).to.equal('Product 1')
        expect(addedProduct[0].category).to.equal('Category 1')
        expect(addedProduct[0].imageUrl).to.equal('https://example.com/product1.jpg')
        expect(addedProduct[0].price).to.equal("10.00")
        expect(addedProduct[0].sold).to.be.false
      })
      cy.clearLocalStorage();
      cy.then(() => {
        acc_score += 1;
      });
    })
 

    it("constructor funciton works properly", function () {
      const ConstructorFunctionObj = new Listing(
        "Earphones",
        "electronics",
        "hhtps/image",
        "2000"
      );
      expect(ConstructorFunctionObj.name).to.equal("Earphones");
      expect(ConstructorFunctionObj.category).to.equal("electronics");
      expect(ConstructorFunctionObj.imageUrl).to.equal("hhtps/image");
      expect(ConstructorFunctionObj.price).to.equal("2000");
      expect(ConstructorFunctionObj.sold).to.be.false;
      expect(ConstructorFunctionObj.hasOwnProperty("sold")).to.be.true;
      cy.clearLocalStorage();
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("local storage is able to store the data correctly 1", function () {
      addListing("Headset", "electronics", "hhtps/image", "2000");
      cy.getLocalStorage("Products").then((localStorage) => {      
      const cart = JSON.parse(localStorage);
      expect(cart[0].name).to.equal("Headset");
      expect(cart[0].category).to.equal("electronics");
      expect(cart[0].imageUrl).to.equal("hhtps/image");
      expect(cart[0].price).to.equal("2000");
      expect(cart[0].sold).to.be.false;
      })
      cy.clearLocalStorage();
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("can add 4 products to the cart using constructor function", function () {
      // add first product
      addListing("Headset", "electronics", "hhtps/image", "2000");     

      // add second product
      addListing("phone", "electronics", "hhtps/picture", "19000");      

      // add third product
      addListing("Watch", "accessories", "hhtps/pic", "4000");      

      // add fourth product
      addListing("Sneakers", "footwear", "hhtps/pic1", "6000");      

      // check local storage
      cy.getLocalStorage("Products").then((localStorage) => {
        console.log({localStorage})
        const cart = JSON.parse(localStorage)   
      expect(cart).to.have.lengthOf(4);
      expect(cart[0].name).to.equal("Headset");
      expect(cart[0].category).to.equal("electronics");
      expect(cart[0].imageUrl).to.equal("hhtps/image");
      expect(cart[0].price).to.equal("2000");
      expect(cart[0].sold).to.be.false;
      
      expect(cart[1].name).to.equal("phone");
      expect(cart[1].category).to.equal("electronics");
      expect(cart[1].imageUrl).to.equal("hhtps/picture");
      expect(cart[1].price).to.equal("19000");
      expect(cart[1].sold).to.be.false;
      
      expect(cart[2].name).to.equal("Watch");
      expect(cart[2].category).to.equal("accessories");
      expect(cart[2].imageUrl).to.equal("hhtps/pic");
      expect(cart[2].price).to.equal("4000");
      expect(cart[2].sold).to.be.false;
      
      expect(cart[3].name).to.equal("Sneakers");
      expect(cart[3].category).to.equal("footwear");
      expect(cart[3].imageUrl).to.equal("hhtps/pic1");
      expect(cart[3].price).to.equal("6000");
      expect(cart[3].sold).to.be.false;
      })
      cy.clearLocalStorage();
      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
