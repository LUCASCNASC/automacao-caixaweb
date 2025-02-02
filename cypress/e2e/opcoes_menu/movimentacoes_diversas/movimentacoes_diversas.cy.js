//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarMovimentacoesDiversas, janelaMovimentacoesDiversas } from '../../../support/para_opcoes_menu/para_movimentacoes_diversas';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no Recebimento de títulos', () => {

        it('Entrando no Recebimento de títulos', () => {
            
            clicarCaixa()
            cy.wait(6000)
            iconeCarregamento()
            clicarMovimentacoesDiversas()
            iconeCarregamento()
            janelaMovimentacoesDiversas()
        })
    })
})