import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];

const getAuth = (win) => win.store.getState().AuthReducer;
const getWatches = (win) => win.store.getState().AppReducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Evaluation RCT-211-B120-E2", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.visit(url);
      cy.window().its("store").should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`Check Initial Redux Store Structure`, () => {
      cy.window()
        .then(getWatches)
        .should("deep.equal", {
          watches: [],
          isLoading: false,
          isError: false,
        })
        .then(() => {
          acc_score += 1;
        });
      cy.window()
        .then(getAuth)
        .should("deep.equal", {
          isLoading: false,
          isError: false,
          isAuth: false,
          token: "",
        })
        .then(() => {
          acc_score += 1;
        });
    });

    it(`Check if proper GET request and response is made`, () => {
      cy.url().should("eq", url);
      cy.server();
      cy.route("GET", "/watches").as("watches");
      cy.wait("@watches").should((xhr) => {
        expect(xhr.status, "successful GET").to.equal(200);
        expect(xhr.url, "get url").to.match(/\/watches$/);
      });
      cy.get("@watches").its("response.body").should("have.length", 15);
      cy.then(() => (acc_score += 1));
    });

    it(`Check if the number of cards displayed is 15`, () => {
      cy.intercept("GET", "**/watches").as("watches");
      cy.wait("@watches");
      cy.get("[data-testid^=watch-card-wrapper]").should("have.length", 15);
      cy.then(() => (acc_score += 1));
    });

    it(`Check if the Card component contains all the required information`, () => {
      cy.request("GET", `${server_url}/watches`).then(({ body }) => {
        body.forEach((singleWatch) => {
          cy.get(`[data-testid='watch-card-wrapper-${singleWatch.id}']`).within(
            () => {
              cy.get("[data-testid=watch-name]").contains(singleWatch.name);
              cy.get("[data-testid=watch-card-image]")
                .should("have.attr", "src")
                .should("include", singleWatch.image);
            }
          );
        });
      });
      cy.then(() => (acc_score += 2));
    });

    it(`Check if the user is redirected to login page before visiting /watch/1, without authentication`, () => {
      cy.window().then(getAuth).its("isAuth").should("equal", false);
      cy.window().then(getAuth).its("token").should("equal", "");

      cy.visit(`${url}watches/1`).then(() => {
        cy.location("pathname").should("match", /\/login$/);
      });

      cy.intercept("POST", "**/api/login").as("login");

      cy.get("[data-testid=login-email]").clear().type("eve.holt@reqres.in");
      cy.get("[data-testid=login-password]").clear().type("cityslicka");
      cy.get("[data-testid=login-submit]").click();

      cy.wait(["@login"]);

      cy.url().should("eq", `${url}watches/1`);

      cy.then(() => (acc_score += 2));
    });

    it(`Check if Filters are working with updating single data`, () => {
      cy.get('[type="checkbox"]')
        .check("Analog")
        .then(() => {
          cy.url().should("eq", `${url}?category=Analog`);
          cy.get("[data-testid^=watch-card-wrapper]").should("have.length", 5);
        });

      cy.then(() => (acc_score += 2));
    });

    it(`Check if Filters are working with updating multiple data`, () => {
      cy.get('[type="checkbox"]')
        .check(["Analog", "Digital", "Chronograph"])
        .then(() => {
          cy.url().should(
            "eq",
            `${url}?category=Analog&category=Digital&category=Chronograph`
          );
          cy.get("[data-testid^=watch-card-wrapper]").should("have.length", 15);

          cy.get('[type="checkbox"]')
            .uncheck(["Analog", "Chronograph"])
            .then(() => {
              cy.url().should("eq", `${url}?category=Digital`);
              cy.get("[data-testid^=watch-card-wrapper]").should(
                "have.length",
                5
              );
            });
        });
      cy.then(() => (acc_score += 1));
    });

    it(
      `Check if the Filter search params are working with initial checks in URL`,
      () => {
        cy.visit(`${url}?category=Analog&category=Digital`).then(() => {
          cy.get("[data-testid=filter-category]")
            .find("[value='Analog']")
            .should("be.checked");
          cy.get("[data-testid=filter-category]")
            .find("[value='Digital']")
            .should("be.checked");
          cy.get("[data-testid^=watch-card-wrapper]").should("have.length", 10);
        });
        cy.then(() => {
          acc_score += 1;
        });
      }
    );

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
