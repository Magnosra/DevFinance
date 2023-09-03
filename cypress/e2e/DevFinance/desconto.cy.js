/// <reference types="Cypress"/>
describe('Teste Saída', () => {
    
    it('Validacao de Entrada', () => {
        
        cy.visit('https://dev-finances.vercel.app/')
        cy.get('.float-button').click()
        cy.get('#description').type('Compra Supermercado')
        cy.get('#amount').type('10')
        cy.get('#date').type('2023-09-02')
        cy.get('button').contains('Salvar').click()
        cy.get('tr > .description').contains('Compra Supermercado')
        cy.get('.float-button').click()
        cy.get('#description').type('Desconto Compra')
        cy.get('#amount').type('-5')
        cy.get('#date').type('2023-09-02')
        cy.get('button').contains('Salvar').click()
        cy.get('tr > .description').contains('Desconto Compra')
        
        
    })
});