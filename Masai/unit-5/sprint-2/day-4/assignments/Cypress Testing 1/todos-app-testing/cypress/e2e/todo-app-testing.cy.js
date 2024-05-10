// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Todos App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Assuming your app is running on this URL
  });

  it('should auto-focus on the input form', () => {
    cy.get('.todo-input').should('have.focus');
  });

  it('should type into the input element and verify the typed value', () => {
    const typedText = 'Buy groceries';

    cy.get('.todo-input').type(typedText);

    cy.get('.todo-input').should('have.value', typedText);
  });
});
