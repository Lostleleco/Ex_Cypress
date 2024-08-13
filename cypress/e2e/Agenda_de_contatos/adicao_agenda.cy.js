/// <reference types="cypress" />

describe('Testes de inclusão na agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir os dados para cadastro', () => {

        cy.get('[type="text"]').first().type('Alex Soares')
        cy.get('[type="email"]').type('alexsoares@teste.com.br')
        cy.get('[type="tel"]').type('33 11111-1111')

        cy.get('button[type="submit"]').click()


        cy.contains('Alex Soares').should('exist')
        cy.contains('alexsoares@teste.com.br').should('exist')
        cy.contains('33 11111-1111').should('exist')
    })
})
