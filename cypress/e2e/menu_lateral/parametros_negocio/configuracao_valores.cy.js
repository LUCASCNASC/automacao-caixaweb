import { titulopagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoParametrosNegocio, clicarParametroConfigValores, janelaParametroConfigValores } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_parametros_negocio';

describe('No menu de opções - Clicar no Operador de Caixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrar em Recarga', () => {

        it('Entrar em Recarga', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            cy.wait(4000)

            clicarIconeMenuLateral()

            clicarOpcaoParametrosNegocio()

            clicarParametroConfigValores()

            janelaParametroConfigValores()
            
        })
    })
})