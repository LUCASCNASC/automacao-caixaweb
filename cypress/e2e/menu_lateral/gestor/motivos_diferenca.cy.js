import { titulopagina, iconeCarregamento, clicarCaixa, clicarIconeMenuLateral } from '../../../support/para_todos';
import { clicarOpcaoMenuGestor, clicarGestorMotivosDiferenca, janelaGestorMotivosDiferenca } from '../../../support/para_opcoes_menu/menu_lateral/para_pasta_gestor';

describe('No menu de opções - Clicar no Gestor', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrar em Motivos de diferença', () => {

        it('Entrar em Motivos de diferença', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            cy.wait(4000)

            clicarIconeMenuLateral()

            clicarOpcaoMenuGestor()

            clicarGestorMotivosDiferenca()

            janelaGestorMotivosDiferenca()
            
        })
    })
})