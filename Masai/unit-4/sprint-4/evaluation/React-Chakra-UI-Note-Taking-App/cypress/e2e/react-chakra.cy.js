/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
import notesData from "../fixtures/notesData.json";

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "shanti-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];
const getInitialState = (win) => win.reducerInitialState;
const getReducer = (win) => win.reducer;

const initialStateCheck = {
  loading: false,
  error: false,
  notes: [],
};
data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React-Note-App-useReducer", function () {
    let acc_score = 1;

    beforeEach(() => {
      cy.writeFile("db.json", notesData, (err) => {
        if (err) {
          console.error(err);
        }
      });
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
    });

    it("Should have basic structure of navbar", () => {
      cy.visit(url);
      cy.get('[data-cy="navbar"]').within(() => {
        cy.get("h3")
          .should("exist")
          .should("have.class", "chakra-heading")
          .and("contain", "Note App");

        cy.get("button")
          .should("exist")
          .should("have.class", "chakra-button")
          .and("contain", "Create Note");
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check for the initial state and reducer is returning state for invalid action type", () => {
      cy.visit(url);
      cy.window().then(getInitialState).should("deep.equal", initialStateCheck);
      cy.window().then(getReducer).should("exist");
      cy.window()
        .then(getReducer)
        .then((res) => {
          try {
            res(initialStateCheck, { type: "invalid" });
            // If the execution reaches this line, it means no error was thrown
            expect.fail("No error was thrown");
          } catch (error) {
            expect(error.message).to.equal("invalid action type");
          }
        });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("On page load reducer is updating state for loading and notes data", () => {
      cy.intercept("GET", "**/notes").as("getNotes");
      cy.visit(url);
      cy.window().then(getInitialState).should("deep.equal", initialStateCheck);
      cy.window().then(getReducer).should("exist");

      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "GET_NOTES_REQUEST",
          });
          expect(reducerState).to.deep.eq({
            loading: true,
            notes: [],
            error: false,
          });
        });

      cy.wait("@getNotes");

      cy.window()
        .then(getReducer)
        .then((res) => res)
        .then((reducer) => {
          let reducerState = reducer(initialStateCheck, {
            type: "GET_NOTES_SUCCESS",
            payload: notesData.notes,
          });
          expect(reducerState).to.deep.eq({
            loading: false,
            notes: notesData.notes,
            error: false,
          });
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if the loading skeleton is visible while data is being fetched", () => {
      cy.intercept("GET", "**/notes", (req) => {
        req.on("response", (res) => {
          // Wait for delay in milliseconds before sending the response to the client.
          res.setDelay(1000);
        });
      }).as("getNotes");

      cy.visit(url);

      cy.get('[data-cy="loading_indicator"]').should("exist");
      cy.get('[data-cy="loading_indicator"]').within(() => {
        cy.get(".chakra-skeleton").should("exist").and("have.length", 4);
      });
      cy.get('[data-cy="notes_container"]').should("not.exist");

      cy.wait("@getNotes").then(
        () => cy.get('[data-cy="loading_indicator"]').should("not.exist"),
        cy.get('[data-cy="notes_container"]').should("exist")
      );

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if correct pending notes information is visible in the dom", () => {
      cy.intercept("GET", "**/notes").as("getNotes");
      cy.visit(url);
      cy.wait("@getNotes");
      cy.get('[data-cy="pending_notes"]').should("exist");

      cy.get('[data-cy="pending_notes"]').within(() => {
        cy.get('[data-cy="note_card"]').should("have.length", 4);
      });

      const notes = notesData.notes.filter((el) => el.status === "pending");

      cy.get('[data-cy="pending_notes"]').within(() => {
        cy.get("h1").should("contain", "Pending");
        cy.get('[data-cy="note_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", notes[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("p")
            .should("contain", notes[index].description)
            .and("have.class", "chakra-text");

          // cy.wrap(el)
          //   .find('[data-cy="editBtn"]')
          //   .should("exist")
          //   .and("have.class", "chakra-button");

          cy.wrap(el)
            .find('[data-cy="deleteBtn"]')
            .should("exist")
            .and("have.class", "chakra-button");
        });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if correct in progress notes information is visible in the dom", () => {
      cy.intercept("GET", "**/notes").as("getNotes");
      cy.visit(url);
      cy.wait("@getNotes");
      cy.get('[data-cy="in_progress_notes"]').should("exist");

      cy.get('[data-cy="in_progress_notes"]').within(() => {
        cy.get('[data-cy="note_card"]').should("have.length", 2);
      });

      const notes = notesData.notes.filter((el) => el.status === "in_progress");

      cy.get('[data-cy="in_progress_notes"]').within(() => {
        cy.get("h1").should("contain", "In Progress");
        cy.get('[data-cy="note_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", notes[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("p")
            .should("contain", notes[index].description)
            .and("have.class", "chakra-text");
          // cy.wrap(el)
          //   .find('[data-cy="editBtn"]')
          //   .should("exist")
          //   .and("have.class", "chakra-button");

          cy.wrap(el)
            .find('[data-cy="deleteBtn"]')
            .should("exist")
            .and("have.class", "chakra-button");
        });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if correct completed notes information is visible in the dom", () => {
      cy.intercept("GET", "**/notes").as("getNotes");
      cy.visit(url);
      cy.wait("@getNotes");
      cy.get('[data-cy="completed_notes"]').should("exist");

      cy.get('[data-cy="completed_notes"]').within(() => {
        cy.get('[data-cy="note_card"]').should("have.length", 2);
      });

      const notes = notesData.notes.filter((el) => el.status === "completed");

      cy.get('[data-cy="completed_notes"]').within(() => {
        cy.get("h1").should("contain", "Completed");
        cy.get('[data-cy="note_card"]').each((el, index) => {
          cy.wrap(el)
            .find("h2")
            .should("contain", notes[index].title)
            .and("have.class", "chakra-heading");
          cy.wrap(el)
            .find("p")
            .should("contain", notes[index].description)
            .and("have.class", "chakra-text");
          // cy.wrap(el)
          //   .find('[data-cy="editBtn"]')
          //   .should("exist")
          //   .and("have.class", "chakra-button");

          cy.wrap(el)
            .find('[data-cy="deleteBtn"]')
            .should("exist")
            .and("have.class", "chakra-button");
        });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check if user is able to delete note and update in real time", () => {
      cy.intercept("GET", "**/notes").as("getNotes");
      cy.intercept("DELETE", "**/notes/*").as("deleteNote");

      cy.visit(url);

      cy.wait("@getNotes");

      cy.get('[data-cy="completed_notes"]').within(() => {
        cy.get('[data-cy="note_card"]').within(() => {
          cy.get('[data-cy="deleteBtn"]').should("exist").eq(1).click();
        });
      });

      cy.wait("@deleteNote");
      cy.wait("@getNotes");

      cy.get('[data-cy="completed_notes"]').within(() => {
        cy.get('[data-cy="note_card"]').should("have.length", 1);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    
    it("Check if user is able to create a new note", () => {
      cy.intercept("GET", "**/notes").as("getNotes");
      cy.intercept("POST", "**/notes").as("addNote");

      cy.visit(url);

      cy.wait("@getNotes");

      cy.get("[data-cy='drawer_openBtn']").should("exist").click();

      cy.get(".chakra-modal__content-container").should("be.visible");

      cy.get(".chakra-modal__body").within(() => {
        cy.get('[data-cy="title"]')
          .should("exist")
          .and("have.class", "chakra-input")
          .type("Go to gym every evening");
        cy.get('[data-cy="description"]')
          .should("exist")
          .and("have.class", "chakra-textarea")
          .type("Build daily routine of gym workout and exercise");
        cy.get('[data-cy="addBtn"]')
          .should("exist")
          .and("have.class", "chakra-button")
          .click();
      });

      cy.wait("@addNote");

      cy.wait("@getNotes");

      cy.get('[data-cy="pending_notes"]').within(() => {
        cy.get('[data-cy="note_card"]').should("have.length", 5);
        cy.get('[data-cy="note_card"]')
          .eq(4)
          .find("h2")
          .should("exist")
          .and("contain", "Go to gym every evening");
        cy.get('[data-cy="note_card"]')
          .eq(4)
          .find(".chakra-text")
          .should("exist")
          .and("contain", "Build daily routine of gym workout and exercise");
      });

      cy.then(() => {
        acc_score += 3;
      });
    });

    // it("Should be able to sort data with title in ascending order", () => {
    //   cy.intercept("GET", "**/notes?**").as("getNotes");

    //   cy.visit(url);

    //   cy.get('[data-cy="sort-category-option"]')
    //     .should("have.class", "chakra-select")
    //     .select("title");
    //   cy.get('[data-cy="sort-category-order"]')
    //     .should("have.class", "chakra-select")
    //     .select("asc");

    //   cy.wait("@getNotes");

    //   cy.window()
    //     .then(getReducer)
    //     .then((res) => res)
    //     .then((reducer) => {
    //       let reducerState = reducer(initialStateCheck, {
    //         type: "GET_NOTES_SUCCESS",
    //         payload: sortData.titleAsc,
    //       });
    //       expect(reducerState).to.deep.eq({
    //         loading: false,
    //         notes: sortData.titleAsc,
    //         error: false,
    //       });
    //     });

    //   cy.then(() => {
    //     acc_score += 2;
    //   });
    // });

    // it("Should be able to sort data with title in descending order", () => {
    //   cy.intercept("GET", "**/notes?**").as("getNotes");

    //   cy.visit(url);

    //   cy.get('[data-cy="sort-category-option"]')
    //     .should("have.class", "chakra-select")
    //     .select("title");
    //   cy.get('[data-cy="sort-category-order"]')
    //     .should("have.class", "chakra-select")
    //     .select("desc");

    //   cy.wait("@getNotes");

    //   cy.window()
    //     .then(getReducer)
    //     .then((res) => res)
    //     .then((reducer) => {
    //       let reducerState = reducer(initialStateCheck, {
    //         type: "GET_NOTES_SUCCESS",
    //         payload: sortData.titleDesc,
    //       });
    //       expect(reducerState).to.deep.eq({
    //         loading: false,
    //         notes: sortData.titleDesc,
    //         error: false,
    //       });
    //     });

    //   cy.then(() => {
    //     acc_score += 2;
    //   });
    // });

    after(() => {
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      console.log(result);
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