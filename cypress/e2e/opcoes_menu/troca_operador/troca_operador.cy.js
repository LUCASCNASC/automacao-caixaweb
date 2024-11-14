//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarTrocaOperador, janelaTrocaOperador } from '../../../support/para_opcoes_menu/para_troca_operador';
import { modalApuracaoSistema } from '../../../support/entrar_caixa/para_entrar_caixa';

describe('Entrando na Troca de operador', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrando na Troca de operador', () => {

        //necessário terminar
        it('Entrando na Troca de operador', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarTrocaOperador()

            janelaTrocaOperador()

            modalApuracaoSistema

           
        })
    })
})