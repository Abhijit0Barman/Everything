import mock from "../fixtures/products.json";
import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];

describe("C1", () => {
  let acc_score = 1;

  data.forEach(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    it(`heading should be visible when component loads`, () => {
      cy.visit(url);
      cy.contains("h1", /Groceries/i).should("be.visible");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should make a get request to endpoint", () => {
      cy.intercept("GET", "**/get-groceries").as("get-groceries");
      cy.visit(url);
      cy.get(".get-groceries-btn").click();

      cy.wait("@get-groceries").then((res) => {
        // console.log(res);
        expect(res.response.statusCode).eq(200);
      });

      cy.get(".get-groceries-btn").should("not.exist");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should show loading indicator while api request is in progress", () => {
      cy.intercept("GET", "**/get-groceries", (req) => {
        req.on("response", (res) => {
          // Wait for delay in milliseconds before sending the response to the client.
          res.setDelay(1000);
        });
      }).as("get-groceries");
      cy.visit(url);
      cy.get(".get-groceries-btn").click();

      cy.get('[data-cy="grocery-items-container"]').should("not.exist");
      cy.get(".loading-indicator").should("exist").and("contain", "Loading...");

      cy.wait("@get-groceries").then((res) => {
        expect(res.response.statusCode).eq(200);
      });

      cy.get(".get-groceries-btn").should("not.exist");
      cy.get('[data-cy="grocery-items-container"]').should("exist");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all products are visible", () => {
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .should("have.length", 10);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all name of the product are displayed", () => {
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .each((child, index) => {
          cy.wrap(child).find("h3").should("contain", mock[index].name);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all price of the product are displayed", () => {
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .each((child, index) => {
          cy.wrap(child).find("h5").should("contain", mock[index].price);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all image of the product are displayed", () => {
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .each((child, index) => {
          cy.wrap(child)
            .find("img")
            .should("have.attr", "src")
            .should("include", mock[index].image);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("add to Cart button should be visible by default", () => {
      cy.get('[data-cy="add-to-cart-btn"]')
        .first()
        .contains("Add to Cart")
        .click();
      cy.get(".quantity").first().contains(1);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("onclicking Add to Cart button quantity should be incremented by 1 and CartButtons should be rendered(+ and - button)", () => {
      cy.visit(url);
      cy.get(".get-groceries-btn").should("be.visible");
      cy.get(".get-groceries-btn").click();
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .find(".quantity_container")
        .should("have.length", 0);

      cy.get('[data-cy="add-to-cart-btn"]')
        .first()
        .contains("Add to Cart")
        .click();
      cy.get(".quantity").first().contains(1);
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .find("[data-cy='add-to-cart-btn']")
        .should("have.length", 9);
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .find(".quantity_container")
        .should("have.length", 1);
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("increment and decrement quantity buttons should work", () => {
      cy.visit(url);
      cy.get(".get-groceries-btn").should("be.visible");
      cy.get(".get-groceries-btn").click();
      cy.get('[data-cy="add-to-cart-btn"]')
        .first()
        .contains("Add to Cart")
        .click();
      cy.get(".quantity").should("have.text", 1);

      cy.get('[data-cy="inc_btn"]').first().contains("+").click();
      cy.get(".quantity").should("have.text", 2);
      cy.get('[data-cy="dec_btn"]').first().contains("-").click();
      cy.get(".quantity").should("have.text", 1);
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("if quantity goes below 1 Add to Cart button should be visible and decrement and increment buttons should not be visible", () => {
      cy.visit(url);
      cy.get(".get-groceries-btn").should("be.visible");
      cy.get(".get-groceries-btn").click();
      cy.get('[data-cy="add-to-cart-btn"]')
        .first()
        .contains("Add to Cart")
        .click();
      cy.get(".quantity").should("have.text", 1);

      cy.get('[data-cy="inc_btn"]').first().contains("+").click();
      cy.get(".quantity").should("have.text", 2);
      cy.get('[data-cy="dec_btn"]').first().contains("-").click();
      cy.get(".quantity").should("have.text", 1);
      cy.get('[data-cy="dec_btn"]').first().contains("-").click();
      cy.get('[data-cy="grocery-items-container"]')
        .children()
        .find("[data-cy='add-to-cart-btn']")
        .should("have.length", 10);
      cy.then(() => {
        acc_score += 2;
      });
    });
    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
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
      //////////////////
    });
  });
});
