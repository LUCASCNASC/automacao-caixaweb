//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarSangria, janelaSangria, preencherSangriaSaldos, preencherSangriaRetiradaValores } from '../../../support/para_opcoes_menu/para_sangria';


describe('Entrando na Sangria', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando na Sangria', () => {

        it('Entrando na Sangria', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarSangria()

            janelaSangria()

            preencherSangriaSaldos()

            preencherSangriaRetiradaValores()

           
        })
    })
})