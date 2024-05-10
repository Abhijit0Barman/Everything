import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "shanti-local" }];

///<reference types= "cypress" /

describe("React Form Assignment", () => {
  let acc_score = 1;
  data.map(({ submission_link: link, id }) => {
    beforeEach(() => {
      cy.visit(link);

      if (link.charAt(link.length - 1) != "/") {
        link = link + "/";
      }
    });

    it("should have basic structure of form", () => {
      cy.get("h1").should("have.text", "React Form Assignment");
      cy.get("input[type='text']").should("exist").and("have.length", 2);
      cy.get("input[name='firstName']").should("exist");
      cy.get("input[name='lastName']").should("exist");
      cy.get("input[type='email']").should("exist");
      cy.get("input[type='password']").should("exist");
      cy.get("input[type='number']").should("exist");
      cy.get("select[name='country']").should("exist");
      cy.get("input[type='date']").should("exist");
      cy.get("input[type='file']").should("exist");
      cy.get("input[type='checkbox']").should("exist");
      cy.get("input[type='radio']").should("exist").and("have.length", 3);
      cy.get("input[type='submit']").should("exist");
      cy.then(() => {
        acc_score += 3;
      });
    });

    it("should get the correct value for entered input - 1", () => {
      const userData = {
        firstName: "Raj",
        lastName: "Kumar",
        email: "raj.kumar@gmail.com",
        password: "Raj@13#",
        number: "9999999999",
        country: "India",
        birthDate: "2001-10-01",
        file: "cypress/fixtures/image.jpg",
      };

      cy.get("form").within(($form) => {
        cy.get("input[name='firstName']")
          .type(`${userData.firstName}`)
          .should("have.value", `${userData.firstName}`);

        cy.get("input[name='lastName']")
          .type(`${userData.lastName}`)
          .should("have.value", `${userData.lastName}`);

        cy.get("input[type='email']")
          .type(`${userData.email}`)
          .should("have.value", `${userData.email}`);

        cy.get("input[type='password']")
          .type(`${userData.password}`)
          .should("have.value", `${userData.password}`);

        cy.get("input[type='number']")
          .type(`${userData.number}`)
          .should("have.value", `${userData.number}`);

        cy.get("select[name='country']")
          .should("exist")
          .select(`${userData.country}`)
          .should("have.value", `${userData.country}`);

        const dateInput = cy.get("input[type='date']");

        dateInput
          .type(`${userData.birthDate}`)
          .should("have.attr", "value", `${userData.birthDate}`);

        cy.get('input[type="file"]')
          .selectFile(`${userData.file}`)
          .and("have.attr", "value")
          .should("contain", "image.jpg");

        cy.get("input[type='checkbox']").check().should("be.checked");

        cy.get("input[type='radio']").check("male");
        cy.get("input[type='submit']").should("exist");

        cy.root().submit();
      });

      cy.get('[data-cy="first-name"]').should(
        "contain",
        `${userData.firstName}`
      );
      cy.get('[data-cy="last-name"]').should("contain", `${userData.lastName}`);
      cy.get('[data-cy="email"]').should("contain", `${userData.email}`);
      cy.get('[data-cy="password"]').should("contain", `${userData.password}`);
      cy.get('[data-cy="phNumber"]').should("contain", `${userData.number}`);
      cy.get('[data-cy="country"]').should("contain", `${userData.country}`);
      cy.get('[data-cy="birth-date"]').should(
        "contain",
        `${userData.birthDate}`
      );

      cy.get('[data-cy="image-url"]').should("contain", "image.jpg");
      cy.get('[data-cy="marriage-status"]').should("contain", "Yes");
      cy.get('[data-cy="gender"]').should("contain", "male");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("should get the correct value for entered input - 2", () => {
      const userData = {
        firstName: "Nilam",
        lastName: "Kumari",
        email: "nilam.kumari@gmail.com",
        password: "Nilam@13#",
        number: "8888888888",
        country: "India",
        birthDate: "2005-10-01",
        file: "cypress/fixtures/image.jpg",
      };

      cy.get("form").within(($form) => {
        cy.get("input[name='firstName']")
          .type(`${userData.firstName}`)
          .should("have.value", `${userData.firstName}`);

        cy.get("input[name='lastName']")
          .type(`${userData.lastName}`)
          .should("have.value", `${userData.lastName}`);

        cy.get("input[type='email']")
          .type(`${userData.email}`)
          .should("have.value", `${userData.email}`);

        cy.get("input[type='password']")
          .type(`${userData.password}`)
          .should("have.value", `${userData.password}`);

        cy.get("input[type='number']")
          .type(`${userData.number}`)
          .should("have.value", `${userData.number}`);

        cy.get("select[name='country']")
          .should("exist")
          .select(`${userData.country}`)
          .should("have.value", `${userData.country}`);

        const dateInput = cy.get("input[type='date']");

        dateInput
          .type(`${userData.birthDate}`)
          .should("have.attr", "value", `${userData.birthDate}`);

        cy.get('input[type="file"]')
          .selectFile(`${userData.file}`)
          .and("have.attr", "value")
          .should("contain", "image.jpg");

        cy.get("input[type='radio']").check("female");
        cy.get("input[type='submit']").should("exist");

        cy.root().submit();
      });

      cy.get('[data-cy="first-name"]').should(
        "contain",
        `${userData.firstName}`
      );
      cy.get('[data-cy="last-name"]').should("contain", `${userData.lastName}`);
      cy.get('[data-cy="email"]').should("contain", `${userData.email}`);
      cy.get('[data-cy="password"]').should("contain", `${userData.password}`);
      cy.get('[data-cy="phNumber"]').should("contain", `${userData.number}`);
      cy.get('[data-cy="country"]').should("contain", `${userData.country}`);
      cy.get('[data-cy="birth-date"]').should(
        "contain",
        `${userData.birthDate}`
      );

      cy.get('[data-cy="image-url"]').should("contain", "image.jpg");
      cy.get('[data-cy="marriage-status"]').should("contain", "No");
      cy.get('[data-cy="gender"]').should("contain", "female");

      cy.then(() => {
        acc_score += 3;
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
