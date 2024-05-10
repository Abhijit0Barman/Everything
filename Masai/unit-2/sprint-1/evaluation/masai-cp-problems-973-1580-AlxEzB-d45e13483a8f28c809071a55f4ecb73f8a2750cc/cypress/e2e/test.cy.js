import data from "../../submissionData.json"; // do not create this file

// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.forEach((ele) => {
  describe("Test", () => {
    let url = ele.submission_link;
    let acc_score = 1;
    if (url && url.trim().length) {
      it("Check if the basic structure is there or not", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .father")
          .children(".person")
          .should("have.length", 4);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1
      it("Check the child structure", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .father > .person")
          .eq(0)
          .children(".children")
          .should("have.length", 4);

        cy.get(".app > .grandfather > .father > .person")
          .eq(1)
          .children(".children")
          .should("have.length", 4);
        cy.get(".app > .grandfather > .father > .person")
          .eq(2)
          .children(".children")
          .should("have.length", 4);
        cy.get(".app > .grandfather > .father > .person")
          .eq(3)
          .children(".children")
          .should("have.length", 4);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Check the grandchild structure", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .father > .person")
          .eq(0)
          .children(".children")
          .eq(3)
          .children(".grandchildren")
          .should("have.length", 4);

        cy.get(".app > .grandfather > .father > .person")
          .eq(1)
          .children(".children")
          .eq(2)
          .children(".grandchildren")
          .should("have.length", 4);

        cy.get(".app > .grandfather > .father > .person")
          .eq(2)
          .children(".children")
          .eq(1)
          .children(".grandchildren")
          .should("have.length", 4);

        cy.get(".app > .grandfather > .father > .person")
          .eq(3)
          .children(".children")
          .eq(0)
          .children(".grandchildren")
          .should("have.length", 4);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it(`Check the flex in person`, () => {
        cy.get(".person").should("have.css", "display", "flex");

        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it(`Check the flex in child`, () => {
        cy.get(".children").should("have.css", "display", "flex");
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it(`Text alignment in Father`, () => {
        cy.get(".father").should("have.css", "text-align", "center");
        cy.then(() => {
          acc_score += 1;
        });
      }); // Giving a score of 1

      it("Check the fontsize of grandchild elements", () => {
        cy.visit(url);
        cy.get(".app > .grandfather > .father > .person")
          .eq(0)
          .children(".children")
          .eq(3)
          .children(".grandchildren")
          .eq(0)
          .should("have.css", "font-size", "40px");

        cy.get(".app > .grandfather > .father > .person")
          .eq(1)
          .children(".children")
          .eq(2)
          .children(".grandchildren")
          .eq(1)
          .should("have.css", "font-size", "40px");

        cy.get(".app > .grandfather > .father > .person")
          .eq(2)
          .children(".children")
          .eq(1)
          .children(".grandchildren")
          .eq(2)
          .should("have.css", "font-size", "40px");

        cy.get(".app > .grandfather > .father > .person")
          .eq(3)
          .children(".children")
          .eq(0)
          .children(".grandchildren")
          .eq(3)
          .should("have.css", "font-size", "40px");
        cy.then(() => {
          acc_score += 3;
        });
      }); // Giving a score of 3
    }
    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id: ele.id,
        marks: Math.floor(acc_score),
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
