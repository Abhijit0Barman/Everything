/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
import allBooks from "../fixtures/Allbooks.json";
// const data = [
//   {
//     submission_link: "http://localhost:3001",
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

    it("Should have basic structure (Home Page)", () => {
      cy.visit(url);
      cy.wait(200);
      cy.get(".navbar").should("exist");
      cy.get(".navbar").children().should("have.length", 4);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have basic structure (Section Page(History))", () => {
      cy.intercept("GET", `**/books`).as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get(".navbar").should("exist");
      cy.get(".navbar").children().should("have.length", 4);
      cy.get(".mystery").should("exist").click();
      cy.url().should("include", "/section/mystery");

      cy.wait(2000);
      cy.get(".bookCard").its("length").should("be.equal", 5);

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have basic structure (Book Details Page)", () => {
      cy.intercept("GET", `**/books`).as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get(".bookCard").first().click();
      cy.get(".navbar").should("exist");
      cy.get(".bookContainer").should("exist");
      cy.get(".bookContainer").children().should("have.length", 6);
      cy.get(".title").should("exist");
      cy.get(".price").should("exist");
      cy.get(".author").should("exist");
      cy.get(".description").should("exist");
      cy.get(".isbn").should("exist");

      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Should render all books in home page", () => {
      cy.intercept("GET", `**/books`).as("getBooks");
      cy.visit(url);

      cy.wait("@getBooks");
      cy.get(".bookCard").its("length").should("be.equal", allBooks.length);

      cy.get(".bookCard").each((child, index) => {
        console.log("child", child, index);
        cy.wrap(child).find(".title").should("contain", allBooks[index].title);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Should render all books in History page", () => {
      cy.intercept("GET", `**/books`).as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      let arr = [
        "The Bald Eagle: The Improbable Journey of America's Bird",
        "Against All Odds: A True Story of Ultimate Courage and Survival in World War II",
        "We Don't Know Ourselves: A Personal History of Modern Ireland",
        "The War That Made the Roman Empire: Antony, Cleopatra, and Octavian at Actium",
        "The Jesuits: A History",
      ];
      cy.get(".history").should("be.visible").click();
      cy.url().should("include", "/section/history");
      cy.get(".bookCard").its("length").should("be.equal", 5);
      // cy.get(".bookCard .title").then((x) => {
      //   const temp = [];
      //   for (const el of x) {
      //     temp.push(el.innerText.trim());
      //   }
      //   let same = true;
      //   for (let x = 0; x < temp.length; x++) {
      //     if (temp[x].trim() != arr[x].trim()) {
      //       same = false;
      //       console.log(temp[x]);
      //       break;
      //     }
      //   }
      //   assert.isTrue(same);
      //   acc_score += 2;
      // });
      cy.get(".bookCard").each((child, index) => {
        console.log("child", child, index);
        cy.wrap(child).find(".title").should("contain", arr[index]);
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should render all books in Mystery page", () => {
      cy.intercept("GET", `**/books`).as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      let arr = [
        "End of Days: A Pike Logan Novel (A Pike Logan Thriller Book 16)",
        "Billy Summers",
        "Harry Potter: The Complete Collection",
        "The Ice Maiden (Doug Bateman Mystery Book 1)",
        "Mercy (Atlee Pine Book 4)",
      ];
      cy.get(".mystery").should("be.visible").click();
      cy.url().should("include", "/section/mystery");

      cy.get(".bookCard").its("length").should("be.equal", 5);

      cy.get(".bookCard").each((child, index) => {
        console.log("child", child, index);
        cy.wrap(child).find(".title").should("contain", arr[index]);
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should render all books in Mythology page", () => {
      cy.intercept("GET", `**/books`).as("getBooks");
      let arr = [
        "The Immortals of Meluha",
        "The Secret of the Nagas",
        "Scion of Ikshvaku",
        "The Oath of the Vayuputras",
        "Sita: Warrior of Mithila",
      ];
      cy.visit(url);
      cy.wait("@getBooks");
      cy.get(".mythology").should("be.visible").click();
      cy.url().should("include", "/section/mythology");

      cy.get(".bookCard").its("length").should("be.equal", 5);
      cy.get(".bookCard").each((child, index) => {
        console.log("child", child, index);
        cy.wrap(child).find(".title").should("contain", arr[index]);
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should render all books in technology page", () => {
      cy.intercept("GET", `**/books`).as("getBooks");
      cy.visit(url);
      cy.wait("@getBooks");
      let arr = [
        "Life 3.0",
        "Elon Musk",
        "Steve Jobs",
        "The Innovators",
        "Uncanny Valley",
      ];
      cy.get(".technology").should("be.visible").click();
      cy.url().should("include", "/section/technology");

      cy.get(".bookCard").its("length").should("be.equal", 5);

      cy.get(".bookCard").each((child, index) => {
        console.log("child", child, index);
        cy.wrap(child).find(".title").should("contain", arr[index]);
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have section route", () => {
      cy.intercept("GET", `**/books?**`).as("getBooks");
      cy.visit(url + "section/history");
      cy.wait("@getBooks");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have Book Details Page route", () => {
      cy.visit(url + "bookdetailspage/1");
      cy.get(".bookContainer").should("exist");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have not found 404 route", () => {
      cy.visit(url + "randomtext");
      cy.get(".notFound").should("exist");

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
