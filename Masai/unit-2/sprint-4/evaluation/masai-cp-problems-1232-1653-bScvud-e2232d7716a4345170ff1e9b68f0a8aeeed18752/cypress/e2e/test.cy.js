import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
import { Initial, price5001000, price15002000 } from "../fixtures/data.json";
describe("Test", function () {
  let acc_score = 1;

  function CheckTable(data, index) {
    cy.get("tbody tr").eq(index).contains("td", data.company_name);
    cy.get("tbody tr").eq(index).contains("td", data.country);
    cy.get("tbody tr").eq(index).contains("td", data.price);
    cy.get("tbody tr").eq(index).contains("td", data.sector);
  }
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check if the api call made`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-stocks?limit=30`,
          { data: Initial }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          acc_score += 2;
        });
      }); // 2
      it(`Student is able to loop through the data and append in the dom`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-stocks?limit=30`,
          { data: Initial }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest");
        for (let i = 0; i < Initial.length; i++) {
          CheckTable(Initial[i], i);
        }
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it(`Check if the Filter Part is working or not`, () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-stocks?limit=30`,
          { data: Initial }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest");
        cy.get("#filter>#lower").clear().type(500);
        cy.get("#filter>#upper").clear().type(1000);
        cy.get("#filter-btn").click();

        for (let i = 0; i < price5001000.length; i++) {
          CheckTable(price5001000[i], i);
        }

        cy.get("#filter>#lower").clear().type(1500);
        cy.get("#filter>#upper").clear().type(2000);
        cy.get("#filter-btn").click();

        for (let i = 0; i < price15002000.length; i++) {
          CheckTable(price15002000[i], i);
        }
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it("Check add to portfolio feature", () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-stocks?limit=30`,
          { data: Initial }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest");
        expect(localStorage.getItem("portfolio")).to.eq(null);
        cy.get("tbody tr")
          .eq(0)
          .contains("td", "ADD")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("portfolio")).length).to.eq(
              1
            );
          });
        cy.get("tbody tr")
          .eq(3)
          .contains("td", "ADD")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("portfolio")).length).to.eq(
              2
            );
          });

        cy.then(() => (acc_score += 1));
      }); // 1
      it("Visit Protfolio page and check DOM", () => {
        cy.visit(`${url}/portfolio.html`);
        CheckTable(Initial[0], 0);
        CheckTable(Initial[3], 1);
        cy.then(() => (acc_score += 1));
      }); // 1

      it("Check the quantity part", () => {
        cy.visit(`${url}/portfolio.html`);
        cy.get("tbody tr").eq(0).contains("td", 1);
        cy.get("tbody tr").eq(1).contains("td", 1);
        cy.get("tbody tr").eq(0).contains("td", "+").click();
        cy.get("tbody tr").eq(0).contains("td", 2);
        cy.get("tbody tr").eq(0).contains("td", "+").click();
        cy.get("tbody tr").eq(0).contains("td", 3);

        cy.get("tbody tr").eq(0).contains("td", "-").click();
        cy.get("tbody tr").eq(0).contains("td", 2);

        cy.then(() => (acc_score += 2));
      }); //2

      it("Check the deleting part", () => {
        cy.visit(`${url}/portfolio.html`);
        cy.get("tbody tr").eq(0).contains("td", "Delete").click();
        cy.get("tbody tr").should("have.length", 1);
        CheckTable(Initial[3], 0);

        cy.then(() => (acc_score += 1));
      }); //1
      it("Adding duplicate stock shouldn't work", () => {
        cy.intercept(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-stocks?limit=30`,
          { data: Initial }
        ).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest");
        cy.get("tbody tr")
          .eq(0)
          .contains("td", "ADD")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("portfolio")).length).to.eq(
              2
            );
          });
        cy.get("tbody tr")
          .eq(3)
          .contains("td", "ADD")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("portfolio")).length).to.eq(
              2
            );
          });

        cy.then(() => (acc_score += 1));
      }); // 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
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
