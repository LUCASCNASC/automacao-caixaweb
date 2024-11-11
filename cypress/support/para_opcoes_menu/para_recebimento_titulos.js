//validando e clicando na opção Recebimento de títulos
export function clicarRecebimentoTitulos (selector) {

    //rolar até o elemento
    cy.contains('Recebimento de títulos')
        .scrollIntoView()
        .wait(200)

    //validando mensagem "Recebimento de títulos"
    cy.get('#sbm-shorcut-mnu_RecebimentoTitulos > .dashboard-title')
        .should('exist')
        //.and('be.visible')
        .and('contain.text', 'Recebimento de títulos')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_RecebimentoTitulos')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//validando janela Recebimento de títulos
export function janelaRecebimentoTitulos (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Recebimento de títulos')

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

//validando título "Recebimento de títulos" e barra de pedidos
export function paginaRecebimentoTitulos (selector) {

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

//botão Buscar da tela de Recebimento de títulos
export function botaoBuscarRecebimentoTitulos (selector) {

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