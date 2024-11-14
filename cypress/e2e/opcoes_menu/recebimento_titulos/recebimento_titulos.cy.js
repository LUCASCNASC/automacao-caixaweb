//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarRecebimentoTitulos, janelaRecebimentoTitulos, paginaRecebimentoTitulos, botaoBuscarRecebimentoTitulos, 
         clicarBotaoMonstrarOcultarColunas } from '../../../support/para_opcoes_menu/para_recebimento_titulos';


describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no Recebimento de títulos', () => {

        it('Entrando no Recebimento de títulos', () => {
            
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