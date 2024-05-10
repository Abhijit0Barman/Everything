import data from "../../submissionData.json"; // do not create this file
//const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];

import sortAscData from "../fixtures/sortAsc.json"
import sortDescData from "../fixtures/sortDesc.json"
import usersList from "../fixtures/userslist.json";

describe("React app with sub-applications", () => {
  let acc_score = 1;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  data.forEach(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    //common components

    it("Button component used for creating buttons and should be styled as mentioned in the problem statement", () => {
      cy.visit(url);
      cy.get("button")
        .should("have.length", 7 + usersList.length)
        .each((button, ind) => {
          cy.get("button")
            .eq(ind)
            .invoke("attr", "data-testid")
            .then((idname) => {
              expect(idname).to.include("common-button");
            });
          cy.get("button")
            .eq(ind)
            .invoke("attr", "class")
            .then((className) => {
              expect(className).to.include("Button_button__");
            });
        });
      cy.then(() => {
        acc_score += 2;
      });
    });
    it("Container component is used for wrapping the required components and should be styled as mentioned in the problem statement", () => {
      cy.visit(url);
      cy.get(`[data-testid="common-container"]`)
        .should("have.length", 3)
        .each((container, ind) => {
          cy.get(`[data-testid="common-container"]`)
            .eq(ind)
            .invoke("attr", "class")
            .then((className) => {
              expect(className).to.include("Container_container__");
            });
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    //counter application
    it(`Counter by default having 3 buttons and displaying correct initial value`, () => {
      cy.visit(url);
      cy.get("h1").eq(0).should("contain", 0);
      let arr = ["INC", "DEC", "RESET"];
      for (let ind = 0; ind < 3; ind++) {
        cy.get("button")
          .eq(ind)
          .should("contain", arr[ind])
          .invoke("attr", "data-testid")
          .then((idname) => {
            expect(idname).to.include("common-button");
          });
      }
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Counter INC buttons are working and also values are updated on DOM and the buttons are disabled accordingly", () => {
      cy.visit(url);
      cy.get("h1").eq(0).should("contain", 0);
      cy.get("button").eq(0).should("not.be.disabled");
      cy.get("button").eq(1).should("be.disabled");
      cy.get("button").eq(2).should("be.disabled");
      for (let i = 0; i < 15; i++) {
        if (i < 9) {
          cy.get("button")
            .eq(0)
            .click({ force: true })
            .should("not.be.disabled");
          cy.wait(10)
          cy.get("h1")
            .eq(0)
            .should("contain", i + 1);
          cy.get("button").eq(1).should("not.be.disabled");
          cy.get("button").eq(1).should("not.be.disabled");
        } else if (i == 9) {
          cy.get("button").eq(0).click({ force: true }).should("be.disabled");
          cy.wait(10)
          cy.get("h1")
            .eq(0)
            .should("contain", i + 1);
        } else {
          cy.get("button").eq(0).should("be.disabled");
          cy.get("h1").eq(0).should("contain", 10);
        }
      }

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Counter decrement and reset buttons are working", () => {
      cy.visit(url);
      cy.get("h1").eq(0).should("contain", 0);
      cy.get("button").eq(0).should("not.be.disabled");
      cy.get("button").eq(1).should("be.disabled");
      cy.get("button").eq(2).should("be.disabled");
      //increment
      for (let i = 0; i < 5; i++) {
        cy.get("button").eq(0).click({ force: true }).should("not.be.disabled");
        cy.wait(10)
        cy.get("h1")
          .eq(0)
          .should("contain", i + 1);
        cy.get("button").eq(1).should("not.be.disabled");
        cy.get("button").eq(1).should("not.be.disabled");
      }
      let count = 5;
      //decrement
      for (let i = 1; i <= 3; i++) {
        cy.get("button").eq(1).click({ force: true }).should("not.be.disabled");
        cy.wait(10)
        cy.get("h1")
          .eq(0)
          .should("contain", count - i);
        cy.get("button").eq(2).should("not.be.disabled");
        cy.get("button").eq(0).should("not.be.disabled");
      }
      cy.then(() => {
        cy.get("button").eq(2).click({ force: true });
        cy.wait(10)
        cy.get("h1").eq(0).should("contain", 0);
      });
      cy.get("button").eq(2).should("be.disabled")
      cy.then(() => {
        acc_score += 2;
      });
    });


    //todo applications.
    it("Todo sub application has a basic structure and all the elements of this are wrapped inside the Container",()=>{
      cy.visit(url);
      cy.get(`[data-testid="common-container"]:nth-child(2) h1`).should("contain","Todo List")
      cy.get(`[data-testid="common-container"]:nth-child(2) input`).should("exist")
      cy.get(`[data-testid="common-container"]:nth-child(2) button`).eq(0)
            .invoke("attr", "class")
            .then((className) => {
              expect(className).to.include("Button_button__");
            })
      cy.get(`[data-testid="common-container"]:nth-child(2) button`).should('contain',"ADD");
      cy.then(() => {
        acc_score += 2;
      })
    })

    it("Able to add TODO and get updates on DOM in real time and toggle the status",()=>{
      cy.visit(url)      
      cy.get(`[data-testid="common-container"]:nth-child(2) h1`).should("contain","Todo List")
      cy.get(`[data-testid="common-container"]:nth-child(2) input`).should("exist").clear().type('todo input 1');
      cy.get(`[data-testid="common-container"]:nth-child(2) button`).should('contain',"ADD").click({force:true}) 
      cy.get(`[ data-testid="todo-item"]`).should("have.length",1)
      cy.get(`[ data-testid="todo-item"]`).invoke("attr","class").then((className)=>{
        expect(className).to.include("TodoItem_wrapper__")})
        cy.get(`[ data-testid="todo-item"] p`).should("contain","todo input 1")
        cy.get(`[ data-testid="todo-item"] p`).should("contain","Not Completed")
        cy.get(`[ data-testid="todo-item"] button`).eq(0).should('contain',"TOGGLE").should("be.visible").click({force:true});
        cy.get(`[ data-testid="todo-item"] p`).should("contain","Completed")
        cy.get(`[ data-testid="todo-item"] button`).eq(0).should("be.visible").should('contain',"TOGGLE").click({force:true});
        cy.get(`[ data-testid="todo-item"] p`).should("contain","Not Completed")
        cy.get(`[ data-testid="todo-item"] button`).eq(0)
        .invoke("attr", "class")
        .then((className) => {
          expect(className).to.include("Button_button__");
        })
        cy.get(`[ data-testid="todo-item"] button`).eq(1)
        .invoke("attr", "class")
        .then((className) => {
          expect(className).to.include("Button_button__");
        })
        cy.then(() => {          
        acc_score += 2;
      })
    })

    it("Should be able to add multiple todos and able to delete the todo",()=>{
      cy.visit(url)   
      cy.get(`[data-testid="common-container"]:nth-child(2) input`).should("exist").clear().type('todo input 1');
      cy.get(`[data-testid="common-container"]:nth-child(2) button`).eq(0).should('contain',"ADD").click({force:true});
      cy.get(`[ data-testid="todo-item"] p`).eq(0).should("contain","todo input 1")
      cy.get(`[data-testid="common-container"]:nth-child(2) input`).should("exist").clear().type('todo input 2');
      cy.get(`[data-testid="common-container"]:nth-child(2) button`).eq(0).should('contain',"ADD").click({force:true}) ;
      cy.get(`[ data-testid="todo-item"] p`).eq(1).should("contain","todo input 2")
      cy.get(`[data-testid="common-container"]:nth-child(2) input`).should("exist").clear().type('todo input 3');
      cy.get(`[data-testid="common-container"]:nth-child(2) button`).eq(0).should('contain',"ADD").click({force:true});
      cy.get(`[ data-testid="todo-item"] p`).eq(2).should("contain","todo input 3")
      cy.get(`[ data-testid="todo-item"] button`).eq(0)
      .invoke("attr", "class")
      .then((className) => {
        expect(className).to.include("Button_button__");
      })
      cy.get(`[ data-testid="todo-item"] button`).eq(1)
      .invoke("attr", "class")
      .then((className) => {
        expect(className).to.include("Button_button__");
      })
      cy.get(`[data-testid="todo-item"]`).should("have.length",3);
      cy.get(`[ data-testid="todo-item"] button`).last().click({force:true})     
      cy.get(`[data-testid="todo-item"]`).should("have.length",2);
      cy.get(`[ data-testid="todo-item"] p`).eq(0).should("contain","todo input 1");
      cy.get(`[ data-testid="todo-item"] p`).eq(1).should("contain","todo input 2");
      cy.get(`[ data-testid="todo-item"] button`).last().click({force:true})
      cy.get(`[ data-testid="todo-item"] button`).last().click({force:true})
      cy.get(`[data-testid="todo-item"]`).should("not.exist");
      
      cy.then(() => {
        acc_score += 2;
      })
    })

    //USERLIST
    it("Users list application should have the basic structure",()=>{
      cy.visit(url)
      cy.get(`[data-testid="common-container"] h1`).last().should("contain","Users List")
      cy.get(`[data-testid="users-app-buttons"] button`).should("have.length",3);
      [`Sort by asc`,`Sort by desc`,`Reset`].forEach((ele,ind)=>{
        cy.get(`[data-testid="users-app-buttons"] button`).eq(ind).should("contain",ele);
        cy.get(`[data-testid="users-app-buttons"] button`).eq(ind).invoke("attr", "data-testid")
        .then((idname) => {
          expect(idname).to.include("common-button");
        });
      })
      cy.then(() => {
        acc_score += 1;
      });
    })

    it("Users component is showing all the data as per the problem statement",()=>{
      cy.visit(url);
      cy.get(`h1`).last().should("contain","Users List")      
      usersList.forEach((ele,ind)=>{        
        cy.get('[data-testid="user-card"] img').eq(ind).should("have.attr","src",ele.avatar)
        cy.get('[data-testid="user-card"] [data-testid="user_name"]').eq(ind).should("contain",ele.name)
        cy.get('[data-testid="user-card"] [data-testid="user_address"]').eq(ind).should("contain",ele.address)
        cy.get('[data-testid="user-card"] [data-testid="user_posts"]').eq(ind).should("contain",ele.posts)
        cy.get('[data-testid="user-card"] [data-testid="user_followers"]').eq(ind).should("contain",ele.followers)      
        cy.get('[data-testid="is-married"]').eq(ind).should("contain",ele.isMarried?"Yes":"No")
      })    
      cy.then(() => {
        acc_score += 1;
      });  
    
    })
    it("Follow button on clicking showing alert with the correct message",()=>{
      cy.visit(url);
      var alerted = false;
      cy.on("window:alert", (msg) => (alerted = msg));     
      usersList.forEach((ele,ind)=>{
        cy.get('[data-testid="user-card"] button').eq(ind) .invoke("attr", "class")
        .then((className) => {
          expect(className).to.include("Button_button__");
        })
        cy.get('[data-testid="user-card"] button').eq(ind).should("be.visible").click({force:true}).then(()=>{
          expect(alerted).to.contain(`You are now following ${ele.name}`);
        })
      })
      cy.then(() => {
        acc_score += 2;
      });
    })

    it("Able to sort the userslist in ascending order",()=>{
      cy.visit(url);
      cy.get(`[data-testid="users-app-buttons"] button`).eq(0).should("contain",`Sort by asc`).click({force:true});
      cy.wait(1000)
      sortAscData.forEach((ele,ind)=>{
      cy.get(`[data-testid="user_followers"]`).eq(ind).should("contain",ele.followers)
      cy.get(`[data-testid="user_name"]`).eq(ind).should("contain",ele.name)
      })
      cy.then(() => {
        acc_score += 1;
      });

    })
    it("Able to sort the userslist in descending order",()=>{
      cy.visit(url);
      cy.get(`[data-testid="users-app-buttons"] button`).eq(1).should("contain",`Sort by desc`).click({force:true});
      cy.wait(1000)
      sortDescData.forEach((ele,ind)=>{
      cy.get(`[data-testid="user_followers"]`).eq(ind).should("contain",ele.followers)
      cy.get(`[data-testid="user_name"]`).eq(ind).should("contain",ele.name)
      })
      cy.then(() => {
        acc_score += 1;
      });

    })

    it("Able to reset the data in default order",()=>{
      cy.visit(url);
      cy.get(`[data-testid="users-app-buttons"] button`).eq(2).should("contain",`Reset`).click({force:true});
      cy.wait(1000)
      usersList.forEach((ele,ind)=>{
      cy.get(`[data-testid="user_followers"]`).eq(ind).should("contain",ele.followers)
      cy.get(`[data-testid="user_name"]`).eq(ind).should("contain",ele.name)
      })
      cy.then(() => {
        acc_score += 1;
      });
    })

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
