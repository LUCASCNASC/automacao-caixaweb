//Para escolher processo de venda 9888 - serviços avulsos - quando já temos uma nota de venda de produto e quando vamos vender igual produto
export function processoVendaServicoAvulso (selector) {

    //clicar para aparecer as opções de processo
    cy.get('#select_value_label_4 > .md-select-icon')
        .click()

    //rolar para o meio das opções de processo
    cy.get('#select_listbox_12')
        .scrollTo('center')

    //selecionar processo de venda "9888"
    cy.get('#select_option_65 > .md-text')
        .scrollIntoView()
        .wait(100)
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

//Validar e clicar no menu de opções
export function iconeMenuOpcoes (selector) {
            
    //Clicar ni ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .click({force:true})
}

//Validando opção Cliente Completo, do menu de opções
export function clienteCompletoOpcaoMenu (selector) {

    //ícone Cliente completo
    cy.get('md-icon[md-svg-src="images/icons/cliente_completo.svg"]')
        .scrollIntoView()

    //Opção Cliente completo no menu de opções
    cy.get('a[aria-label="Cliente completo"]')
        .click({force:true})
}

//Validando e inserindo número do pedido no campo Cliente ou pedido
export function pesquisarPedidoNumero (selector) {

    //Campo Cliente ou pedido
    cy.get('#input_96')
        .type(nomeClienteCPF, {force: true})
}

//Validando menu dentro do cadastro de cliente completo
export function clicarMenuClienteCompleto (selector) {

    //clicar no menu
    cy.get('#menu_click_pri')
        .click({force:true})
}

//Validando opção serviços
export function clicarOpcaoServicos (selector) {

    //Clicar no elemento
    cy.get('#menu_mais_pri > :nth-child(3)')
        .click({force:true})
}

//Clicar no botão ADICIONAR MÃO DE OBRA
export function clicarAddMaoObra (selector) {

    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(1) > .md-default')
        .click({force:true})
}

//Clicar no botão ADICIONAR GARANTIAS
export function clicarAddGarantias (selector) {

    cy.get('[ng-show="filtroShow(pedidoAtual)"][aria-hidden="false"] > .md-list-item-text > .prodServicoUl > :nth-child(2) > .md-default')
        .click({force:true})
}

//Validações card de serviços
export function modalMaoObraServicosVinculados (selector) {

    //mensagem do modal Serviços Vinculados - "Mão de Obra"
    cy.get('p.ng-binding')
        .contains('Mão de Obra')
        .scrollIntoView()
        .wait(200)
}

//botão OK modal Serviços Vinculados
export function okServicosVinculados (selector) {

    //clicar no botão
    cy.get('button[ng-click="salvar()"]')
        .click({force:true})
}

//Botão SALVAR
export function botaoSalvarServico (selector) {

    //clicar no botão
    cy.get('.btn')
        .click({force:true})
}

//Clicar no carrinho de compras
export function clicarCarrinhoCompras (selector) {

    //validando
    cy.get('#test_btnCarrinho > .md-icon-button > .ng-binding')
        .click({force:true})
}

//Botão AVANÇAR
export function botaoAvancarPedido (selector) {

    //validando botão
    cy.get('.flex-gt-sm-50 > .md-primary')
        .scrollIntoView()
        .click({force:true})
}

//Escolher servico, para vende-lo - 144 (T.A. MO Não Destaca e Separa Processo Diferente)
export function produtoServicoAvulso (selector) {

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(codigo_servico)
        .wait(100)
        .should('have.value', codigo_servico)
}

//Validando serviço com saldo disponível local
export function saldoDisponivelServico (selector) {

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(92, 184, 92)')
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherServicoPesquisa (selector) {

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .click({force:true})
}

//Escolher servico host, para vende-lo - 104 (Recarga Homologação TIM TIM)
export function produtoServicoHost (selector) {

    const codigo_servicoHost = '104'

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(codigo_servicoHost)
        .wait(100)
        .should('have.value', codigo_servicoHost)
}

//Validando e clicando opção Serviços, do menu de opções
export function clicarServicosMenu (selector) {

    //ícone Serviços 
    cy.get('md-icon[md-svg-src="images/icons/services.svg"]')
        .scrollIntoView()
        .click({force:true})
}

//modal para selecionar faixa de preço para o serviço - clicar e escolher o valor
export function escolherValorRecarga (selector) {

    //seta para escolher valor da recarga
    cy.get('#select_value_label_121 > .md-select-icon')
        .click({force:true})

    //selecionando valor da recarga
    cy.contains('10,00')
        .click({force:true})

    cy.wait(200)

    //clicando no botão OK após selecionarmos o valor da recarga
    cy.get('.layout-align-end-end > .md-raised')
        .click({force:true})      
}