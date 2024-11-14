//Função criada para clicar no campo transportadora e escolher a trasportadora
export function escolherTransportadora (selector) {

    const transportadora_id = '1'

    //Campo Transportadora - clicar para abrir as opções
    cy.get('input[name="transportadora"]')
        .click({force:true})

    cy.wait(300)

    //Selecionar a transportadora que queremos
    cy.get('span[md-highlight-text]')
        .contains('1')
        .click({force:true})
}

//Validando produto com saldo disponível local
export function saldodisponivel (selector) {

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(92, 184, 92)')
}

//Validando produto com saldo disponível no CD 
export function saldoCDDisponivel (selector) {

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(240, 173, 78)')
}

//Validando produto com saldo indisponível
export function semSaldodisponivel (selector) {

    //Validando "Saldo indisponivel"
    cy.get('.label')
        .should('exist')
        .and('be.visible')
        .and('have.text','Saldo indisponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(217, 83, 79)')
}

//Escolher rota completa, rota maringá
export function escolherRota (selector) {

    //Lupa de pesquisa de rota - clicar para pesquisar
    cy.get('.rota-frete > .md-icon-right > .ng-binding')
        .scrollIntoView()
        .click()

    cy.wait(400)

    //Pesquisar rota
    cy.get('#txtBuscaRotaModal')
        .type('1')

    //Clicar na lupa para pesquisar rota depois de preencher campo
    cy.get('md-icon[ng-click="pesquisar()"]')
        .click()

    cy.wait(400)

    //Escolher rota após pesquisarmos
    cy.get('v-pane-header.ng-scope > div')
        .click() //clicar na rota 1

    //Escolher rota 2
    cy.get(':nth-child(4) > .padding-10-0')
        .click() //clicar na rota 1

    cy.wait (200)
}

//Função para escolher cliente CPF para gerar pedido de venda - inserir cliente 
export function escolherClientePedido2 (selector) {
    
    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('    48976249089{enter}')

    cy.wait(2200)

    //Card Intenções de Compra - validando botão NÃO
    cy.get('.md-cancel-button')
        .click({force:true})
}

//Função para escolher cliente CPF para gerar pedido de venda - pesquisa por cliente
export function escolherClientePedido (selector) {

    //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
    cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
        .wait(500)
        .type('48976249089 {downArrow}')

    cy.wait(200)

    //clicar na lupa de pesquisa de clientes
    cy.get('.md-block > .ng-binding')
        .click()

    cy.wait(1500)

    //após a pesquisa encontrar o cliente, vamos selecionar ele
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .click()
}

//Função para validar modal de proposta de crédito gerada
export function propostaCreditoGerada (selector) {
    
    //Card Análise de crédito - Botão SIM
    cy.get(':nth-child(5) > .md-transition-in > .layout-align-center-center.layout-row > .md-primary')
        .click({force:true})
}

//Função para validar card de Pedido Concluído
export function pedidoGerado (selector) {

    //Card pedido gravado com sucesso - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido gravado com sucesso - X para sair da aba
    cy.get('.md-content-overflow > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.have.attr', 'disabled')

    //Card pedido gravado com sucesso - ícone check
    cy.get('.icon.success.animate')
        .should('exist')
        .find('.line.tip.animateSuccessTip')
        .should('exist')

    //Card pedido gravado com sucesso - Pedido gerado
    cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido gerado:')
        
    //Card pedido gravado com sucesso - Pedido gravado com sucesso
    cy.get('[ng-show="!editarPedido"]')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido gravado com sucesso!')

    //Card pedido gravado com sucesso - Número do Pedido gravado com sucesso
    cy.get('#pedido-numero')
        .should('exist')
        .and('be.visible')

    //Card pedido gravado com sucesso - Botão IMPRIMIR
    cy.get('md-dialog-actions.layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Imprimir')
        .and('not.have.attr', 'disabled')
        //.invoke('css', 'background-color') // Obtém a cor do elemento
        //.should('equal', 'rgb(28, 202, 19)')

    //Card pedido gravado com sucesso - Botão OK
    cy.get('md-dialog-actions.layout-align-center-center > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Ok')
        .and('not.have.attr', 'disabled')
        //.invoke('css', 'background-color') // Obtém a cor do elemento
        //.should('equal', 'rgb(36, 13, 105)')
}

//Botão para finalizar o pedido
export function botaoFinalizarPedido (selector) {

    //Clicar para finalizar pedido
    cy.get('button[ng-click="confirmarPedido()"]')
        .click({force:true})
}

