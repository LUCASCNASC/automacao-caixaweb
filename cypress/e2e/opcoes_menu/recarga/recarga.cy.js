//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarRecarga, janelaRecarga } from '../../../support/para_opcoes_menu/para_recarga.js';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage()
        titulopagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no Recebimento de títulos', () => {

        it('Entrando no Recebimento de títulos', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarRecarga()

            janelaRecarga()

            iconeCarregamento()
        })
    })
})