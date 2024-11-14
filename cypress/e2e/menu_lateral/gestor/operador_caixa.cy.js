import { tituloCaixaPagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoMenuGestor, clicarGestorOperadorCaixa, janelaGestorOperadorCaixa } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_gestor';

describe('No menu de opções - Clicar no Gestor', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage();
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrar em Operador de caixa', () => {

        it.only('Entrar em Operador de caixa', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            cy.wait(4000)

            clicarIconeMenuLateral()

            clicarOpcaoMenuGestor()

            clicarGestorOperadorCaixa()

            janelaGestorOperadorCaixa()
            
        })
    })
})