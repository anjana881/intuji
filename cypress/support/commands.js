// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// import {faker} from '@faker-js/faker';
// // -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {
//      cy.get('a').type(email);
//     cy.get('a').type(password);
// })

// Cypress.Commands.add('login', () => {
//     const randomPass = faker.internet.password();
//    const randomEmail = faker.internet.email();
//   cy.get("input[data-qa='login-email']").type(randomEmail);
//     cy.get("input[placeholder='Password']").type(randomPass);
// cy.get("button[data-qa='login-button']").click();
//   // ... rest of login logic
// });

Cypress.Commands.add("validateBooksData", (index, book) => {

  cy.get(".rt-tbody .rt-tr-group")
    .eq(index)
    .within(() => {
      cy.get(".rt-td")
        .eq(1)
        .invoke("text")
        .then((uiText) => {
          expect(uiText.trim()).to.eq(book.title);
        });

      cy.get(".rt-td")
        .eq(2)
        .invoke("text")
        .then((uiText) => {
          expect(uiText.trim()).to.eq(book.author);
        });

      cy.get(".rt-td")
        .eq(3)
        .invoke("text")
        .then((uiText) => {
          expect(uiText.trim()).to.eq(book.publisher);
        });
    });
});

// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
