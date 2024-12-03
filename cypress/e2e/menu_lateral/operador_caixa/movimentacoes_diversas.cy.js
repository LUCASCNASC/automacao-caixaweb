import { tituloCaixaPagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoOperadorCaixa, clicarOperadorMovimentacoesDiversas, janelaOperadorMovimentacoesDiversas } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_operador_caixa';

describe('No menu de opções - Clicar no Operador de Caixa', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrar em Movimentações diversas', () => {

        it('Entrar em Movimentações diversas', () => {
            
            clicarCaixa()
            cy.wait(6000)
            iconeCarregamento()
            cy.wait(4000)
            clicarIconeMenuLateral()
            clicarOpcaoOperadorCaixa()
            clicarOperadorMovimentacoesDiversas()
            janelaOperadorMovimentacoesDiversas()
        })
    })
})