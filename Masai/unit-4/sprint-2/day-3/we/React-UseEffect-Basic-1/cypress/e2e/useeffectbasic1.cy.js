/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//   },
// ];

const apidata = [
  {
    id: 1,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Donald Surgen",
    gender: "female",
    department: "engineering",
    salary: 57000,
  },
  {
    id: 2,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Brynn Wildblood",
    gender: "female",
    department: "finance",
    salary: 27000,
  },
  {
    id: 3,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Etta McGairl",
    gender: "male",
    department: "operations",
    salary: 42000,
  },
  {
    id: 4,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Alexandros Renihan",
    gender: "female",
    department: "engineering",
    salary: 40000,
  },
  {
    id: 5,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Geri Maudlen",
    gender: "others",
    department: "operations",
    salary: 40000,
  },
  {
    id: 6,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Grazia Pilkington",
    gender: "others",
    department: "operations",
    salary: 50000,
  },
  {
    id: 7,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Norry Bodicum",
    gender: "others",
    department: "operations",
    salary: 30000,
  },
  {
    id: 8,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Athena Broadey",
    gender: "male",
    department: "marketing",
    salary: 66000,
  },
  {
    id: 9,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Luisa Artois",
    gender: "male",
    department: "engineering",
    salary: 45000,
  },
  {
    id: 10,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Cookie Gimber",
    gender: "male",
    department: "finance",
    salary: 25000,
  },
  {
    id: 11,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Aridatha Boylund",
    gender: "female",
    department: "engineering",
    salary: 40000,
  },
  {
    id: 12,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Christiana Withringten",
    gender: "male",
    department: "marketing",
    salary: 42000,
  },
  {
    id: 13,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Clotilda Gleader",
    gender: "female",
    department: "marketing",
    salary: 42000,
  },
  {
    id: 14,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Marlane Dabner",
    gender: "male",
    department: "engineering",
    salary: 50000,
  },
  {
    id: 15,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Casar Morais",
    gender: "male",
    department: "operations",
    salary: 63000,
  },
  {
    id: 16,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Pris Emms",
    gender: "others",
    department: "operations",
    salary: 66000,
  },
  {
    id: 17,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Inglis Easdon",
    gender: "others",
    department: "operations",
    salary: 45000,
  },
  {
    id: 18,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Tamera Bartaletti",
    gender: "male",
    department: "operations",
    salary: 60000,
  },
  {
    id: 19,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Grata Channon",
    gender: "others",
    department: "engineering",
    salary: 27000,
  },
  {
    id: 20,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Caria Dalli",
    gender: "female",
    department: "engineering",
    salary: 42000,
  },
  {
    id: 21,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Humfrey Moscrop",
    gender: "others",
    department: "operations",
    salary: 50000,
  },
  {
    id: 22,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Vivianne Southwood",
    gender: "female",
    department: "operations",
    salary: 50000,
  },
  {
    id: 23,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Chaddie Tupper",
    gender: "female",
    department: "operations",
    salary: 66000,
  },
  {
    id: 24,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Ilyssa Staning",
    gender: "female",
    department: "operations",
    salary: 35000,
  },
  {
    id: 25,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Ingmar Dealy",
    gender: "female",
    department: "engineering",
    salary: 50000,
  },
  {
    id: 26,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Eldredge Andryszczak",
    gender: "male",
    department: "finance",
    salary: 42000,
  },
  {
    id: 27,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Kaine Batman",
    gender: "female",
    department: "operations",
    salary: 63000,
  },
  {
    id: 28,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Josefa Stainton",
    gender: "male",
    department: "operations",
    salary: 30000,
  },
  {
    id: 29,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Maury Ericsson",
    gender: "male",
    department: "operations",
    salary: 30000,
  },
  {
    id: 30,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Beret Rentenbeck",
    gender: "others",
    department: "marketing",
    salary: 42000,
  },
  {
    id: 31,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Emeline Skuce",
    gender: "male",
    department: "operations",
    salary: 50000,
  },
  {
    id: 32,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Bryanty Dacre",
    gender: "male",
    department: "engineering",
    salary: 54000,
  },
  {
    id: 33,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Gregorio Heaford",
    gender: "others",
    department: "hr",
    salary: 63000,
  },
  {
    id: 34,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Marilin Balke",
    gender: "male",
    department: "operations",
    salary: 35000,
  },
  {
    id: 35,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Bronnie Kitcat",
    gender: "female",
    department: "marketing",
    salary: 51000,
  },
  {
    id: 36,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Wyatt Maly",
    gender: "female",
    department: "hr",
    salary: 42000,
  },
  {
    id: 37,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Irv Shirer",
    gender: "female",
    department: "engineering",
    salary: 70000,
  },
  {
    id: 38,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Monty Meers",
    gender: "female",
    department: "engineering",
    salary: 35000,
  },
  {
    id: 39,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Andros Jullian",
    gender: "male",
    department: "operations",
    salary: 42000,
  },
  {
    id: 40,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Ealasaid Gorthy",
    gender: "others",
    department: "operations",
    salary: 27000,
  },
  {
    id: 41,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Cordie Seatter",
    gender: "male",
    department: "finance",
    salary: 63000,
  },
  {
    id: 42,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Bartholomew Geard",
    gender: "male",
    department: "marketing",
    salary: 66000,
  },
  {
    id: 43,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Sidnee Goodright",
    gender: "male",
    department: "engineering",
    salary: 36000,
  },
  {
    id: 44,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Bondon Woodroff",
    gender: "male",
    department: "hr",
    salary: 57000,
  },
  {
    id: 45,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Rolfe Gerrietz",
    gender: "male",
    department: "operations",
    salary: 66000,
  },
  {
    id: 46,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Iseabal Date",
    gender: "female",
    department: "operations",
    salary: 63000,
  },
  {
    id: 47,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Aylmer Burstowe",
    gender: "female",
    department: "marketing",
    salary: 54000,
  },
  {
    id: 48,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Alic Toms",
    gender: "male",
    department: "marketing",
    salary: 70000,
  },
  {
    id: 49,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Jerrylee Asee",
    gender: "female",
    department: "operations",
    salary: 66000,
  },
  {
    id: 50,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Ham Probin",
    gender: "female",
    department: "operations",
    salary: 70000,
  },
  {
    id: 51,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Benson Yoell",
    gender: "female",
    department: "operations",
    salary: 25000,
  },
  {
    id: 52,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Hugibert Walls",
    gender: "male",
    department: "operations",
    salary: 36000,
  },
  {
    id: 53,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Osgood Joncic",
    gender: "others",
    department: "operations",
    salary: 27000,
  },
  {
    id: 54,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Georgianna Barsby",
    gender: "female",
    department: "finance",
    salary: 54000,
  },
  {
    id: 55,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Alis McGready",
    gender: "female",
    department: "marketing",
    salary: 70000,
  },
  {
    id: 56,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Elli Godlip",
    gender: "female",
    department: "hr",
    salary: 27000,
  },
  {
    id: 57,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Pall Gilford",
    gender: "female",
    department: "finance",
    salary: 50000,
  },
  {
    id: 58,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Gwendolin Egarr",
    gender: "male",
    department: "operations",
    salary: 40000,
  },
  {
    id: 59,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Arel Borless",
    gender: "female",
    department: "finance",
    salary: 63000,
  },
  {
    id: 60,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Emmye Handmore",
    gender: "others",
    department: "operations",
    salary: 30000,
  },
  {
    id: 61,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Hastie Kochl",
    gender: "female",
    department: "marketing",
    salary: 66000,
  },
  {
    id: 62,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Melinde Beavon",
    gender: "male",
    department: "operations",
    salary: 63000,
  },
  {
    id: 63,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Colene Pere",
    gender: "female",
    department: "operations",
    salary: 60000,
  },
  {
    id: 64,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Shoshanna Standingford",
    gender: "male",
    department: "operations",
    salary: 51000,
  },
  {
    id: 65,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Courtenay Risborough",
    gender: "female",
    department: "hr",
    salary: 35000,
  },
  {
    id: 66,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Jemmy Bensley",
    gender: "male",
    department: "operations",
    salary: 50000,
  },
  {
    id: 67,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Deerdre Allridge",
    gender: "female",
    department: "finance",
    salary: 35000,
  },
  {
    id: 68,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Magdalena Santoro",
    gender: "male",
    department: "operations",
    salary: 35000,
  },
  {
    id: 69,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Dory Thrustle",
    gender: "male",
    department: "marketing",
    salary: 42000,
  },
  {
    id: 70,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Dyann Engeham",
    gender: "male",
    department: "hr",
    salary: 70000,
  },
  {
    id: 71,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Annabell Jeyes",
    gender: "others",
    department: "finance",
    salary: 36000,
  },
  {
    id: 72,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Alexine Joreau",
    gender: "female",
    department: "operations",
    salary: 45000,
  },
  {
    id: 73,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Joletta Dyerson",
    gender: "male",
    department: "marketing",
    salary: 50000,
  },
  {
    id: 74,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Renault Sailes",
    gender: "female",
    department: "operations",
    salary: 54000,
  },
  {
    id: 75,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Kathryne Moryson",
    gender: "male",
    department: "operations",
    salary: 30000,
  },
  {
    id: 76,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Flin Redhead",
    gender: "others",
    department: "finance",
    salary: 42000,
  },
  {
    id: 77,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Natalina MacCroary",
    gender: "male",
    department: "marketing",
    salary: 50000,
  },
  {
    id: 78,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Miquela Aireton",
    gender: "female",
    department: "operations",
    salary: 40000,
  },
  {
    id: 79,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Birgit Jadczak",
    gender: "male",
    department: "operations",
    salary: 42000,
  },
  {
    id: 80,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Nil Fremantle",
    gender: "male",
    department: "engineering",
    salary: 60000,
  },
  {
    id: 81,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Belinda Bortol",
    gender: "others",
    department: "engineering",
    salary: 60000,
  },
  {
    id: 82,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Stacy McCrory",
    gender: "male",
    department: "hr",
    salary: 45000,
  },
  {
    id: 83,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Adelbert Witten",
    gender: "female",
    department: "engineering",
    salary: 54000,
  },
  {
    id: 84,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Muriel Fitzpayn",
    gender: "others",
    department: "operations",
    salary: 25000,
  },
  {
    id: 85,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Winifred McNalley",
    gender: "male",
    department: "engineering",
    salary: 60000,
  },
  {
    id: 86,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Gibby Brabbins",
    gender: "female",
    department: "operations",
    salary: 70000,
  },
  {
    id: 87,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Eunice Emanson",
    gender: "female",
    department: "engineering",
    salary: 60000,
  },
  {
    id: 88,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Tobi Pizer",
    gender: "female",
    department: "operations",
    salary: 30000,
  },
  {
    id: 89,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Nadiya Rohfsen",
    gender: "male",
    department: "engineering",
    salary: 40000,
  },
  {
    id: 90,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Shannon Cardew",
    gender: "male",
    department: "marketing",
    salary: 27000,
  },
  {
    id: 91,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Lorettalorna Rosenfarb",
    gender: "female",
    department: "operations",
    salary: 25000,
  },
  {
    id: 92,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Rina Nasey",
    gender: "female",
    department: "engineering",
    salary: 27000,
  },
  {
    id: 93,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Pammie McRannell",
    gender: "female",
    department: "operations",
    salary: 50000,
  },
  {
    id: 94,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Shannen Erwin",
    gender: "male",
    department: "engineering",
    salary: 27000,
  },
  {
    id: 95,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Nariko Cerith",
    gender: "male",
    department: "marketing",
    salary: 51000,
  },
  {
    id: 96,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Claudia Vasyukhin",
    gender: "female",
    department: "hr",
    salary: 25000,
  },
  {
    id: 97,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Judith Redrup",
    gender: "others",
    department: "marketing",
    salary: 35000,
  },
  {
    id: 98,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Sibylle Lapidus",
    gender: "others",
    department: "engineering",
    salary: 66000,
  },
  {
    id: 99,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Hollis Matskevich",
    gender: "male",
    department: "engineering",
    salary: 66000,
  },
  {
    id: 100,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Agatha Gullefant",
    gender: "female",
    department: "operations",
    salary: 50000,
  }
];

