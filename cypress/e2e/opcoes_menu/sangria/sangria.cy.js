//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarSangria, janelaSangria, preencherSangriaSaldos, preencherSangriaRetiradaValores } from '../../../support/para_opcoes_menu/para_sangria';


describe('Entrando na Sangria', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrando na Sangria', () => {

        it('Entrando na Sangria', () => {
            
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