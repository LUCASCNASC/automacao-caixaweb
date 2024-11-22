import { tituloPaginaPedidoWeb } from '../../../support/para_pedidos/para_todos_pedidos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto,
         avancarFinal, modalInconsRotaTransp, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo} from '../../../support/para_pedidos/produtos_pedidos';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visitPedidoWeb('/');
        cy.clearAllSessionStorage();
        cy.loginPedidoWeb();
        tituloPaginaPedidoWeb()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(500)
        produtoNormalPrimeiro()
        saldodisponivel()
        escolherProdutoPesquisa()
        cy.wait(200)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it.only('Venda: produto 1860 0 0 - (Venda local de produto com saldo - sem entrega)', () => {

            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()

            //CAIXA WEB

            cy.origin('http://10.7.0.87/#/login', () => {
                //cy.visit('/')
              });

            //
            cy.wait(1000)

            //cy.visit('http://10.7.0.87/#/login')
            //cy.visitCaixaWeb()

            cy.loginCaixaWeb()

        })

        it('Venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntrega()
            cy.wait(800)
            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntregaSegundo()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(7000)
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
        })

        it('Venda: produto 1860 0 0 - (Pedido de venda sem entrega. Com Entrada + parcelamento.)', () => {

            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            escolherEntradaFormaPagamento()
            clicarGerarPagamento()
            botaoGerarParcelas()
            cy.wait(5000)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(6000)
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
        })
    })

    context('Com frete/ processo 9860 - caminho feliz', () => {

        it('Venda: produto 1860 0 0 - (Venda local de produto com saldo - com entrega)', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(11000)
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(6500)
            botaoGerarParcelas()
            cy.wait(5500)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(7000)
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
        })

        it('Venda: produtos 1860 0 0 e 1870 0 0', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            cy.wait(400)
            produtoNormalSegundo()
            saldodisponivel()
            cy.wait(800)
            escolherProdutoPesquisa()
            cy.wait(800)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            cy.wait(1000)
            avancarParaTransportadora()
            cy.wait(12000)
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(7000)
            botaoGerarParcelas()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(8000)
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
        })

        it('Venda: produto 1860 0 0 - (Pedido de venda com entrega. Com Entrada + parcelamento.)', () => {
                      
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            cy.wait(400)
            avancarParaTransportadora()
            cy.wait(11000)
            modalInconsRotaTransp()
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(6500)
            escolherEntradaFormaPagamento()
            clicarGerarPagamento()
            botaoGerarParcelas()
            cy.wait(5500)
            escolherFormaPagamentoPrincipal()
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            cy.wait(7000)
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
        })
    })
})