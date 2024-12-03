import { tituloPaginaPedidoWeb } from '../../../support/para_pedidos/para_todos_pedidos';
import { tituloCaixaPagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto,
         avancarFinal, modalInconsRotaTransp, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Baixar pedido sem frete - apenas com parcelamento', () => {

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

    context('Baixar pedido sem frete - apenas com parcelamento', () => {

        it.only('Baixar pedido sem frete - apenas com parcelamento', () => {

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

                //Resumo - clicar no botão Botão
                cy.get('#frmRecebimentoPedidos_BotaoWizardConcluir_material_button > .mat-button-wrapper').click().wait(1000)

                //Clicar em SIM, para confirmar baixa do pedido
                cy.get('.swal2-confirm').click().wait(56000)

                //validando modal DOCUMENTOS - noa fiscal gerada
                cy.get('#frmRecebimentoPedidos_ModalDocumentos_modal_dynamic_header_label').should('exist').and('be.visible')
                //aba Comprovante - modal documentos
                cy.get('.mat-tab-links > .mat-tab-label-active').should('exist').and('be.visible')
                //aba Nota fiscal - modal documentos
                cy.get('.mat-tab-links > :nth-child(2)').should('exist').and('be.visible')
                //aba Compra e venda - modal documentos
                cy.get('.mat-tab-links > :nth-child(3)').should('exist').and('be.visible')
              });
        })
    })
})