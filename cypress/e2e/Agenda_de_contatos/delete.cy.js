/// <reference types="cypress" />

describe('Testes de inclusão e exclusão na agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar e depois excluir um contato', () => {
        // Adiciona um novo contato
        cy.get('[type="text"]').first().type('Felice Lacerda')
        cy.get('[type="email"]').type('felipe.lacerda@gmail.com')
        cy.get('[type="tel"]').type('11935730078')
        cy.get('button[type="submit"]').click()

        // Verifica se o contato foi adicionado à lista
        cy.contains('Felice Lacerda').should('exist')
        cy.contains('felipe.lacerda@gmail.com').should('exist')
        cy.contains('11935730078').should('exist')

        // Adiciona um atraso para garantir que o contato foi adicionado
        cy.wait(1000)

        // Encontra o contato e clica no botão de exclusão correspondente
        cy.contains('Felice Lacerda')
            .parent() // Encontra o elemento pai que deve conter o botão de exclusão
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
            .click()


    })
})
