//validando e clicando na opção Movimentos
export function clicarMovimentos (selector) {

    //rolar até o elemento
    cy.contains('Movimentos')
        .scrollIntoView()
        .wait(200)

    //validando mensagem "Movimentos"
    cy.get('#sbm-shorcut-mnu_Movimentos > .dashboard-title')
        .should('exist')
        //.and('be.visible')
        .and('contain.text', 'Movimentos')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_Movimentos')
        .should('exist')
        //.and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//validando janela Movimentos
export function janelaMovimentos (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Movimentos')

    //ícone estrela 
    cy.get('sbm-favorite-user-interface > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão X
    cy.contains('mat-icon', 'close')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
}

//validando título "Movimentos" e barra de pedidos
export function paginaMovimentos (selector) {

    //validando inteiro
    cy.get('.barra-progresso')
        .should('exist')
        .and('be.visible')

    //barra de progresso 1
    cy.get('div.barra-progresso-etapa.ativa .barra-progresso-numero')
        .should('have.text', '1')

    //barra de progresso 2 - mensagem
    cy.get('div.barra-progresso-legenda')
        .should('contain', 'Títulos pendentes')
        .and('exist')
        .and('be.visible')

    //barra de progresso 2
    cy.get('div.barra-progresso-numero')
        .should('contain', '2')
        .and('exist')
        .and('be.visible')

    //barra de progresso 2 - mensagem
    cy.get('div.barra-progresso-legenda')
        .should('contain', 'Títulos selecionados…')
        .and('exist')
        .and('be.visible')

    //barra de progresso 3
    cy.get('div.barra-progresso-numero')
        .should('contain', '3')
        .and('exist')
        .and('be.visible')

    //barra de progresso 3 - mensagem
    cy.get('div.barra-progresso-legenda')
        .should('contain', 'Formas de recebimento')
        .and('exist')
        .and('be.visible')

    //validando "Recebimento de títulos"
    cy.get('#frmRecebimentoTitulos_GrupoResultado_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Títulos pendentes ')

    //validando campo informativo Pedido
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .should('contain', 'Cliente')
        .and('exist')

    //validando campo Pedido
    cy.get('#frmRecebimentoTitulos_TextoBuscaCliente > section > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')
}

//botão Buscar da tela de Movimentos
export function botaoBuscarMovimentos (selector) {

    //botão Buscar nome
    cy.get('#frmRecebimentoTitulos_BotaoBuscaCliente_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Buscar')

    //botão Buscar inteiro
    cy.get('#frmRecebimentoTitulos_BotaoBuscaCliente_material_button')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
}

//botão Mostrar/ Ocultas colunas
export function clicarBotaoMonstrarOcultarColunas (selector) {

    //clicando e validando botão
    cy.get('#frmRecebimentoTitulos_GridTitulosgrid__show-hide-data-grid-columns_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
}

//botão Pesquisar do Tipo do movimento
export function clicarPesquisarTipoMovimento (selector) {

    //ícone botão Pesquisar
    cy.get('#frmMovimentos_FiltrarBtnPesquisar_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Texto Pesquisar, no botão Pesquisar
    cy.get('#frmMovimentos_FiltrarBtnPesquisar_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Pesquisar')

    //botão Pesquisar, por completo
    cy.get('#frmMovimentos_FiltrarBtnPesquisar_material_button')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//pesquisar por Abertura
export function selecionarFiltroAbertura (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Abertura"
    cy.get('#mat-option-6 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Abertura com falta
export function selecionarFiltroAberturaFalta (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Abertura com falta"
    cy.get('#mat-option-7 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Abertura com sobra
export function selecionarFiltroAberturaSobra (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Abertura com sobra"
    cy.get('#mat-option-8 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Fechamento
export function selecionarFiltroFechamento (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Fechamento"
    cy.get('#mat-option-9 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Fechamento com sobra
export function selecionarFiltroFechamentoSobra (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Fechamento com sobra"
    cy.get('#mat-option-10 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Fechamento com falta
export function selecionarFiltroFechamentoFalta (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Fechamento com falta"
    cy.get('#mat-option-11 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Pagamento diverso
export function selecionarFiltroPagamentoDiverso (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Pagamento diverso"
    cy.get('#mat-option-11 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Recebimento diverso
export function selecionarFiltroRecebimentoDiverso (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Recebimento diverso"
    cy.get('#mat-option-13 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Recarga de celular
export function selecionarFiltroRecargaCelular (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Recarga de celular"
    cy.get('#mat-option-14 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Recebimento de pedido
export function selecionarFiltroRecebimentoPedido (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Recebimento pedido"
    cy.get('#mat-option-15 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Recebimento de título
export function selecionarFiltroRecebimentoTitulo (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Recebimento de título"
    cy.get('#mat-option-16 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Sangria
export function selecionarFiltroSangria (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Sangria"
    cy.get('#mat-option-17 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Suprimento
export function selecionarFiltroSuprimento (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Suprimento"
    cy.get('#mat-option-18 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Troca de operador
export function selecionarFiltroTrocaOperador (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Troca de operador"
    cy.get('#mat-option-19 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Troca de operador com falta
export function selecionarFiltroTrocaOperadorFalta (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Troca de operador com falta"
    cy.get('#mat-option-20 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Troca de operador com sobra
export function selecionarFiltroTrocaOperadorSobra (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Troca de operador com sobra"
    cy.get('#mat-option-21 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Transferencia C.C. entrada
export function selecionarFiltroTransferenciaCCEntrada (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Transferencia C.C. entrada"
    cy.get('#mat-option-22 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}

//pesquisar por Transferencia C.C. saída
export function selecionarFiltroTransferenciaCCSaida (selector) {

    //validando texto "FILTRAR"
    cy.get('#frmMovimentos_GrupoFiltrar_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' FILTRAR ')

    //validando Tipo de movimento
    cy.contains('mat-label', 'Tipo de movimento')
        .should('exist')
        .and('be.visible')
        //.and('have.value', 'Tipo de movimento')

    //clicar para abrir as opções de filtro
    cy.get('#frmMovimentos_FiltrarTipoDocumento_dropdown')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()

    //escolher opção "Transferencia C.C. saída"
    cy.get('#mat-option-23 > .mat-option-text > .ng-star-inserted')
        .click({force:true})
}