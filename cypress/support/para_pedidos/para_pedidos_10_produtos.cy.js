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
        .should('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(92, 184, 92)')
}

//Validando produto com saldo disponível no CD 
export function saldoCDDisponivel (selector) {

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(240, 173, 78)')
}

//Validando produto com saldo indisponível
export function semSaldodisponivel (selector) {

    //Validando "Saldo indisponivel"
    cy.get('.label')
        .should('have.text','Saldo indisponivel')
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

//Função para validar card de Pedido Concluído
export function pedidoGerado (selector) {

    //Card pedido gravado com sucesso - Título Pedido Concluído
    cy.get('.md-toolbar-tools h2.flex')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido Concluído')

    //Card pedido gravado com sucesso - Pedido gerado
    cy.get('.padding-10 > .layout-wrap > .flex-sm-50 > :nth-child(1)')
        .should('exist')
        .and('be.visible')
        .and('contain','Pedido gerado:')
}

//Botão para finalizar o pedido
export function botaoFinalizarPedido (selector) {

    //Botão FINALIZAR PEDIDO
    cy.get('button.md-primary.btn-rounded.md-raised.btn-block.md-default-theme.md-ink-ripple[type="button"][ng-click="confirmarPedido()"]')
        .scrollIntoView()
        .wait(200)

    //Clicar para finalizar pedido
    cy.get('button[ng-click="confirmarPedido()"]')
        .click({force:true})
}

//Botão adicionar produto após selecionar voltagem do produto
export function botãoAdicionarProduto (selector) {

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega
export function tirarEntrega (selector) {

    //Botão como um todo
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Arrastar botão de Montagem
export function tirarMontagem (selector) {

    //Botão como um todo
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .wait(200)

    //Botão Montagem - texto Montagem
    cy.get('.produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Arrastar botão de Retirada / Entrega do segundo produto
export function tirarEntregaSegundo (selector) {

    //Botão como um todo
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Arrastar botão de Montagem do segundo produto
export function tirarMontagemSegundo (selector) {

    //Botão como um todo
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-container > .md-bar')
        .scrollIntoView()
        .wait(200)

    //Botão Montagem - texto Montagem
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > .produto-nome > .valor > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Botão "GERAR PARCELAS"
export function botaoGerarParcelas (selector) {

    //Botão "GERAR PARCELAS" - validações
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .scrollIntoView()
        .wait(200)

    //Botão "GERAR PARCELAS" - clicar
    cy.get('.gerar-parcelas > .layout-wrap > [style="padding: 0 5px"] > .md-primary')
        .click({force:true})
}

//Para escolher processo de venda 9860 normal
export function processoVendaPrincipal (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
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
        .scrollTo('center')

    //selecionar processo de venda "9862"
    cy.get('#select_option_62 > .md-text')
        .scrollIntoView()
        .click({force:true})
}

//Para escolher processo de venda financeiro baixa 9863 normal
export function processoFinanceiroBaixa (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .scrollTo('center')

    //selecionar processo de venda "9863"
    cy.get('#select_option_63 > .md-text')
        .scrollIntoView()
        .click({force:true})
}

//Botão para avançar para a tela de Gerar parcelas
export function avancarParaParcelas (selector) {

    cy.wait(500)

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.flex-gt-sm-50 > .md-primary')
        .click({force:true})
}

//Botão para avançar para a tela de escolher transportadora e rota
export function avancarParaTransportadora (selector) {

    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .wait(200)

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

    //Clicar para avançar para a tela de GERAR PARCELAS
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .click({force:true})
}

//Botão AVANÇAR, da tela antes de finalizar o pedido
export function avancarFinal (selector) {

    //Botão "AVANÇAR"
    cy.get('.layout-align-end-end > :nth-child(2) > .md-primary')
        .scrollIntoView()
        .wait(200)

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
        .should('contain', filial_local)
        .click({force:true})
        
    //Card Filial de faturamento - clicar na filial 6
    cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style')
        .click({force:true})
}

//Card Inconsistências - rota e transportadora
export function modalInconsRotaTransp (selector) {
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})

    cy.wait(5000)

    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})
}

//Card Inconsistências - apenas transportadora
export function modalInconsApenasTransp (selector) {
    
    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
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
        .click({force:true})

    cy.wait(5000)

    //Botão X para fechar
    cy.get('.md-dialog-fullscreen > :nth-child(1) > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .click({force:true})
}

//primeiro produto
export function produtoPrincipal (selector) {

    const produto_principal = '1889'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(400)
        .should('have.value', '')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_principal)
        .wait(100)
        .should('have.value', produto_principal)
}

//Clicar para selecionar a voltagem 1899 0 0
export function primeiroProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > [style=""] > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 1 1
export function segundoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 2 2
export function terceiroProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 3 3
export function quartoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(5) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 4 4
export function quintoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(6) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 5 5
export function sextoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(7) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 6 6
export function setimoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(8) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 7 7
export function oitavoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(9) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 8 8
export function nonoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(10) > div.md-button > .md-no-style')
        .click({force:true})
}

//Clicar para selecionar a voltagem 1899 9 9
export function decimoProdutoEscolher (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(11) > div.md-button > .md-no-style')
        .click({force:true})
}