/// <reference types="cypress" />

describe('Testes de inclusão e exclusão na agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar e depois excluir um contato', () => {

        cy.get('[type="text"]').first().type('Felice Lacerda')
        cy.get('[type="email"]').type('felipe.lacerda@gmail.com')
        cy.get('[type="tel"]').type('11935730078')
        cy.get('button[type="submit"]').click()


        cy.contains('Felice Lacerda').should('exist')
        cy.contains('felipe.lacerda@gmail.com').should('exist')
        cy.contains('11935730078').should('exist')


        cy.wait(1000)


        cy.contains('Felice Lacerda')
            .parent()
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
            .click()


    })
})
