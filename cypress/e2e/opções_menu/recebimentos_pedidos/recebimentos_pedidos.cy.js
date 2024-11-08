//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarRecebimentoPedidos, janelaRecebimentoPedidos, paginaRecebimentoPedidos, botaoPesquisarRecebimentoPedidos, 
         clicarBotaoMonstrarOcultarColunas } from '../../../support/para_opcoes_menu/recebimentos_pedidos';


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

            cy.wait(4500)

            paginaRecebimentoPedidos()

            //fazer botão exclusivo para campo Pedido

            botaoPesquisarRecebimentoPedidos()

            clicarBotaoMonstrarOcultarColunas()

           
        })
    })
})