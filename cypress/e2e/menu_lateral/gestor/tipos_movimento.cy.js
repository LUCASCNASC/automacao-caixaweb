import { tituloCaixaPagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoMenuGestor, clicarGestorTiposMovimento, janelaGestorTiposMovimento } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_gestor';

describe('No menu de opções - Clicar no Gestor', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrar em Tipos de movimento', () => {

        it('Entrar em Tipos de movimento', () => {
            
            clicarCaixa()
            cy.wait(6000)
            iconeCarregamento()
            cy.wait(4000)
            clicarIconeMenuLateral()
            clicarOpcaoMenuGestor()
            clicarGestorTiposMovimento()
            janelaGestorTiposMovimento()
        })
    })
})