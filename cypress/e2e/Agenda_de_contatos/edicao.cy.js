/// <reference types="cypress" />

describe('Testes de inclusão e edição na agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar e depois editar um contato', () => {

        cy.get('[type="text"]').first().type('Alex Soares')
        cy.get('[type="email"]').type('alexsoares@teste.com.br')
        cy.get('[type="tel"]').type('33 11111-1111')
        cy.get('button[type="submit"]').click()


        cy.contains('Alex Soares').should('exist')
        cy.contains('alexsoares@teste.com.br').should('exist')
        cy.contains('33 11111-1111').should('exist')


        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()


        cy.get('[type="text"]').clear().type('Alex Soares de Oliveira')
        cy.get('[type="email"]').clear().type('alexsoaresdeoliveira@teste.com.br')
        cy.get('[type="tel"]').clear().type('33 22222-2222')


        cy.get('button[type="submit"]').click()


        cy.contains('Alex Soares de Oliveira').should('exist')
        cy.contains('alexsoaresdeoliveira@teste.com.br').should('exist')
        cy.contains('33 22222-2222').should('exist')
    })
})
