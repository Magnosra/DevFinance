
// cypress/support/e2e.js

// Configuração global (exemplo: URL base)
Cypress.config('baseUrl','https://dev-finances.vercel.app/');


//import '@shelex/cypress-allure-plugin';

//require('@shelex/cypress-allure-plugin');

//npx cypress run --config video=false --env allure=true 

import '@shelex/cypress-allure-plugin';

//Cypress.Commands.add('allureStep', (name, stepFunction) => {
  //cy.allure().step(name, stepFunction);
//});
