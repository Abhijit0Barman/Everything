/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//   },
// ];

data.forEach(({ submission_link: url, id }) => {
  describe("Routing Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("Check if navbar is present on all pages", () => {
      cy.visit(url);
      cy.get(".navbar")
        .children()
        .should("have.length", 4);
      
      cy.visit(url + "home");
      cy.get(".navbar")
        .children()
        .should("have.length", 4);

      cy.visit(url + "about");
      cy.get(".navbar")
        .children()
        .should("have.length", 4);

      cy.visit(url + "contact");
      cy.get(".navbar")
        .children()
        .should("have.length", 4);

      
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if page is redirected to home component correctly on clicking Home", () => {
      cy.visit(url);
      cy.get('.navbar')
        .children()
        .eq(0)
        .click()
      
        cy.location("pathname").should("eq", "/");

      cy.then(() => {
        acc_score += 3;
      });
    });
    it("Check if page is redirected to home component correctly on clicking About", () => {
      cy.visit(url);
      cy.get('.navbar')
        .children()
        .eq(1)
        .click()
      
        cy.location("pathname").should("eq", "/about");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if page is redirected to home component correctly on clicking Contact", () => {
      cy.visit(url);
      cy.get('.navbar')
        .children()
        .eq(2)
        .click()
      
        cy.location("pathname").should("eq", "/contact");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if page is redirected to home component correctly on clicking Products", () => {
      cy.visit(url);
      cy.get('.navbar')
        .children()
        .eq(3)
        .click()
      
        cy.location("pathname").should("eq", "/products");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if page is products data is rendered correctly on the products page", () => {
      cy.intercept("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products").as("get-products")
      cy.visit(url);
      cy.get('.navbar')
        .children()
        .eq(3)
        .click()
      
      cy.get("@get-products")
      cy.get(".products-wrapper")
      .children()
      .should("have.length", 40)

      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
