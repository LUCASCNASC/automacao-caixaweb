//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarFechamentoCaixa, janelaFechamentoCaixa } from '../../../support/para_opcoes_menu/para_fechamento_caixa.js';
import { modalApuracaoSistema } from '../../../support/entrar_caixa/para_entrar_caixa.js';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/');
        cy.clearAllSessionStorage()
        titulopagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no Recebimento de títulos', () => {

        it('Entrando no Recebimento de títulos', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarFechamentoCaixa()

            janelaFechamentoCaixa()

            modalApuracaoSistema()
        })
    })
})