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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (label) => {
  cy.visit("/login");
  cy.get("input[name='email']").type(user.email);
  cy.get("input[name='password']").type(user.password);
  cy.get("button[type=submit]").click();
  cy.url().should("include", "/admin");
  cy.contains("Akzeptierte Accounts");
  cy.contains("Accountanträge");
  cy.contains("Administratorseite");
  cy.contains("Abmelden");
  cy.get("button").contains("Abmelden").click();
  cy.url().should("include", "/login");})

