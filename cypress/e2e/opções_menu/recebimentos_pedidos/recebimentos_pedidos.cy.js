//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarRecebimentoPedidos, janelaRecebimentoPedidos, barraProgressoRecebPedidos, paginaRecebimentoPedidos } from '../../../support/para_opcoes_menu/recebimentos_pedidos';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando no Recebimento de pedidos', () => {

        it('Entrando no Recebimento de pedidos', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarRecebimentoPedidos()

            janelaRecebimentoPedidos()

            iconeCarregamento()

            cy.wait(4000)

            barraProgressoRecebPedidos()

            paginaRecebimentoPedidos()

           
        })
    })
})