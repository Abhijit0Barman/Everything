import data from "../../submissionData.json"; // do not create/change  this file

import dbjsondata from "../fixtures/dbjsonData.json";
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "ukr-local",
//     json_server_link: "http://localhost:8080",
//   },
// ];
// use this ^  to check on local

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Todo application", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.writeFile("db.json", dbjsondata, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    it("should have basic structure", () => {
      cy.intercept("GET", "/todos*").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get("select").should("exist");
      cy.get(`[data-testid="add-todo"] input`).should("exist");
      cy.get(`[data-testid="add-todo"] button`).should("exist");
      cy.get(`[data-testid="todo-item"]`).should("have.length", 3);
      cy.get(`[data-testid="pagination"]`).should("exist");
      cy.get(`[data-testid="pagination"] button`).should("have.length", 2);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Previous and Next page buttons should be disabled as per the problem statement and on clicking on it appropriate network request is made and the current page number is displayed", () => {
      cy.intercept("GET", "/todos*").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="pagination"] button`).eq(0).should("be.disabled");
      let page = 1;
      for (let i = 1; i < dbjsondata.todos.length / 3; i++) {
        cy.get(`[data-testid="pagination"] div`).should("contain", page);
        cy.get(`[data-testid="pagination"] button`)
          .eq(1)
          .should("be.visible")
          .click({ force: true });
        cy.wait("@getTodos");
        page++;
      }
      cy.get(`[data-testid="pagination"] button`).eq(1).should("be.disabled");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("select tag on selecting displaying the correct number of todos", () => {
      cy.intercept("GET", "/todos*").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get("select").select("6");
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="todo-item"]`).should("have.length", 6);
      cy.get("select").should("be.visible").select("9");
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="todo-item"]`).should("have.length", 9);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Check all the todos are visible with correct html elements", () => {
      cy.intercept("GET", "/todos*").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get("select").select("9");
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="todo-item"]`).should("have.length", 9);
      cy.get(`[data-testid="todo-item"]`).each((ele, ind) => {
        cy.wrap(ele)
          .find("p")
          .eq(0)
          .should("contain", dbjsondata.todos[ind].title);
        cy.wrap(ele)
          .find("p")
          .eq(1)
          .should(
            "contain",
            dbjsondata.todos[ind].status ? "Completed" : "Not Completed"
          );
        cy.wrap(ele).find("button").should("have.length", 2);
      });
      cy.get(`[data-testid="pagination"] button`)
        .eq(1)
        .should("contain", "NEXT")
        .click({ force: true });
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="todo-item"]`).each((ele, ind) => {
        cy.wrap(ele)
          .find("p")
          .eq(0)
          .should("contain", dbjsondata.todos[9].title);
        cy.wrap(ele)
          .find("p")
          .eq(1)
          .should(
            "contain",
            dbjsondata.todos[9].status ? "Completed" : "Not Completed"
          );
        cy.wrap(ele).find("button").should("have.length", 2);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Able to add the new todo and data is updated on DOM in real time with POST and GET requests", () => {
      cy.intercept("GET", "/todos*").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      cy.intercept("POST", "**/todos*").as("postTodo");
      cy.get("input").should("be.visible").clear().type("Test Todo");
      cy.get("button").eq(0).should("contain", "ADD TODO").click({force: true});
      cy.wait("@postTodo");
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get("select").select("9");
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="pagination"] button`)
        .eq(1)
        .should("contain", "NEXT")
        .click({ force: true });
      cy.get(`[data-testid="todo-item"]`).each((ele, ind) => {
        if (ind === 0) {
          cy.wrap(ele)
            .find("p")
            .eq(0)
            .should("contain", dbjsondata.todos[9].title);
          cy.wrap(ele)
            .find("p")
            .eq(1)
            .should(
              "contain",
              dbjsondata.todos[9].status ? "Completed" : "Not Completed"
            );
          cy.wrap(ele).find("button").should("have.length", 2);
        } else if (ind === 1) {
          cy.wrap(ele).find("p").eq(0).should("contain", "Test Todo");
          cy.wrap(ele).find("p").eq(1).should("contain", "Not Completed");
          cy.wrap(ele).find("button").should("have.length", 2);
        }
      });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Able to toggle the status of the todo", () => {
      cy.intercept("GET", "/todos*").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      //1st todo
      cy.get(`[data-testid="todo-item"]`)
        .eq(0)
        .find("p")
        .eq(1)
        .should(
          "contain",
          dbjsondata.todos[0].status ? "Completed" : "Not Completed"
        );
      cy.intercept("PUT", "**/todos/**").as("putTodo");
      cy.get(`[data-testid="todo-item"] button`)
        .eq(0)
        .should("contain", "TOGGLE")
        .click({ force: true });
      cy.wait("@putTodo");
      cy.wait("@getTodos");
      cy.wait(200);
      cy.get(`[data-testid="todo-item"]`)
        .eq(0)
        .find("p")
        .eq(1)
        .should(
          "contain",
          !dbjsondata.todos[0].status ? "Completed" : "Not Completed"
        );
      //second todo
      cy.get(`[data-testid="todo-item"]`)
        .eq(1)
        .find("p")
        .eq(1)
        .should(
          "contain",
          dbjsondata.todos[1].status ? "Completed" : "Not Completed"
        );
      cy.intercept("PUT", "**/todos/**").as("putTodo");
      cy.get(`[data-testid="todo-item"] button`)
        .eq(2)
        .should("contain", "TOGGLE")
        .click({ force: true });
      cy.wait("@putTodo");
      cy.wait("@getTodos");
      cy.wait(200);
      cy.get(`[data-testid="todo-item"]`)
        .eq(1)
        .find("p")
        .eq(1)
        .should(
          "contain",
          !dbjsondata.todos[1].status ? "Completed" : "Not Completed"
        );
        cy.then(() => {
          acc_score += 2;
        });
    });
    it("Able to DELETE the todo", () => {
      cy.intercept("GET", "**/todos*").as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.wait(100);
      cy.intercept("DELETE", "**/todos/**").as("deleteTodo");
      //Deleting 1st todo
      cy.get(`[data-testid="todo-item"] button`)
        .eq(1)
        .should("contain", "DELETE")
        .click({ force: true });
      cy.wait("@deleteTodo");
      cy.wait("@getTodos");
      cy.wait(200);
      //Deleting 2nd todo
      cy.get(`[data-testid="todo-item"] button`)
        .eq(1)
        .should("contain", "DELETE")
        .click({ force: true });
      cy.wait("@deleteTodo");
      cy.wait("@getTodos");
      cy.wait(200);
      //check all the todos
      cy.get("select").select("9");
      cy.wait("@getTodos");
      cy.wait(100);
      cy.get(`[data-testid="todo-item"]`).should(
        "have.length",
        dbjsondata.todos.length - 2
      );
      cy.get(`[data-testid="todo-item"]`).each((ele, ind) => {
        cy.wrap(ele)
          .find("p")
          .eq(0)
          .should("contain", dbjsondata.todos[ind + 2].title);
        cy.wrap(ele)
          .find("p")
          .eq(1)
          .should(
            "contain",
            dbjsondata.todos[ind + 2].status ? "Completed" : "Not Completed"
          );
        cy.wrap(ele).find("button").should("have.length", 2);
      });
      cy.get(`[data-testid="pagination"] button`).each((ele, ind) => {
        cy.get(ele).should("be.disabled");
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Loading... should be visible between req and res from json-server", () => {
      cy.intercept("GET", "**/todos*", (req, res) => {
        req.reply({
          delay: 1000,
          body: [dbjsondata.todos[0], dbjsondata.todos[1], dbjsondata.todos[2]],
        });
      }).as("getTodos");
      cy.visit(url);
      cy.get(`[data-testid="loading"]`).should("exist");
      cy.wait("@getTodos");
      // cy.wait(300)
      cy.get(`[data-testid="loading"]`).should("not.exist");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Something went wrong.. should be visible between req and res from json-server", () => {
      cy.intercept("GET", "**/todos*", (req, res) => {
        req.reply({
          statusCode: 500,
          headers: { "Content-Type": "text/plain" }
        });
      }).as("getTodos");
      cy.visit(url);
      cy.wait("@getTodos");
      cy.get(`[data-testid="err"]`).should("exist");
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
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
