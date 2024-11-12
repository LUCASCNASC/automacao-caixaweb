//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarBloquearCaixa, modalTelaBloqueio, confirmarBloqueioCaixa } from '../../../support/para_opcoes_menu/para_bloquear_caixa';


describe('Entrando no Bloquear caixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando no Bloquear caixa', () => {

        it('Entrando no Bloquear caixa', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarBloquearCaixa()

            modalTelaBloqueio()

            //confirmarBloqueioCaixa()
        })
    })
})