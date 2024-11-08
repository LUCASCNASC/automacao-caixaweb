//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarTrocaOperador, janelaTrocaOperador } from '../../../support/para_opcoes_menu/troca_operador';
import { modalApuracaoSistema } from '../../../support/entrar_caixa/para_entrar_caixa';

describe('Entrando na Troca de operador', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando na Troca de operador', () => {

        //necessário terminar
        it('Entrando na Troca de operador', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarTrocaOperador()

            janelaTrocaOperador()

            modalApuracaoSistema

           
        })
    })
})