//Botão adicionar produto após selecionar voltagem do produto
export function clicarAdicionarProduto (selector) {

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega
export function tirarEntrega (selector) {

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Arrastar botão de Montagem
export function tirarMontagem (selector) {

    //Botão Montagem - texto Montagem
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do segundo produto
export function tirarEntregaSegundo (selector) {

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Arrastar botão de Montagem do segundo produto
export function tirarMontagemSegundo (selector) {

    //Botão Montagem - texto Montagem
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Botão "GERAR PARCELAS"
export function botaoGerarParcelas (selector) {

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
}

//escolhendo forma de pagamento do pedido de venda
export function escolherFormaPagamentoPrincipal (selector) {

    //escolhendo forma de pagamento - 3860
    cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
        .click({force:true})
}

//escolhendo forma de pagamento com proposta de crédito
export function escolherFormaPagaPropCredito (selector) {

    //escolhendo forma de pagamento - 3860
    cy.contains('3865 - T.A. A Receber Futuro - Proposta')
        .click({force:true})
}

//escolhendo parcelas da forma de pagamento escolhida - 2X
export function escolherDuasParcelaPagamento (selector) {

    //selecionando parcelas - 2X
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(2) > div.ng-binding')
        .click()
}

//escolhendo parcelas da forma de pagamento escolhida - 1X
export function escolherUmaParcelaPagamento (selector) {

    //selecionando parcelas - 1X
    cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
        .click({force:true})
}

//Carregamento de forma de pagamento, quando clicamos no botão Gerar parcelas
export function carregandoFormaPagamento (selector) {

    //Mensagem "Aguarde carregando..."
    cy.get('.carregando')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Aguarde carregando...')
}

//Para escolher processo de venda 9860 normal
export function processoVendaPrincipal (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9860"
    cy.get('#select_option_60 > .md-text')
        .click({force:true})
}

//Para escolher processo de venda entrega futura 9862 normal
export function processoEntregaFutura (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9862"
    cy.get('#select_option_62 > .md-text')
        .click({force:true})
}

//Para escolher processo de venda financeiro baixa 9863 normal
export function processoFinanceiroBaixa (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .should('exist')
        .and('be.visible')
        .scrollTo('center')

    //selecionar processo de venda "9863"
    cy.get('#select_option_63 > .md-text')
        .click({force:true})
}

//Botão para avançar para a tela de Gerar parcelas
export function avancarParaParcelas (selector) {

    cy.wait(500)

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.flex-gt-sm-50 > .md-primary')
        .click({force:true})
}

//Botão para avançar para a tela de escolher transportadora e rota
export function avancarParaTransportadora (selector) {

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.flex-gt-sm-50 > .md-primary')
        .dblclick({force:true})

    cy.wait(2000)
}

//Botão para avançar para a tela de Gerar parcelas
export function avancarParcelasEntrega (selector) {

    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain','Avançar')

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
}

//Botão AVANÇAR, da tela antes de finalizar o pedido
export function avancarFinal (selector) {

    //Botão "AVANÇAR" - clicar
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})
}

//botão OK modal Serviços Vinculados
export function okServicosVinculados (selector) {

    //clicar no botão
    cy.get('button[ng-click="salvar()"]')
        .click({force:true})
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPesquisa (selector) {

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .should('exist')
        .and('be.visible')
        .click({force:true})

}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProduto (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
        .click({force:true})
}

//Trocar filial de faturamento - faturamento remoto da filial 50 para 6
export function trocarFilialFaturamento (selector) {

    const filial_local = '50 - PR - EMISSÃO NFe/NFCe'
    const filial_remota = '6 - GAZIN - IND. E COM. DE MÓVEIS E ELETROD. LTDA.'

    //Botão filial de faturamento
    cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
        .should('exist')
        .and('be.visible')
        .and('contain', filial_local)
        .click({force:true})

    //Card Filial de faturamento - filial 50
    cy.get('p.ng-binding')
        .contains(filial_local)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Card Filial de faturamento - filial 6
    cy.get('p.ng-binding')
        .contains(filial_remota)
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        
    //Card Filial de faturamento - clicar na filial 6
    cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
        .click()
}

//Card Inconsistências - rota e transportadora
export function modalInconsRotaTransp (selector) {

    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//Card Inconsistências - apenas transportadora
export function modalInconsApenasTransp (selector) {
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})
}

//Card Inconsistências - apenas transportadora
export function modalInconsApenasRota (selector) {
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    cy.wait(5000)

    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})
}

//preencher pagamento entrada
export function escolherEntradaFormaPagamento (selector) {

    //Campo máximo da parcela
    cy.get('input.campoMoeda_totalEntrada')
        .should('exist')
        .and('be.visible')
        .type('30000')

    //clicando em "Formas de pagamento na Entrada" para abrir forma de pagamento de entrada
    cy.get('[flex="100"][ng-show="(exibeBoxFormasPgtoEntrada)"] > .md-primary > .md-toolbar-tools > .flex')
        .click({force:true})

    //clicando para abrir formas de pagamento disponíveis
    cy.get('div.md-text.ng-binding')
        .contains('3861 - T.A. A Receber A Vista')
        .click({force:true})
}

//validando e clicando no botão GERAR PAGAMENTO
export function clicarGerarPagamento (selector) {

    //botão
    cy.get('.white > .layout-align-center-center > .md-primary')
        .click({force:true})
}