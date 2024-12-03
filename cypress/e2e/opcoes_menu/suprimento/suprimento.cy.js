//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarSuprimento, janelaSuprimento, preencherSuprimentoSaldos, preencherSuprimentoEntradaValores } from '../../../support/para_opcoes_menu/para_suprimento';


describe('Entrando no Suprimento', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no Suprimento', () => {

        //necessário validarmos terminal sangria para conseguir autenticar
        it('Entrando no Suprimento', () => {
            
            clicarCaixa()
            cy.wait(6000)
            iconeCarregamento()
            clicarSuprimento()
            janelaSuprimento()
            preencherSuprimentoSaldos()
            preencherSuprimentoEntradaValores()
        })
    })
})