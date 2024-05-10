import data from "../../submissionData.json";

// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let mock = {
  pitches: [
    {
      title: "Beyond Snack Kerala Banana Chips",
      price: 50,
      percentage: 2.5,
      description:
        "The glory of Kerala-special banana chips spread far and wide. The fresh bananas grown in local fields and farms are cleaned, cut and cooked in pure oil to make the tastiest banana chips ever.",
      founder: "Manas Madhu",
      category: "Food",
      year: "12-02-2020",
      image:
        "https://m.media-amazon.com/images/I/819GDpbJp3L._AC_UL480_FMwebp_QL65_.jpg",
      id: 1,
    },
    {
      title: "Bamboo India",
      price: 30,
      percentage: 3.5,
      description:
        "plastic products replacement using innovative Bamboo Products like Bamboo Toothbrush, Bamboo Earbuds, corporate Gift articles & many more. It’s not for the income, but for the outcome",
      founder: "Ashwini Shinde and Yogesh Shinde",
      category: "Personal Care",
      year: "15-08-2016",
      image:
        "https://cdn.shopify.com/s/files/1/0560/4166/8681/products/standard-4_ed1a94bb-4732-4a3c-a047-5d045e60c231_500x.png?v=1649829355",
      id: 2,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81MJ4Eic6YL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
      price: "75",
      percentage: 21,
      description:
        "At Wakao, we are passionate about healthy, sustainable food. Our goal is to bring ethically sourced, sustainably grown food to our customer’s dinner table",
      founder: "Sairaj Dhond",
      category: "Food",
      year: "05-04-2020",
      title: "Wakao products",
      id: 3,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81BHMCJnp9L._SX679_PIbundle-5,TopRight,0,0_AA679SH20_.jpg",
      price: 26,
      percentage: 2.5,
      description:
        "ntroducing first popped potato chips of india. Not Fried, Not Baked with 50% Less Fat. Enjoy Lip-Smacking Snacks Guilt-Free with Tagz Popped Potato Chips With 50% Less Fats. Premium Chocolate Cookies. No Artificial Flavors.",
      founder: "Anish Basu Roy",
      category: "Food",
      year: "06-05-2017",
      title: "Tagz Chips",
      id: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81UAsQsdp5L._AC_UL480_FMwebp_QL65_.jpg",
      price: 24,
      percentage: 23,
      description:
        "Buy The Sass Bar Brand Products Online at best Price in India. Shop 100% organic and Natural products ",
      founder: "Rishika Nayak",
      category: "Personal Care",
      year: "20-01-2014",
      title: "The Saas Bar ",
      id: 5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61RjUgGy04L._AC_UY327_FMwebp_QL65_.jpg",
      price: 52,
      percentage: 25,
      description:
        "Just over a year old, Haryana-based Hammer founded by Rohit Nandwani has streamlined its product range keeping with the shift to wireless audio tech. It is now focused on strengthening its D2C game.",
      founder: "Rohit Nandwani",
      category: "Electronics",
      year: "21-03-2012",
      title: "Hammer",
      id: 6,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51DUbOFXgHL._AC_UL480_FMwebp_QL65_.jpg",
      price: 35,
      percentage: 5,
      description:
        "'Auli Lifestyle' has been conceptualised and created by the effervescent Aishwarya Biswas. Her passion for wellness essentials",
      founder: "Aishwarya Biswas",
      category: "Personal Care",
      year: "14-06-2016",
      title: "auli Lifestyle",
      id: 7,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71Wa7-cOUqL._AC_UL480_FMwebp_QL65_.jpg",
      price: 19,
      percentage: 2.5,
      description:
        "Looking for Quirky shoes & clothes? Check out The Quirky Naari! Explore a range of LED shoes & Party wear sneakers that will make you stand out",
      founder: "Malvica Saxena",
      category: "Fashion",
      year: "14-08-2021",
      title: "Quirky Naari",
      id: 8,
    },
    {
      image:
        "https://static.wixstatic.com/media/5755f6_023c4baf970a43e4b187f7271a33fcad~mv2.png/v1/crop/x_237,y_352,w_1328,h_1331/fill/w_614,h_614,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/5755f6_023c4baf970a43e4b187f7271a33fcad~mv2.png",
      price: 54,
      percentage: 12,
      description:
        "Asia's first and only custom made electric kick scooter operator.World’s first in-premises electric vehicle hybrid-subscription fleet service.",
      founder: "Rutvij Dasadia ",
      category: "Education",
      year: "21-05-2021",
      title: "Booz scooters",
      id: 9,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/915WVrOntJL._AC_UL480_FMwebp_QL65_.jpg",
      price: 45,
      percentage: 25,
      description:
        "Get uniquely delicious and flavorful pickles and chutneys made by expert mom-chefs of Mithilanchal, Bihar. No Preservatives, No Additives, No Colors. Seasonal Fruits and Vegetables blended in locally sourced spices and mustard oil. ",
      founder: "Kalpana Jha ",
      category: "Food",
      year: "24-12-2018",
      title: "JhaJi Achaar",
      id: 10,
    },
    {
      image: "https://www.cocofit.in/images/Picture4_large.png",
      price: 25,
      percentage: 3.5,
      description:
        "We strive, respect and work hard every second taking our demigod to a new level with a delicious serving that would be a life changing experience.",
      founder: "Sashi Kanth V",
      category: "Food",
      year: "17-11-2017",
      title: "Cocofit",
      id: 11,
    },
    {
      image: "https://www.hairoriginals.com/wp-content/uploads/2022/08/1-3.png",
      price: 15,
      percentage: 2.5,
      description:
        "The focus areas of HairOriginals are to ensure professional commitment, a well-defined supply chain and manufacturing processes, end-to-end quality control, and a customer-centric approach. ",
      founder: "Jitendra Sharma ",
      category: "Personal Care",
      year: "16-05-2019",
      title: "Hair Originals",
      id: 12,
    },
    {
      image:
        "https://static.wixstatic.com/media/5f24cf_a17220104bb5486d943ad3acd5808e90~mv2.png/v1/fill/w_506,h_314,al_c,q_80,usm_0.66_1.00_0.01/5f24cf_a17220104bb5486d943ad3acd5808e90~mv2.png",
      price: 26,
      percentage: 2.56,
      description:
        "Falhari is India’s #1 fresh fruit products brand with an extensive range of delightful, made-to-order recipes of Salads, Juices, Smoothies, Lassis, Yoghurts, and more",
      founder: "Rahul Shankar Bhardwaj",
      category: "Food",
      year: "20-12-2021",
      title: "Falhari",
      id: 13,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0610/1709/6332/products/BillionairesblueWithChildSeat_6170e2d2-20c5-4509-b781-db25787f137b_1500x.png?v=1677004005",
      price: 22,
      percentage: 2.57,
      description:
        "We at Revamp are committed to provide adaptive and sustainable solutions to the bottom of the pyramid people.",
      founder: "Jayesh Tope.",
      category: "Electronics",
      year: "04-05-2021",
      title: "Revamp Moto",
      id: 14,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOkeAS5PgCBISOPRp_mZJuIxJ74IyCAlP_A&usqp=CAU",
      price: 50,
      percentage: 2,
      description:
        "We push our boundaries every day, we’re here to innovate and inspire a new generation of sustainable sanitation technology. PadCare isn’t a startup, it’s a revolution.",
      founder: "Ajinkya Dhariya",
      category: "Electronics",
      year: "07-09-2022",
      title: "Padcare Lab",
      id: 15,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/617QlJ62nFL._AC_UL480_FMwebp_QL65_.jpg",
      price: 57,
      percentage: 2,
      description:
        "aradyes is a semi-permanent hair color brand. She introduced the brand by identifying a gap in the market. Banking on her family business of dyes and intermediates, she teamed up with professionals and began R&D to formulate hair colors in their lab.",
      founder: "Yushika Jolly,",
      category: "Personal Care",
      year: "01-07-2021",
      title: "Paradyes",
      id: 16,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/610d1RfgHDL._AC_UL480_FMwebp_QL65_.jpg",
      price: 100,
      percentage: 1.5,
      description:
        "A small device that can be attached to any normal stethoscope and the stethoscope will become a digital one. Using this device it can reduce background noise, better audio, and visual clarity, and after all, one can get the live stream of data. ",
      founder: "Adarsha K",
      category: "Electronics",
      year: "12-22-2014",
      title: "AyuSynk",
      id: 17,
    },
    {
      image:
        "https://i0.wp.com/insidefpv.com/wp-content/uploads/2022/12/Green-Hornet-V3-Frame-Kit-1000x1000-1.webp?fit=1000%2C1000&ssl=1",
      price: 70,
      percentage: 9,
      description:
        "insideFPV is providing drones to Consumers, Agriculture and innovating drones for Defence for every altitude.",
      founder: "Arth Chowdhary",
      category: "Electronics",
      year: "11-09-2021",
      title: "insideFPV",
      id: 18,
    },
    {
      image:
        "https://media.licdn.com/dms/image/C560BAQHW0X43GfluNQ/company-logo_200_200/0/1668408499279?e=1692230400&v=beta&t=wu0H5y17wfPLEjw9jRtM02ChXSLp9r6GhI643qzGrlI",
      price: 200,
      percentage: 3,
      description:
        "NFT, Virtual reality, and metaverse are all becoming very popular nowadays. Not only shopping, meetings, weddings, and partying but one can run the business through a metaverse. Cloudworx is a no-code SaaS enterprise metaverse platform that helps you to make 3D models without using any codes.",
      founder: "Yuvraj Tomar",
      category: "Tech",
      year: "14-02-2018",
      title: "Cloudworx",
      id: 19,
    },
    {
      image:
        "https://shop.curesee.com/wp-content/uploads/2023/02/shopping.webp",
      price: 80,
      percentage: 1.5,
      description:
        "CureSee – The world’s first and most advanced AI-based vision therapy SaaS was founded on a park seat by two childhood friends Puneet and Jatin Kaushik along with their industry friend, Amit Sahni",
      founder: "Puneet and Jatin Kaushik",
      category: "Education",
      title: "CureSee",
      year: "25-06-2020",
      id: 20,
    },
    {
      image:
        "https://www.primebook.in/uploads/feature/1675677835_d887598e98a67da677f0.png",
      price: 75,
      percentage: 1.5,
      description:
        "Primebook 4G unites everything you need to elevate your learning. Meet the first Made In India 4G laptop, engineered with cutting-edge technology, based on the Android 11 Ecosystem, unlocking limitless learning opportunities.",
      founder: "Chitranshu Mahant",
      category: "Tech",
      title: "Primebook",
      year: "14-02-2020",
      id: 21,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61pq3ae629L._AC_UY327_FMwebp_QL65_.jpg",
      price: 45,
      percentage: 10,
      description:
        "HoloKitab is an edTech platform that enables book publishers and manufacturers from various industries to deliver Augmented Reality content to their users in a cost effective way.",
      founder: "Dipanshu Bajaj and Nikhil Miglani",
      category: "Education",
      year: "15-04-2020",
      title: "HoloKitab",
      id: 22,
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });

    it("Shows the correct initial data", () => {
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.visit(url);
      cy.wait("@getPitches");
      const numOfPitches = mock.pitches.length;
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(".card-list").children().should("have.length", numOfPitches);
      cy.get(cards)
        .should("have.length", numOfPitches)
        .first()
        .should("contain", mock.pitches[0].title);
      cy.get(cards)
        .eq(Math.ceil(numOfPitches / 2))
        .should("contain", mock.pitches[Math.ceil(numOfPitches / 2)].title);
      cy.get(cards)
        .should("have.length", numOfPitches)
        .last()
        .should("contain", mock.pitches[numOfPitches - 1].title);
      cy.then(() => {
        acc_score += 3;
      });
    }); // 3

    it("Able to add new pitch", () => {
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.intercept("POST", "**/pitches").as("postRequest");
      cy.visit(url);
      cy.wait("@getPitches");
      let data = {
        title: "In A Can",
        price: 44,
        percentage: 2.5,
        founder: "Sameer and Viraj",
        category: "Food",
        image:
          "https://digest.myhq.in/wp-content/uploads/2023/03/image-3-300x200.png",
      };
      cy.get("#pitch-title").type(data.title);
      cy.get("#pitch-image").type(data.image);
      cy.get("#pitch-category").type(data.category);
      cy.get("#pitch-founder").type(data.founder);
      cy.get("#pitch-price").type(data.price);
      cy.get("#add-pitch").should("be.visible").click();
      cy.wait("@postRequest");
      cy.wait("@getPitches");
      cy.wait(1000);
      
      cy.get(".card-list").children().should("have.length", 23);
      cy.get(".card-list").children().last().contains("In A Can");
      cy.get(".card-list").children().last().contains("Sameer and Viraj");
      cy.get(".card-list").children().last().contains("Food");
      cy.get(".card-list").children().last().contains(44);
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to delete a pitch", () => {
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.intercept("DELETE", "**/pitches/**").as("deleteRequest");
      cy.visit(url);
      cy.wait("@getPitches");
      cy.get(".card-list").children().last().find(".card-button").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait("@deleteRequest");
      cy.wait("@getPitches");
      cy.wait(1000);
      cy.get(".card-list").children().should("have.length", 21);
      cy.get(cards)
        .first()
        .should("contain", "Beyond Snack Kerala Banana Chips");
      cy.get(cards).last().should("contain", "Primebook");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to edit all fields of the pitch", () => {
      cy.intercept("PATCH", `**/pitches/**`).as("patchedPitch");
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.visit(url);
      cy.wait("@getPitches");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards).first().find(".card-link").click();
      cy.wait(1000);
      cy.get("#update-pitch-title").clear().type("Lenskart");
      cy.get("#update-pitch-image")
        .clear()
        .type(
          "https://m.media-amazon.com/images/I/51wwVl2r-WL._AC_UL480_FMwebp_QL65_.jpg"
        );
      cy.get("#update-pitch-founder").type("Peyush Bansal");
      cy.get("#update-pitch-price").clear().type(1235);
      cy.get("#update-pitch-category").clear().type("Personal Care");
      cy.get("#update-pitch").should("be.visible").click();
      cy.wait("@patchedPitch");
      cy.wait("@getPitches");
      cy.wait(1000);
      cy.get(cards).first().contains("Lenskart");
      cy.get(cards).first().contains("Peyush Bansal");
      cy.get(cards).first().contains("Personal Care");
      cy.get(cards).first().contains(1235);
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to edit the price", () => {
      cy.intercept("PATCH", `**/pitches/**`).as("patchedPitch");
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.visit(url);
      cy.wait("@getPitches");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards).last().find(".card-link").click();
      //add condition in problem statement
      cy.wait(1000);
      cy.get("#update-price-pitch-price").clear().type(100);
      cy.get("#update-price-pitch").click();
      cy.wait("@patchedPitch");
      cy.wait("@getPitches");
      cy.wait(1000);
      cy.get(cards).last().contains(100);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("Sorts as expected", () => {
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.visit(url);
      cy.wait("@getPitches");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-low-to-high").click();
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each(($el) => {
          arr.push(+$el.find(".card-price").text());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isSorted = arr.reduce(
            (n, item) => n !== false && item >= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.get("#sort-high-to-low").click();
      cy.wait(100);
      let arr2 = [];
      cy.get(cards)
        .each(($el) => {
          arr2.push(+$el.find(".card-price").text());
        })
        .then(() => {
          //console.log(arr2, arr2.length);
          const isSorted = arr2.reduce(
            (n, item) => n !== false && item <= n && item
          );
          expect(!!isSorted).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Filters as expected", () => {
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.visit(url);
      cy.wait("@getPitches");
      cy.get("#filter-Food").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500);
      let arr = [];
      cy.get(cards)
        .each((el) => {
          arr.push(el.find(".card-category").text().trim());
        })
        .then(() => {
          // console.log(arr, arr.length);
          const isFood = arr.reduce(
            (n, item) => n !== false && item === "Food"
          );
          expect(!!isFood).to.be.true;
          expect(arr.length).to.be.greaterThan(0);
        });
      cy.get("#filter-Electronics").click();
      cy.wait(500);
      let arr2 = [];
      cy.get(cards)
        .each((el) => {
          arr2.push(el.find(".card-category").text().trim());
        })
        .then(() => {
          //console.log(arr2, arr2.length);
          const isElectronics = arr2.reduce(
            (n, item) => n !== false && item === "Electronics"
          );
          expect(!!isElectronics).to.be.true;
          expect(arr2.length).to.be.greaterThan(0);
        });
      cy.get("#filter-Personal-Care").click();
      cy.wait(500);
      let arr3 = [];
      cy.get(cards)
        .each((el) => {
          arr3.push(el.find(".card-category").text().trim());
        })
        .then(() => {
          //console.log(arr3, arr3.length);
          const isPersonalCare = arr3.reduce(
            (n, item) => n !== false && item === "Personal Care"
          );
          expect(!!isPersonalCare).to.be.true;
          expect(arr3.length).to.be.greaterThan(0);
        });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Able to search by title", () => {
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.visit(url);
      cy.wait("@getPitches");
      cy.get("#search-by-select").select("title");
      cy.get("#search-by-input").clear().type("primebook");
      cy.get("#search-by-button").click();
      cy.wait(500);
      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list")
        .children()
        .first()
        .contains("Primebook");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("Able to search by the founder", () => {
      cy.intercept("GET", "**/pitches").as("getPitches");
      cy.visit(url);
      cy.wait("@getPitches");
      cy.get("#search-by-select").select("founder");
      cy.get("#search-by-input").clear().type("Yuvraj Tomar");
      cy.get("#search-by-button").click();
      cy.wait(500);
      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list")
        .children()
        .first()
        .contains("Yuvraj Tomar");
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
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
