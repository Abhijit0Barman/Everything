/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
import mock from "../fixtures/db.json";
// const data = [
// 	{
// 		submission_link: "http://localhost:3000",
// 		id: "manish-local",
// 		json_server_link: `http://localhost:8080/`,
// 	},
// ];
const getInitialState = (win) => win.store;
const getReducer = (win) => win.reducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
	describe("React Assignment", function () {
		let acc_score = 1;

		beforeEach(() => {
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
			if (server_url.charAt(server_url.length - 1) != "/") {
				server_url = server_url + "/";
			}
			cy.visit(url);
			cy.window().its("store").should("exist");

			cy.writeFile("db.json", mock, (err) => {
				if (err) {
					console.error(err);
				}
			});
		});
		it("checks for the initial store state", () => {
			cy.window().then(getInitialState).should("deep.equal", {
				data: [],
				isLoading: false,
				isError: false,
			});
			cy.window().then(getReducer).should("exist");
			cy.then(() => {
				acc_score += 1;
			});
		});
		it("check the reducer function for GET_HOUSE_DETAILS_REQUEST state", () => {
			cy.window().then((win) => {
				const reducer = getReducer(win);
				const newState = reducer(
					{
						data: [],
						isLoading: false,
						isError: false,
					},
					{ type: "GET_HOUSE_DETAILS_REQUEST" },
				);
				expect(newState).to.deep.equal({
					data: [],
					isLoading: true,
					isError: false,
				});
			});

			cy.then(() => {
				acc_score += 1;
			});
		});
		it("checks reducer function for GET_HOUSE_DETAILS_SUCCESS", () => {
			cy.intercept("GET", "**/houses").as("getHouses");
			cy.visit(url);
			cy.wait("@getHouses").then((res) => {
				cy.window().then((win) => {
					const reducer = getReducer(win);
					const newState = reducer(
						{
							data: [],
							isLoading: false,
							isError: false,
						},
						{
							type: "GET_HOUSE_DETAILS_SUCCESS",
							payload: res.response.body.data,
						},
					);

					expect(newState).contain({
						data: res.response.body.data,
						isLoading: false,
						isError: false,
					});
				});
			});
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("checks reducer function for GET_HOUSE_DETAILS_FAILURE", () => {
			cy.window().then((win) => {
				const reducer = getReducer(win);
				const newState = reducer(
					{
						data: [],
						isLoading: false,
						isError: false,
					},
					{ type: "GET_HOUSE_DETAILS_FAILURE" },
				);

				expect(newState).contain({
					isError: true,
				});
			});

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should make GET request and render initial houses data", () => {
			cy.intercept("GET", `**/houses`).as("getHouses");
			cy.visit(url);
			cy.wait("@getHouses");
			cy.get(".houseDetails").its("length").should("eq", mock.houses.length);
			cy.get(".ownersName")
				.should("exist")
				.first()
				.should("have.text", mock.houses[0].ownerName);
			cy.get(".ownersName")
				.should("exist")
				.last()
				.should("have.text", mock.houses[mock.houses.length - 1].ownerName);
			cy.get(".ownersName").eq(2).should("have.text", mock.houses[2].ownerName);

			cy.get(".rent").its("length").should("be.gte", mock.houses.length);
			cy.get(".address").its("length").should("be.gte", mock.houses.length);
			cy.get(".areaCode").its("length").should("be.gte", mock.houses.length);

			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should sort the data in ascending order by rent", () => {
			cy.intercept("GET", `**/houses?*`).as("sortHousesAsc");
			cy.visit(url);
			cy.get(".houseDetails").its("length").should("equal", mock.houses.length);

			cy.get(".sortByRentAsc").click();

			cy.wait("@sortHousesAsc");

			cy.get(".rent").then((x) => {
				const temp = [];
				for (const el of x) {
					temp.push(Number(el.innerText));
				}
				let sorted = true;
				console.log(temp);
				for (let x = 0; x < temp.length - 1; x++) {
					if (temp[x] > temp[x + 1]) {
						sorted = false;
						break;
					}
				}
				assert.isTrue(sorted);
			});

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should sort the data in descending order by rent", () => {
			cy.intercept("GET", `**/houses?*`).as("sortHousesDesc");
			cy.visit(url);
			cy.get(".houseDetails").its("length").should("equal", mock.houses.length);

			cy.get(".sortByRentDesc").click();

			cy.wait("@sortHousesDesc");

			cy.get(".rent").then((x) => {
				const temp = [];
				for (const el of x) {
					temp.push(Number(el.innerText));
				}
				let sorted = true;
				for (let x = 0; x < temp.length - 1; x++) {
					if (temp[x] < temp[x + 1]) {
						sorted = false;
						break;
					}
				}
				assert.isTrue(sorted);
			});

			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should fetch the search results according to the search query param", function () {
			cy.intercept("GET", `**/houses?**`).as("getHousesBySearch");
			cy.visit(url);

			cy.get(".searchAddress").type("de");
			cy.wait("@getHousesBySearch");

			cy.get(".houseDetails").its("length").should("be.eq", 2);
			cy.get(".ownersName")
				.should("exist")
				.first()
				.should("have.text", "Deevanshu");
			cy.get(".ownersName").should("exist").last().should("have.text", "Ankit");
			cy.get(".searchAddress").clear().type("b");
			cy.wait("@getHousesBySearch");
			cy.get(".houseDetails").its("length").should("be.eq", 2);
			cy.get(".ownersName").should("exist").last().should("have.text", "Sonam");

			cy.then(() => {
				acc_score += 2;
			});
		});
		it("should fetch the search results according to the search query param and sort the search results", function () {
			cy.intercept("GET", `**/houses?**`).as("getHouses");
			cy.visit(url);

			cy.get(".searchAddress").type("de");
			cy.wait("@getHouses");

			cy.get(".houseDetails").its("length").should("be.eq", 2);
			cy.get(".ownersName")
				.should("exist")
				.first()
				.should("have.text", "Deevanshu");
			cy.get(".sortByRentDesc").click();

			cy.wait("@getHouses");

			cy.get(".rent").then((x) => {
				const temp = [];
				for (const el of x) {
					temp.push(Number(el.innerText));
				}
				let sorted = true;
				for (let x = 0; x < temp.length - 1; x++) {
					if (temp[x] < temp[x + 1]) {
						sorted = false;
						break;
					}
				}
				assert.isTrue(sorted);
			});
			cy.get(".ownersName")
				.should("exist")
				.last()
				.should("have.text", "Deevanshu");
			cy.get(".searchAddress").clear().type("b");
			cy.wait("@getHouses");
			cy.get(".houseDetails").its("length").should("be.eq", 2);
			cy.get(".ownersName").should("exist").last().should("have.text", "Bicky");

			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should make DELETE request succesfully ", function () {
			// cy.clock();
			cy.intercept("DELETE", `**/houses/**`).as("deleteHouses");
			// cy.intercept("GET", `**/houses/**`).as("getHouses");

			cy.visit(url);

			cy.get(".delete").first().click();

			cy.wait("@deleteHouses");
			cy.wait(1000);
			cy.get(".houseDetails")
				.its("length")
				.should("be.eq", mock.houses.length - 1);
			cy.get(".ownersName")
				.should("exist")
				.first()
				.should("have.text", "Bicky");

			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Should make POST request to add details and update the dom successfully", () => {
			cy.intercept("POST", "**/houses").as("addHouse");
			cy.visit(url);
			cy.get(".toggleForm").should("have.text", "View Form");
			cy.get(".toggleForm").click();

			let data = {
				name: "New House",
				ownerName: "New owner",
				address: "New Address",
				areaCode: "650000",
				rent: "290000",
				isBachelorAllowed: true,
				isMarriedAllowed: true,
			};

			cy.get(".name").type(data.name);
			cy.get(".ownerName").type(data.ownerName);
			cy.get(".address").type(data.address);
			cy.get(".areaCode").type(data.areaCode);
			cy.get(".rent").type(data.rent);
			data.isMarriedAllowed && cy.get(".married").click();
			data.isBachelorAllowed && cy.get(".bachelor").click();

			cy.get(".form")
				.submit()
				.then(() => {
					cy.wait("@addHouse");
				});

			cy.get(".toggleForm").should("have.text", "View Dashboard");
			cy.get(".toggleForm").click();

			cy.get(".houseDetails")
				.its("length")
				.should("be.eq", mock.houses.length + 1);
			cy.get(".ownersName")
				.should("exist")
				.last()
				.should("have.text", "New owner");
			cy.get(".isMarriedAllowed")
				.should("exist")
				.last()
				.should("have.text", "Yes");
			cy.get(".isBachelorAllowed")
				.should("exist")
				.last()
				.should("have.text", "Yes");
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
			cy.writeFile("results.json", `\n${result},`, (err) => {
				if (err) {
					console.error(err);
				}
			});
			//////////////////
		});
	});
});
