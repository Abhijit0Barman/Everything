/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
import mock from "../fixtures/db.json";
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "shanti-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });

    it("should have a correct heading and a button", () => {
      cy.visit(url);
      cy.get("h1").should("have.text", "Coffee Store Catalogue");
      cy.get("button").should("exist");
      cy.get(".coffee_container").children().should("have.length", 0);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should make GET request and render coffee data", () => {
      cy.intercept("GET", `**/coffee`).as("coffee");
      cy.visit(url);

      cy.get("button").click();

      cy.wait("@coffee").then((res) => {
        expect(res.response.statusCode).to.eq(200);
      });

      cy.get(".coffee_container").children().should("have.length", 20);

      cy.get(".coffee_container")
        .children()
        .each((child, index) => {
          cy.wrap(child)
            .find(".price")
            .should("contain", mock.coffee[index].price);
        });

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("should show correct image", () => {
      cy.get(".ingredient").children().should("have.length", 44);

      cy.get(".coffee_container")
        .children()
        .each((child, index) => {
          cy.wrap(child)
            .find("img")
            .should("have.attr", "src")
            .and("contain", mock.coffee[index].image);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should show correct title", () => {
      cy.get(".coffee_container").children().should("have.length", 20);

      cy.get(".coffee_container")
        .children()
        .each((child, index) => {
          cy.wrap(child)
            .find(".title")
            .should("contain", mock.coffee[index].title);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should show correct description", () => {
      cy.get(".ingredient").children().should("have.length", 44);

      cy.get(".coffee_container")
        .children()
        .each((child, index) => {
          cy.wrap(child)
            .find(".description")
            .should("contain", mock.coffee[index].description);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should show correct ingredient", () => {
      cy.get(".ingredient").children().should("have.length", 44);

      cy.get(".coffee_container")
        .children()
        .each((child, index) => {
          cy.wrap(child)
            .find("li")
            .then((res) => {
              expect(res.length).to.eq(mock.coffee[index].ingredients.length);
            });
        });

      cy.then(() => {
        acc_score += 1;
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
