import { titulopagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoParametrosNegocio, clicarParametroConfigParametros, janelaParametroConfigParametros } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_parametros_negocio';

describe('No menu de opções - Clicar no Operador de Caixa', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage()
        titulopagina()
        cy.loginCaixaWeb()
    })

    context('Entrar em Recarga', () => {

        it('Entrar em Recarga', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            cy.wait(4000)

            clicarIconeMenuLateral()

            clicarOpcaoParametrosNegocio()

            clicarParametroConfigParametros()

            janelaParametroConfigParametros()
            
        })
    })
})