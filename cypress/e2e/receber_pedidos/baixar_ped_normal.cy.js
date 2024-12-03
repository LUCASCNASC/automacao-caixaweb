import { tituloPaginaPedidoWeb } from '../../support/para_pedidos/para_todos_pedidos';
import { tituloCaixaPagina } from '../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto,
         avancarFinal, modalInconsRotaTransp, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento} from '../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../support/para_pedidos/produtos_pedidos';

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
            cy.wait(1000)

            //CAIXA WEB

            cy.origin('http://10.7.0.87/#', () => {
                cy.visit('/login')
                cy.title()
                    .should('eq', 'Sabium Lançador Web') //Validando título da página

                // Preencha o campo de nome de usuário
                cy.get('#usuario').type('lucas.camargo');
            
                // Preencha o campo de senha
                cy.get('#senha').type('@Lcn1998');
            
                // Submeta o formulário de login
                cy.get('#btn-login').click()

                // Clicar para abrir o CAIXA
                cy.get('#app-block-caixa').click().wait(6000)

                //clicar para entrar no Recebimento de pedidos
                cy.get('#sbm-shorcut-mnu_RecebimentoPedidos').click().wait(8000)

                //selecionar primeira opção de Recebimento de pedidos
                cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-76"]').click()

                //clicar no botão "Avançar"
                cy.get('#frmRecebimentoPedidos_BtnBaixaPedidoVenda_material_button > .mat-button-wrapper').click({force:true}).wait(9000)

                //clicar para selecionar Baixar o pedido
                cy.get('.dx-data-row > [aria-describedby="dx-col-89"]').click().wait(500)

                //clicar para selecionar Baixar o pedido
                cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()

                //clicar no botão Avançar, após selecionar para baixar
                cy.get('#frmRecebimentoPedidos_BotaoAvancar_material_button > .mat-button-wrapper').click()



              });
            
            

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