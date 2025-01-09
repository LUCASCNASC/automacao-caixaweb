import { tituloPaginaPedidoWeb } from '../../../support/para_pedidos/para_todos_pedidos';
import { tituloCaixaPagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto,
         avancarFinal, modalInconsRotaTransp, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento,
         escolherUmaParcelaPagamento, escolherEntradaFormaPagamento, clicarGerarPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Baixar pedido: sem frete, com entrada + parcelamento', () => {

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

    context('Baixar pedido: sem entrega, com entrada + parcelamento', () => {

        it.skip('Baixar pedido: sem entrega, com entrada + parcelamento', () => {

            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5000)
            escolherEntradaFormaPagamento()
            clicarGerarPagamento()
            botaoGerarParcelas()
            cy.wait(2000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
            cy.wait(1000)

            //CAIXA WEB
            // cy.origin('http://10.7.0.87/#', () => {
            //     cy.visit('/login')
            //     cy.title().should('eq', 'Sabium Lançador Web') //Validando título da página

            //     cy.get('#usuario').type('lucas.camargo'); // Usuário Login
            //     cy.get('#senha').type('@Lcn1998'); // Senha Login
            //     cy.get('#btn-login').click() // Botão Login

            //     cy.get('#app-block-caixa').click().wait(6000) //abrir caixa
            //     cy.get('#sbm-shorcut-mnu_RecebimentoPedidos').click().wait(8000) //clicar Recebimento de pedidos
            //     cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-76"]').click() //clicar primeiro pedido
            //     cy.get('#frmRecebimentoPedidos_BtnBaixaPedidoVenda_material_button > .mat-button-wrapper').click({force:true}).wait(9000) //clicar botão avançar

            //     cy.contains('td', 'Não').click({force:true}) //1 clicar Baixar o pedido
            //     cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click() //2 clicar Baixar o pedido
            //     cy.get('#frmRecebimentoPedidos_BotaoAvancar_material_button > .mat-button-wrapper').click() //clicar botão avançar

            //     cy.get('#frmRecebimentoPedidos_BotaoWizardConcluir_material_button > .mat-button-wrapper').click().wait(1000) //clicar botão concluir
            //     cy.get('.swal2-confirm').click().wait(35000) //Clicar SIM, confirmar baixa pedido

            //     cy.get('#frmRecebimentoPedidos_ModalDocumentos_modal_dynamic_header_label').should('exist').and('be.visible') //DOCUMENTOS
            //     cy.get('.mat-tab-links > .mat-tab-label-active').should('exist').and('be.visible') //comprovante
            //     cy.get('.mat-tab-links > :nth-child(2)').should('exist').and('be.visible') //nota fiscal
            //     cy.get('.mat-tab-links > :nth-child(3)').should('exist').and('be.visible') //compra e venda
            //   });
        })
    })

    context('Baixar pedido: com entrega, com entrada + parcelamento', () => {

        it('Baixar pedido: com entrega, com entrada + parcelamento', () => {

            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
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
            cy.wait(2000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherUmaParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
            cy.wait(1000)

            //CAIXA WEB
            // cy.origin('http://10.7.0.87/#', () => {
            //     cy.visit('/login')
            //     cy.title().should('eq', 'Sabium Lançador Web') //Validando título da página

            //     cy.get('#usuario').type('lucas.camargo'); // Usuário Login
            //     cy.get('#senha').type('@Lcn1998'); // Senha Login
            //     cy.get('#btn-login').click() // Botão Login

            //     cy.get('#app-block-caixa').click().wait(6000) //abrir caixa
            //     cy.get('#sbm-shorcut-mnu_RecebimentoPedidos').click().wait(8000) //clicar Recebimento de pedidos
            //     cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-76"]').click() //clicar primeiro pedido
            //     cy.get('#frmRecebimentoPedidos_BtnBaixaPedidoVenda_material_button > .mat-button-wrapper').click({force:true}).wait(10000) //clicar botão avançar

            //     cy.contains('td', 'Não').click({force:true}) //1 clicar Baixar o pedido
            //     cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click() //2 clicar Baixar o pedido
            //     cy.get('#frmRecebimentoPedidos_BotaoAvancar_material_button > .mat-button-wrapper').click({force:true}) //clicar botão avançar

            //     cy.get('#frmRecebimentoPedidos_BotaoWizardConcluir_material_button > .mat-button-wrapper').click({force:true}).wait(1000) //clicar botão concluir
            //     cy.get('.swal2-confirm').click({force:true}) //Clicar SIM, confirmar baixa pedido

            //     //clicar para Concluir a baixa do pedido
            //     cy.get('#frmRecebimentoPedidos_BotaoWizardConcluir_material_button > .mat-button-wrapper').click({force:true}).wait(500) //clicar botão concluir
            //     cy.get('.swal2-confirm').click().wait(35000) //Clicar SIM, confirmar baixa pedido

            //     cy.get('#frmRecebimentoPedidos_ModalDocumentos_modal_dynamic_header_label').should('exist').and('be.visible') //DOCUMENTOS
            //     cy.get('.mat-tab-links > .mat-tab-label-active').should('exist').and('be.visible') //comprovante
            //     cy.get('.mat-tab-links > :nth-child(2)').should('exist').and('be.visible') //nota fiscal
            //     cy.get('.mat-tab-links > :nth-child(3)').should('exist').and('be.visible') //compra e venda
            //   });
        })
    })
})