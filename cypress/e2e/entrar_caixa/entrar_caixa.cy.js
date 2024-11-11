//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../support/para_todos';
import { clicarCaixaFechado, clicarAbrirCaixa, modalApuracaoSistema, clicarConcluirApuracao, escolherFaltaMotivoDiferenca,
         clicarAutenticarResponsavel, autenticarResponsavelAbrirCaixa, clicarBotaoFinalizarAbertura, messCaixaFechadoSucesso,
         messImpressaoSucesso, valorAbrirCaixa } from '../../support/entrar_caixa/para_entrar_caixa';


describe('Entrando no caixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando no caixa - aberto - apenas passar o valor', () => {
        it.skip('Entrando no caixa fechado - passando valor para abrir', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarAbrirCaixa()

            cy.wait(3000)

            valorAbrirCaixa()

            iconeCarregamento()

            messImpressaoSucesso()

            messCaixaFechadoSucesso()
        })
    })

    context('Entrando no caixa - fechado - todo o processo, abrir e passar o valor', () => {

        it.skip('Abrindo caixa com diferença na apuração do sistema - Motivo: FALTA', () => {

            titulopagina()

            cy.login()
            
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

            messImpressaoSucesso()

            messCaixaFechadoSucesso()
        })
    })

    context('Entrando no caixa com tudo aberto', () => {

        it.only('Entrando no caixa com tudo aberto', () => {

            titulopagina()

            cy.login()
            
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
})