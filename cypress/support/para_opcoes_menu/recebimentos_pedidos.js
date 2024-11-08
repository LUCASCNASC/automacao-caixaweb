//validando e clicando na opção Recebimento de pedidos
export function clicarRecebimentoPedidos (selector) {

    //rolar até o elemento
    cy.contains('Recebimento de pedidos')
        .scrollIntoView()
        .wait(200)

    //validando mensagem "Recebimento de pedidos"
    cy.get('#sbm-shorcut-mnu_RecebimentoPedidos > .dashboard-title')
        .should('exist')
        //.and('be.visible')
        .and('contain.text', 'Recebimento de pedidos')

    //validando imagem 
    cy.get('#sbm-shorcut-mnu_RecebimentoPedidos')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})
}

//validando janela Recebimento de pedidos
export function janelaRecebimentoPedidos (selector) {

    //título janela
    cy.get('.tab-content')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'Recebimento de pedidos')

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

//layout passos 1, 2 e 3
export function barraProgressoRecebPedidos (selector) {

    //validando inteiro
    cy.get('.barra-progresso')
        .should('exist')
        .and('be.visible')

    //barra de progresso 1
    cy.get('div.barra-progresso-etapa.ativa .barra-progresso-numero')
        .should('have.text', '1');

    //barra de progresso 2
    cy.get('div.barra-progresso-numero')
        .should('contain', '2')
        .and('exist')
        .and('be.visible')

    //barra de progresso 2 - mensagem
    cy.get('div.barra-progresso-legenda')
        .should('contain', 'Produtos e serviços…')
        .and('exist')
        .and('be.visible')

    //barra de progresso 3
    cy.get('div.barra-progresso-numero')
        .should('contain', '3')
        .and('exist')
        .and('be.visible')

    //barra de progresso 3 - mensagem
    cy.get('div.barra-progresso-legenda')
        .should('contain', 'Resumo')
        .and('exist')
        .and('be.visible')
}

//validando título "Recebimento de pedidos"
export function paginaRecebimentoPedidos (selector) {

    //validando "Recebimento de pedidos"
    cy.get('#frmRecebimentoPedidos_GrupoInfo_fieldset_legend')
        .should('exist')
        .and('be.visible')
        .and('have.text', ' Recebimento de pedidos ')

    //validando campo informativo Pedido
    cy.get('mat-label.mat-form-field__mat-label--enabled')
        .should('contain', 'Pedido')
        .and('exist')

    //validando campo Pedido
    cy.get('#frmRecebimentoPedidos_FiltrarPedido_input_number')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.value', '')

    //botão pequisar nome
    cy.get('#frmRecebimentoPedidos_FiltrarBtnPesquisar_material_button > .mat-button-wrapper')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Pesquisar')

    //botão pesquisar ícone
    cy.get('#frmRecebimentoPedidos_FiltrarBtnPesquisar_material_button > .mat-button-wrapper > .mat-icon')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //botão pesquisar inteiro
    cy.get('#frmRecebimentoPedidos_FiltrarBtnPesquisar_material_button')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
}