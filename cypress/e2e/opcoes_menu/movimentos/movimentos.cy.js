//Importando funções 
import { tituloCaixaPagina, iconeCarregamento, clicarCaixa } from '../../../support/para_todos';
import { clicarMovimentos, janelaMovimentos, selecionarFiltroAbertura, clicarPesquisarTipoMovimento, selecionarFiltroAberturaFalta, 
         selecionarFiltroAberturaSobra, selecionarFiltroFechamento, selecionarFiltroFechamentoSobra, selecionarFiltroFechamentoFalta, 
         selecionarFiltroPagamentoDiverso, selecionarFiltroRecebimentoDiverso, selecionarFiltroRecargaCelular, selecionarFiltroRecebimentoPedido,
         selecionarFiltroRecebimentoTitulo, selecionarFiltroSangria, selecionarFiltroSuprimento, selecionarFiltroTrocaOperador,
         selecionarFiltroTrocaOperadorFalta, selecionarFiltroTrocaOperadorSobra, selecionarFiltroTransferenciaCCEntrada, 
         selecionarFiltroTransferenciaCCSaida } from '../../../support/para_opcoes_menu/para_movimentos';

describe('Entrando no Recebimento de pedidos', () => {

    beforeEach(() => {
        cy.visitCaixaWeb('/')
        cy.clearAllSessionStorage()
        tituloCaixaPagina()
        cy.loginCaixaWeb()
        clicarCaixa()
        cy.wait(6000)
        iconeCarregamento()
        clicarMovimentos()
        janelaMovimentos()
        iconeCarregamento()
    })

    context('Entrando no Recebimento de títulos', () => {

        it('Entrando no Recebimento de títulos - Pesquisar por "Abertura', () => {

            selecionarFiltroAbertura()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Abertura com falta', () => {

            selecionarFiltroAberturaFalta()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Abertura com sobra', () => {

            selecionarFiltroAberturaSobra()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Fechamento', () => {

            selecionarFiltroFechamento()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Fechamento com sobra', () => {

            selecionarFiltroFechamentoSobra()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Fechamento com falta', () => {

            selecionarFiltroFechamentoFalta()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Pagamento diverso', () => {

            selecionarFiltroPagamentoDiverso()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Recebimento diverso', () => {

            selecionarFiltroRecebimentoDiverso()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Recarga de celular', () => {

            selecionarFiltroRecargaCelular()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Recebimento de pedido', () => {

            selecionarFiltroRecebimentoPedido()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Recebimento de título', () => {

            selecionarFiltroRecebimentoTitulo()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Sangria', () => {

            selecionarFiltroSangria()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Suprimento', () => {

            selecionarFiltroSuprimento()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Troca de operador', () => {

            selecionarFiltroTrocaOperador()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Troca de operador com falta', () => {

            selecionarFiltroTrocaOperadorFalta()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Troca de operador com sobra', () => {

            selecionarFiltroTrocaOperadorSobra()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Transferencia C.C. entrada', () => {

            selecionarFiltroTransferenciaCCEntrada()
            clicarPesquisarTipoMovimento()
        })

        it('Entrando no Recebimento de títulos - Pesquisar por "Transferencia C.C. saída', () => {

            selecionarFiltroTransferenciaCCSaida()
            clicarPesquisarTipoMovimento()
        })
    })
})