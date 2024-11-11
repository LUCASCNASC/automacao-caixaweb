//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarRecebimentoTitulos, janelaRecebimentoTitulos, paginaRecebimentoTitulos, botaoBuscarRecebimentoTitulos, 
         clicarBotaoMonstrarOcultarColunas } from '../../../support/para_opcoes_menu/para_recebimento_titulos';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando no Recebimento de títulos', () => {

        it('Entrando no Recebimento de títulos', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarRecebimentoTitulos()

            janelaRecebimentoTitulos()

            iconeCarregamento()

            cy.wait(4500)

            paginaRecebimentoTitulos()

            botaoBuscarRecebimentoTitulos()

            clicarBotaoMonstrarOcultarColunas()
        })
    })
})