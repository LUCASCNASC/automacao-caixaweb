//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarRecebimentoPedidos, janelaRecebimentoPedidos, paginaRecebimentoPedidos, botaoPesquisarRecebimentoPedidos, 
         clicarBotaoMonstrarOcultarColunas } from '../../../support/para_opcoes_menu/para_recebimento_pedidos.js';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage()
        titulopagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no Recebimento de pedidos', () => {

        it('Entrando no Recebimento de pedidos', () => {
            
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