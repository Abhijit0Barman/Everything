/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Routing Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
    });

    it("Check if all products are vsiible on products page", () => {
      cy.intercept("GET", `${server_url}products`).as("getProducts");
      cy.visit(url);
      cy.wait("@getProducts");
      cy.get('[data-testid="products-wrapper"]')
        .children()
        .should("have.length", 5);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if only selected product are vsiible on product details page", () => {
      cy.intercept("GET", `${server_url}products/**`).as("getProductDetails");
      cy.visit(url + `products/1`);
      cy.wait("@getProductDetails");
      cy.get('[data-testid="product-details"]')
        .children()
        .should("have.length", 1);
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Check if application is routing to product details page- 1", () => {
      cy.intercept("GET", `${server_url}products`).as("getProducts");
      cy.visit(url);
      cy.wait("@getProducts");
      cy.get('[data-testid="products-wrapper"]').children().first().click();

      cy.url().should("eq", `${url}products/1`);
      cy.get('[data-testid="product-details"]')
        .children()
        .should("have.length", 1);

      cy.get('[data-testid="product_name"]').should("have.text", "burger");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if application is routing to product details page -2", () => {
      cy.intercept("GET", `${server_url}products`).as("getProducts");
      cy.visit(url);
      cy.wait("@getProducts");
      cy.get('[data-testid="products-wrapper"]').children().last().click();

      cy.url().should("eq", `${url}products/5`);
      cy.get('[data-testid="product-details"]')
        .children()
        .should("have.length", 1);

      cy.get('[data-testid="product_name"]').should("have.text", "Chaat");
      cy.then(() => {
        acc_score += 2;
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
