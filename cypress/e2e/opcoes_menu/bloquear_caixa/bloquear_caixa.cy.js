//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarBloquearCaixa, modalTelaBloqueio, confirmarBloqueioCaixa } from '../../../support/para_opcoes_menu/para_bloquear_caixa';


describe('Entrando no Bloquear caixa', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no Bloquear caixa', () => {

        it('Entrando no Bloquear caixa', () => {
            
            clicarCaixa()
            cy.wait(6000)
            iconeCarregamento()
            clicarBloquearCaixa()
            modalTelaBloqueio()

            //confirmarBloqueioCaixa()
        })
    })
})