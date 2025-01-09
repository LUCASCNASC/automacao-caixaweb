import { tituloPaginaPedidoWeb } from '../../../support/para_pedidos/para_todos_pedidos';
import { tituloCaixaPagina } from '../../../support/para_todos';
import { clienteCPFConsumidorFinalSim, clienteCNPJConsumidorFinalNao, consumidorFinalNAO } from '../../../support/para_pedidos/para_ped_consumidor_final'
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto,
         avancarFinal, modalInconsRotaTransp, escolherFormaPagamentoPrincipal, escolherDuasParcelaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherUmaParcelaPagamento} from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Baixar pedido sem entrega - consumidor', () => {

    beforeEach(() => {
        cy.visitPedidoWeb('/');
        cy.clearAllSessionStorage();
        cy.loginPedidoWeb();
        tituloPaginaPedidoWeb()
        processoVendaPrincipal()
    })

    context('Baixar pedido sem entrega - CPF e CNPJ', () => {

        it.skip('Baixar pedido sem entrega - CPF (consumidor final=SIM)', () => {

            clienteCPFConsumidorFinalSim()
            cy.wait(500)
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
            cy.wait(1000)

            //CAIXA WEB
            cy.origin('http://10.7.0.87/#', () => {
                cy.visit('/login')
                cy.title().should('eq', 'Sabium Lançador Web') //Validando título da página

                cy.get('#usuario').type('lucas.camargo'); // Usuário Login
                cy.get('#senha').type('@Lcn1998'); // Senha Login
                cy.get('#btn-login').click() // Botão Login

                cy.get('#app-block-caixa').click().wait(6000) //abrir caixa
                cy.get('#sbm-shorcut-mnu_RecebimentoPedidos').click().wait(8000) //clicar Recebimento de pedidos
                cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-76"]').click() //clicar primeiro pedido
                cy.get('#frmRecebimentoPedidos_BtnBaixaPedidoVenda_material_button > .mat-button-wrapper').click({force:true}).wait(9000) //clicar botão avançar

                cy.contains('td', 'Não').click({force:true}) //1 clicar Baixar o pedido
                cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click() //2 clicar Baixar o pedido
                cy.get('#frmRecebimentoPedidos_BotaoAvancar_material_button > .mat-button-wrapper').click() //clicar botão avançar

                cy.get('#frmRecebimentoPedidos_BotaoWizardConcluir_material_button > .mat-button-wrapper').click().wait(1000) //clicar botão concluir
                cy.get('.swal2-confirm').click().wait(35000) //Clicar SIM, confirmar baixa pedido

                cy.get('#frmRecebimentoPedidos_ModalDocumentos_modal_dynamic_header_label').should('exist').and('be.visible') //DOCUMENTOS
                cy.get('.mat-tab-links > .mat-tab-label-active').should('exist').and('be.visible') //comprovante
                cy.get('.mat-tab-links > :nth-child(2)').should('exist').and('be.visible') //nota fiscal
                cy.get('.mat-tab-links > :nth-child(3)').should('exist').and('be.visible') //compra e venda
              });
        })

        it.skip('Baixar pedido sem entrega - CNPJ (consumidor final=NÃO)', () => {

            clienteCNPJConsumidorFinalNao()
            cy.wait(500)
            produtoNormalPrimeiro()
            saldodisponivel()
            escolherProdutoPesquisa()
            cy.wait(200)
            escolherVoltagemProduto()
            clicarAdicionarProduto()
            cy.wait(500)
            okServicosVinculados()
            tirarEntrega()
            cy.wait(400)
            avancarParaParcelas()
            cy.wait(5500)
            botaoGerarParcelas()
            cy.wait(6000)
            escolherFormaPagamentoPrincipal()
            cy.wait(3000)
            escolherDuasParcelaPagamento()
            cy.wait(400)
            avancarFinal()
            consumidorFinalNAO()
            botaoFinalizarPedido()
            cy.wait(8000)
            pedidoGerado()
            cy.wait(1000)

            //CAIXA WEB
            cy.origin('http://10.7.0.87/#', () => {
                cy.visit('/login')
                cy.title().should('eq', 'Sabium Lançador Web') //Validando título da página

                cy.get('#usuario').type('lucas.camargo'); // Usuário Login
                cy.get('#senha').type('@Lcn1998'); // Senha Login
                cy.get('#btn-login').click() // Botão Login

                cy.get('#app-block-caixa').click().wait(6000) //Abrir caixa
                cy.get('#sbm-shorcut-mnu_RecebimentoPedidos').click().wait(11000) //clicar recebimento pedidos
                cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-76"]').click() //clicar primeiro pedido
                cy.get('#frmRecebimentoPedidos_BtnBaixaPedidoVenda_material_button > .mat-button-wrapper').click({force:true}).wait(9000) //clicar botão avançar
                 
                cy.contains('td', 'Não').click({force:true}) //1 clicar Baixar o pedido
                cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click() //2 clicar Baixar o pedido
                cy.get('#frmRecebimentoPedidos_BotaoAvancar_material_button > .mat-button-wrapper').click() //clicar botão avançar

                cy.get('#frmRecebimentoPedidos_BotaoWizardConcluir_material_button > .mat-button-wrapper').click().wait(1000) //clicar botão concluir
                cy.get('.swal2-confirm').click().wait(35000) //Clicar SIM, confirmar baixa pedido

                cy.get('#frmRecebimentoPedidos_ModalDocumentos_modal_dynamic_header_label').should('exist').and('be.visible') //DOCUMENTOS
                cy.get('.mat-tab-links > .mat-tab-label-active').should('exist').and('be.visible') //comprovante
                cy.get('.mat-tab-links > :nth-child(2)').should('exist').and('be.visible') //nota fiscal
                cy.get('.mat-tab-links > :nth-child(3)').should('exist').and('be.visible') //compra e venda
              });
        })
    })
})