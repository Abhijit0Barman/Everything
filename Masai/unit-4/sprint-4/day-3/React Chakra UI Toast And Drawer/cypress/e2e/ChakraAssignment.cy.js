/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file

// const data = [{ submission_link: "http://localhost:3000", id: "shanti-local" }];

data.forEach(({ submission_link: url, id }) => {
  describe("Chakra UI Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it("Should have basic structure of navbar", () => {
      cy.visit(url);

      cy.get('[data-cy="logo"]').contains("Chakra UI");

      cy.get('[data-cy="navbar"]')
        .should("exist")
        .and("have.css", "display", "flex");

      cy.get('[data-cy="navbar"]')
        .should("exist")
        .and("have.css", "justify-content", "space-between");

      cy.get("[data-cy='drawer-open-btn']").should("exist");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Should have drawer visible when button clicked", () => {
      cy.visit(url);

      cy.get('[role="dialog"]').should("not.exist");
      cy.get("[data-cy='drawer-open-btn']").click();
      cy.get('[role="dialog"]').should("exist");

      cy.get("[data-cy='home']")
        .contains("Home")
        .should("have.prop", "tagName", "BUTTON");
      cy.get("[data-cy='gallery']")
        .contains("Gallery")
        .should("have.prop", "tagName", "BUTTON");
      cy.get("[data-cy='login']")
        .contains("Login")
        .should("have.prop", "tagName", "BUTTON");
      cy.get("[data-cy='signup']")
        .contains("SignUp")
        .should("have.prop", "tagName", "BUTTON");
      cy.get("[data-cy='about']")
        .contains("About Us")
        .should("have.prop", "tagName", "BUTTON");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Should have modal visible when Login option clicked", () => {
      cy.visit(url);

      cy.get('[role="dialog"]').should("not.exist");
      cy.get("[data-cy='drawer-open-btn']").click();
      cy.contains("Login").click();
      cy.get('[role="dialog"]').should("exist");
      cy.get('[data-cy="chakra-modal"]').should("exist");

      cy.get("input[type='email']").should("exist");
      cy.get("input[type='password']").should("exist");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Should show toast for successful login", () => {
      cy.visit(url);

      cy.get('[role="dialog"]').should("not.exist");
      cy.get("[data-cy='drawer-open-btn']").click();
      cy.contains("Login").click();

      cy.get('[data-cy="chakra-modal"]').should("exist");

      cy.get("input[type='email']").type("eve.holt@reqres.in");
      cy.get("input[type='password']").type("masai");

      cy.get("form").submit();

      cy.wait(200);

      cy.get(".css-njbp03").should("exist");
      cy.get(".css-njbp03").should("contain", "Login Successful.");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should show toast for unsuccessful login", () => {
      cy.visit(url);

      cy.get('[role="dialog"]').should("not.exist");
      cy.get("[data-cy='drawer-open-btn']").click();
      cy.contains("Login").click();

      cy.get('[data-cy="chakra-modal"]').should("exist");

      cy.get("input[type='email']").type("eve.olt@reqres.in");
      cy.get("input[type='password']").type("masai");

      cy.get("form").submit();

      cy.wait(200);

      cy.get(".css-njbp03").should("exist");
      cy.get(".css-njbp03").should("contain", "Login Failed.");

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
