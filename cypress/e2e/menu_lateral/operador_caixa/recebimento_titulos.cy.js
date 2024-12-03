import { tituloCaixaPagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoOperadorCaixa, clicarOperadorRecebimentoTitulos, janelaOperadorRecebimentoTitulos } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_operador_caixa';

describe('No menu de opções - Clicar no Operador de Caixa', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrar em Recebimento de títulos', () => {

        it('Entrar em Recebimento de títulos', () => {
            
            clicarCaixa()
            cy.wait(6000)
            iconeCarregamento()
            cy.wait(4000)
            clicarIconeMenuLateral()
            clicarOpcaoOperadorCaixa()
            clicarOperadorRecebimentoTitulos()
            janelaOperadorRecebimentoTitulos()
        })
    })
})