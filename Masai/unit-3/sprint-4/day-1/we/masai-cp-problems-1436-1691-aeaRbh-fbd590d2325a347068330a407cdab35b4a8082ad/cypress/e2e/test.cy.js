import "cypress-localstorage-commands";
 import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://127.0.0.1:5500/", id: 67890 }];
describe("Test", function () {
  let acc_score = 1;
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it(`Should have initial structure as expected`, () => {
      cy.visit(url + "deleted.html");
      cy.get("#home").click();
      cy.location("pathname").should("eq", "/index.html");
  
   
      cy.get("#add_notes_text").should("exist")
      cy.get("#total_notes").contains("0");
      cy.get("#new_note").click();
      cy.location("pathname").should("eq", "/newNote.html");
      cy.then(() => {
        acc_score += 1;
      });
    });//1
    it(`Adding new note 1 `, () => {
      cy.visit(url + "newNote.html");
      cy.saveLocalStorage();
      cy.get("#new_title")
        .clear()
        .type("Optimize website development with React");
      cy.get("#new_description")
        .clear()
        .type(
          "React is a powerful JavaScript library for building fast and efficient user interfaces. Learn how to use it to optimize your website development process."
        );
      cy.get("#add_note").click();
      cy.then(() => {
        acc_score += 1;
      });
    });//1
  
    it(`Adding new note 2 `, () => {
      cy.visit(url + "newNote.html");
      cy.get("#new_title").clear().type("Master JavaScript fundamentals");
      cy.get("#new_description")
        .clear()
        .type(
          "JavaScript is the backbone of modern web development. Learn the fundamentals of the language to build dynamic and interactive web applications."
        );
      cy.get("#add_note").click();
      cy.then(() => {
        acc_score += 1;
      });
    });//1

    it(" Check if data added to dom successfully", () => {
      cy.visit(url);
      cy.get("#notes_container").children().should("have.length", 2);
      cy.get("#notes_container")
        .children()
        .first()
        .find("#title")
        .contains("Optimize website development with React");
      cy.get("#notes_container")
        .children()
        .last()
        .find("#description")
        .contains(
          "JavaScript is the backbone of modern web development. Learn the fundamentals of the language to build dynamic and interactive web applications."
        );
      cy.then(() => {
        acc_score += 2;
      });
    });//2
    it(`Check if data added to local storage successfully`, () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("notes"));
      expect(data.length).to.equal(2);

      expect(data[0].description).to.contain(
        "React is a powerful JavaScript library for building fast and efficient user interfaces. Learn how to use it to optimize your website development process."
      );
      expect(data[1].title).to.equal("Master JavaScript fundamentals");

      cy.then(() => {
        acc_score += 1;
      });
    });//1
    it("Check total notes in the navbar should increase as a new note is added", () => {
      cy.visit(url);
      cy.get("#total_notes").contains("2");
      cy.then(() => {
        acc_score += 1;
      });
    });//1
    it("Check if search functionality working on the title of the note", () => {
      cy.visit(url);
      cy.get("#notes_container").children().should("have.length", 2);
      cy.get("#Search").clear().type("Optimize");
      cy.get("#search_btn").click();
      cy.get("#notes_container").children().should("have.length", 1);
      cy.get("#notes_container")
        .children()
        .first()
        .find("#title")
        .contains("Optimize website development with React");
      cy.then(() => {
        acc_score += 1;
      });
    });//1
    // it("Check search functionality message if notes are not matched", () => {
    //   cy.visit(url);
    //   cy.get("#add_notes_text").should("not.exist")
    //   cy.then(() => {
    //     acc_score += 1;
    //   });
    // });//1
  

    it('Check delete functionality and dom updated after the note is deleted',()=>{
      cy.visit(url);
      cy.get("#notes_container")
      .children()
      .last().find("#delete_btn").click()
     // cy.get("#deleted").
     cy.get("#notes_container").children().should("have.length", 1);
     cy.get("#total_notes").contains("1");
     cy.get("#notes_container")
     .children()
     .first()
     .find("#title")
     .contains("Optimize website development with React");
     cy.then(() => {
      acc_score += 1;
    });
    })//1

    it('Check if data is updated in local storage successfully after deleting note',()=>{
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("notes"));
      expect(data.length).to.equal(1);

      expect(data[0].description).to.contain(
        "React is a powerful JavaScript library for building fast and efficient user interfaces. Learn how to use it to optimize your website development process."
      );
      expect(data[0].title).to.equal("Optimize website development with React");

      let deleted_data = JSON.parse(localStorage.getItem("deleted_notes"));
      expect(deleted_data.length).to.equal(1);

      expect(deleted_data[0].title).to.contain(
        "Master JavaScript fundamentals"
      );
      expect(deleted_data[0].description).to.equal("JavaScript is the backbone of modern web development. Learn the fundamentals of the language to build dynamic and interactive web applications.");
      cy.then(() => {
        acc_score += 1;
      });
    })//1

    it('Check if deleted page working expected',()=>{
      cy.visit(url + "deleted.html");
      cy.get("#notes_container").children().should("have.length", 1);
      cy.get("#notes_container")
      .children()
      .first()
      .find("#title")
      .contains("Master JavaScript fundamentals");
      cy.then(() => {
        acc_score += 1;
      });
    })//1

    it('Check if the add again button working expected',()=>{
      cy.visit(url + "deleted.html");
      cy.get("#notes_container")
      .children()
      .first()
      .find("#addAgain_btn").click()
      cy.get("#add_notes_text").should("exist").contains("Add notes / Result not found !")
      cy.visit(url + "index.html");
      cy.get("#notes_container").children().should("have.length", 2);
      cy.get("#notes_container")
        .children()
        .first()
        .find("#title")
        .contains("Optimize website development with React");
      cy.get("#notes_container")
        .children()
        .last()
        .find("#description")
        .contains(
          "JavaScript is the backbone of modern web development. Learn the fundamentals of the language to build dynamic and interactive web applications."
        );
        cy.then(() => {
          acc_score += 2;
        });
    })//2
  
    it("Check if the local storage data of notes updated successfully after addAgain",()=>{
      let data = JSON.parse(localStorage.getItem("notes"));
      expect(data.length).to.equal(2);
   let deleted_data = JSON.parse(localStorage.getItem("deleted_notes"));
      expect(deleted_data.length).to.equal(0);
      cy.then(() => {
        acc_score += 2;
      });
    })//2

    it('Check if the edit working as expected',()=>{
      cy.visit(url);
      cy.get("#notes_container").children().should("have.length", 2);
      cy.get("#notes_container")
        .children()
        .first()
        .find("#edit_btn")
        .click().then(()=>{
          cy.get("#edit_title").clear().type("test title")
          cy.get("#edit_description").clear().type("test description")
          cy.get("#edit_submit_btn").click()
        })

        cy.get("#notes_container")
        .children()
        .first()
        .find("#title")
        .contains("test title");
      cy.get("#notes_container")
        .children()
        .first()
        .find("#description")
        .contains(
          "test description"
        );
        cy.then(() => {
          acc_score += 2;
        });
    })//2

    it('Check edit part updated in local Storage successfully',()=>{
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("notes"));
      expect(data.length).to.equal(2);

      expect(data[0].description).to.contain(
        "test description"
      );
      expect(data[0].title).to.equal("test title");

      cy.then(() => {
        acc_score += 1;
      });
    })//1

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: acc_score,
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
