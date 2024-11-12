//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarSuprimento, janelaSuprimento, preencherSuprimentoSaldos, preencherSuprimentoEntradaValores } from '../../../support/para_opcoes_menu/para_suprimento';


describe('Entrando no Suprimento', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando no Suprimento', () => {

        //necessário validarmos terminal sangria para conseguir autenticar
        it.only('Entrando no Suprimento', () => {

            titulopagina()

            cy.login()
            
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