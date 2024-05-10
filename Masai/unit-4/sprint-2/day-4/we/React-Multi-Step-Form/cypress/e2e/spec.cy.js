import data from "../../submissionData.json"; // do not create this file
import user from "../fixtures/user.json";
// const data = [{ submission_link: "http://localhost:3000", id: "shanti-local" }];

describe("React Search Engine App", () => {
  let acc_score = 1;

  data.map(({ submission_link: link, id }) => {
    beforeEach(() => {
      if (link.charAt(link.length - 1) != "/") {
        link = link + "/";
      }
    });

    it("Should have a correct heading visible", () => {
      cy.visit(link);
      cy.get("h1").should("have.text", "React Multi Step Form");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("First step should have current step, next button, input fields visible", () => {
      cy.visit(link);
      cy.get("button[type='button']").should("exist").and("have.length", 1);
      cy.get("[data-cy='next']").should("exist");
      cy.get("[data-cy='previous']").should("not.exist");
      cy.get("[data-cy='current-step']").should("exist").and("contain", 1);

      cy.get("[data-cy='email']")
        .should("exist")
        .and("have.attr", "type", "email");
      cy.get("[data-cy='password']")
        .should("exist")
        .and("have.attr", "type", "password");
      cy.get("[data-cy='confirmedPassword']")
        .should("exist")
        .and("have.attr", "type", "password");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Second step should have current step, next & previous button, input fields visible", () => {
      cy.visit(link);
      cy.get("[data-cy='next']").click();
      cy.get("button[type='button']").should("exist").and("have.length", 2);
      cy.get("[data-cy='previous']").should("exist");
      cy.get("[data-cy='next']").should("exist");
      cy.get("[data-cy='current-step']").should("exist").and("contain", 2);

      cy.get("[data-cy='education']")
        .should("exist")
        .then(($selectTag) => {
          // Check if the element is a select tag
          expect($selectTag.is("select")).to.be.true;
        });

      cy.get("[data-cy='passingYear']")
        .should("exist")
        .and("have.attr", "type", "month");
      cy.get("[data-cy='birthDate']")
        .should("exist")
        .and("have.attr", "type", "date");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Third step should have current step, next & previous button, input fields visible", () => {
      cy.visit(link);
      cy.get("[data-cy='next']").click();
      cy.get("button[type='button']").should("exist").and("have.length", 2);
      cy.get("[data-cy='previous']").should("exist");
      cy.get("[data-cy='next']").click();
      cy.get("[data-cy='current-step']").should("exist").and("contain", 3);

      cy.get("[data-cy='firstName']")
        .should("exist")
        .and("have.attr", "type", "text");
      cy.get("[data-cy='lastName']")
        .should("exist")
        .and("have.attr", "type", "text");
      cy.get("[data-cy='phone']")
        .should("exist")
        .and("have.attr", "type", "tel");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Last step should have current step, previous & submit button, input fields visible", () => {
      cy.visit(link);
      cy.get("[data-cy='next']").click();
      cy.get("button[type='button']").should("exist").and("have.length", 2);
      cy.get("[data-cy='previous']").should("exist");
      cy.get("[data-cy='next']").click();
      cy.get("[data-cy='current-step']").should("exist").and("contain", 3);
      cy.get("[data-cy='next']").click();

      cy.get("[data-cy='current-step']").should("exist").and("contain", 4);
      cy.get("[data-cy='fatherName']")
        .should("exist")
        .and("have.attr", "type", "text");
      cy.get("[data-cy='motherName']")
        .should("exist")
        .and("have.attr", "type", "text");
      cy.get("[data-cy='address']")
        .should("exist")
        .and("have.attr", "type", "text");

      cy.get("textarea").should("have.prop", "tagName", "TEXTAREA");

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Last step should have input type = submit button", () => {
      cy.visit(link);
      cy.get("[data-cy='next']").click();
      cy.get("button[type='button']").should("exist").and("have.length", 2);
      cy.get("[data-cy='previous']").should("exist");
      cy.get("[data-cy='next']").click();
      cy.get("[data-cy='current-step']").should("exist").and("contain", 3);
      cy.get("[data-cy='next']").click();

      cy.get("[data-cy='current-step']").should("exist").and("contain", 4);

      cy.get("input[type='submit']").should("exist");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should have show correct output for all values entered in inputs", () => {
      cy.visit(link);
      cy.get("[data-cy='email']").should("exist").type(user.email);
      cy.get("[data-cy='password']").should("exist").type(user.password);
      cy.get("[data-cy='confirmedPassword']")
        .should("exist")
        .type(user.confirmedPassword);
      cy.get("[data-cy='next']").click();
      cy.get("[data-cy='education']").should("exist").select(user.education);
      cy.get("[data-cy='passingYear']").should("exist").type(user.passingYear);
      cy.get("[data-cy='birthDate']").should("exist").type(user.birthDate);
      cy.get("[data-cy='next']").click();

      cy.get("[data-cy='firstName']").should("exist").type(user.firstName);
      cy.get("[data-cy='lastName']").should("exist").type(user.lastName);
      cy.get("[data-cy='phone']").should("exist").type(user.phone);
      cy.get("[data-cy='next']").click();
      cy.get("[data-cy='fatherName']").should("exist").type(user.fatherName);
      cy.get("[data-cy='motherName']").should("exist").type(user.motherName);
      cy.get("[data-cy='address']").should("exist").type(user.address);
      cy.get("form").submit();

      cy.get("form").should("not.exist");
      cy.get("h2").should("have.text", "You are registered successfully!");
      cy.get(".user_info").should("contain", user.email);
      cy.get(".user_info").should("contain", user.password);
      cy.get(".user_info").should("contain", user.confirmedPassword);
      cy.get(".user_info").should("contain", user.education);
      cy.get(".user_info").should("contain", user.passingYear);
      cy.get(".user_info").should("contain", user.birthDate);
      cy.get(".user_info").should("contain", user.firstName);
      cy.get(".user_info").should("contain", user.lastName);
      cy.get(".user_info").should("contain", user.phone);
      cy.get(".user_info").should("contain", user.fatherName);
      cy.get(".user_info").should("contain", user.motherName);
      cy.get(".user_info").should("contain", user.address);
      cy.then(() => {
        acc_score += 4;
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
