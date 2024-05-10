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
      cy.visit(url);
      cy.get("#items_not_found_text").should("exist").contains("Add items / Result not found");;
      cy.get("#total_items").contains("0");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`Adding new item 1 `, () => {
      cy.visit(url + "newItem.html");
      cy.saveLocalStorage();
      cy.get("#new_title").clear().type("Britannia Jimjam Sandwich Biscuits");
      cy.get("#new_image_URL")
        .clear()
        .type(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkadAgMWBgpCjl4DE-KQMyVAUO41z-YtJlQ&usqp=CAU"
        );

      cy.get("#new_price").clear().type(30);
      cy.get("#new_quantity").clear().type("138 g");

      cy.get("#add_item").click();
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it(`Adding new item 2 `, () => {
      cy.visit(url + "newItem.html");
      cy.saveLocalStorage();
      cy.get("#new_title").clear().type("Parle Krack Jack Biscuits");
      cy.get("#new_image_URL")
        .clear()
        .type(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkadAgMWBgpCjl4DE-KQMyVAUO41z-YtJlQ&usqp=CAU"
        );
      cy.get("#new_price").clear().type(70);
      cy.get("#new_quantity").clear().type("400 g");

      cy.get("#add_item").click();
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it(" Check if data added to dom successfully", () => {
      cy.visit(url);
      cy.get("#items_container").children().should("have.length", 2);
      cy.get("#items_container")
        .children()
        .first()
        .find(".title")
        .contains("Britannia Jimjam Sandwich Biscuits");
      cy.get("#items_container").children().first().find(".price").contains(30);
      cy.get("#items_container")
        .children()
        .first()
        .find(".quantity")
        .contains("138 g");

      cy.get("#items_container")
        .children()
        .last()
        .find(".title")
        .contains("Parle Krack Jack Biscuits");
      cy.get("#items_container").children().last().find(".price").contains(70);
      cy.get("#items_container")
        .children()
        .last()
        .find(".quantity")
        .contains("400 g");

      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it(`Check if data added to local storage successfully`, () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("items"));
      expect(data.length).to.equal(2);

      expect(data[1].title).to.contains("Parle Krack Jack Biscuits");
      expect(data[1].price).to.contains(70);
      expect(data[1].quantity).to.contains("400 g");

      expect(data[0].title).to.contains("Britannia Jimjam Sandwich Biscuits");
      expect(data[0].price).to.contains(30);
      expect(data[0].quantity).to.contains("138 g");

      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check total items in the navbar should increase as a new item is added", () => {
      cy.visit(url);
      cy.get("#total_items").contains("2");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check if search functionality working on the title of the item", () => {
      cy.visit(url);
      cy.get("#items_container").children().should("have.length", 2);
      cy.get("#Search").clear().type("Biscuits");
      cy.get("#search_btn").click();
      cy.get("#items_container").children().should("have.length", 2);

      cy.get("#Search").clear().type("Parle");
      cy.get("#search_btn").click();
      cy.get("#items_container").children().should("have.length", 1);
      cy.get("#items_container")
        .children()
        .first()
        .find(".title")
        .contains("Parle Krack Jack Biscuits");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check delete functionality and dom updated after the item is deleted", () => {
      cy.visit(url);
      cy.get("#items_container").children().last().find(".delete_btn").click();
      // cy.get("#deleted").
      cy.get("#items_container").children().should("have.length", 1);
      cy.get("#total_items").contains("1");
      cy.get("#items_container")
        .children()
        .first()
        .find(".title")
        .contains("Britannia Jimjam Sandwich Biscuit");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it('Check if data in local storage  "items" and "deleted_items" are successfully updated after deleting item', () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("items"));
      expect(data.length).to.equal(1);

      expect(data[0].title).to.contains("Britannia Jimjam Sandwich Biscuits");
      expect(data[0].price).to.contains(30);
      expect(data[0].quantity).to.contains("138 g");

      let deleted_data = JSON.parse(localStorage.getItem("deleted_items"));
      expect(deleted_data.length).to.equal(1);

      expect(deleted_data[0].title).to.contains("Parle Krack Jack Biscuits");
      expect(deleted_data[0].price).to.contains(70);
      expect(deleted_data[0].quantity).to.contains("400 g");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it("Check if deleted page working expected", () => {
      cy.visit(url + "deleted.html");
      cy.get("#items_container").children().should("have.length", 1);
      cy.get("#items_container")
        .children()
        .first()
        .find(".title")
        .contains("Parle Krack Jack Biscuits");
      cy.get("#items_container").children().first().find(".price").contains(70);
      cy.get("#items_container")
        .children()
        .first()
        .find(".quantity")
        .contains("400 g");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check if the add again button working expected", () => {
      cy.visit(url + "deleted.html");
      cy.get("#items_container")
        .children()
        .first()
        .find(".addAgain_btn")
        .click();
      cy.get("#items_not_found_text")
        .should("exist")
        .contains("Add items / Result not found");
      cy.visit(url + "index.html");

      cy.get("#items_container").children().should("have.length", 2);
      cy.get("#items_container")
        .children()
        .first()
        .find(".title")
        .contains("Britannia Jimjam Sandwich Biscuits");
      cy.get("#items_container").children().first().find(".price").contains(30);
      cy.get("#items_container")
        .children()
        .first()
        .find(".quantity")
        .contains("138 g");

      cy.get("#items_container")
        .children()
        .last()
        .find(".title")
        .contains("Parle Krack Jack Biscuits");
      cy.get("#items_container").children().last().find(".price").contains(70);
      cy.get("#items_container")
        .children()
        .last()
        .find(".quantity")
        .contains("400 g");

      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it("Check if the local storage data of items updated successfully after addAgain", () => {
      let data = JSON.parse(localStorage.getItem("items"));
      expect(data.length).to.equal(2);
      let deleted_data = JSON.parse(localStorage.getItem("deleted_items"));
      expect(deleted_data.length).to.equal(0);
      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it("Check if the edit working as expected", () => {
      cy.visit(url);
      cy.get("#items_container").children().should("have.length", 2);
      cy.get("#items_container").children().first().find(".edit_btn").click();

      cy.get("#items_container")
        .children()
        .first()
        .find(".edit_price")
        .clear()
        .type(9919);

      cy.get("#items_container")
        .children()
        .first()
        .find(".edit_submit_btn")
        .click();

      cy.get("#items_container")
        .children()
        .first()
        .find(".price")
        .contains(9919);


      cy.get("#items_container").children().last().find(".edit_btn").click();

      cy.get("#items_container")
        .children()
        .last()
        .find(".edit_price")
        .clear()
        .type(450);

      cy.get("#items_container")
        .children()
        .last()
        .find(".edit_submit_btn")
        .click();

      cy.get("#items_container")
        .children()
        .last()
        .find(".price")
        .contains(450);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it("Check edit part updated in local Storage successfully", () => {
      cy.restoreLocalStorage();
      let data = JSON.parse(localStorage.getItem("items"));
      expect(data.length).to.equal(2);

      expect(data[0].price).to.contains(9919);
      expect(data[1].price).to.contains(450);

      cy.then(() => {
        acc_score += 1;
      });
    }); //1

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
