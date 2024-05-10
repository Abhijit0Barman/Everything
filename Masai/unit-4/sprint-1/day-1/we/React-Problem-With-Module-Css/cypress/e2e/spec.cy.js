import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "santhi-local" }];

describe("react cofee house", () => {
  let acc_score = 1;

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  data.forEach(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }

    it("App component has correct heading and using module.css for styling",()=>{
      cy.visit(url);
      cy.get("h1").eq(0).should("contain",`This app contains different components like MobileInfo, Courses, Users`).invoke('attr', 'class')
      .then((className) => {
        // `className` contains the class name of the element
        expect(className).to.include("App_heading__")
      });
      cy.get("h1").eq(0).should("not.have.attr","style")
      cy.then(() => {
        acc_score += 1;
      });
    })
    it(`MobileInfo has correct headings in h1 tags and using module.css for styling for heading and container`, () => {
      cy.visit(url);
      cy.get("h1").eq(1).should("contain",`Mobile Operating System`).invoke("attr","class").then((className)=>{
        expect(className).to.include("MobileInfo_heading__")
      })      
      cy.get("h1").eq(2).should("contain",`Mobile Manufacturers`).invoke("attr","class").then((className)=>{
        expect(className).to.include("MobileInfo_heading__")
      }) 
      cy.get(`[data-testid="mobile_info"]`).invoke("attr","class").then((className)=>{
        expect(className).to.include("MobileInfo_container__")
      })
      cy.get("h1").eq(1).should("contain",`Mobile Operating System`).should("have.not.attr","style")
      cy.get("h1").eq(2).should("contain",`Mobile Manufacturers`).should("have.not.attr","style")
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("MobileInfo component contain all the data as mentioned in the problem statement",()=>{
      cy.visit(url);
      let data=["Android","Blackberry","iPhone","Windows Phone","Samsung","HTC","Micromax","Apple"]
      data.forEach((ele,ind)=>{
        cy.get("li").eq(ind).should("contain",ele)
      })    
      cy.then(() => {
        acc_score += 1;
      });
    })


    it("Courses component has correct headings and using module.css for styling heading and container",()=>{
      cy.visit(url)
      cy.get(`[data-testid="courses"]`).invoke("attr","class").then((className)=>{
        expect(className).to.include("Courses_wrapper__");
      })
      cy.get(`[data-testid="courses"]`).should("not.have.attr","style");
      cy.get("h2").eq(0).should("contain","Full Time Courses").invoke("attr","class").then((className)=>{
        expect(className).to.include("Courses_heading__")
      });
      cy.get("h2").eq(1).should("contain","Part Time Courses").invoke("attr","class").then((className)=>{
        expect(className).to.include("Courses_heading__")
      });;
      cy.then(() => {
        acc_score += 1;
      });
    })

    
    it("Courses component has all the data as per the problem statement",()=>{
      cy.visit(url)
      cy.get("h2").eq(0).should("contain","Full Time Courses")
      cy.get("h2").eq(1).should("contain","Part Time Courses")
      cy.get(`[data-testid="courses"] ol li`).eq(0).should("contain","Full Stack Web Development")
      cy.get(`[data-testid="courses"] ol li ul li`).eq(0).should("contain","Eligibility : 18-28 yrs")
      cy.get(`[data-testid="courses"] ol li ul li`).eq(1).should("contain","Duration : 30 weeks")
      //second courses
      cy.get(`[data-testid="courses"] ol`).eq(1).then((ele)=>{
        cy.wrap(ele).find("li").should("contain","Full Stack Web Development")
        cy.get(ele).find("ul li").eq(0).should("contain","Eligibility : 18-28 yrs")
        cy.get(ele).find("ul li").eq(1).should("contain","Duration : 30 weeks")
        cy.wrap(ele).find("li").should("contain","Data Analytics")
        cy.get(ele).find("ul li").eq(2).should("contain","Eligibility : 18-28 yrs")
        cy.get(ele).find("ul li").eq(3).should("contain","Duration : 30 weeks")
      })     
      cy.then(() => {
        acc_score += 1;
      });
    })

    it("Users component is having heading and styling is done for them using module.css",()=>{
      cy.visit(url);
      cy.get(`[data-testid="users"]`).invoke("attr","class").then((className)=>{
        expect(className).to.include("Users_container__")   
      })
      cy.get(`[data-testid="users"] h3`).invoke("attr","class").then((className)=>{
        expect(className).to.include("Users_heading__")       
      }) 
      cy.get(`[data-testid="users"]`).should("have.not.attr","style")
      cy.get(`[data-testid="users"] h3`).should("have.not.attr","style")
      cy.then(() => {
        acc_score += 1;
      });
    })

    it("Users component is showing all the data as per the problem statement",()=>{
      cy.visit(url);
      cy.get(`[data-testid="users"] h3`).should("contain","Users List")
      const usersList = [
        {
          id: 1,
          name: "Chrisse",
          address: "4018 Sachs Trail",
          avatar: "https://placehold.co/200",
          posts: 1841,
          followers: 66868,
          isMarried: true,
        },
        {
          id: 2,
          name: "Chandler",
          address: "15 Yemem road, Yemen",
          avatar: "https://placehold.co/200",
          posts: 1433,
          followers: 20000,
          isMarried: false,
        },
      ];
      usersList.forEach((ele,ind)=>{        
        cy.get('[data-testid="users"] img').eq(ind).should("have.attr","src",ele.avatar)
        cy.get('[data-testid="users"] [data-testid="user_name"]').eq(ind).should("contain",ele.name)
        cy.get('[data-testid="users"] [data-testid="user_address"]').eq(ind).should("contain",ele.address)
        cy.get('[data-testid="users"] [data-testid="user_posts"]').eq(ind).should("contain",ele.posts)
        cy.get('[data-testid="users"] [data-testid="user_followers"]').eq(ind).should("contain",ele.followers)      
        cy.get('[data-testid="is-married"]').eq(ind).last().should("contain",ele.isMarried?"Yes":"No")
      })    
      cy.then(() => {
        acc_score += 1;
      });  
    
    })

    it("Follow button on clicking showing alert with the correct message",()=>{
      cy.visit(url);
      var alerted = false;
      cy.on("window:alert", (msg) => (alerted = msg));
      const usersList = [
        {
          id: 1,
          name: "Chrisse",
          address: "4018 Sachs Trail",
          avatar: "https://placehold.co/200",
          posts: 1841,
          followers: 66868,
          isMarried: true,
        },
        {
          id: 2,
          name: "Chandler",
          address: "15 Yemem road, Yemen",
          avatar: "https://placehold.co/200",
          posts: 1433,
          followers: 20000,
          isMarried: false,
        },
      ];
      usersList.forEach((ele,ind)=>{
        cy.get('[data-testid="users"] button').eq(ind).should("be.visible").click({force:true}).then(()=>{
          expect(alerted).to.contain(`You are now following ${ele.name}`);
        })
      })
      cy.then(() => {
        acc_score += 2;
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
