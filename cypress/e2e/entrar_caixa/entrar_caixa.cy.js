//Importando funções 
import { titulopagina, iconeCarregamento, clicarCaixa } from '../../support/para_todos';
import { clicarCaixaFechado, clicarAbrirCaixa, modalApuracaoSistema, apuracaoSistemaModalApuracaoSistema,
         contagemManualModalApuracaoSistema, botaoCampoDinheiroApuracaoSistema, botaoCampoCartaoApuracaoSistema, 
         botaoCampoCrediarioApuracaoSistema, botaoCampoPixApuracaoSistema, clicarConcluirApuracao, escolherFaltaMotivoDiferenca,
         clicarAutenticarResponsavel, autenticarResponsavelAbrirCaixa, clicarBotaoFinalizarAbertura, messCaixaFechadoSucesso,
         messImpressaoSucesso, valorAbrirCaixa } from '../../support/entrar_caixa/para_entrar_caixa';


describe('Entrando no caixa', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
    })

    context('Entrando no caixa - aberto', () => {
        //necessário que o caixa ainda não tenha sido aberto
        it.skip('Entrando no caixa aberto - passando valor para abrir', () => {

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

        it('Muitas validações', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            clicarCaixaFechado()

            iconeCarregamento()

            modalApuracaoSistema()

            apuracaoSistemaModalApuracaoSistema()

            contagemManualModalApuracaoSistema()

            botaoCampoDinheiroApuracaoSistema()

            botaoCampoCartaoApuracaoSistema()

            botaoCampoCrediarioApuracaoSistema()

            botaoCampoPixApuracaoSistema()
        })
    })

    context('Entrando no caixa - fechado (abrir)', () => {

        //necessário que o caixa ainda esteja fechado
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
        })
    })

    context('Entrando no caixa - Aberto', () => {

        //necessário que o caixa já esteja aberto e passado o valor
        it.only('Entrando no caixa aberto - passando valor para abrir', () => {

            titulopagina()

            cy.login()
            
            clicarCaixa()

            cy.wait(6000)

            iconeCarregamento()

            
        })
    })
})