function checktablecontents(apidata,startindex,endindex)
{
  let start=startindex;
  let end=endindex;
  let j=0;
  for(let i=start;i<=end;i++)
  {
    cy.get(".employee-card-name").eq(j).contains(apidata[i].name)
    cy.get(".employee-card-department").eq(j).contains(apidata[i].department)
    cy.get(".employee-card-image").eq(j).contains(apidata[i].image)
    cy.get(".employee-card-gender").eq(j).contains(apidata[i].gender)
    cy.get(".employee-card-salary").eq(j).contains(apidata[i].salary)
    j++;    
  }
  
}
data.forEach(({ submission_link: url, id }) => {
  describe("useEffect assignement 1", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
        //cy.visit(url);
      }
    });

    it("Check if initial network request is made and appended 12 results to tbody", () => {
      cy.intercept(`**mockapi/get-employees**`).as("initialrequest");
       cy.visit(url);
      cy.wait("@initialrequest");
      cy.get("tbody").children().should("have.length", 12);
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("check it default page is 1 and button is disabled and page 1 results are correct", () => {
      cy.intercept(`**mockapi/get-employees**`).as("initialrequest");
      cy.visit(url);
      cy.wait("@initialrequest");
      cy.get("button").first().should("be.disabled");
      cy.get("tbody").children().should("have.length", 12);
      checktablecontents(apidata,0,11)     
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("check if page buttons are woking fine and fetching the correct page data",()=>{      
      cy.intercept(`**mockapi/get-employees**`).as("initialrequest");
      cy.visit(url);
      cy.wait("@initialrequest"); 
      for(let page=0;page<8;page=page+3)
      {      
        cy.get("button").eq(page).click({force: true});
        cy.get("button").eq(page).should("be.disabled");
        cy.wait("@initialrequest");        
        let start=page*12;let end=page*12+11;
        checktablecontents(apidata,start,end)       
      }
      cy.then(() => {
        acc_score += 3;
      });
    })

    it("The border color of the active button should be red",()=>{
       cy.intercept(`**mockapi/get-employees**`).as("initialrequest");
      cy.visit(url);      
      cy.wait("@initialrequest");
      for(let page=1;page<7;page++)
      {        
        cy.get("button").eq(page).click({force: true});
        cy.get("button").eq(page).should("be.disabled");
        cy.wait("@initialrequest");       
        cy.get("button").eq(page).should("have.css","border","1px solid rgb(255, 0, 0)");
        cy.get("button").eq(page+1).should("not.have.css","border","1px solid rgb(255, 0, 0)");
        cy.get("button").eq(page-1).should("not.have.css","border","1px solid rgb(255, 0, 0)");
      }
      cy.then(() => {
        acc_score += 2;
      });
    })

    it("check pagination component is dynamic",()=>{
      cy.intercept("GET",`**mockapi/get-employees**`,{data:[{...apidata,...apidata}],totalPages:17}).as("reqdata");
      cy.visit(url);
      cy.wait("@reqdata")
      cy.get("button").should("have.length",17);
      cy.then(() => {
        acc_score += 5;
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
