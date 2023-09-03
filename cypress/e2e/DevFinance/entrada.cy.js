/// <reference types="Cypress"/>
describe('Teste Entrada', () => {
    
    it('Validacao de Entrada', () => {
        
        cy.visit('/')
        cy.get('.float-button').click()
        cy.get('#description').type('Compra Supermercado')
        cy.get('#amount').type('10')
        cy.get('#date').type('2023-09-02')
        cy.get('button').contains('Salvar').click()
        
        
    })
});