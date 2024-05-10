import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://127.0.0.1:5500/", id: 67890 }]
import "cypress-localstorage-commands";
// import { start, submitData } from "../../../data";


const Data = [
  {
    name: "Maker",
    position: "Senior EJB Developer",
    addDate: "2020-01-01",
    salary:45000,
    location: "United Kingdom",
    email:"eve.holt@reqres.in",
    type:"Part Time"
    },
    {
    name: "Coffeeroasters",
    position: "Senior Frontend Developer",
    addDate: "2020-01-01",
    salary:65000,
    location: "Singapore",
    email:"eve.holt@reqres.in",
    type:"Full Time"
    },
    {
    name: "Mastercraft",
    position: "App & Website Designer",
    addDate: "2020-01-01",
    salary:195000,
    location: "United States",
    email:"eve.holt@reqres.in",
    type:"Freelance"
    },
];

describe("Test", function () {
  let acc_score = 1;
  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {     

      function FormSubmit(data, score, LSLen) {
        cy.get("#name").clear().type(data.name);
        cy.get("#position").clear().type(data.position);
        cy.get("#addDate").clear().type(data.addDate);
        cy.get("#salary").clear().type(data.salary);
        cy.get("#location").clear().type(data.location);
        cy.get("#email").clear().type(data.email);
        cy.get("#type").select(data.type);
        cy.get("form")
          .submit()
          .should(() => {
            expect(JSON.parse(localStorage.getItem("job-list")).length).to.equal(
              LSLen
            );
          })
          .then(() => {
            acc_score += score;
          });
      }
    
      function CheckTable(data, score, index) {
        cy.get("tr").eq(index).contains("td", data.name);
        cy.get("tr").eq(index).contains("td", data.position);
        cy.get("tr").eq(index).contains("td", data.addDate);
        cy.get("tr").eq(index).contains("td", data.salary);
        cy.get("tr").eq(index).contains("td", data.location);
        cy.get("tr").eq(index).contains("td", data.email);
        cy.get("tr")
          .eq(index)
          .contains("td", data.type)
          .then(() => {
            acc_score += score;
          });
      }

      function navigation(text) {
        cy.get("#navbar").contains("a", text).click();
      }
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
    
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it("Form Submit is Working Fine", () => {
        cy.visit(url);
        FormSubmit(Data[0], 1, 1);
      }); // Score:- 1
      it("Check the Data after mutiple form submits", () => {
        FormSubmit(Data[1], 0.5, 2);
        FormSubmit(Data[2], 0.5, 3);
      }); // Score:- 1
      it("Check the jobList page's Table", () => {
        navigation("Job List");
        CheckTable(Data[0], 1 / 3, 1);
        CheckTable(Data[1], 1 / 3, 2);
        CheckTable(Data[2], 1 / 3, 3);
      }); // Score:- 1
      it("Check the total Table size", () => {
        cy.get("#job-count")
          .contains(3)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Check Filtering is Done", () => {
        // cy.get("select").select("Part Time");
        // CheckTable(Data[0], 0.5, 1);
        // cy.get("select").select("Full Time");
        // CheckTable(Data[1], 0.5, 1);
        cy.get("select").select("Freelance");
        CheckTable(Data[2], 0.5, 1);
        cy.get("select").select("");
        cy.get("tr")
          .should("have.length", 4)
          .then(() => {
            acc_score += 0.5;
          });
        cy.reload();
      }); // Score:-1
      it("Add To Applied and Check the Removing", () => {
        cy.get("tr").eq(1).contains("td", "apply").click();
        cy.get("tbody>tr")
          .should("have.length", 2)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Add  To Deleted and Check the Removing", () => {
        cy.get("tr").eq(1).contains("td", "delete").click();
        cy.get("tbody>tr")
          .should("have.length", 1)
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 1
      it("Visit Applied Page and Check Table", () => {
        navigation("Applied");
        CheckTable(Data[0], 1, 1);
      }); // Score:- 1
      it("Check The Deleted Page", () => {
        navigation("deleted");
        CheckTable(Data[1], 1, 1);
      }); // Score:- 1
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
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