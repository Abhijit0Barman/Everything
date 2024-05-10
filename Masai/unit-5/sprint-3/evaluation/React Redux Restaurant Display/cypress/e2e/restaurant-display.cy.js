import data from "../../submissionData.json";

import page1 from "../fixtures/page1.json";
import page5 from "../fixtures/page5.json";
import page12 from "../fixtures/page12.json";

// const data = [{ submission_link: "http://localhost:3000", id: "shantilal" }];

data.forEach(({ submission_link: url, id }) => {
  describe("book store", () => {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);

      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });

      cy.window().its("store").should("exist");

      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Should have application title visible`, () => {
      cy.get(".navbar")
        .within(() => {
          cy.get("h1").should("contain", "React Redux Restaurant Display App");
        })

        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check Initial Redux Store Structure for Restaurants`, () => {
      cy.window()
        .then((getRestaurants) => {
          return getRestaurants.store.getState();
        })
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          restaurants: [],
          totalPages: 0,
          restaurant: {},
        })

        .then(() => {
          acc_score += 1;
        });
    });

    it(`Get request should be made for restaurants when the home page loads`, () => {
      cy.url().should("eq", url);
      cy.visit(url);

      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");

      cy.wait("@getRestaurants").should((res) => {
        expect(res.status, "successful GET").to.equal(200);
        expect(res.url, "get url").to.contain("getrestaurants");
        expect(res.url, "get url").to.contain("page=1");
        expect(res.url, "get url").to.contain("limit=9");
      });

      cy.get("@getRestaurants")
        .its("response.body.data")
        .should("have.length", 9);

      cy.get("@getRestaurants")
        .its("response.body.totalPages")
        .should("eq", 12);

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Restaurants state in store should update when restaurants load on homepage`, () => {
      cy.url().should("eq", url);

      cy.visit(url);
      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");

      cy.window()
        .then((getRestaurants) => {
          return getRestaurants.store.getState();
        })
        .its("restaurants")
        .should("have.length", 0);

      cy.wait("@getRestaurants");
      cy.wait(1000);

      cy.window()
        .then((getRestaurants) => {
          return getRestaurants.store.getState();
        })
        .its("restaurants")
        .should("have.length", 9);

      cy.window()
        .then((getRestaurants) => {
          return getRestaurants.store.getState();
        })
        .its("totalPages")
        .should("eq", 12);

      cy.then(() => (acc_score += 2));
    });

    it(`Loading indicator should be there while homepage data is loading`, () => {
      cy.intercept("GET", "**/getrestaurants?**", (req) => {
        req.reply((res) => {
          res.delay = 2000;
          return res;
        });
      }).as("getRestaurants");

      cy.visit(url);

      cy.get(".restaurants_wrapper").should("not.exist");

      cy.get(".loading_indicator")
        .should("exist")
        .and("have.text", "Loading...");

      cy.wait("@getRestaurants");

      cy.get(".restaurants_wrapper").should("exist");

      cy.then(() => (acc_score += 1));
    });

    it(`All restaurants should be displayed on the home page`, () => {
      cy.visit(url);

      cy.get(".loading_indicator").should("not.exist");

      cy.get(".restaurants_wrapper").children().should("have.length", 9);

      cy.get(".restaurant_card").should("have.length", 9);

      cy.get(".restaurant_card").each((child, index) => {
        cy.get(".image").should("have.attr", "src", page1[index].image);
        cy.wrap(child).find(".name").should("contain", page1[index].name);
        cy.wrap(child).find(".type").should("contain", page1[index].type);
        cy.wrap(child)
          .find(".votes")
          .should("contain", page1[index].number_of_votes);
        cy.wrap(child)
          .find(".price")
          .should("contain", page1[index].price_starts_from);
        cy.wrap(child).find(".rating").should("contain", page1[index].rating);
      });

      cy.then(() => (acc_score += 2));
    });

    it(`All pagination buttons should be displayed on the home page`, () => {
      cy.visit(url);

      cy.get(".pagination_wrapper").children().should("have.length", 12);

      cy.then(() => (acc_score += 1));
    });

    it(`Current button should be disabled for current page`, () => {
      cy.visit(url);

      cy.get(".pagination_wrapper").children().should("have.length", 12);

      cy.get(".pagination_wrapper")
        .children()
        .eq(0)
        .should("be.disabled")
        .and("have.css", "backgroundColor", "rgb(255, 0, 0)");

      cy.get(".pagination_wrapper").children().eq(3).click();

      cy.get(".pagination_wrapper")
        .children()
        .eq(3)
        .should("be.disabled")
        .and("have.css", "backgroundColor", "rgb(255, 0, 0)");

      cy.get(".pagination_wrapper").children().eq(6).click();

      cy.get(".pagination_wrapper")
        .children()
        .eq(6)
        .should("be.disabled")
        .and("have.css", "backgroundColor", "rgb(255, 0, 0)");

      cy.then(() => (acc_score += 1));
    });

    it(`All restaurants should be displayed on the home page for 5th page`, () => {
      cy.url().should("eq", url);

      cy.visit(url);

      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");

      cy.wait("@getRestaurants");

      cy.get(".pagination_wrapper").children().eq(4).click();

      cy.wait("@getRestaurants").should((res) => {
        expect(res.status, "successful GET").to.equal(200);
        expect(res.url, "get url").to.contain("getrestaurants");
        expect(res.url, "get url").to.contain("page=5");
        expect(res.url, "get url").to.contain("limit=9");
      });

      cy.get(".restaurants_wrapper").children().should("have.length", 9);

      cy.get(".restaurant_card").should("have.length", 9);

      cy.get(".restaurant_card").each((child, index) => {
        cy.get(".image").should("have.attr", "src", page5[index].image);
        cy.wrap(child).find(".name").should("contain", page5[index].name);
        cy.wrap(child).find(".type").should("contain", page5[index].type);
        cy.wrap(child)
          .find(".votes")
          .should("contain", page5[index].number_of_votes);
        cy.wrap(child)
          .find(".price")
          .should("contain", page5[index].price_starts_from);
        cy.wrap(child).find(".rating").should("contain", page5[index].rating);
      });

      cy.then(() => (acc_score += 1));
    });

    it(`All restaurants should be displayed on the home page for last page`, () => {
      cy.url().should("eq", url);

      cy.visit(url);
      cy.server();
      cy.route("GET", "**/getrestaurants?**").as("getRestaurants");

      cy.wait("@getRestaurants");

      cy.get(".pagination_wrapper").children().last().click();

      cy.wait("@getRestaurants").should((res) => {
        expect(res.status, "successful GET").to.equal(200);
        expect(res.url, "get url").to.contain("getrestaurants");
        expect(res.url, "get url").to.contain("page=12");
        expect(res.url, "get url").to.contain("limit=9");
      });

      cy.get(".restaurants_wrapper").children().should("have.length", 1);

      cy.get(".restaurant_card").should("have.length", 1);

      cy.get(".restaurant_card").each((child, index) => {
        cy.get(".image").should("have.attr", "src", page12[index].image);
        cy.wrap(child).find(".name").should("contain", page12[index].name);
        cy.wrap(child).find(".type").should("contain", page12[index].type);
        cy.wrap(child)
          .find(".votes")
          .should("contain", page12[index].number_of_votes);
        cy.wrap(child)
          .find(".price")
          .should("contain", page12[index].price_starts_from);
        cy.wrap(child).find(".rating").should("contain", page12[index].rating);
      });

      cy.then(() => (acc_score += 1));
    });

    it("Check 1 for /restaurant/:id (dynamic route) if it working fine", () => {
      cy.intercept("GET", "**/getrestaurants/*").as("getSingleRestaurant");

      cy.visit(url);

      cy.wait(1000);

      cy.get(".restaurants_wrapper").should("exist").children().first().click();

      cy.url().should("eq", url + "restaurant/1");

      cy.wait("@getSingleRestaurant");

      cy.window()
        .then((getRestaurants) => {
          return getRestaurants.store.getState();
        })
        .then((res) => {
          expect(res.restaurant).to.deep.equal({
            id: 1,
            name: "Shute",
            type: "fine_dining",
            rating: 4.5,
            number_of_votes: 588,
            price_starts_from: 925,
            image: "https://picsum.photos/200",
          });
        });

      cy.get(".restaurant_single_card").within(() => {
        cy.get(".image").should("have.attr", "src", page1[0].image);
        cy.get(".name").should("contain", page1[0].name);
        cy.get(".type").should("contain", page1[0].type);
        cy.get(".votes").should("contain", page1[0].number_of_votes);
        cy.get(".price").should("contain", page1[0].price_starts_from);
        cy.get(".rating").should("contain", page1[0].rating);
      });

      cy.then(() => (acc_score += 1));
    });

    it("Check 2 for /restaurant/:id (dynamic route) if it working fine ", () => {
      cy.intercept("GET", "**/getrestaurants/*").as("getSingleRestaurant");

      cy.visit(url);

      cy.wait(1000);
      cy.get(".restaurants_wrapper").should("exist").children().eq(5).click();

      cy.url().should("eq", url + "restaurant/6");

      cy.wait("@getSingleRestaurant");

      cy.window()
        .then((getRestaurants) => {
          return getRestaurants.store.getState();
        })
        .then((res) => {
          expect(res.restaurant).to.deep.equal({
            id: 6,
            name: "Tidder",
            type: "cafe",
            rating: 1.5,
            number_of_votes: 561,
            price_starts_from: 400,
            image: "https://picsum.photos/200",
          });
        });

      cy.get(".restaurant_single_card").within(() => {
        cy.get(".image").should("have.attr", "src", page1[5].image);
        cy.get(".name").should("contain", page1[5].name);
        cy.get(".type").should("contain", page1[5].type);
        cy.get(".votes").should("contain", page1[5].number_of_votes);
        cy.get(".price").should("contain", page1[5].price_starts_from);
        cy.get(".rating").should("contain", page1[5].rating);
      });

      cy.then(() => (acc_score += 1));
    });

    it("On booking a restaurant a success message should show", () => {
      cy.intercept("GET", "**/getrestaurants/*").as("getSingleRestaurant");
      cy.visit(url);
      cy.wait(1000);

      cy.get(".restaurants_wrapper").should("exist").children().eq(2).click();

      cy.url().should("eq", url + "restaurant/3");

      cy.get(".success_msg").should("not.exist");
      cy.get(".go_back").should("not.exist");

      cy.wait("@getSingleRestaurant");

      cy.get(".book_now_btn").should("exist").click();

      cy.get(".success_msg").should(
        "have.text",
        "Restaurant Booked Successfully !!"
      );

      cy.get(".book_now_btn").should("not.exist");

      cy.get(".go_back").should("exist").and("have.attr", "href", "/");

      cy.then(() => (acc_score += 2));
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
    });
  });
});
