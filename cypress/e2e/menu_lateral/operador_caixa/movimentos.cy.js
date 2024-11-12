import { titulopagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoOperadorCaixa, clicarOperadorMovimentos, janelaOperadorMovimentos } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_operador_caixa';

describe('No menu de opções - Clicar no Operador de Caixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrar em Movimentos', () => {

        it('Entrar em Movimentos', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            cy.wait(4000)

            clicarIconeMenuLateral()

            clicarOpcaoOperadorCaixa()

            clicarOperadorMovimentos()

            janelaOperadorMovimentos()
        })
    })
})