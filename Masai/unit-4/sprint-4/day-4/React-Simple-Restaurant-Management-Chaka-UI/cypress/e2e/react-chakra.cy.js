/* eslint-disable no-undef */

import mockdata from "../fixtures/dbData.json";
import page1data from "../fixtures/homePage1Data.json";
import dataInDescendingOrderRating from "../fixtures/ratingInDescendingOrder9.json";
import price_starts_from_desc from "../fixtures/priceStartsfromDesc.json";
import price_starts_from_asc from "../fixtures/priceAsc9.json";
import ratingAsc from "../fixtures/ratingAsc.json";
import afterDelete2card from "../fixtures/afterDeletingSecondItem.json";
import pagesdata from "../fixtures/pageDataLimit3.json";

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "shanti-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

const getaddRestaurantReducer = (win) => win.addRestaurantReducer;
const geteditRestaurantReducer = (win) => win.editRestaurantReducer;
const gethomeReducer = (win) => win.homeReducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React-Simple-Restaurant-Management-Chaka-UI", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.writeFile("db.json", mockdata, (err) => {
        if (err) {
          console.error(err);
        }
      });
      cy.visit(url);
      // cy.window().its("reducerInitialState").should("exist");
    });
    it("Should have the basic structure on page load", () => {
      cy.visit(url);
      cy.wait(1000);
      cy.get("select").should("have.length", 3);
      cy.get(`[data-testid="restaurant-card"]`).should("have.length", 3);
      cy.get(`[data-testid="navbar"] a`).eq(0).should("contain", `Home`);
      cy.get(`[data-testid="navbar"] a`)
        .eq(1)
        .should("contain", `Add Restaurant`);
      cy.get(`[data-testid="navbar"] a`).should("have.length", 2);
      cy.get(`[data-testid="navbar"] .chakra-link`).should("have.length", 2);

      cy.get(`[data-testid="pagination-component"]`).should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("addRestaurantReducer should handle invalid action type by throwing an error with the message and also able to handle RESET_VALUES action", () => {
      let initState = {
        name: "", //string
        type: "", // one of -->  ethnic, cafe, casual_dining, fine_dining, fast_food
        rating: "", // number --> 1-5
        number_of_votes: "", // number
        price_starts_from: "", // number
        image: "", // string imageUrl
      };

      cy.window().then(getaddRestaurantReducer).should("exist");

      const invalidActionType = "wrong_action_type";
      cy.window()
        .then(getaddRestaurantReducer)
        .then((reducer) => {
          const action = { type: invalidActionType };
          expect(() => reducer(initState, action)).to.throw(
            `invalid action type, ${invalidActionType}`
          );
        });

      let initState1 = {
        name: "Taj", //string
        type: "cafe", // one of -->  ethnic, cafe, casual_dining, fine_dining, fast_food
        rating: "", // number --> 1-5
        number_of_votes: "", // number
        price_starts_from: "1", // number
        image: "", // string imageUrl
      };
      cy.window()
        .then(getaddRestaurantReducer)
        .then((reducer) => {
          const resetAction = { type: "RESET_VALUES" };
          const newState = reducer(initState1, resetAction);
          expect(newState).to.deep.equal(initState);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("editRestaurantReducer.js should handle invalid action types by throwing an error with the message along with other action types", () => {
      const initState = {
        name: "", //string
        type: "", // one of -->  ethnic, cafe, casual_dining, fine_dining, fast_food
        rating: "", // number --> 1-5
        number_of_votes: "", // number
        price_starts_from: "", // number
        image: "", // string imageUrl
      };

      cy.window().then(geteditRestaurantReducer).should("exist");

      const invalidActionType = "wrong_action_type1";
      cy.window()
        .then(geteditRestaurantReducer)
        .then((reducer) => {
          const action = { type: invalidActionType };
          expect(() => reducer(initState, action)).to.throw(
            `invalid action type, ${invalidActionType}`
          );
        });

      cy.window()
        .then(geteditRestaurantReducer)
        .then((reducer) => {
          const changeInputAction = {
            type: "CHANGE_INPUT",
            payload: { name: "rating", value: 4 },
          };
          const newState = reducer(initState, changeInputAction);
          expect(newState).to.deep.equal({ ...initState, rating: 4 });

          const updateStateAction = {
            type: "UPDATE_STATE",
            payload: { name: "Novotel" },
          };
          const newState1 = reducer(newState, updateStateAction);
          expect(newState1).to.deep.equal({ ...initState, name: "Novotel" });
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("homeReducer should handle invalid action type by throwing an error with a message", () => {
      const initState = {
        loading: false,
        data: [],
        err: false,
        totalPages: 1,
      };

      cy.window().then(gethomeReducer).should("exist");

      const invalidActionType = "wrong_action_type3";
      cy.window()
        .then(gethomeReducer)
        .then((reducer) => {
          const action = { type: invalidActionType };
          expect(() => reducer(initState, action)).to.throw(
            `invalid action type, ${invalidActionType}`
          );
        });

      cy.window()
        .then(gethomeReducer)
        .then((reducer) => {
          const fetchLoadingAction = {
            type: "FETCH_LOADING",
          };
          const newState = reducer(initState, fetchLoadingAction);
          expect(newState).to.deep.equal({ ...initState, loading: true });

          const fetchSuccessAction = {
            type: "FETCH_SUCCESS",
            payload: { data: page1data, totalPages: 9 },
          };
          const newState1 = reducer(newState, fetchSuccessAction);
          expect(newState1).to.deep.equal({
            ...initState,
            loading: false,
            err: false,
            data: page1data,
            totalPages: 9,
          });
          const fetchFailure = {
            type: "FETCH_FAILURE",
          };
          const newState2 = reducer(initState, fetchFailure);
          expect(newState2.err).equal(true);
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check whether, in the home page, select tags are having default values as 3, rating, and asc, and showing the data in order", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.visit(url);
      cy.wait("@getRestaurants").then(() => {
        cy.get("select").eq(0).should("have.value", 3);
        cy.get("select").eq(1).should("have.value", `rating`);
        cy.get("select").eq(2).should("have.value", `asc`);
        page1data.forEach((ele, ind) => {
          cy.get(`[data-testid="restaurant-card"]`)
            .eq(ind)
            .within(() => {
              cy.get("img").should("have.attr", "src", ele.image);
              cy.get("h2").should("have.text", `Name : ${ele.name}`);
              cy.get(".chakra-text").eq(0).should("have.text", `Type : ${ele.type}`);
              cy.get(".chakra-text").eq(1).should("have.text", `Rating : ${ele.rating}`);
              cy.get(".chakra-text")
                .eq(2)
                .should(
                  "have.text",
                  `Number of votes : ${ele.number_of_votes}`
                );
              cy.get(".chakra-text")
                .eq(3)
                .should(
                  "have.text",
                  `Price Starts From : $${ele.price_starts_from}`
                );
              cy.get("a").should(
                "have.attr",
                "href",
                `/edit-restaurant/${ele.id}`
              );
              cy.get("button").should("contain.text", "DELETE");
            });
        });
      });
      cy.get(`[data-testid="pagination-component"] button`).should(
        "have.length",
        Math.ceil(mockdata.restaurants.length / 3)
      );
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Select the option to set the number of restaurants per page should be working", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.visit(url);
      cy.wait("@getRestaurants").then(() => {
        cy.get("select").eq(0).should("have.value", 3);
      });
      cy.get("select")
        .eq(0)
        .select("6")
        .then(() => {
          cy.wait("@getRestaurants");
          cy.get("select").should("have.value", 6);
          cy.get(`[data-testid="restaurant-card"]`).should("have.length", 6);
          cy.get(`[data-testid="pagination-component"] button`).should(
            "have.length",
            Math.ceil(mockdata.restaurants.length / 6)
          );
        });

      cy.get("select")
        .eq(0)
        .select("9")
        .then(() => {
          cy.wait("@getRestaurants");
          cy.get("select").should("have.value", 9);
          cy.get(`[data-testid="restaurant-card"]`).should("have.length", 9);
          cy.get(`[data-testid="pagination-component"] button`).should(
            "have.length",
            Math.ceil(mockdata.restaurants.length / 9)
          );
        });
      cy.get("select")
        .eq(0)
        .select("3")
        .then(() => {
          cy.wait("@getRestaurants");
          cy.get("select").should("have.value", 3);
          cy.get(`[data-testid="restaurant-card"]`).should("have.length", 3);
          cy.get(`[data-testid="pagination-component"] button`).should(
            "have.length",
            Math.ceil(mockdata.restaurants.length / 3)
          );
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Able to see restaurants details on different pages", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.visit(url);
      cy.wait("@getRestaurants", { requestAnimationFrame: true });
      cy.get(`[data-testid="pagination-component"] button`)
        .eq(2)
        .click({ force: true });
      cy.wait("@getRestaurants", { requestAnimationFrame: true });
      cy.wait(100);
      pagesdata.page3.forEach((ele, ind) => {
        if (true) {
          cy.get(`[data-testid="restaurant-card"]`)
            .eq(ind)
            .within(() => {
              cy.get("img").should("have.attr", "src", ele.image);
              cy.get("h2").should("have.text", `Name : ${ele.name}`);
              cy.get(".chakra-text").eq(0).should("have.text", `Type : ${ele.type}`);
              cy.get(".chakra-text").eq(1).should("have.text", `Rating : ${ele.rating}`);
              cy.get(".chakra-text")
                .eq(2)
                .should(
                  "have.text",
                  `Number of votes : ${ele.number_of_votes}`
                );
              cy.get("p")
                .eq(3)
                .should(
                  "have.text",
                  `Price Starts From : $${ele.price_starts_from}`
                );
              cy.get("a").should(
                "have.attr",
                "href",
                `/edit-restaurant/${ele.id}`
              );
              cy.get(".chakra-button").should("contain", "DELETE");
            });
        }
      });
      cy.get(`[data-testid="pagination-component"] button`)
        .eq(6)
        .click({ force: true });
      cy.wait("@getRestaurants", { requestAnimationFrame: true });
      cy.wait(100);
      pagesdata.page7.forEach((ele, ind) => {
        if (true) {
          cy.get(`[data-testid="restaurant-card"]`)
            .eq(ind)
            .within(() => {
              cy.get("img").should("have.attr", "src", ele.image);
              cy.get("h2").should("have.text", `Name : ${ele.name}`);
              cy.get("p").eq(0).should("have.text", `Type : ${ele.type}`);
              cy.get("p").eq(1).should("have.text", `Rating : ${ele.rating}`);
              cy.get("p")
                .eq(2)
                .should(
                  "have.text",
                  `Number of votes : ${ele.number_of_votes}`
                );
              cy.get("p")
                .eq(3)
                .should(
                  "have.text",
                  `Price Starts From : $${ele.price_starts_from}`
                );
              cy.get("a").should(
                "have.attr",
                "href",
                `/edit-restaurant/${ele.id}`
              );
              cy.get(".chakra-button").should("contain", "DELETE");
            });
        }
        cy.then(() => {
          acc_score += 1;
        });
      });
    });
    it("Able to sort the data in descending order", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.visit(url);
      cy.wait("@getRestaurants", { requestAnimationFrame: true }).then(() => {
        cy.get("select").eq(0).should("be.visible");
        cy.get("select").eq(0).select("9");
      });
      cy.wait(100);
      cy.wait("@getRestaurants", { requestAnimationFrame: true }).then(() => {
        cy.get("select").eq(1).should("be.visible");
        cy.get("select").eq(1).should("have.value", "rating");
        cy.get("select").eq(2).should("exist");
        cy.get(`select`).eq(2).select(`Descending`);
      });
      cy.wait(100);
      cy.wait("@getRestaurants", { requestAnimationFrame: true }).then(() => {
        cy.get("select").eq(2).should("be.visible");
        cy.get("select").eq(2).should("have.value", "desc");
        dataInDescendingOrderRating.forEach((ele, ind) => {
          if (ind % 3 === 0) {
            cy.get(`[data-testid="restaurant-card"]`)
              .eq(ind)
              .within(() => {
                cy.get("img").should("have.attr", "src", ele.image);
                cy.get("h2").should("have.text", `Name : ${ele.name}`);
                cy.get("p").eq(0).should("have.text", `Type : ${ele.type}`);
                cy.get("p").eq(1).should("have.text", `Rating : ${ele.rating}`);
                cy.get("p")
                  .eq(2)
                  .should(
                    "have.text",
                    `Number of votes : ${ele.number_of_votes}`
                  );
                cy.get("p")
                  .eq(3)
                  .should(
                    "have.text",
                    `Price Starts From : $${ele.price_starts_from}`
                  );
                cy.get("a").should(
                  "have.attr",
                  "href",
                  `/edit-restaurant/${ele.id}`
                );
                cy.get(".chakra-button").should("contain", "DELETE");
              });
          }
        });

        cy.get("select").eq(1).should("be.visible");
        cy.get("select").eq(1).select("Price Starts From");
        cy.wait("@getRestaurants", { requestAnimationFrame: true });

        cy.wait(1000);

        price_starts_from_desc.forEach((ele, ind) => {
          if (ind % 3 === 0) {
            cy.get(`[data-testid="restaurant-card"]`)
              .eq(ind)
              .within(() => {
                cy.get("img").should("have.attr", "src", ele.image);
                cy.get("h2").should("have.text", `Name : ${ele.name}`);
                cy.get("p").eq(0).should("have.text", `Type : ${ele.type}`);
                cy.get("p").eq(1).should("have.text", `Rating : ${ele.rating}`);
                cy.get("p")
                  .eq(2)
                  .should(
                    "have.text",
                    `Number of votes : ${ele.number_of_votes}`
                  );
                cy.get("p")
                  .eq(3)
                  .should(
                    "have.text",
                    `Price Starts From : $${ele.price_starts_from}`
                  );
                cy.get("a").should(
                  "have.attr",
                  "href",
                  `/edit-restaurant/${ele.id}`
                );
                cy.get(".chakra-button").should("contain", "DELETE");
              });
          }
        });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Able to sort the data in ascending order", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.visit(url);

      cy.wait("@getRestaurants", { requestAnimationFrame: true }).then(() => {
        cy.get("select").eq(0).should("be.visible").select("9");
        cy.wait("@getRestaurants", { requestAnimationFrame: true }).then(() => {
          cy.wait(1000);
          cy.get("select").eq(1).should("be.visible");
          cy.get("select").eq(1).select("Price Starts From");

          // Add a guard to wait for the select element to stabilize in the DOM
          cy.get("select").eq(2).should("be.visible");
          cy.get("select")
            .eq(2)
            .then(($select) => {
              // Re-query for the select element before interacting with it
              cy.wait(100);
              cy.get("select").eq(2).select("Ascending");
            });
          cy.wait("@getRestaurants", { requestAnimationFrame: true }).then(
            () => {
              cy.get("select").eq(2).should("be.visible");
              cy.wait(100);
              cy.get("select").eq(2).should("have.value", "asc");

              // Rest of your test assertions...
              cy.wait(100);
              price_starts_from_asc.forEach((ele, ind) => {
                if (ind % 3 === 0) {
                  cy.get(`[data-testid="restaurant-card"]`)
                    .eq(ind)
                    .within(() => {
                      cy.get("img").should("have.attr", "src", ele.image);
                      cy.get("h2").should("have.text", `Name : ${ele.name}`);
                      cy.get("p")
                        .eq(0)
                        .should("have.text", `Type : ${ele.type}`);
                      cy.get("p")
                        .eq(1)
                        .should("have.text", `Rating : ${ele.rating}`);
                      cy.get("p")
                        .eq(2)
                        .should(
                          "have.text",
                          `Number of votes : ${ele.number_of_votes}`
                        );
                      cy.get("p")
                        .eq(3)
                        .should(
                          "have.text",
                          `Price Starts From : $${ele.price_starts_from}`
                        );
                      cy.get("a").should(
                        "have.attr",
                        "href",
                        `/edit-restaurant/${ele.id}`
                      );
                      cy.get(".chakra-button").should("contain.text", "DELETE");
                    });
                }
              });
              cy.get("select").eq(1).should("be.visible");
              cy.get("select").eq(1).select("rating");

              cy.wait("@getRestaurants", { requestAnimationFrame: true }).then(
                () => {
                  cy.get("select").eq(2).should("be.visible");
                  cy.wait(100);
                  cy.get("select").eq(2).should("have.value", "asc");
                  cy.wait(100);
                  ratingAsc.forEach((ele, ind) => {
                    if (ind % 3 === 0) {
                      cy.get(`[data-testid="restaurant-card"]`)
                        .eq(ind)
                        .within(() => {
                          cy.get("img").should("have.attr", "src", ele.image);
                          cy.get("h2").should(
                            "have.text",
                            `Name : ${ele.name}`
                          );
                          cy.get("p")
                            .eq(0)
                            .should("have.text", `Type : ${ele.type}`);
                          cy.get("p")
                            .eq(1)
                            .should("have.text", `Rating : ${ele.rating}`);
                          cy.get("p")
                            .eq(2)
                            .should(
                              "have.text",
                              `Number of votes : ${ele.number_of_votes}`
                            );
                          cy.get("p")
                            .eq(3)
                            .should(
                              "have.text",
                              `Price Starts From : $${ele.price_starts_from}`
                            );
                          cy.get("a").should(
                            "have.attr",
                            "href",
                            `/edit-restaurant/${ele.id}`
                          );
                          cy.get("button").should("contain.text", "DELETE");
                        });
                    }
                  });
                }
              );
            }
          );
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Able to populate the restaurant details on the edit page(EditRestaurant.jsx:)", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.intercept("GET", "**/restaurants/3").as("getsingleRestaurants");
      cy.visit(url);
      cy.wait("@getRestaurants");
      cy.get(`[data-testid="restaurant-card"]`).should("have.length", 3);
      cy.get(`[data-testid="restaurant-card"]`)
        .last()
        .children()
        .find(`a`)
        .should("have.text", `EDIT`)
        .click({ force: true });
      cy.url().should(
        "contain",
        `edit-restaurant/${page1data[page1data.length - 1].id}`
      );
      cy.wait("@getsingleRestaurants");
      // Check the input values
      cy.get('input[name="name"]').should(
        "have.value",
        page1data[page1data.length - 1].name
      );
      cy.get('select[name="type"]').should(
        "have.value",
        page1data[page1data.length - 1].type
      );
      cy.get('input[name="rating"]').should(
        "have.value",
        page1data[page1data.length - 1].rating.toString()
      );
      cy.get('input[name="number_of_votes"]').should(
        "have.value",
        page1data[page1data.length - 1].number_of_votes.toString()
      );
      cy.get('input[name="price_starts_from"]').should(
        "have.value",
        page1data[page1data.length - 1].price_starts_from.toString()
      );
      cy.get('input[name="image"]').should(
        "have.value",
        page1data[page1data.length - 1].image
      );
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Able to edit the restaurant details and redirect to home page(/) after editing and data got updated on the DOM", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.intercept(
        "PUT",
        `**/restaurants/${page1data[page1data.length - 1].id}`
      ).as("putRestaurants");
      cy.intercept(
        "GET",
        `**/restaurants/${page1data[page1data.length - 1].id}`
      ).as("getsingleRestaurants");
      cy.visit(url);
      cy.wait("@getRestaurants");
      cy.get(`[data-testid="restaurant-card"]`).should("have.length", 3);
      cy.get(`[data-testid="restaurant-card"]`)
        .last()
        .children()
        .find(`a`)
        .should("have.text", `EDIT`)
        .click({ force: true });
      cy.url().should(
        "contain",
        `edit-restaurant/${page1data[page1data.length - 1].id}`
      );
      cy.wait("@getsingleRestaurants");
      // Check the input values
      let newData = {
        name: "Taj",
        rating: 10,
        number_of_votes: 1234,
        price_starts_from: 1000,
      };
      cy.get('input[name="name"]')
        .should("have.value", page1data[page1data.length - 1].name)
        .clear()
        .type("Taj");
      cy.get('input[name="rating"]').should(
        "have.value",
        page1data[page1data.length - 1].rating.toString()
      );
      cy.get('input[name="number_of_votes"]')
        .should(
          "have.value",
          page1data[page1data.length - 1].number_of_votes.toString()
        )
        .clear()
        .type("1234");
      cy.get('input[name="price_starts_from"]')
        .should(
          "have.value",
          page1data[page1data.length - 1].price_starts_from.toString()
        )
        .clear()
        .type(1000);
      cy.get("form").submit();
      cy.wait("@putRestaurants");
      cy.url().should(
        "not.contain",
        `edit-restaurant/${page1data[page1data.length - 1].id}`
      );
      cy.wait("@getRestaurants");
      cy.get(`[data-testid="restaurant-card"]`)
        .eq(2)
        .within(() => {
          cy.get("img").should(
            "have.attr",
            "src",
            page1data[page1data.length - 1].image
          );
          cy.get("h2").should("have.text", `Name : ${newData.name}`);
          cy.get("p")
            .eq(0)
            .should(
              "have.text",
              `Type : ${page1data[page1data.length - 1].type}`
            );
          cy.get("p")
            .eq(1)
            .should(
              "have.text",
              `Rating : ${page1data[page1data.length - 1].rating}`
            );
          cy.get("p")
            .eq(2)
            .should(
              "have.text",
              `Number of votes : ${newData.number_of_votes}`
            );
          cy.get("p")
            .eq(3)
            .should(
              "have.text",
              `Price Starts From : $${newData.price_starts_from}`
            );
          cy.get("a").should(
            "have.attr",
            "href",
            `/edit-restaurant/${page1data[page1data.length - 1].id}`
          );
          cy.get("button").should("contain.text", "DELETE");
        });

      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Able to delete the restaurant", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.intercept(
        "DELETE",
        `**/restaurants/${page1data[page1data.length - 2].id}`
      ).as("deleteSingleRestaurants");
      cy.visit(url);
      cy.wait("@getRestaurants");
      cy.get(`[data-testid="restaurant-card"]`)
        .eq(1)
        .within(() => {
          cy.get("button").should("have.text", "DELETE").click({ force: true });
        });
      cy.wait("@deleteSingleRestaurants");
      cy.wait("@getRestaurants");
      cy.wait(1000)
      cy.get(`[data-testid="restaurant-card"]`).should(
        "have.length",
        afterDelete2card.length
      );
      afterDelete2card.forEach((ele, ind) => {
        cy.get(`[data-testid="restaurant-card"]`)
          .eq(ind)
          .within(() => {
            cy.get("img").should("have.attr", "src", ele.image);
            cy.get("h2").should("have.text", `Name : ${ele.name}`);
            cy.get("p").eq(0).should("have.text", `Type : ${ele.type}`);
            cy.get("p").eq(1).should("have.text", `Rating : ${ele.rating}`);
            cy.get("p")
              .eq(2)
              .should("have.text", `Number of votes : ${ele.number_of_votes}`);
            cy.get("p")
              .eq(3)
              .should(
                "have.text",
                `Price Starts From : $${ele.price_starts_from}`
              );
            cy.get("a").should(
              "have.attr",
              "href",
              `/edit-restaurant/${ele.id}`
            );
            cy.get(".chakra-button").should("contain.text", "DELETE");
          });
      });
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("Able to add new restaurant", () => {
      cy.intercept("GET", "**/restaurants?**").as("getRestaurants");
      cy.intercept("POST", `**/restaurants`).as("postRestaurant");
      cy.visit(url);
      cy.wait("@getRestaurants");
      cy.get(`[data-testid="navbar"] a`)
        .last()
        .should("have.text", "Add Restaurant")
        .click({ force: true });
      cy.url().should("contain", `/add-restaurant`);
      cy.get('input[name="name"]').type("New Restaurant");
      cy.get('select[name="type"]').select("cafe");
      cy.get('input[name="rating"]').type("1");
      cy.get('input[name="number_of_votes"]').type("100");
      cy.get('input[name="price_starts_from"]').type("10");
      cy.get('input[name="image"]').type("https://picsum.photos/200");
      cy.get(`form`).submit();
      cy.wait("@postRestaurant");
      cy.url().should("not.contain", `/add-restaurant`);
      cy.get(`[data-testid="restaurant-card"]`)
        .first()
        .within(() => {
          cy.get("img").should("have.attr", "src", "https://picsum.photos/200");
          cy.get("h2").should("contain", "New Restaurant");
          cy.get("p").eq(0).should("contain", "cafe");
          cy.get("p").eq(1).should("contain", "1");
          cy.get("p").eq(2).should("contain", "100");
          cy.get("p").eq(3).should("contain", "10");
          cy.get(".chakra-button").should("contain.text", "DELETE");
        });
      cy.then(() => {
        acc_score += 1;
      });
    });
    it("On the home page loading in h1 tag should exist between req and res from json server", () => {
      cy.intercept("GET", "**/restaurants?**", (req, res) => {
        req.reply((res) => {
          res.delay = 2000;
        });
      }).as("getRestaurants");
      cy.intercept("POST", `**/restaurants`).as("postRestaurant");
      cy.visit(url);
      cy.get("h1").should("contain", "Loading...");
      cy.get(`[data-testid="restaurant-card"]`).should("not.exist");
      cy.wait("@getRestaurants");
      cy.get(`[data-testid="restaurant-card"]`).should("exist");
      cy.get("h1").should("not.exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Displays 'Something went wrong...' in h1 on getting an error", () => {
      cy.intercept("GET", "**/restaurants?**", (req) => {
        req.reply({
          statusCode: 500,
          body: "Internal Server Error",
        });
      }).as("getRestaurants");

      cy.visit(url);

      cy.get("h1").should("contain", "Something went wrong...");
      cy.get("h1").should("not.contain", "Loading...");
      cy.then(() => {
        acc_score += 1;
      });
    });

    after(() => {
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
