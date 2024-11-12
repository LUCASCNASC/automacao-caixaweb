//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarRecarga, janelaRecarga } from '../../../support/para_opcoes_menu/para_recarga.js';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando no Recebimento de títulos', () => {

        it('Entrando no Recebimento de títulos', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarRecarga()

            janelaRecarga()

            iconeCarregamento()
        })
    })
})