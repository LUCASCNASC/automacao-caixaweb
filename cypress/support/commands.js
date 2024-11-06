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

Cypress.Commands.add('login', (username, password) => {
  
    // Visite a página de login
    cy.visit('http://10.7.0.87/#/login');
  
    // Preencha o campo de nome de usuário
    cy.get('#usuario').type('lucas.camargo');
  
    // Preencha o campo de senha
    cy.get('#senha').type('@Lcn1998');
  
    // Submeta o formulário de login
    cy.get('#btn-login').click();
  
    cy.wait(1000)
  
    cy.get('.sbm-logotipo-topo')
      .should('exist') //Validando se realmente fez o login
      .and('be.visible')
  
  })
