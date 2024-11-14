//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../support/para_todos';
import { clicarCaixaFechado, clicarAbrirCaixa, modalApuracaoSistema, clicarConcluirApuracao, escolherFaltaMotivoDiferenca,
         clicarAutenticarResponsavel, autenticarResponsavelAbrirCaixa, clicarBotaoFinalizarAbertura, messCaixaAbertoSucesso,
         messImpressaoSucesso, valorAbrirCaixa, messCaixaFechadoSucesso } from '../../support/entrar_caixa/para_entrar_caixa';


describe('Entrando no caixa', () => {

    beforeEach(() => {
        cy.visitCaixaWeb();
        cy.clearAllSessionStorage();
        tituloCaixaPagina()
        cy.loginCaixaWeb()
    })

    context('Entrando no caixa - aberto - apenas passar o valor', () => {
        it.skip('Entrando no caixa fechado - passando valor para abrir', () => {

            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarAbrirCaixa()

            cy.wait(3000)

            valorAbrirCaixa()

            iconeCarregamento()

            messImpressaoSucesso()

            messCaixaAbertoSucesso()
        })
    })

    context('Entrando no caixa - fechado - todo o processo, abrir e passar o valor', () => {

        it('Abrindo caixa com diferença na apuração do sistema - Motivo: FALTA', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarCaixaFechado()

            iconeCarregamento()

            modalApuracaoSistema()

            clicarConcluirApuracao()

            escolherFaltaMotivoDiferenca()

            clicarAutenticarResponsavel()

            autenticarResponsavelAbrirCaixa()

            clicarBotaoFinalizarAbertura()

            iconeCarregamento()

            messImpressaoSucesso()

            messCaixaFechadoSucesso()

            cy.wait(2000)

            clicarAbrirCaixa()

            cy.wait(3000)

            valorAbrirCaixa()

            iconeCarregamento()

            cy.wait(2000)

            messImpressaoSucesso()

            messCaixaAbertoSucesso()
        })
    })

    context('Entrando no caixa com tudo aberto', () => {

        it('Entrando no caixa com tudo aberto', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            //validando mensagem "Bloquear caixa" - para validar se realmente entrou 
            cy.get('#sbm-shorcut-mnu_Desbloquear > .dashboard-title')
                .should('exist')
                .and('be.visible')
                .and('contain.text', 'Bloquear caixa') 
        })
    })

    context('Entrando no caixa - apenas fazer a abertura do caixa', () => {

        it('Entrando no caixa - apenas fazer a abertura do caixa', () => {
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarAbrirCaixa()

            cy.wait(3000)

            valorAbrirCaixa()

            iconeCarregamento()

            cy.wait(2000)

            messImpressaoSucesso()

            messCaixaAbertoSucesso()
        })
    })
})