import { tituloPaginaPedidoWeb } from '../../../support/para_pedidos/para_todos_pedidos';
import { tituloCaixaPagina } from '../../../support/para_todos';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         clicarAdicionarProduto, tirarEntrega, tirarEntregaSegundo, botaoGerarParcelas, processoVendaPrincipal, avancarParaParcelas,
         avancarParaTransportadora, avancarParcelasEntrega, okServicosVinculados, escolherProdutoPesquisa, escolherVoltagemProduto,
         avancarFinal, modalInconsRotaTransp, escolherFormaPagamentoPrincipal, escolherUmaParcelaPagamento,
         escolherEntradaFormaPagamento, clicarGerarPagamento, escolherformaPagamentoCheque } from '../../../support/para_pedidos/gerais_pedidos';
import { produtoNormalPrimeiro, produtoNormalSegundo } from '../../../support/para_pedidos/produtos_pedidos';

describe('Baixar pedido sem entrega - pagamento com cheque', () => {

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

    context('Baixar pedido sem entrega - pagamento com cheque', () => {

        it.only('Baixar pedido sem entrega - pagamento com cheque', () => {

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
            escolherformaPagamentoCheque()
            escolherUmaParcelaPagamento()
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
                cy.title().should('eq', 'Sabium Lançador Web')

                const hoje = new Date(); //data atual
                const dia = String(hoje.getDate()).padStart(2, '0'); //data atual
                const mes = String(hoje.getMonth() + 1).padStart(2, '0'); //data atual
                const ano = hoje.getFullYear(); //data atual
                const dataFormatada = `${dia}/${mes}/${ano}`; //data atual
                
                cy.get('#usuario').type('lucas.camargo'); // Usuário Login
                cy.get('#senha').type('@Lcn1998'); // Senha Login
                cy.get('#btn-login').click() // Botão Login

                cy.get('#app-block-caixa').click().wait(6000) //Abrir caixa
                cy.get('#sbm-shorcut-mnu_RecebimentoPedidos').click().wait(11000) //clicar recebimento pedidos
                cy.get('[aria-rowindex="1"] > [aria-describedby="dx-col-76"]').click() //clicar primeiro pedido

                //clicar no botão "Avançar"
                cy.get('#frmRecebimentoPedidos_BtnBaixaPedidoVenda_material_button > .mat-button-wrapper').click({force:true}).wait(9000)
                 
                cy.contains('td', 'Não').click({force:true}) //1 clicar Baixar o pedido
                cy.get('#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container').click() //2 clicar Baixar o pedido

                //Clicar no botão Avançar 
                cy.get('#frmRecebimentoPedidos_BotaoAvancar_material_button > .mat-button-wrapper').click().wait(1000)

                //clicar no botão Seguir com o pagamento
                cy.get('#frmRecebimentoPedidos_BotaoWizardContinuar_material_button > .mat-button-wrapper').click({force:true})

                cy.contains('td', 'Cheque: 1 Parcela: 1/1').click() //abrir campos dados cheque
                cy.get('#frmRecebimentoPedidos_ChequeAgencia_input_mask').type('1')//inserir campo agencia
                cy.get('#frmRecebimentoPedidos_ChequeConta_input_mask').type('1') //inserir campo conta
                cy.get('#frmRecebimentoPedidos_ChequeNumero_input_mask').type('1') //inserir campo numero
                cy.get('#frmRecebimentoPedidos_ChequeData_input').type(dataFormatada) //inserir campo data
                cy.get('#frmRecebimentoPedidos_ChequeBanco_dropdown').click({force:true}) //abrir opções banco
                cy.contains('span', 'aaaaT.A. BANCO AUTOMAÇÃO - 369').click({force:true}) //selecionar banco
                cy.get('#frmRecebimentoPedidos_BotaoSalvarCheque_material_button > .mat-button-wrapper').click().wait(600) //salvar dados cheque

                cy.get('#frmRecebimentoPedidos_BotaoWizardConcluir_material_button > .mat-button-wrapper').click() //clicar botão concluir
                cy.get('.swal2-confirm').click().wait(35000) //Clicar SIM, confirmar baixa pedido

                cy.get('#frmRecebimentoPedidos_ModalDocumentos_modal_dynamic_header_label').should('exist').and('be.visible') //DOCUMENTOS
                cy.get('.mat-tab-links > .mat-tab-label-active').should('exist').and('be.visible') //comprovante
                cy.get('.mat-tab-links > :nth-child(2)').should('exist').and('be.visible') //nota fiscal
                cy.get('.mat-tab-links > :nth-child(3)').should('exist').and('be.visible') //compra e venda
              });
        })
    })
})