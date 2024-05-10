describe("Form Submission Tests", () => {
  before(() => {
    // Assuming your React app is running at http://localhost:3000
    cy.visit("http://localhost:3000");
  });

  it("should add a new element to the list", () => {
    const newItemText = "New Item";

    // Type text into the input field and submit
    cy.get("input[placeholder='Enter item']").type(newItemText);
    cy.get("button").click();

    // Verify the new item is added to the list
    cy.get("ul")
      .find("li")
      .should("have.length", 1)
      .should("contain", newItemText);
  });

  it("should handle errors on form submission", () => {
    // Intercept the POST request and return a 500 error
    cy.intercept("POST", "http://localhost:8080/items", {
      statusCode: 500,
      body: {},
    }).as("postError");

    // Submit the form
    cy.get("button").click();

    // Wait for the request to complete
    cy.wait("@postError");

    // Verify that an error message is displayed
    cy.get(".error")
      .should("be.visible")
      .should("contain", "Server error");
  });

  it("should make API requests on form submission", () => {
    // Intercept the POST request and return a successful response
    cy.intercept("POST", "http://localhost:8080/items", {
      statusCode: 200,
      body: { id: 3, text: "Test Item" },
    }).as("postSuccess");

    const newItemText = "Test Item";

    // Type text into the input field and submit
    cy.get("input[placeholder='Enter item']").type(newItemText);
    cy.get("button").click();

    // Wait for the request to complete
    cy.wait("@postSuccess");

    // Verify the new item is added to the list
    cy.get("ul")
      .find("li")
      .should("have.length", 1)
      .should("contain", newItemText);
  });

  
});
