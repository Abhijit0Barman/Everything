import data from "../../submissionData.json"; // do not create this file

//let submitData = [{ submission_link: "http://localhost:8080/", id: 67890 }];

data.forEach((ele, index) => {
  describe("Doctor layout", () => {
    let url = ele.submission_link;
    let acc_score = 0;
    if (url && url.trim().length) {
      acc_score += 1;
      it("Checking display flex in the Banner", () => {
        cy.visit(url);
        cy.get("#banner")
          .should("have.css", "display", "flex")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2
      it("Checking the services section for display grid", () => {
        cy.visit(url);
        cy.get("#services")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2

      it("Checking the works section for display grid", () => {
        cy.visit(url);
        cy.get("#works>div")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2

      it("Checking for the banner in column direction in mobile devices", () => {
        cy.viewport(600, 750);
        cy.get("#banner")
          .should("have.css", "flex-direction", "column")
          .then(() => {
            acc_score += 2;
          });
      }); // Giving a score of 2
      it("Checking text-align center for the heading a para in the works section", () => {
        cy.get("#works")
          .children("p")
          .should("have.css", "text-align", "center")
          .then(() => {
            acc_score += 0.5;
          });
        cy.get("#works")
          .children("h1")
          .should("have.css", "text-align", "center")
          .then(() => {
            acc_score += 0.5;
          });
      }); // 1
    }
    it(`generate score`, () => {
      //////////////
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
